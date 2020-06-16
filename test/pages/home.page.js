import Page from './page';
import ModalComponent from './components/home_modal.component';

class HomePage extends Page {
  get pageModals() {
    return $$('#overview .col-sm').map((modal) => new ModalComponent(modal));
  }

  open() {
    super.open('home');
    return this;
  }
}

export default new HomePage();
