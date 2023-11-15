import { toggleMobileMenu, toggleNewTaskContainer } from './DisappearAnimations.js';
const menu_icon_btn = document.querySelector('.menu-mobile-lines');
const add_btn = document.querySelector('#add_button');
const time_information_container = document.querySelector('.time-information--container');



add_btn.addEventListener('click',toggleNewTaskContainer);
menu_icon_btn.addEventListener('click', toggleMobileMenu);