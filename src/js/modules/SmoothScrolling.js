import $ from 'jquery';
import 'jquery.easing';

class SmoothScrolling {
  constructor() {
    this.smoothScroll();
  }

  smoothScroll() {

    $(function () {
      $("a.smooth-scroll").click(function (e) {
        e.preventDefault();
    
        // on-click, get section ID like #about, #services, etc
        const section_id = $(this).attr("href");
    
        $("html, body").animate({
          scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");
      });
    });

  }
}

export default SmoothScrolling;