import Page from './page';

class NormalProceduresPage extends Page {
  get pageLinks() {return $$('#linkList2 a');}
  get hotspots() {return $$('a.HSHandle');}

  open() {
    super.open('/cockpit.html?location=A380');
    this.openMenu()
        .clickText('Normal Procedures');
    return this;
  }

  checkCurrentLinks() {
    this.waitForPdf();
    this.pageLinks.forEach((link) => {
      const linkText = link.getText();
      link.click();
      if (!this.verifyHighlightedText(linkText)) return false;
    });
    return true;
  }

  checkHotspots() {
    this.waitForPdf();
    this.hotspots.forEach((spot) => {
      spot.click();
      browser.pause(500);
      const spotText = spot.$('span').getText();
      if (!this.verifyHighlightedText(spotText)) return false;
    });
    return true;
  }
}

export default new NormalProceduresPage();
