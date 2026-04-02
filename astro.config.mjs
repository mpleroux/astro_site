// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      defaultColor: false,
      themes: {
        light: "light-plus",
        dark: "dark-plus",
      },
      wrap: true,
    },
  },
  site: "https://mleroux.me",
  vite: {
    plugins: [tailwindcss()],
  },
});
