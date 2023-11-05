import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
// const HtmlWebpackPlugin = require("html-webpack-plugin");

export default {
  target: "web",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: resolve(dirname(fileURLToPath(import.meta.url)), "dist"),
    // clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   filename: "index.html",
    //   template: "./src/index.html",
    // }),
  ],
  optimization: {
    // this is needed when using multiple entry points
    // runtimeChunk: "single",
  },
};
