function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("show");
}
const time = new Date().getHours();
    let greeting;
    if (time < 3) {
    greeting = "Selamat Datang:)";
    } else if (time < 10) {
    greeting = "Selamat Pagi:)";
    } else if (time < 15) {
    greeting = "Selamat Siang:)";
    } else if (time < 18) {
    greeting = "Selamat Sore:)";
    } else {
    greeting = "Selamat Malam:)";
    }
    document.getElementById("index").innerHTML = greeting;