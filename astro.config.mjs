import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import keystatic from "@keystatic/astro";

import react from "@astrojs/react";

import markdoc from "@astrojs/markdoc";

export default defineConfig({

  site: "https://example.com",

  integrations: [sitemap(), keystatic(), react(), markdoc()],

});