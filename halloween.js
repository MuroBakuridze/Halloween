// const navMenu = document.querySelector('.nav_container'),
//       navToggle = document.querySelector('.nav_toggle'),
//       navClose = document.querySelector('.nav_close')

// // SHOW MENU
// if(navToggle){
//   navToggle.addEventListener('click', () => {
//     navMenu.classList.add('show_menu')
//   })
// }


// // HIDE MENU
// if(navClose){
//   navClose.addEventListener('click', () => {
//     navMenu.classList.remove('show_menu')
//   })
// }

let navMenu = document.getElementById('nav-container')
let navToggle = document.getElementById('nav-toggle')
let navClose = document.getElementById('nav-close')

let navFunc = function () {
  navMenu.classList.add('show-menu');
  navToggle.classList.add('remove-menu');
}
let xFunc = function () {
  navMenu.classList.remove('show-menu');
  navToggle.classList.remove('remove-menu');
  navClose.classList.add('remove-x')
  navToggle.classList.add('show-bar')
}

navToggle.addEventListener('click', navFunc);
navClose.addEventListener('click', xFunc);