document.addEventListener("DOMContentLoaded", function () {
    var convertButton = document.getElementById("convert-button");

    convertButton.addEventListener("click", function () {
        var converterInput = document.getElementById("converter-input");
        var converterOutput = document.getElementById("converter-output");
        var celsius = parseFloat(converterInput.value);

        if (isNaN(celsius)) {
            converterOutput.style.color = "red";
            converterOutput.value = "Invalid number";
        } else {
            converterOutput.style.color = "black";

            var fahrenheit = celsius * 1.8 + 32;
            var kelvin = celsius + 273.15;

            converterOutput.value = "Celsius = " + celsius.toFixed(2) + "\n";
            converterOutput.value += "Fahrenheit = " + fahrenheit.toFixed(2) + "\n";
            converterOutput.value += "Kelvin = " + kelvin.toFixed(2);

            converterInput.value = "";
        }

        converterInput.focus();
    });
});