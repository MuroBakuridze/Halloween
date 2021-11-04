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

const   navMenu = document.getElementById("nav-container"),
        navToggle = document.getElementById("nav-toggle"),
        xClose = document.getElementById("x-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-menu')
        navToggle.classList.add('remove-menu')
        xClose.classList.remove('removeX')
    })
}

if (xClose) {
    xClose.addEventListener("click", () => {
        navMenu.classList.remove('show-menu')
        navToggle.classList.remove('remove-menu')
        xClose.classList.add('removeX')
    })
}


