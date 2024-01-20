let slides = document.querySelectorAll('.slide');
let controls = document.querySelectorAll('.controls div');
let indicatorsContainer = document.querySelector('.indicators');
let indicators = [];
let currentIndex = 0;

// Function to update the active slide
function goToSlide(index) {
    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active'));
    // Remove active class from all indicators
    indicators.forEach(indicator => indicator.classList.remove('active'));

    // Add active class to the new current slide and indicator
    slides[index].classList.add('active');
    indicators[index].classList.add('active');

    // Update the current index
    currentIndex = index;
}

// Initialize indicators and attach click event listeners
slides.forEach((slide, index) => {
    let indicator = document.createElement('div');
    indicator.classList.add('indicator');
    if (index === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => {
        goToSlide(index);
    });
    indicatorsContainer.appendChild(indicator);
    indicators.push(indicator);
});

// Optional: Add functionality for automatic slide change
let autoSlideInterval = setInterval(() => {
    let nextIndex = (currentIndex + 1) % slides.length;
    goToSlide(nextIndex);
}, 5000); // Change slide every 5 seconds

// Optional: Add event listeners for manual controls
controls.forEach(control => {
    control.addEventListener('click', () => {
        let nextIndex;
        if (control.classList.contains('next')) {
            nextIndex = (currentIndex + 1) % slides.length;
        } else if (control.classList.contains('prev')) {
            nextIndex = (currentIndex - 1 + slides.length) % slides.length;
        }
        goToSlide(nextIndex);
    });
});

// Slider 2
const slides2 = document.querySelectorAll('.slider2__item');

function toggleSlide() {
    slides2.forEach(slide => {
        const img = slide.querySelector('.slider2__item__img img');
        const card = slide.querySelector('.slider2__item__card');

        if (slide.classList.contains('hidden')) {
            slide.classList.remove('hidden');
            img.classList.add('zoom');
            card.classList.add('fade-up');
        } else {
            slide.classList.add('hidden');
            img.classList.remove('zoom');
            card.classList.remove('fade-up');
        }
    });
}

const controllers2 = document.querySelectorAll('.controls2 a');

controllers2.forEach(controller2 => {
    controller2.addEventListener('click', function(event) {
        event.preventDefault();
        toggleSlide();
    });
});

setInterval(toggleSlide, 10000);

// Slider 3
$(document).ready(function(){
    $('.slider3').slick({
        
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        centerMode: true,
        variableWidth: true
    });

    $('.slick-prev').text(''); 
    $('.slick-next').text(''); 

});

// Video popup
$(document).ready(function() {
    $('.play-video-popup').click(function(e) {
        e.preventDefault();
        $('body').append('<div class="video-popup">' +
            '<div class="video-popup-overlay"></div>' +
            '<div class="video-popup-content">' +
            '<iframe width="1000" height="600" src="https://www.youtube.com/embed/MLpWrANjFbI?si=LQ-9zsRbdxnkywVy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>' +
            '<button class="video-popup-close"><i class="bi bi-x-lg"></i></button>' +
            '</div>' +
            '</div>');
        $('.video-popup').fadeIn(300);

        $('.video-popup-close, .video-popup-overlay').click(function() {
            $('.video-popup').fadeOut(300, function() { $(this).remove(); });
        });
    });
});

// Slider 4
$(document).ready(function(){
    $('.slider4').slick({
        arrows: false,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: false,
        variableWidth: false
    });

});