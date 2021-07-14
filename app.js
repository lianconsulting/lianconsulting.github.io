const meny = document.querySelector('#mobile-menu')
const menyLinker = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

const mobileMenu = () => {
    meny.classList.toggle('is-active')
    menyLinker.classList.toggle('active')
}