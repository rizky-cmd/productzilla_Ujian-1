function hitungLuas() {
    var alas = parseFloat(document.getElementById("alas").value);
    var tinggi = parseFloat(document.getElementById("tinggi").value);

    var luas = (alas * tinggi) / 2;

    document.getElementById("hasil").value = luas;
}