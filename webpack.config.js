const path = require("path")
const htmlPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader", exclude: "/node_modules/" },
      {
        test: /\.m?(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"], // this is required to allow class properties being declared
          },
        },
      },
    ],
  },
  plugins: [new htmlPlugin({ template: "./src/index.html" })],
}
