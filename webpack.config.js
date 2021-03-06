const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    index: "./src/js/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "[name].bundle.js"
  }
};
