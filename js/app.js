const addTodoList = () => {
    const inputField = document.getElementById('input');
    const input = inputField.value;
    saveTodoOnLocal(input);
    console.log(input);
    inputField.value = '';
}

const getTodoFromLocal = () => {
    let todos = [];
    let savedTodo = localStorage.getItem('todo');
    if(savedTodo){
        todos = JSON.parse(savedTodo);
    }
    return todos;
}

const saveTodoOnLocal = item => {
    const todos = getTodoFromLocal();
    todos.push(item);
    localStorage.setItem('todo', JSON.stringify(todos));
    console.log(todos);
}