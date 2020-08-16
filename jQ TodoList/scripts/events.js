﻿$(function () {
    var todoInput = $("#todo-input");
    var todoAddButton = $("#todo-add-button");
    var todoList = $("#todo-list");

    todoAddButton.click(function () {
        var text = todoInput.val();

        if (text === "") {
            todoInput.prop("placeholder", "Type text");
        } else {
            var newItem = $("<li>\
                    <div class='li-block'>\
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
                    </div>\
                </li > ").appendTo(todoList);

            var liSpan = newItem.find(".li-span");
            var liEdit = newItem.find(".li-edit");
            var liSaveButton = newItem.find(".li-save-button");
            var liCancelButton = newItem.find(".li-cancel-button");
            var liEditButton = newItem.find(".li-edit-button");
            var liDeleteButton = newItem.find(".li-delete-button");
            var liElements = [liSpan, liEdit, liSaveButton, liCancelButton, liEditButton, liDeleteButton];

            liSpan.text(text);
            liEdit.val(text);

            liDeleteButton.click(function () {
                this.closest("li").remove();
                todoInput.focus();
            });

            liEditButton.click(function () {
                toggleDisplayNoneClass(liElements);
                liEdit.focus();
            });

            liSaveButton.click(function () {
                toggleDisplayNoneClass(liElements);

                if (liEdit.val() !== "") {
                    liSpan.text(liEdit.val());
                } else {
                    liEdit.val(liSpan.text());
                }

                todoInput.focus();
            });

            liCancelButton.click(function () {
                toggleDisplayNoneClass(liElements);
                liEdit.val(liSpan.text());
                todoInput.focus();
            });

            todoInput.val("");
            todoInput.prop("placeholder", "New note");
        }

        todoInput.focus();
    });

    function toggleDisplayNoneClass(elements) {
        $.each(elements, function (index, element) {
            element.toggleClass("display-none");
        });
    }

    $("#todo-input").keydown(function (event) {
        if (event.code === "Enter") {
            $("#todo-add-button").click();
        }
    });
});