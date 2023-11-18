
let task = [];

function getAllTask(){
    return task;
}

function addToTask(tarea){
    task.push(task)
}

function isEmpty(){
    
    if((Object.keys(localStorage).length) == 0){
        return true;
    }
    return false;
}

function saveToLocalStorage(data){
    console.log('Sending to local storage....');
    localStorage.setItem('Task', JSON.stringify(data));
}

function retrieveAllTask(){
    console.log('Calling retrieveAllTask...');
    const all_Task = JSON.parse(localStorage.getItem('Task'));
    task = all_Task;
    return all_Task;
}

function createTask(recievedTask){
    retrieveAllTask();
    
    //Adding new task object to the array
    //addToTask(recievedTask);  
   
    task.push(recievedTask);
    //saving to local storage, method call..
    
    saveToLocalStorage(task);
}


export { addToTask, createTask, getAllTask, retrieveAllTask };

