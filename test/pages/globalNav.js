
export default class GlobalNav {
  get menu() {return $('#dl-menu button');}
  get leftPanel() {return $('#pframeTrigger');}
  get pdfPanel() {return $('#pdfframe.panel');}

  constructor() {
  }

  openMenu() {
    this.menu.waitForClickable();
    if (!$('.dl-menuopen').isDisplayed()) {
      this.menu.click();
    }
    return this;
  }

  closeMenu() {
    if ($('.dl-menuopen').isDisplayed()) {
      this.menu.click();
    }
    return this;
  }

  toggleLeftPanel() {
    this.leftPanel.click();
    return this;
  }

  togglePdfPanel() {
    this.pdfPanel.click();
    return this;
  }
}
