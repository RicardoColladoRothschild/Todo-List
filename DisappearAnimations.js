
const menu_mobile_view = document.querySelector('.mobile-menu');
const todayDateParagraph = document.querySelector('#today_date_container');

const newTaskContainer = document.querySelector('#new_task');

function toggleMobileMenu(){
    menu_mobile_view.classList.toggle('inactive');
        if(!menu_mobile_view.classList.contains('inactive')){
            todayDateParagraph.classList.add('inactive');
        }else{
            todayDateParagraph.classList.remove('inactive');
        }

        if(!newTaskContainer.classList.contains('inactive')){
            newTaskContainer.classList.add('inactive');
        }
    
}

function toggleNewTaskContainer(){
    newTaskContainer.classList.toggle('inactive');
}

export { toggleMobileMenu, toggleNewTaskContainer };
