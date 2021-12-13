var hamburgerMenu = document.querySelector("nav button:nth-of-type(3)");

hamburgerMenu.addEventListener("click", toggleHamburgerMenu);
hamburgerMenu.addEventListener("click")
function toggleHamburgerMenu() {
    var navElement = document.querySelector("nav");
    navElement.classList.toggle("menuOpen");
}



