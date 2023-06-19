import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  modules: ["@nuxtjs/strapi", "@nuxtjs/tailwindcss"],
  plugins: [
    join(currentDir, "./plugins/strapi.ts")
  ],
  strapi: {
    url: process.env.STRAPI_URL || "",
  }
});
