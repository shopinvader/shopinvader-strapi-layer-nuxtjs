# Shopinvader Strapi Layer

[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Shopinvader Strapi Layer is a [Nuxt layer](https://nuxt.com/docs/getting-started/layers) that provides a set of components to build a website with [Strapi](https://strapi.io/).

## Features ✨

- **+10 Components** ready to build rich pages
- Start from a `README`, scale to a framework documentation
- Wildcard page to manage dynamic page content

## Setup

This project is a layer for Nuxt. It is designed to be used with a Strapi backend. This repository contains a Strapi instance and a NuxtJS version 3 Layer.
You can also use your own Strapi project.

You can use this layer combined with the webshop layer to build a complete webshop.

### Strapi

Run the following commands to install and run the Strapi project:

```bash
cd strapi
yarn install
yarn develop
```

Go on http://localhost:1337/admin and create a new user

More information about Strapi can be found in the [Strapi documentation](https://docs.strapi.io/user-docs/intro) or [Strapi README](strapi/README.md).

### Nuxt Layer

Clone this repository and install the dependencies:

```bash
git clone
cd shopinvader-strapi-layer
yarn install
```

You can include this layer in your Nuxt project by adding it to the `extends` section of the main nuxt project `nuxt.config.js` file:

```ts
export default {
  extends: ["../shopinvader-strapi-layer/nuxt"],
};
```

Take care to add the following environment variables in your `.env` file:

```bash
STRAPI_URL=<YOUR_STRAPI_URL>
```

## License

This project is open source under the terms of the [MIT License](./LICENSE)

<!-- Badges -->

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?&logo=nuxt.js
[nuxt-href]: https://nuxt.com
[license-src]: https://img.shields.io/github/license/nuxt-themes/docus.svg?style=flat&colorA=002438&colorB=28CF8D
[license-href]: ./LICENSE
