var todoEdit = document.getElementById("todo-edit");
var todoAddButton = document.getElementById("todo-add-button");
var todoList = document.getElementById("todo-list");

todoAddButton.addEventListener("click", function (event) {
    var text = todoEdit.value;

    if (text !== "") {
    var newItem = document.createElement("li");
        newItem.innerHTML = "<div class='li-block'><span class='li-span'></span><button class='button li-delete-button' type='button'><img src='images/remove.png' alt='-' style='vertical-align: middle'></button></div>";
    newItem.querySelector(".li-span").textContent = text;

    newItem.querySelector(".li-delete-button").addEventListener("click", function (e) {
        newItem.parentNode.removeChild(newItem);
        todoEdit.focus();
    });

    todoList.appendChild(newItem);
    todoEdit.value = "";
    }

    todoEdit.focus();
});

document.getElementById("todo-edit").addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        document.getElementById("todo-add-button").click();
    }
});