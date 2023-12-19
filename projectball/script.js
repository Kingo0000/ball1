/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
const nav_icon = document.querySelector('.nav_icon')
const sideNav = document.querySelector('.side_navigation')
const icon = document.querySelector('#icon')


var isClicked = true
nav_icon.addEventListener('click', revealIn)
function revealIn(){
    if (isClicked){
        sideNav.style.opacity = '1'
        sideNav.style.transition = 'opacity 150ms ease-in-out'
        icon.classList.replace('fa-navicon', 'fa-close')
        isClicked = false
    }else{
        sideNav.style.opacity = '0'
        icon.classList.replace('fa-close', 'fa-navicon')
        isClicked = true
    }
}

