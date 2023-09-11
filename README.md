# designleaders

![Visual regression status](https://api.ghostinspector.com/v1/suites/64fde281e0dfa97aa90682f9/status-badge)

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
purgecss --css luro/style.css --content luro.html  --output .
```

https://github.com/postcss/autoprefixer#cli

```sh
npx postcss style.css --use autoprefixer --replace --no-map
```

## Run locally

Assuming Rust and its package manager Cargo have been installed:

```sh
cargo install cargo-server
cargo server --port 8888
```

Now open `http://localhost:8888` in your browser.