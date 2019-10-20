import $ from 'jquery';
import 'magnific-popup';

class TinySliderPopup {
  constructor() {
    this.footerSlider();
  }

  footerSlider() {
    $( () => {
      $("#instagram-slider").magnificPopup({
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

export default TinySliderPopup;