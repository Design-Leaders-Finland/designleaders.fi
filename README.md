# designleaders

![Visual regression status](https://api.ghostinspector.com/v1/suites/64fde281e0dfa97aa90682f9/status-badge)

## Colors


```css
:root {
  --color-green: #2DD67F;
  --color-violet: #D638C5;
  --color-velvet: #8A2B7F;
  --color-brown: #8A480F;
  --color-brown-light: #D6AE8A;
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
cargo server --path . --port 8888
```