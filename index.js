import { toggleMobileMenu, toggleNewTaskContainer } from './DisappearAnimations.js';
import { createTask, retrieveAllTask } from './localStorageHandler.js';
const menu_icon_btn = document.querySelector('.menu-mobile-lines');
const add_btn = document.querySelector('#add_button');
const time_information_container = document.querySelector('.time-information--container');

const btn_createTask = document.querySelector('#btn_new_Task');

//Mobile Menu options
const allTaskList = document.querySelector('#currentListTask');


add_btn.addEventListener('click',toggleNewTaskContainer);
menu_icon_btn.addEventListener('click', toggleMobileMenu);

btn_createTask.addEventListener('click', ()=>{
    const input_newTask = document.querySelector('#new_task_input');

        const valueTask = input_newTask.value;
        createTask(valueTask);
});


//Mobile menu events:

allTaskList.addEventListener('click',retrieveAllTask);