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

// const aboutWenLin = {
//   name: ['李文菱', 'Wen-Lin Lee'],
//   email: '82gogolee@gmail.com',
//   nationality: 'Taiwan',
//   location: 'Taipei, Taiwan',
//   language: ['mandarin', 'english', 'taiwanese'],
//   education: 'Bachelor of Business Administration',
//   skills: ['front-end', 'back-end', 'others'],
//   desiredJobPosition: 'Front-end developer',
//   introduceMySelf: function () {
//     console.log(`I'M ${this.name[1].toUpperCase()}
//     `);
//   },
// };

// aboutWenLin.introduceMySelf();
