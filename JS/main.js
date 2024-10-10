// toogle navbar
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')

}
// remove toggle icon
window.onscroll = () => {
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

// typedd js

const typed = new Typed('.multiple-text', {
    strings: ['Aspiring Software Engineer', 'UI UX Designer', 'Product Manager'],
    typeSpeed: 50, // atau nilai sesuai yang kamu inginkan
    backSpeed: 100,
    backDelay: 100,
    loop:true
  });

//   certi

let currentIndex = 0;

const carouselItems = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    const totalItems = carouselItems.length;
    if (index >= totalItems) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalItems - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Automatic sliding every 5 seconds (optional)
setInterval(nextSlide, 5000);
// skils
document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        const fill = bar.querySelector('.progress-fill');
        
        // Set the width of the fill element
        fill.style.width = percentage;
    });
});

  