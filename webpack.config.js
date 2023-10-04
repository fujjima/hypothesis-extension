// ref) https://tm-progapp.hatenablog.com/entry/2022/05/21/150850

const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    background: path.join(__dirname, "scripts/background/background.js"),
    loader: path.join(__dirname, "scripts/content/loader.js"),
    content: path.join(__dirname, "scripts/content/content.js"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  plugins: [
    // ref) https://tm-progapp.hatenablog.com/entry/2022/05/21/150850#:~:text=ts%22%2C%20%22.js%22%5D%2C%0A%20%20%7D%2C%0A%20%20plugins%3A%20%5B-,new%20copyplugin(%7B,-patterns%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%20%0A%20%20%20%20%20%20%20%20%20%20from%3A%20%22.%22%2C%20%0A%20%20%20%20%20%20%20%20%20%20to
    new CopyPlugin({
      patterns: [
        {
          from: ".",
          to: "../",
          context: "public",
          noErrorOnMissing: true
        }
      ]
    })
  ],
  devtool: 'cheap-module-source-map',
  cache: true,
  watchOptions: {
    poll: true,
  },
  stats: {
    children: true,
  },
};
