(function () {
    var todoInput = document.getElementById("todo-input");
    var todoAddButton = document.getElementById("todo-add-button");
    var todoList = document.getElementById("todo-list");

    todoAddButton.addEventListener("click", function () {
        var text = todoInput.value;

        if (text !== "") {
            var newItem = document.createElement("li");
            newItem.innerHTML = "<div class='li-block'>\
                    <div class='li-note'>\
                        <span class='li-span'></span>\
                        <input class='li-edit displayNone' type='text' maxlength='20' autofocus />\
                    </div>\
                    <div>\
                        <button class='button li-save-button displayNone' title='Save changes'><img src='images/save.png' alt='save'></button>\
                        <button class='button li-cancel-button displayNone' title='Cancel changes'><img src='images/cancel.png' alt='cancel'></button>\
                        <button class='button li-edit-button' title='Edit'><img src='images/edit.png' alt='edit'></button>\
                        <button class='button li-delete-button' title='Delete'><img src='images/remove.png' alt='remove'></button>\
                    </div>\
                </div> ";

            var liSpan = newItem.querySelector(".li-span");
            var liEdit = newItem.querySelector(".li-edit");
            var liSaveButton = newItem.querySelector(".li-save-button");
            var liCancelButton = newItem.querySelector(".li-cancel-button");
            var liEditButton = newItem.querySelector(".li-edit-button");
            var liDeleteButton = newItem.querySelector(".li-delete-button");
            var liElements = [liSpan, liEdit, liSaveButton, liCancelButton, liEditButton, liDeleteButton];

            function SwapDisplayNoneClass(elements) {
                elements.forEach(function (element) {
                    if (element.classList.contains("displayNone")) {
                        element.classList.remove("displayNone");
                    } else {
                        element.classList.add("displayNone");
                    }
                });
            }

            liSpan.textContent = text;
            liEdit.value = text;

            liDeleteButton.addEventListener("click", function () {
                newItem.parentNode.removeChild(newItem);
                todoInput.focus();
            });

            liEditButton.addEventListener("click", function () {
                SwapDisplayNoneClass(liElements);
                liEdit.focus();
            });

            liSaveButton.addEventListener("click", function () {
                SwapDisplayNoneClass(liElements);
                liSpan.textContent = liEdit.value;
                todoInput.focus();
            });

            liCancelButton.addEventListener("click", function () {
                SwapDisplayNoneClass(liElements);
                liEdit.value = liSpan.textContent;
                todoInput.focus();
            });

            todoList.appendChild(newItem);
            todoInput.value = "";
        }

        todoInput.focus();
    });

    document.getElementById("todo-input").addEventListener("keydown", function (event) {
        if (event.code === "Enter") {
            document.getElementById("todo-add-button").click();
        }
    });
})();