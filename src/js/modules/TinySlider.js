import $ from 'jquery';
import {tns} from '../../../node_modules/tiny-slider/src/tiny-slider';


class TinySlider {
  constructor() {
    this.slider();
  }

  slider() {
    let sliderOptions = tns({
			container: '#instagram-slider',
			items: 2,
			mode: 'carousel',
			nav: false,
			speed: 400,
			controlsContainer: '#customize-controls',
			loop: true,
			mouseDrag: true,
			gutter: 8,
			slideBy: 'page'
		});
  }
}

export default TinySlider;