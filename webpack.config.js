const path = require("path");
const webpack = require("webpack");
const publicFolder = path.resolve(__dirname, "public");

module.exports = {
  entry: "./src/index.jsx",
  target: "web",
  output: {
    path: publicFolder,
    filename: "bundle.js"
  },
  devServer: {
    contentBase: publicFolder,
    port: 3000
  },
  externals: {
    'jquery': 'jQuery',
    'lodash': '_',
    'react': 'React',
    'react-dom': 'ReactDOM',
    'semantic-ui-react': 'semantic-ui-react'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [ 
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};