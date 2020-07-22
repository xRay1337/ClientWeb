$(function () {
    var rowNumber = 0;
    var mainCheckbox = $("#main-checkbox");
    var removeAllButton = $("#remove-all-button");
    removeAllButton.hide();

    $("#add-button").click(function () {
        var firstName = $("#input-first-name");
        var lastName = $("#input-last-name");
        var phoneNumber = $("#input-phone-number");
        var allInputs = $(".container input");

        allInputs.removeClass("is-invalid")

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
            } else {
                rowNumber += 1;
                var newContact = $("<tr><td><input class='checkboxes' type='checkbox'></td><td>" + rowNumber + "</td><td class='fName'></td><td  class='lName'></td><td class='phoneNumber'></td><td><button class='close remove-button' type='button' data-toggle='modal' data-target='#confirmationModal' title='Remove contact'><span aria-hidden='true'>&times;</span></button></td></tr>");

                newContact.find(".fName").text(firstName.val());
                newContact.find(".lName").text(lastName.val());
                newContact.find(".phoneNumber").text(phoneNumber.val());

                $("tbody").append(newContact);

                $(".checkboxes").change(function () {
                    mainCheckbox.prop("checked", false);

                    if ($(this).is(":checked")) {
                        removeAllButton.show(300);
                    }

                    if (!$(".checkboxes:checked").length) {
                        removeAllButton.hide(300);
                    }
                });

                $(".remove-button").click(function () {
                    var thisRow = $(this).closest("tr");
                    var confirmation = $("#confirmationModal");
                    confirmation.modal("show");

                    $("#yesButton").click(function (e) {
                        e.stopImmediatePropagation();
                        thisRow.remove();
                        updateTableNumbering();
                        mainCheckbox.prop("checked", false);
                        confirmation.modal("hide");
                    });
                });

                allInputs.val("");
            }
        }
    });

    function updateTableNumbering() {
        rowNumber = 1;

        $("tbody tr").each(function () {
            $(this).find(":nth-child(2)").text(rowNumber);
            rowNumber += 1;
        });
    }

    mainCheckbox.change(function () {
        $(".checkboxes").prop("checked", mainCheckbox.is(":checked"));

        if ($(this).is(":checked")) {
            removeAllButton.show(300);
        } else {
            removeAllButton.hide(300);
        }
    });

    removeAllButton.click(function () {
        var confirmation = $("#confirmationModal");
        confirmation.modal("show");

        $("#yesButton").click(function (e) {
            e.stopImmediatePropagation();
            $(".checkboxes:checked").closest("tr").remove();
            removeAllButton.hide(300);
            updateTableNumbering();
            confirmation.modal("hide");
            mainCheckbox.prop("checked", false);
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