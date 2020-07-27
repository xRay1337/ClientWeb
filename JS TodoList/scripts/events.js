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
                        <input class='li-edit display-none' type='text' maxlength='20' autofocus />\
                    </div>\
                    <div>\
                        <button class='button li-save-button display-none' title='Save changes'><img src='images/save.png' alt='save'></button>\
                        <button class='button li-cancel-button display-none' title='Cancel changes'><img src='images/cancel.png' alt='cancel'></button>\
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

            liSpan.textContent = text;
            liEdit.value = text;

            liDeleteButton.addEventListener("click", function () {
                newItem.parentNode.removeChild(newItem);
                todoInput.focus();
            });

            liEditButton.addEventListener("click", function () {
                swapDisplayNoneClass(liElements);
                liEdit.focus();
            });

            liSaveButton.addEventListener("click", function () {
                swapDisplayNoneClass(liElements);

                if (liEdit.value !== "") {
                    liSpan.textContent = liEdit.value;
                }

                todoInput.focus();
            });

            liCancelButton.addEventListener("click", function () {
                swapDisplayNoneClass(liElements);
                liEdit.value = liSpan.textContent;
                todoInput.focus();
            });

            todoList.appendChild(newItem);
            todoInput.value = "";
        }

        todoInput.focus();
    });

    function swapDisplayNoneClass(elements) {
        elements.forEach(function (element) {
            if (element.classList.contains("display-none")) {
                element.classList.remove("display-none");
            } else {
                element.classList.add("display-none");
            }
        });
    }

    document.getElementById("todo-input").addEventListener("keydown", function (event) {
        if (event.code === "Enter") {
            document.getElementById("todo-add-button").click();
        }
    });
})();