function cekBilangan() {
    let bilangan = document.getElementById("bilangan").value;

    if (bilangan % 2 === 0) {
        document.getElementById("hasil").innerHTML = "Bilangan " + bilangan + " adalah bilangan genap.";
    } else if (bilangan % 1 !== 0) {
        document.getElementById("hasil").innerHTML = "Bilangan " + bilangan + " adalah bilangan desimal.";
    } else {
        document.getElementById("hasil").innerHTML = "Bilangan " + bilangan + " adalah bilangan ganjil.";
    }
}