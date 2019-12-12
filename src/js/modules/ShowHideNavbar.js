import $ from 'jquery';


class ShowHideNavbar {
  constructor() {
    this.showHideNav();
  }

  showHideNav() {
    $( () => {
      $(window).scroll( () => {
        if( $(window).scrollTop() > 60 ) {
        // (1a). If scroll position is > 50px, display White Bg Nav
        $("header").addClass("white-nav-top");

        // (2a) Show back-to-top button
        $("#back-to-top").fadeIn();

        } else {
          // (1b). Hide White Bg Nav
          $("header").removeClass("white-nav-top");

          // (2b). Hide back-to-top button
          $("#back-to-top").fadeOut();
        }
      });

    });
  }
}

export default ShowHideNavbar;