function convertToFar() {
  //input
    var celsius = parseInt(document.getElementById('celsius').value);
    if (!isNaN(celsius)) {
        var fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit;
    }
}

function convertToCel() {
    // input
    var fahrenheit = parseInt(document.getElementById('fahrenheit').value);
    if (!isNaN(fahrenheit)) {
        var celsius = (fahrenheit - 32) * 5 / 9;
        document.getElementById('celsius').value = celsius;
    }
}
