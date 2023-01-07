// Header fixed

const header = document.querySelector('.header');
const intro = document.querySelector('.intro');

window.addEventListener('scroll', () => {
    if (window.scrollY > header.offsetHeight) {
        header.classList.add('header--fixed');
    } else {
        header.classList.remove('header--fixed');
    }
});

// Smooth scroll

const navLinks = document.querySelectorAll('[data-link]');

navLinks.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        let linkId = item.getAttribute('data-link');
        let currentLink = document.querySelector(linkId);
        currentLink.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });

        nav.classList.remove('nav--active');
    });
});

// Burger menu

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav--active');

    if (nav.classList.contains('nav--active')) {
        header.style.background = 'rgba(44, 48, 57, .95)';
    } else {
        header.style.background = '';
    }
});
