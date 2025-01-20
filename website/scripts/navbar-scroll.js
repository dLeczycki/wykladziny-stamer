const navbar = document.querySelector('nav#navbar');
const scrollLinks = document.querySelectorAll('a.menu-link');
const scrollMax = 200;
const navbarOffset = 70;

const scrollWithOpacity = () => {
    const opacity = window.scrollY > scrollMax ? 1 : 1 - (scrollMax - window.scrollY) / scrollMax;
    navbar.style.backgroundColor = `rgba(0,0,0,${opacity})`;
}

const moveToSection = (e) => {
    e.preventDefault();

    const sectionId = e.target.getAttribute('href');
    const targetSection = document.querySelector(sectionId);
    const sectionPosition = targetSection.offsetTop - navbarOffset;

    window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth',
    });
}


window.addEventListener('scroll', scrollWithOpacity);

for (link of scrollLinks) {
    link.addEventListener('click', moveToSection)
}

