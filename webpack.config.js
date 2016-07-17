module.exports = {
  entry: './js/app.js',
  output: {
    context: './js',
    path: './build/js',
    filename: 'app.bundle.js'
  },

  module: {
    loaders: [
      { test: /\.handlebars$/,
        loader: "handlebars-loader" }
    ]
  }
};
