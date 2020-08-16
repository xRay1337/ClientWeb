$(function () {
    var rowNumber = 1;
    var mainCheckbox = $("#main-checkbox");
    var addButton = $("#add-button");
    var removeAllButton = $("#remove-all-button");
    var isAddButton = true;

    removeAllButton.hide();
    
    function swapAddRemoveButtons() {
        if (isAddButton) {
            addButton.hide();
            removeAllButton.show();
            isAddButton = false;
        } else {
            addButton.show();
            removeAllButton.hide();
            isAddButton = true;
        }
    }

    $("#add-button").click(function () {
        var firstName = $("#input-first-name");
        var lastName = $("#input-last-name");
        var phoneNumber = $("#input-phone-number");
        var allInputs = $(".container input");

        allInputs.removeClass("is-invalid");

        if (firstName.val() === "") {
            firstName.addClass("is-invalid").focus();
        } else if (lastName.val() === "") {
            lastName.addClass("is-invalid").focus();
        } else if (phoneNumber.val() === "") {
            phoneNumber.addClass("is-invalid").focus();
        } else {
            var duplicate = false;

            $(".phoneNumber").each(function (index, element) {
                if (element.textContent === phoneNumber.val()) {
                    duplicate = true;
                    return false;
                }
            });

            if (duplicate) {
                $("#notificationModal").modal("show");
                phoneNumber.addClass("is-invalid").focus();
            } else {
                var newContact = $("<tr><td><input class='checkboxes' type='checkbox'></td><td>" + rowNumber + "</td><td class='fName'></td><td  class='lName'></td><td class='phoneNumber'></td><td><button class='close remove-button' type='button' data-toggle='modal' data-target='#confirmationModal' title='Remove contact'><span aria-hidden='true'>&times;</span></button></td></tr>");
                rowNumber++;

                newContact.find(".fName").text(firstName.val());
                newContact.find(".lName").text(lastName.val());
                newContact.find(".phoneNumber").text(phoneNumber.val());

                newContact.find(".checkboxes").change(function () {
                    mainCheckbox.prop("checked", false);

                    if ($(this).is(":checked") && isAddButton) {
                        swapAddRemoveButtons();
                    } else if ($(".checkboxes:checked").length === 0) {
                        swapAddRemoveButtons();
                    }
                });

                newContact.find(".remove-button").click(function () {
                    var thisRow = $(this).closest("tr");
                    var confirmation = $("#confirmationDelete");
                    confirmation.modal("show");

                    $("#yesDeleteButton").click(function () {
                        thisRow.remove();
                        updateTableNumbering();
                        mainCheckbox.prop("checked", false);
                        confirmation.modal("hide");

                        if (!isAddButton) {
                            swapAddRemoveButtons();
                        }
                    });
                });

                $("tbody").append(newContact);
                allInputs.val("");
                firstName.focus();
            }
        }
    });

    function updateTableNumbering() {
        rowNumber = 1;

        $("tbody tr").each(function () {
            $(this).find(":nth-child(2)").text(rowNumber);
            rowNumber++;
        });
    }

    mainCheckbox.change(function () {
        $(".checkboxes").prop("checked", mainCheckbox.is(":checked"));

        if ($(this).is(":checked")) {
            addButton.hide();
            removeAllButton.show();
        } else {
            addButton.show();
            removeAllButton.hide();
        }
    });

    removeAllButton.click(function () {
        var confirmation = $("#confirmationDeleteAll");
        confirmation.modal("show");

        $("#yesDeleteAllButton").click(function () {
            $(".checkboxes:checked").closest("tr").remove();
            swapAddRemoveButtons()
            updateTableNumbering();
            mainCheckbox.prop("checked", false);
            confirmation.modal("hide");
        });
    });

    $("#findButton").click(function () {
        var tableRows = $("tbody tr");
        var searchValue = $("#searchEdit").val().toLowerCase();

        tableRows.each(function (ir, rows) {
            var tableCells = $(rows).children();
            $(rows).hide();

            tableCells.each(function (ic, cell) {
                if (cell.textContent.toLowerCase() === searchValue) {
                    $(rows).show(300);
                }
            });
        });
    });

    $("#clearButton").click(function () {
        $("tbody tr").show(300);
        $("#searchEdit").val("").focus();
    });
});