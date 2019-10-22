import $ from 'jquery';


class ShowHideNavbar {
  constructor() {
    this.showHideNav();
  }

  showHideNav() {
    $( () => {
      $(window).scroll( () => {
        if( $(window).scrollTop() > 60 ) {
        // (1). If scroll position is > 50px, display White Bg Nav
        $("header").addClass("white-nav-top");
        } else {
          // (2). Hide White Bg Nav
          $("header").removeClass("white-nav-top");
        }
      });

    });
  }
}

export default ShowHideNavbar;