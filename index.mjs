
const menu_icon_btn = document.querySelector('.menu-mobile-lines');
const menu_mobile_view = document.querySelector('.mobile-menu');
const time_information_container = document.querySelector('.time-information--container');
const todayDateParagraph = document.querySelector('#today_date_container');
console.log(todayDateParagraph);
console.log(menu_icon_btn)
function toggleMenu(){
    menu_mobile_view.classList.toggle('inactive');
    console.log('bottom pressed');
    
    todayDateParagraph.classList.toggle('inactive');
}

menu_icon_btn.addEventListener('click',toggleMenu);