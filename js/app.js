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

// Sticky header
window.onscroll = function() {myFunction()};

// Get the headers
var header = document.querySelector('.header');
var stickyHeader = document.querySelector('.header-sticky');

// Set the scroll position at which the headers will switch
var sticky = 200; // Change this value as needed

function myFunction() {
    if (window.scrollY > sticky) {
        header.style.display = "none";
        stickyHeader.style.display = "block";
    } else {
        header.style.display = "block";
        stickyHeader.style.display = "none";
    }
}

// Login/Register modal5
function openModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
}

var modal = document.getElementById("modal");
var tabItems = Array.from(document.querySelectorAll(".tab-item"));
var tabContents = Array.from(document.querySelectorAll(".tab-content"));

tabItems.forEach(function(tab) {
    tab.addEventListener("click", function() {
        var target = tab.getAttribute("data-tab-target");
        tabItems.forEach(function(t) {
            t.classList.remove("active2");
        });
        tabContents.forEach(function(c) {
            c.classList.remove("active2");
        });
        tab.classList.add("active2");
        document.querySelector(target).classList.add("active2");
    });
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Sidebar cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        // Prevent default link behavior
        event.preventDefault();
        addItemToCart(this.dataset.id, this.dataset.name, this.dataset.price);
        openNav();
    });
});

document.getElementById('open-cart-btn').addEventListener('click', function() {
    openNav();
});

function openNav() {
    document.getElementById("sidebar").style.width = "350px";
    document.getElementById("overlay").style.display = "block";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("overlay").style.display = "none";
}

function addItemToCart(id, name, price) {
    let cartItems = document.getElementById("cart-items");
    let cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
        <img class="cart-item-img" src="img/shop/${id}.webp" alt="${name}">
        <p class="cart-item-title">${name}</p>
        <span class="cart-item-price">${price}</span>
        <button onclick="removeItemFromCart(this)">&times;</button>
    `;
    cartItems.appendChild(cartItem);
}

function removeItemFromCart(button) {
    button.parentElement.remove();
}
