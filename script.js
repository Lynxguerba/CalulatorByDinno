function a(val) {
    document.getElementById("display").value += val;
}
function plusMinus() {
    document.getElementById("display").value *= (-1);
}
function clr(val) {
    document.getElementById("display").value = val;
}
function calc() {
    try {
        clr(eval(document.getElementById("display").value));
    }
    catch(calc) {
        clr("Error")

        function del() {
            var textF = display.value;
            var textE = textF.slice(0, textF.length - 1);
            display.value = textE;
            changeFontsize(display.value.length);
        }
    }

}
function removeLetter() {
    var inputField = document.getElementById("display");
    var currentValue = inputField.value;

    if (currentValue.length > 0) {
        var newValue = currentValue.substring(0, currentValue.length - 1);
        inputField.value = newValue;
    }
}