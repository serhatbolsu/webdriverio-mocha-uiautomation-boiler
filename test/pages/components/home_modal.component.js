export default class ModalComponent {
  constructor(element) {
    this.element = element;
  }

  get title() {return this.element.$('h3').getText();}
  get content() {return this.element.$('p').getText();}
}
