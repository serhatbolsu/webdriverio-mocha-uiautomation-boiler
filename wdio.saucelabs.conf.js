const baseConfig = require('./wdio.conf').config;
const sauceConfig = Object.assign(baseConfig, {
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  maxInstances: 1,
  region: 'eu',
  services: [
    ['sauce', {
      sauceConnect: false,
      sauceConnectOpts: {
      },
    }],
  ],
});

exports.config = sauceConfig;
