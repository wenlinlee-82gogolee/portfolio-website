const nav = document.querySelector('.navbar');
const fixNav = function () {
  // console.log(window.scrollY, nav.offsetHeight);
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
};
window.addEventListener('scroll', fixNav);
