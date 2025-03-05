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