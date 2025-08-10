
const text = "Welcome to My Portfolio";
const speed = 100;
let i = 0;


function typeWriter() {
    if (i < text.length) {
        document.querySelector(".typewriter-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
window.onload = typeWriter;


const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navlinks.classList.toggle("active");
    document.body.classList.toggle("menu-open");
    hamburger.textContent = hamburger.textContent === "☰" ? "✖" : "☰";
});
