// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const config = {
  entry: ["./src/index.ts"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "dist/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: [/\.js?$/, /\.ts?$/],
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
    ],
  },
};
module.exports = config;
