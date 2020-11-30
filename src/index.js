import './styles/main.css';

const menuIcon = document.querySelector('.hamburgerMenu');
const navbar = document.querySelector ('.navbar');
const navList= document.querySelector('.navList ul')
const navListContainer = document.getElementById("navListContainer");

navList.addEventListener('click', () => {
    navbar.classList.toggle("change")
    navListContainer.classList.toggle("active")
});

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle("change")
    navListContainer.classList.toggle("active")
});




 


