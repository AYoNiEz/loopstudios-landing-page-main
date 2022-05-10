const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const menu = document.querySelector('.menu') 

hamburger.addEventListener('click', openMenu)
close.addEventListener('click', closeMenu)

function openMenu(event) {
    menu.classList.add('show')
}

function closeMenu(event) {
    menu.classList.remove('show')
}