module.exports = {
  entry: './entry.jsx',
  output: {
    path: './build',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
        {
          test: /\.jsx$/,
          loader: 'jsx-loader?insertPragma=React.DOM&harmony'
        },
        {
          test: /\.scss$/,
          loader: "style!css!sass"
        }
      ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
