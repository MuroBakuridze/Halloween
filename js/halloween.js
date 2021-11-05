
/* ==========         TOGGLE MENU         ===========*/

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

/* ==========         HOME SWIPER         ===========*/

let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: "true",
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  

