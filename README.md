# Webpack

## Open index.html in dist folder

## Shortcut Commands

```
npm run dev

npm run build

```

## Commands

```
npm install

npx webpack (To generate dist folder js bundle file)

npx webpack --watch (Watches the files continuously)

npx webpack-dev-server (Auto reload page)

Hot module replacement with Webpack (Replace parts of part without reloading the whole page)

Add below lines (hot: true)

devServer: {
    port: 8000,
    contentBase: path.resolve(__dirname, "dist"),
    hot: true,
}

Add below lines in app.js

if (module.hot) {
  module.hot.accept();
}

Run npx webpack-dev-server

```
