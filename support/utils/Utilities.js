const fs = require('fs');

class Utilities {
  static getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  static takeScreenshot(name, failure=false) {
    const path = './report/screenshot/';
    fs.access(path, fs.F_OK, (err) => {
      if (err) {
        console.info('File path doesn\'t exists ... Let\'s create!');
        fs.mkdir(path, { recursive: true }, (err) => {});
      }
      // file exists
    });
    if (failure) {
      name = name + '_fail';
    }
    name = name.replace(/ /g, '_') + '.png';
    browser.pause(500);
    browser.saveScreenshot( path + name);
    fs.readFile(`${path}/${name}`, function(err, data) {
      allure.addAttachment(name, data, 'image/png');
    });
  }
}

module.exports = Utilities;
