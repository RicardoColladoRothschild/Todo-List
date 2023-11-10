
const menu_icon_btn = document.querySelector('.menu-mobile-lines');
const menu_mobile_view = document.querySelector('.mobile-menu');



function toggleMenu(){
    menu_mobile_view.classList.toggle('inactive');
    console.log('bottom pressed');
}

menu_icon_btn.addEventListener('click',toggleMenu);