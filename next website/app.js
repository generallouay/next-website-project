const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

const trigger = () =>{
 menu.classList.toggle('is-active')
 menuLinks.classList.toggle('active')
}

menu.addEventListener('click', trigger)

