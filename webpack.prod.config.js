const path = require("path");

const SRC_DIR = path.resolve(__dirname, "client");
const BUILD_DIR = path.resolve(__dirname, "static");

module.exports = {
  entry: path.resolve(SRC_DIR, "index.jsx"),
  output: {
    filename: "bundle.js",
    path: BUILD_DIR
  },
  devtool: false,
  mode: "production",
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader"
            //options: { presets: ["es2015", "react"] }
          }
        ]
      },
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
