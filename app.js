const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li')
const navBar = document.querySelector('.navy');
console.log(navBar);

const navSlide = () => {
        nav.classList.toggle('nav-active');
        // navBar.classList.toggle('navy--gate');

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`
             }
        });
        burger.classList.toggle('toggle'); 
};

burger.addEventListener('click', navSlide);
