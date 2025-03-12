# designleaders.fi

![Visual regression status](https://api.ghostinspector.com/v1/suites/64fde281e0dfa97aa90682f9/status-badge)
[![Netlify Status](https://api.netlify.com/api/v1/badges/373f7b37-7020-49f9-894f-a23cf2f074ae/deploy-status)](https://app.netlify.com/sites/designleaders/deploys)

## Colors

```css
:root {
  --color-green: #2dd67f;
  --color-violet: #d638c5;
  --color-velvet: #8a2b7f;
  --color-brown: #8a480f;
  --color-brown-light: #d6ae8a;
}
```

## WebPerformance

https://purgecss.com/CLI.html

```sh
purgecss --css style.css --content *.html  --output .
```

https://github.com/postcss/autoprefixer#cli

```sh
npx postcss style.css --use autoprefixer --replace --no-map
```

## Run locally

First install dependencies:

```sh
npm install
```

Then start local development server:

```sh
npm start
```

Now open `http://localhost:8080` in your browser.

## Technologies used

- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [shadcn-ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Content via Contentful

Jukka: Login via GitHub.

Create an `.env` file in the root of the project with the following content:

```sh
CONTENTFUL_SPACE_ID=jgqf8lrrjobv
CONTENTFUL_DELIVERY_TOKEN=qwerty
CONTENTFUL_PREVIEW_TOKEN=qwerty
```

## SVG to PNG

First use [`resvg`](https://github.com/linebender/resvg/tree/main/crates/resvg) to get png file from svg, by zooming it 4 times:

```sh
resvg -z 4 logo.svg logo.png
```

Then compress the png file with [`pngquant`](https://pngquant.org/) to get is smaller, by using only 16 colors:

```sh
pngquant 16 logo.png
```

Now there should be a `logo-fs8.png` file which is much smaller than the initial png file.

While each image really has only 3 distinct colors, there are some shades in the diagonal line which will pixelate too much if colors are reduced below 16.
The file size difference between 8 and 16 colors is rather small.
