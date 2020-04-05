export default class Page {
  constructor() {
    this.title = 'my Page';
  }

  open(path) {
    browser.url(path);
  }

  verifyTextInPage(text) {
    const pageText = $('body').getText();
    const position = pageText.search(text);
    chai.expect(position).to.be.above(0);
  }
}
