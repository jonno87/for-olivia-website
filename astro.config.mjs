import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://tranquil-queijadas-f4d3bb.netlify.app/",
  vite: {
    plugins: [tailwindcss()],
  },
});
