
let task = [];
function isEmpty(){
    
    if((Object.keys(localStorage).length) == 0){
        return true;
    }
    return false;
}
function saveToLocalStorage(data){
    console.log('Sending to local storage....');
    localStorage.setItem('data', data);
}

function createTask(recievedTask){
    const taskIdentifierbyDate = new Date();
    const taskPending = recievedTask;
    console.log('Adding new task object to the array');
    task.push(taskPending);
    console.table(taskPending);
    console.log('saving to local storage, method call...');
    saveToLocalStorage(task);
}


export { createTask };
