import $ from 'jquery';
import 'magnific-popup';

class MagnificPopup {
  constructor() {
    this.magPopup();
  }

  magPopup() {
    $( () => {
      $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
          enabled: true
        },
        tError: '<a href="%url%">The image</a> could not be loaded.'
      });
    });
  }

}

export default MagnificPopup;
