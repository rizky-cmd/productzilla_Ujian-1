function checkPrime() {
    // mengambil input dari user
    var number = document.getElementById("number").value;
    var isPrime = true;

    // mengecek apakah bilangan prima atau bukan
    if (number < 2) {
        isPrime = false;
    } else {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    // menampilkan hasil
    if (isPrime) {
        document.getElementById("result").innerHTML = "Bilangan " + number + " adalah bilangan prima.";
    } else {
        document.getElementById("result").innerHTML = "Bilangan " + number + " bukan bilangan prima.";
    }
}