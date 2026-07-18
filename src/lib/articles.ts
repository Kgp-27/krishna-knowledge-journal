import { getCollection, type CollectionEntry } from "astro:content";

export type Article = CollectionEntry<"articles">;

async function getAllArticles() {
  return getCollection("articles");
}

export async function getPublishedArticles() {
  const articles = await getAllArticles();

  return articles
    .filter((article) => !article.data.draft)
    .sort(
      (a, b) =>
        b.data.publishDate.getTime() -
        a.data.publishDate.getTime()
    );
}

export async function getLatestArticles(limit = 3) {
  const articles = await getPublishedArticles();

  return articles.slice(0, limit);
}

export async function getFeaturedArticles() {
  const articles = await getPublishedArticles();

  return articles.filter(
    (article) => article.data.featured
  );
}

export async function getArticlesByCategory(
  category: string
) {
  const articles = await getPublishedArticles();

  return articles.filter(
    (article) =>
      article.data.category.toLowerCase() ===
      category.toLowerCase()
  );
}

export async function getArticlesByTag(
  tag: string
) {
  const articles = await getPublishedArticles();

  return articles.filter((article) =>
    article.data.tags.some(
      (t) => t.toLowerCase() === tag.toLowerCase()
    )
  );
}

export async function getAllCategories() {
  const articles = await getPublishedArticles();

  return [...new Set(
    articles.map((article) => article.data.category)
  )].sort();
}

export async function getAllTags() {
  const articles = await getPublishedArticles();

  return [...new Set(
    articles.flatMap((article) => article.data.tags)
  )].sort();
}

export async function getRelatedArticles(
  current: Article,
  limit = 3
) {
  const articles = await getPublishedArticles();

  return articles
    .filter((article) => article.id !== current.id)
    .map((article) => {
      let score = 0;

      if (
        article.data.category === current.data.category
      ) {
        score += 10;
      }

      const sharedTags =
        article.data.tags.filter((tag) =>
          current.data.tags.includes(tag)
        ).length;

      score += sharedTags * 2;

      return {
        article,
        score,
      };
    })
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      return (
        b.article.data.publishDate.getTime() -
        a.article.data.publishDate.getTime()
      );
    })
    .slice(0, limit)
    .map((item) => item.article);
}

export async function getAdjacentArticles(currentId: string) {

  const articles = await getPublishedArticles();

  const index = articles.findIndex(
    (article) => article.id === currentId
  );

  return {
    previous:
      index < articles.length - 1
        ? articles[index + 1]
        : null,

    next:
      index > 0
        ? articles[index - 1]
        : null,
  };

}
