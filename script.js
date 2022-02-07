const nav = document.querySelector('.navbar');
const fixNav = function () {
  //   console.log(window.scrollY, nav.offsetHeight);
  if (window.scrollY > nav.offsetHeight) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};
window.addEventListener('scroll', fixNav);
