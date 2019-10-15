import $ from 'jquery';

class WorkExperience {
  constructor() {
    this.accordionPanels();
  }

  accordionPanels() {

    $('.panel-collapse').on('show.bs.collapse', function () {
      $(this).siblings('.panel-heading').addClass('active');
    });
  
    $('.panel-collapse').on('hide.bs.collapse', function () {
      $(this).siblings('.panel-heading').removeClass('active');
    });

  }
}

export default WorkExperience;