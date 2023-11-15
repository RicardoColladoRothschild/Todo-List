
let task = [];
function isEmpty(){
    
    if((Object.keys(localStorage).length) == 0){
        return true;
    }
    return false;
}
function saveToLocalStorage(data){
    localStorage.setItem('Pendint-Task', data);
}

function createTask(task){
    const taskIdentifierbyDate = new Date();
    let taskPending = {
        task_id:taskIdentifierbyDate,
        task:task
    }

    saveToLocalStorage();
}