class MobileNav {
  constructor() {
    this.menuNavSlider();
  }

  menuNavSlider() {
    const mobileIcon = document.querySelector('.mobile-icon');
    const navLink = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    mobileIcon.addEventListener('click', () => {

      // Toggle MenuIcon
      navLink.classList.toggle('nav-active');

      // Animate Links
      navLinks.forEach((link, index) => {
        if(link.style.animation) {
          link.style.animation = ''
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + .5}s`;
        }
      });

      // Animating the Hamburger Lines
      mobileIcon.classList.toggle('m-icon');
    });

  }

}

export default MobileNav;

