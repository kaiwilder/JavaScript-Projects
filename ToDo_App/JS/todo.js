/*this function gets the task from input*/
function get_todos() {
    /*this creates an array of tasks that are inputed*/
    var todos = new Array;
    /*this pulls the task that was saved in the web browser memory*/
    var todos_str = localStorage.getItem('todo');
    /*if the input is not null JSAON.parse will communicate with
    the web browser to make to task a JavaScript object*/
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
/*this will add the inputed task to the get_todos function array*/
function add() {
    /*creates a variable for the inputed task*/
    var task = document.getElementById('task').value;

    var todos = get_todos();
    /*will add a new task to the end of the array*/
    todos.push(task);
    /*converts the task input into a JSON string*/
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}
/*romoving a todo item from the array*/
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    /*looks in show() for how to display a removed item*/
    show();

    return false;
}

/*this function keeps the tasks permanently on the screen*/
function show() {
    /*sets the received task as a variable*/
    var todos = get_todos();

    /*sets up each task as an unordered list*/
    var html = '<ul>';
    /*displays a task to the list in the order it is input*/
    for (var i = 0; i < todos.length; i++) {
        /*also displays the task as a list and creates the button with the "x"*/
        html += '<li>' + todos[i] + '<button class = "remove" id="' + i + '">x</button></li>';

    };
    html += '</ul>';
    /*displays the task as a list*/
    document.getElementById('todos').innerHTML = html;

    /*tells the browser how to display the todo array after an item has been removed*/
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
/*dispays the added task when the 'add item' button is clicked*/
document.getElementById('add').addEventListener('click', add);
/*keeps inputs permanently on screen*/
show();