
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


const hamburger = document.querySelector(".hamburger");
const navWrapper = document.querySelector(".nav-wrapper");
const body = document.body;

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navWrapper.classList.toggle("active");


    body.classList.toggle("no-scroll");
});


const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {

        navLinks.forEach(nav => nav.classList.remove('active'));


        this.classList.add('active');


        if (window.innerWidth <= 768) {
            hamburger.classList.remove("active");
            navWrapper.classList.remove("active");
            body.classList.remove("no-scroll");
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById('preloader');

    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    }, 1600);
});