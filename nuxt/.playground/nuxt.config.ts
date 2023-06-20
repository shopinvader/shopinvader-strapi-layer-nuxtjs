export default defineNuxtConfig({
  extends: '..',
  runtimeConfig: {
    public: {
      strapi: {
        url: process.env.STRAPI_URL || "",

      }
    }
  }
})
