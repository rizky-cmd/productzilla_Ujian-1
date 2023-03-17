function cekTahun() {
    var tahun = document.getElementById("tahun").value;
    if (tahun % 4 === 0 && (tahun % 100 !== 0 || tahun % 400 === 0)) {
    document.getElementById("hasil").innerHTML = tahun + " TRUE";
    } else {
    document.getElementById("hasil").innerHTML = tahun + " FALSE";
    }
}