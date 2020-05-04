const path = require("path")
const htmlPlugin = require('html-webpack-plugin')


module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: "ts-loader", exclude: "/node_modules/" }],
  },
  plugins : [
    new htmlPlugin({ template : './src/index.html'})
  ]
}
