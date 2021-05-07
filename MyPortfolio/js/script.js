import scroll from './modules/scroll';
import header from './modules/header';
import form from './modules/form';
import carousel from './modules/carousel';
import animation from './modules/animation';

const loader = document.querySelector('.loader');

document.addEventListener('DOMContentLoaded', function() {

    setTimeout(loaded, 2000);

    function loaded() {
        loader.classList.add('loader_hidden');

        animation();
        scroll();  
        header();
        form();
        carousel();
    }

});
