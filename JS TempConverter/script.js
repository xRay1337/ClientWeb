var convertButton = document.getElementById("convert-button");

convertButton.addEventListener("click", function (e) {
    var converterInput = document.getElementById("converter-input");
    var celsius = parseFloat(converterInput.value);

    if (isNaN(celsius)) {
        document.getElementById("converter-output").value = "Invalid number";
    } else {
        var fahrenheit = celsius * 1.8 + 32;
        var kelvin = celsius + 273.15;

        document.getElementById("converter-output").value = "Celsius = " + celsius.toFixed(2) + "\n"
            + "Fahrenheit = " + fahrenheit.toFixed(2) + "\n" + "Kelvin = " + kelvin.toFixed(2);
        converterInput.value = "";
    }
});