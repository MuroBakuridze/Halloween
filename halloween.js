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

const navMenu = document.getElementById("nav-container");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const header = document.querySelector(".header");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-menu')
        navToggle.classList.add('remove-menu')
    })
}

if (navClose) {
    navMenu.addEventListener("click", () => {
        navMenu.classList.remove('show-menu')
        navToggle.classList.remove('remove-menu')
    })
}

