window.addEventListener('DOMContentLoaded', () => {
    const   menu = document.querySelector('.menu_wrapper'),
            menuItem = document.querySelectorAll('.menu_active_item'),
            hamburger = document.querySelector('.hamburger'),
            button = document.querySelectorAll('button'),
            modal = document.querySelector('.modal'),
            overflow = document.querySelector('.overflow'),
            layer = document.querySelector('.layer');


    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_wrapper_open');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_wrapper_open');

        })
    })

    button.forEach(item => {
        item.addEventListener('click', () => {
            overflow.classList.toggle('overflow_active');
            modal.classList.toggle('visible');
        })
    })
    layer.addEventListener('click', (e) => {
        const target = e.target;
        if (target === layer) {
            overflow.classList.toggle('overflow_active');
            modal.classList.toggle('visible');
        }
    })
})