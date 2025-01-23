const SCROLL_MAX = 200;
const NAVBAR_OFFSET = window.screen.width > 1024 ? 70 : 0;

const navbar = document.querySelector('nav#navbar');
const scrollLinks = document.querySelectorAll('a.menu-link');
const hamburger = document.querySelector('button#hamburger');

const scrollWithOpacity = () => {
    const opacity = window.scrollY > SCROLL_MAX ? 1 : 1 - (SCROLL_MAX - window.scrollY) / SCROLL_MAX;
    navbar.style.backgroundColor = `rgba(0,0,0,${opacity})`;
}

const moveToSection = (e) => {
    e.preventDefault();

    const sectionId = e.target.getAttribute('href');
    const targetSection = document.querySelector(sectionId);
    const sectionPosition = targetSection.offsetTop - NAVBAR_OFFSET;

    window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth',
    });
}

const toggleHamburgerMenu = (e) => {
    e.preventDefault();

    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
}

const deactivateHamburgerMenu = (e) => {
    e.preventDefault();

    hamburger.classList.remove('active');
    navbar.classList.remove('active')
}


window.addEventListener('scroll', scrollWithOpacity);

for (link of scrollLinks) {
    link.addEventListener('click', moveToSection);
    link.addEventListener('click', deactivateHamburgerMenu);
}

hamburger.addEventListener('click', toggleHamburgerMenu);

