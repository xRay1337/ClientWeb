$(function () {
    var rowNumber = 1;
    var mainCheckbox = $("#main-checkbox");

    $("#add-button").click(function () {
        var firstName = $("#input-first-name");
        var lastName = $("#input-last-name");
        var phoneNumber = $("#input-phone-number");
        var allInputs = $(".container input");

        allInputs.css("background", "white");

        if (firstName.val() === "") {
            firstName.css("background", "#f8d7da").focus();
        } else if (lastName.val() === "") {
            lastName.css("background", "#f8d7da").focus();
        } else if (phoneNumber.val() === "") {
            phoneNumber.css("background", "#f8d7da").focus();
        } else {
            var dublicate = false;

            $(".phoneNumber").each(function (index, element) {
                if (element.textContent === phoneNumber.val()) {
                    dublicate = true;
                    return false;
                }
            });

            if (dublicate) {
                $("#notificationModal").modal("show");
            } else {
                var newContact = $("<tr><td><input class='checkboxes' type='checkbox'></td><td>" + (rowNumber++) + "</td><td>" + firstName.val() +
                    "</td><td>" + lastName.val() + "</td><td class='phoneNumber'>" + phoneNumber.val() +
                    "</td><td><button class='close remove-button' type='button' data-toggle='modal' data-target='#confirmationModal'><span aria-hidden='true'>&times;</span></button></td></tr>");

                $("tbody").append(newContact);

                $(".checkboxes").change(function () {
                    mainCheckbox.prop("checked", false);
                });

                $(".remove-button").click(function () {
                    var thisRow = $(this).closest("tr");
                    var confirmation = $("#confirmationModal");
                    confirmation.modal("show");

                    $("#yesButton").click(function (e) {
                        e.stopImmediatePropagation();
                        var checkboxesCount = $(".checkboxes:checked").length;

                        if (checkboxesCount > 0) {
                            $(".checkboxes:checked").closest("tr").remove();
                        } else {
                            thisRow.remove();
                        }

                        UpdateTableNumbering();
                        mainCheckbox.prop("checked", false);
                        confirmation.modal("hide");
                    });
                });

                allInputs.val("");
            }
        }
    });

    function UpdateTableNumbering() {
        rowNumber = 1;

        $("tbody tr").each(function () {
            $(this).find(":nth-child(2)").text(rowNumber);
            rowNumber++;
        });
    }

    mainCheckbox.change(function () {
        $(".checkboxes").prop("checked", mainCheckbox.is(":checked"));
    });
});