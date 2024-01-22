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

