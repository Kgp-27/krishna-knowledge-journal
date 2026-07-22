import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import keystatic from "@keystatic/astro";
import cloudflare from "@astrojs/cloudflare";

import react from "@astrojs/react";

import markdoc from "@astrojs/markdoc";

export default defineConfig({

  site: "https://theknowledgejournal.com",

adapter: cloudflare(),

  integrations: [sitemap(), keystatic(), react(), markdoc()],

});