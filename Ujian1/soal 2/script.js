function isPosOrNeg(num1, num2) {
if (num1 !== 0 && num2 !== 0) {
    if (num1 > 0 && num2 > 0) {
        return true;
    } else if (num1 < 0 && num2 < 0) {
        return true;
    }
    }
    return false;
}

function checkNumbers() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    var result = isPosOrNeg(num1, num2);

    if (result) {
    document.getElementById("output").innerHTML =
        "true";
    } else {
    document.getElementById("output").innerHTML =
        "false";
    }
}