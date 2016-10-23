
/**
 * Having too many tests running concurrently on saucelabs
 * causes timeouts and errors, so we have to run them in
 * smaller batches.
 */

var
  assign = require('object-assign'),
  base = require('./karma.base.config.js'),
  batches = [
    // the cool kids
    {
      sl_chrome: {
        base: 'SauceLabs',
        browserName: 'chrome',
        platform: 'Windows 7'
      }
    },
    // ie family
    {
      sl_ie_9: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 7',
        version: '9'
      },
      sl_ie_10: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 8',
        version: '10'
      },
      sl_ie_11: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 8.1',
        version: '11'
      }
    },
    // mobile
    {
      sl_ios_safari: {
        base: 'SauceLabs',
        browserName: 'iphone',
        platform: 'OS X 10.9',
        version: '7.1'
      },
      sl_android: {
        base: 'SauceLabs',
        browserName: 'android',
        platform: 'Linux',
        version: '4.2'
      }
    }
  ]

module.exports = function (config) {
  var batch = batches[process.argv[4] || 0]

  config.set(assign(base, {
    browsers: Object.keys(batch),
    customLaunchers: batch,
    reporters: ['progress', 'saucelabs'],
    sauceLabs: {
      testName: 'Quasar Framework unit tests',
      recordScreenshots: false,
      build: process.env.CIRCLE_BUILD_NUM || process.env.SAUCE_BUILD_ID || Date.now()
    },
    // mobile emulators are really slow
    captureTimeout: 600000,
    browserNoActivityTimeout: 600000
  }))
}
