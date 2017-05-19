let hamburger = document.querySelector('.hamburger'),
    navMenu = document.querySelector('.main-navigation ul');

hamburger.addEventListener("click", function() {
  this.classList.toggle("is-active");
  navMenu.classList.toggle("display-menu");
});