var todoEdit = document.getElementById("todo-edit");
var todoAddButton = document.getElementById("todo-add-button");
var todoList = document.getElementById("todo-list");

todoAddButton.addEventListener("click", function (e) {
    var text = todoEdit.value;
    var newItem = document.createElement("li");
    newItem.innerHTML = "<span class = 'li-span'></span><button class = 'li-delete-button' type = 'button'>Delete</button>";
    newItem.querySelector(".li-span").textContent = text;

    newItem.querySelector(".li-delete-button").addEventListener("click", function (e) {
        newItem.parentNode.removeChild(newItem);
    });

    todoList.appendChild(newItem);
    todoEdit.value = "";
});