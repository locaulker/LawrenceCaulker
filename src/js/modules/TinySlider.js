import $ from 'jquery';
import {tns} from 'tiny-slider';


class TinySlider {
  constructor() {
    this.slider();
  }

  slider() {
    const sliderOptions = tns({
			container: '#instagram-slider',
			items: 2,
			mode: 'carousel',
			nav: false,
			// autoplay: true,
			speed: 400,
			controlsContainer: '#customize-controls',
			loop: true,
			mouseDrag: true,
			gutter: 8,
			// navAsThumbnails: true,
			slideBy: 'page'
		});
  }
}

export default TinySlider;