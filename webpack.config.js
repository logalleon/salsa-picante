const path = require('path');

module.exports = {
  entry: ['./src/ts/index.tsx'],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              happyPackMode: true
            }
          }
        ],
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src', 'ts'),
      },
      {
        test: /\.(woff2?|ttf|otf|eot|svg)$/i,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
            name: '[path][name].[ext]'
        }
      }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js'],
    alias: { 
      "react": "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
      // Must be below test-utils
    },
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist'),
    pathinfo: false
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  }
};