
let lastScrollTop = 0; 
const header = document.querySelector('header'); 

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        
        header.classList.add('hide');
    } else {
       
        header.classList.remove('hide');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
});

document.addEventListener("scroll", function() {
    const cards = document.querySelectorAll(".card");
    cards.forEach(function(card) {
        const cardOffset = card.offsetTop - window.innerHeight;
        if (window.scrollY > cardOffset) {
            card.classList.add("visible");
        }
    });
});

const slider = document.querySelector('.projects-slider');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let slideIndex = 0; 

const totalSlides = document.querySelectorAll('.project').length;


function moveSlider() {
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}


nextButton.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % totalSlides; 
    moveSlider();
});


prevButton.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides; 
    moveSlider();
});
