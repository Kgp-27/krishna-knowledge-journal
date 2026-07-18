import rss from "@astrojs/rss";

import { getPublishedArticles } from "../lib/articles";

import type { APIContext } from "astro";

export async function GET(context: APIContext) {

  const articles =
    await getPublishedArticles();

  return rss({

    title: "Krishna's Knowledge Journal",

    description:
      "Finance, Economics, Indian Banking, Taxation and History explained from first principles.",

    site: context.site!,

    items: articles.map((article) => ({

      title: article.data.title,

      description:
        article.data.description,

      pubDate:
        article.data.publishDate,

      link:
        `/articles/${article.id}/`,

    })),

  });

}