const iconHamburguer = document.querySelector('.header__menu_icon');

iconHamburguer.addEventListener('click', () => {
    let menuMobile = document.querySelector('.header__navbar_hamburguer');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.header__menu_icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.header__menu_icon').src = "assets/img/close_white_36dp.svg";
    };
});