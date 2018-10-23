// Burger menu click
const burgerButton = document.getElementById("burger-menu");
const navigationBar = document.querySelector(".navigation__items");
const hero = document.querySelector(".hero");

burgerButton.addEventListener("click", function() {
    this.classList.toggle('active');
    navigationBar.classList.toggle('active');
    //navigationBar.classList.toggle('open'); // in case more animation is wanted

    document.body.classList.toggle("overflowHidden");
    hero.classList.toggle("overflowHidden");
});