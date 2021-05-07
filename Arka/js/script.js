import modal from './modules/modal';
import img from './modules/img';

window.addEventListener('DOMContentLoaded', () => {

    const menu = document.querySelector('.header-mobile'),
    menuItem = document.querySelectorAll('.header-mobile__item'),
    hamburger = document.querySelector('.hamburger'),
    overlay = document.querySelector('.overlay'),
    body = document.querySelector('body'),
    nav = document.querySelector('.header-about__fixed');


    modal(overlay, body);
    img(body);
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header-mobile_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header-mobile_active');
        })
    })
    if (nav != undefined) {
        document.addEventListener('scroll', function() {
            if (pageYOffset > 100) {
                nav.classList.add('header-about_scroll');
            } else {
                nav.classList.remove('header-about_scroll');
            }
        })
    }
})
