import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";

export default defineConfig({
  site: "https://theknowledgejournal.com",

  output: "server",

  adapter: cloudflare(),

  integrations: [
    sitemap(),
    react(),
    markdoc(),
  ],

});