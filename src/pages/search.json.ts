import MiniSearch from "minisearch";
import { getPublishedArticles } from "../lib/articles";

export async function GET() {
  const articles = await getPublishedArticles();

  const miniSearch = new MiniSearch({
    fields: [
      "title",
      "description",
      "category",
      "tags",
      "body",
    ],
    storeFields: [
      "title",
      "description",
      "category",
      "url",
    ],
    searchOptions: {
      boost: {
        title: 4,
        category: 2,
      },
      fuzzy: 0.2,
      prefix: true,
    },
  });

  miniSearch.addAll(
    articles.map((article) => ({
      id: article.id,
      title: article.data.title,
      description: article.data.description,
      category: article.data.category,
      tags: article.data.tags.join(" "),
      body: article.body,
      url: `/articles/${article.id}/`,
    }))
  );

  return new Response(JSON.stringify(miniSearch.toJSON()), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}