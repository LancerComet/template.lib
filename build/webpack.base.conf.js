const path = require('path')
const utils = require('./utils/utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

module.exports = {
  entry: {
    app: './src/main.js'
  },

  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },

  resolve: {
    extensions: ['.js', '.vue', '.json'],

    modules: [
      resolve('src'),
      resolve('node_modules')
    ],

    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': resolve('src')
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.jade$/,
        loader: 'jade-loader'
      },
      {
        test: /\.styl$/,
        loader: 'stylus-loader'
      },
      {
        test: /\.js$/,
        use: [
          'cache-loader',
          'thread-loader',
          'babel-loader'
        ],
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.tsx?$/,
        use: [
          'cache-loader',
          'thread-loader',
          'babel-loader',
          {
            loader: 'ts-loader',
            options: { happyPackMode: true }
          }
        ],
        include: ['src', 'test'].map(resolve)
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
