function header() {

    // auto scroll to Top
    
    window.onbeforeunload = function () {
        window.scrollTo(0,0);
    };

    const   menu = document.querySelector('.header__menu'),
            button = document.querySelector('.button_transparent'),
            title = document.querySelector('.header__title'),
            subTitle = document.querySelector('.header__subtitle'),
            body = document.querySelector('body');


    // Header starting animation

    let addBottomClass = function(item) {
        item.classList.add('bottom');
    },
    addShowedClass = function(item) {
        item.classList.add('showed');
    };
    setTimeout(addBottomClass, 3300, menu);
    setTimeout(addBottomClass, 4300, button);
    setTimeout(addShowedClass, 1000, title);
    setTimeout(addShowedClass, 2300, subTitle);
    setTimeout(function(item) {
        item.classList.add('visible');
    }, 4300, body);

    // Menu scroll

    document.addEventListener('scroll', function() {
    if (pageYOffset > 100) {
        menu.classList.add('active');
    } else {
        menu.classList.remove('active');
    }
    });
}

export default header;