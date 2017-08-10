const utils = require('./utils/utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'

const cssLoaders = utils.cssLoaders({
  sourceMap: isProduction
    ? config.build.productionSourceMap
    : config.dev.cssSourceMap,
  extract: isProduction,
  esModule: true
})

const tsLoaders = {
  ts: [
    'cache-loader',
    'thread-loader',
    'babel-loader',
    {
      loader: 'ts-loader',
      options: {
        happyPackMode: true
      }
    },
    {
      loader: 'tslint-loader',
      options: require('./tslint.conf')
    }
  ]
}

module.exports = {
  loaders: Object.assign({}, cssLoaders, tsLoaders)
}
