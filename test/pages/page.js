import GlobalNav from "./globalNav";

export default class Page extends GlobalNav {
  constructor() {
    super();
    this.title = 'my Page';
  }

  open(path) {
    browser.url(path);
  }

  clickText(text) {
    $(`//*[contains(text(),"${text}")]`).waitForClickable();
    $(`//*[contains(text(),"${text}")]`).click();
  }

  verifyHighlightedText(text) {
    browser.switchToFrame($('iframe'));
    const locator = `//*[@class='page' and @data-loaded='true']//div[@class='highlight' and contains(text(), '${text}')]`;
    let isDisplayed = false;
    try {
      $(locator).waitForDisplayed();
      isDisplayed = $(locator).isDisplayed();
    } catch (error) {
      throw new Error(`PDF didnt highlight: ${text}`);
    }
    // const elemText = $(locator).getText();
    // console.log(elemText);
    browser.switchToParentFrame();
    return isDisplayed;
  }

  verifyTextInPage(text) {
    const pageText = $('body').getText();
    const position = pageText.search(text);
    return position.length > 0;
  }

  waitForPdf(timeout= 20000) {
    browser.pause(1000);
    browser.switchToFrame($('iframe'));
    const start = new Date();
    browser.waitUntil(() => {
      return $$('.pdfViewer > .page').length > 3;
    },
    {
      timeout: timeout,
      timeoutMsg: "Pdf is not displayed",
    });
    console.info('Loading pdf time: %dms', new Date() - start);
    browser.switchToParentFrame();
    browser.pause(2000);
  }
}
