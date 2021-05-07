import scroll from './modules/scroll';
import hamburger from './modules/hamburger';
import modal from './modules/modal';
import cards from './modules/cards';
import animation from './modules/animation';

window.addEventListener('DOMContentLoaded', () => {
    modal();
    animation();
    hamburger();
    scroll();
    cards();
 
})