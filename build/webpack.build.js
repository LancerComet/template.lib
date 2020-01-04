const path = require('path')
const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const version = require('../package').version

const library = 'MyLibrary'
const libraryBannerName = 'My Library'

const config = {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/index.ts'),

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js',
    library,
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: ['.js', '.ts']
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: false
      })
    ]
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.json'
        }
      }
    ]
  },

  plugins: [
    new FriendlyErrorsPlugin(),
    new webpack.BannerPlugin({
      banner: `${libraryBannerName}.\n` +
      '© LancerComet | # Carry Your World #\n' +
      `Version: ${version}\n`
    })
  ]
}

if (process.env.npm_config_report) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  config.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = config
