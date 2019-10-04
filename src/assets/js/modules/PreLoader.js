import $ from 'jquery';

class PreLoader {
  constructor() {
    this.preLoader();
  }
  
  preLoader() {
    $(window).on('load', () => {
      $('.preloader__status').fadeOut();
      $('.preloader').delay(350).fadeOut('slow');
    });
  }
}

export default PreLoader;