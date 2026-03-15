



const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

//Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

//Show active menu while schrolling
const highlightMenu = () => {
    const element = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const galleryMenu = document.querySelector('#gallery-page')

    let scrollPos = window.scrollY
    console.log(scrollPos);

    //adds 'highlight' class to my menu items
    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }

    //for About me underline
    else if (window.innerWidth > 960 && scrollPos < 1400){
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        galleryMenu.classList.remove('highlight')
        return
    }

    //for gallery
    else if (window.innerWidth > 960 && scrollPos < 2345){
        aboutMenu.classList.remove('highlight')
        galleryMenu.classList.add('highlight')
        return
    }

    if((element && window.innerWidth < 960 && scrollPos < 600) || element){
        element.classList.remove('highlight')
    }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)


//close mobile menu when clicking on a menu items
const hideMobileMenu = () =>{
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);