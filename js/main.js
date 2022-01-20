//бургер меню
const iconMenu = document.querySelector('.menu__icon');
const mainLogo = document.querySelector('.header__logo');
const MenuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        MenuBody.classList.toggle('_active');
        MenuBody.classList.toggle('menus');
        mainLogo.classList.toggle('_active');
    });
}


//Открытие спойлеров

const spoiler = document.querySelectorAll('.second-section__spoiler');
spoiler.forEach(function(open) {
    open.addEventListener("click", openSpoiler);
});

function openSpoiler() {
    this.classList.toggle("active");
}


//Открытие меню в мобилках

const menuLink = document.querySelectorAll('.menu__link-allopen');

let pageWidth = window.innerWidth;

if (pageWidth <= 1450) {


    menuLink.forEach(function(menuOpen) {
        menuOpen.addEventListener("click", MenuOp);
    });

    function MenuOp() {
        this.classList.toggle("_active");
    }

}