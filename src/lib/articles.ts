import { getCollection, type CollectionEntry } from "astro:content";

export type Article = CollectionEntry<"articles">;

async function getAllArticles() {
  return getCollection("articles");
}

function isPublished(article: Article) {
  return (
    !article.data.draft &&
    article.data.publishDate.getTime() <= Date.now()
  );
}

export async function getPublishedArticles() {
  const articles = await getAllArticles();

  const now = new Date();

  return articles
    .filter((article) => {
      if (article.data.draft) return false;

      return article.data.publishDate <= now;
    })
    .sort(
      (a, b) =>
        b.data.publishDate.getTime() -
        a.data.publishDate.getTime()
    );
}

export async function getDraftArticles() {
  const articles = await getAllArticles();

  return articles.filter((article) => article.data.draft);
}

export async function getScheduledArticles() {
  const articles = await getAllArticles();

  return articles.filter(
    (article) =>
      !article.data.draft &&
      article.data.publishDate.getTime() > Date.now()
  );
}

export async function getLatestArticles(limit = 3) {
  return (await getPublishedArticles()).slice(0, limit);
}

export async function getFeaturedArticles(limit = 3) {
  return (await getPublishedArticles())
    .filter((article) => article.data.featured)
    .slice(0, limit);
}

export async function getHomepageHero() {
  const featured = await getFeaturedArticles(1);

    return featured[0] ?? null;

}

export async function getArticlesByCategory(category: string) {
  return (await getPublishedArticles()).filter(
    (article) =>
      article.data.category.toLowerCase() ===
      category.toLowerCase()
  );
}

export async function getArticlesByTag(tag: string) {
  return (await getPublishedArticles()).filter((article) =>
    article.data.tags.some(
      (t) => t.toLowerCase() === tag.toLowerCase()
    )
  );
}

export async function getAllCategories() {
  return [
    ...new Set(
      (await getPublishedArticles()).map(
        (article) => article.data.category
      )
    ),
  ].sort();
}

export async function getAllTags() {
  return [
    ...new Set(
      (await getPublishedArticles()).flatMap(
        (article) => article.data.tags
      )
    ),
  ].sort();
}

export async function getRelatedArticles(
  current: Article,
  limit = 3
) {
  return (await getPublishedArticles())
    .filter((article) => article.id !== current.id)
    .map((article) => {
      let score = 0;

      if (
        article.data.category === current.data.category
      ) {
        score += 10;
      }

      score +=
        article.data.tags.filter((tag) =>
          current.data.tags.includes(tag)
        ).length * 2;

      return { article, score };
    })
    .sort((a, b) =>
      b.score !== a.score
        ? b.score - a.score
        : b.article.data.publishDate.getTime() -
          a.article.data.publishDate.getTime()
    )
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