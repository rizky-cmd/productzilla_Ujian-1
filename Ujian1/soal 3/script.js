function checkAccess(level) {
    if (level === "admin") {
        document.getElementById("welcome-message").innerHTML = "Selamat datang, Admin!";
    } else if (level === "user") {
        document.getElementById("welcome-message").innerHTML = "Anda tidak memiliki akses ke halaman ini!";
    } else {
        document.getElementById("welcome-message").innerHTML = "Level akses tidak valid!";
    }
}