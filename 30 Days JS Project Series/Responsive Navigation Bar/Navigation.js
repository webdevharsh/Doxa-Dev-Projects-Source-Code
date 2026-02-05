// Doxa Dev 
let nav_bar_btn = document.querySelector("header .fa-bars");
let close_nav_bar_btn = document.querySelector(".fa-xmark");
let nav_list_box = document.querySelector("header .nav-lists");

// Add event listener to the nav bar button 
nav_bar_btn.addEventListener("click", () =>{
   nav_list_box.style.left = "50%"; 
})

// Add event listener to the close nav bar button 
close_nav_bar_btn.addEventListener("click", () =>{
nav_list_box.style.left = "-100%"; 
})