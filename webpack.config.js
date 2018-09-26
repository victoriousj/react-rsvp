module.exports = {
  devtool: 'inline-sourcemap',
  devServer: {
    contentBase: "./src",
    hot: true
  },
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel'
        ]
      }
    ]
  }
};
