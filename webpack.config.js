const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    about: "./src/about.js",
  },
  output: {
    path: path.resolve("./public"),
    filename: "[name]_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/, //번들링 과정 중 확장자가 .css인 파일은
        use: ["style-loader", "css-loader"], //해당 loader를 사용하라
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      chunks: ["index"],
    }),
    new htmlWebpackPlugin({
      template: "./src/about.html",
      filename: "./about.html",
      chunks: ["about"],
    }),
  ],
};
