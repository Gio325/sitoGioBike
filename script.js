

document.addEventListener('DOMContentLoaded', function() {
    // Otteniamo l'elemento header
    const header = document.querySelector('.header');
    const scrollThreshold = 200; // La soglia di scorrimento in pixel

    // Gestore dell'evento di scorrimento
    window.addEventListener('scroll', function() {
        // window.scrollY è la posizione verticale corrente di scorrimento
        if (window.scrollY > scrollThreshold) {
            // Se scorri oltre la soglia, nascondi l'header
            header.classList.add('header-hidden');
        } else {
            // Se sei all'inizio della pagina, mostra l'header
            header.classList.remove('header-hidden');
        }
    });

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


// when we click on hamburger icon its close 

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}});