const path = require("path");

module.exports = {
  entry: "./app/app.js",
  output: {
    filename: "myBundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  //   watch: true,
  devServer: {
    port: 8000,
    contentBase: path.resolve(__dirname, "dist"),
    // hot module
    hot: true,
  },
  // mode: "development",
};
