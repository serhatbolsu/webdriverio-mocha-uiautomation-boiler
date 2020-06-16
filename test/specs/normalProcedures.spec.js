import normalProd from '../pages/normalProcedures.page';

describe('Normal Procedures Suite', function() {
  it.only('should load A380 manual', function() {
    normalProd.open();
    normalProd.clickText('Preliminary Preparation');
    expect(normalProd.checkCurrentLinks()).toBe(true);
    utilities.takeScreenshot("pdf highlight");
  });

  it('should check hotspots in Preliminary Preparation', function() {
    normalProd.open();
    normalProd.clickText('Preliminary Preparation');
    expect(normalProd.checkHotspots()).toBe(true);
  });

  it('should check hotspots in Over Head Panel', function() {
    normalProd.open();
    normalProd.clickText('Over Head Panel');
    expect(normalProd.checkHotspots()).toBe(true);
  });



});
