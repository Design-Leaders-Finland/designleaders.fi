import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from "astro/config";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  vite: {
    build: {
      cssMinify: "lightningcss",
    },
    css: {
      // https://lightningcss.dev/docs.html#with-vite
      lightningcss: {
        targets: browserslistToTargets(browserslist(">= 0.15%")),
      },
      transformer: "lightningcss",
    },

    plugins: [
      // https://tailwindcss.com/docs/installation/using-vite
      tailwindcss(),
    ],
  },
});
