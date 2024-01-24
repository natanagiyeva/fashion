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


//JQuery Dropdown link onmouseover display block & onmouseout display none
$(document).ready(function(){
    // Prevent default action of link
    preventDefault();
    $(".dropdown").mouseover(function(){
        $(".dropdown-content").css("display", "block");
    });
    $(".dropdown").mouseout(function(){
        $(".dropdown-content").css("display", "none");
    });
});

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
