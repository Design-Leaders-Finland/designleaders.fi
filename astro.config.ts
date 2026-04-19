// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      // https://tailwindcss.com/docs/installation/using-vite
      tailwindcss(),
    ],
    css: {
      // https://lightningcss.dev/docs.html#with-vite
      transformer: "lightningcss",
      lightningcss: {
        targets: browserslistToTargets(browserslist(">= 0.15%")),
      },
    },

    build: {
      cssMinify: "lightningcss",
    },
  },
  devToolbar: {
    enabled: false,
  },
});
