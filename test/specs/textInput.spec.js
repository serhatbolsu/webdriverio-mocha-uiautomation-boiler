import textInputPage from '../pages/textInput.page';

describe('Text Input Spec', function() {
  before(function() {
    textInputPage.open();
  });

  it('Change button text with chai', function() {
    console.log(`Button text: ${textInputPage.getButtonText()}`);
    textInputPage.updateButtonText('My Special Name');
    chai.expect(textInputPage.getButtonText()).to.be.eql('My Special Name');
  });
});

