import $ from 'jquery';


class Header2 {

  constructor() {
    this.header2();
  }

  header2() {

    $(() => {
      // Toggle Hamburger Icon
      $('.navbar-toggler').on('click', () => {
        $('.navbar-toggler').toggleClass('change')
      })
    
      // Adding Fixed-top class
      $(window).scroll(() => {
        let position = $(this).scrollTop()
    
        if(position >= 129) {
          $('.navbar').addClass('navbar-background')
          $('.navbar').addClass('fixed-top')
        } else {
          $('.navbar').removeClass('navbar-background')
          $('.navbar').removeClass('fixed-top')
        }
      })
    
      // Smooth Scrolling
      $('.nav-item a').on('click', function(e) {
        e.preventDefault()
    
        let target = $(this).attr('href')
        $('html, body')
          .stop()
          .animate({
          scrollTop: $(target).offset().top
        }, 3000)
    
      })
    
    })

  }

}

export default Header2;