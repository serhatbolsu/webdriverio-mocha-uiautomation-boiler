import Page from './page';

class TextInput extends Page {
  get nameField() {return $('#newButtonName');}
  get button() {return $('#updatingButton');}

  open() {
    super.open('textinput');
    return this;
  }

  updateButtonText(text) {
    this.nameField.setValue(text);
    this.button.click();
    return this;
  }

  getButtonText() {
    return this.button.getText();
  }
}

export default new TextInput();
