
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
    //task = all_Task;
        all_Task.forEach((t)=>{
            console.log(t);
        });
}

function createTask(recievedTask){
    
    
    //Adding new task object to the array
    //addToTask(recievedTask);  
    console.log('Enviando task al array');
    task.push(recievedTask);
    //saving to local storage, method call..
    console.log('Enviando array con task a que se guarde en el local storage');
    saveToLocalStorage(task);
}


export { addToTask, createTask, getAllTask, retrieveAllTask };

