import $ from 'jquery';
import jQueryBridget from 'jquery-bridget';
import Isotope from 'isotope-layout';


class IsotopeLayout {
  constructor() {
    this.isotopeFilter();
    this.jqb;
  }

  isotopeFilter() {

    $(window).on('load', () => {
 
      this.jqb = jQueryBridget( 'isotope', Isotope, $ );
      $("#isotope-filters").on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        // this.jqb;

        $("#isotope-container").isotope({
          filter: filterValue
        });

        // Active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');

      });
      
    });
  }
}

export default IsotopeLayout;