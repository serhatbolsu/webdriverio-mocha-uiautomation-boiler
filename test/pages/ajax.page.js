import Page from './page';

class AjaxPage extends Page {
  get ajaxButton() {return $('#ajaxButton');}
  get ajaxContent() {return $('#content > p');}

  open() {
    super.open('ajax');
    // `return this;` in order to be able to chain in methods in test case.
    return this;
  }

  getContent() {
    this.ajaxContent.waitForExist({ timeout: 20000 });
    return this.ajaxContent.getText();
    return this;
  }
}

export default new AjaxPage();
