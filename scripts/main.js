// Burger menu click
const burgerButton = document.getElementById("burger-menu");
const navigationBar = document.getElementById("navigationBar");
//const navigationBar = document.querySelectorAll(".navigation");

burgerButton.addEventListener("click", function() {
    //console.log(e, this);
    this.classList.toggle('active');
    navigationBar.classList.toggle('active');
});