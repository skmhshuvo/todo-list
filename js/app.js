const addTodoList = () =>{
    const todoInput = document.getElementById('input');
    const newTodo = todoInput.value;
    saveTodoOnLocalStorage(newTodo);
    console.log(newTodo);
    todoInput.value = '';
}


const getTodoFromLocalStorage = () => {
    let savedTodo = localStorage.getItem('todo');
    let todo = [];
    if(savedTodo) {
        todo = [savedTodo];
    }
    return todo;
}


const saveTodoOnLocalStorage = item => {
    const todo = getTodoFromLocalStorage();
    todo.push(item);
    localStorage.setItem('todo', todo);
}
