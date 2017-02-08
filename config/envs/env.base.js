const config = require('../')
const packageJSON = require('../../package.json')

module.exports = {
  APPNAME: JSON.stringify('My App'),
  INJECT: JSON.stringify(config.base.inject),
  STATIC_VERSION: JSON.stringify(randomStr()),
  VERSION: JSON.stringify(packageJSON.version)
}

/**
 * Generate a random string.
 * @return {string}
 */
function randomStr () {
  return Math.floor(Math.random() * 100000 * Date.now()).toString(16)
}
