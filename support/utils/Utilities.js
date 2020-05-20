const fs = require('fs');

class Utilities {
  static getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  static takeScreenshot(name, failure=false) {
    const path = './report/screenshot/';
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }

    if (failure) {
      name = name + '_fail';
    }
    name = name.replace(/ /g, '_') + '.png';
    browser.saveScreenshot( path + name);
    const data = fs.readFileSync(`${path}/${name}`);
    allure.addAttachment(name, data, 'image/png');
  }
}

module.exports = Utilities;
