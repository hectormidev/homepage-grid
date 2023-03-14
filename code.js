const menuIcon = document.getElementById('menuHamburger')
const menuClose = document.getElementById('menuClose')
const mobileUl = document.querySelector('.mobile__ul') 

menuIcon.addEventListener('click', function(){
    mobileUl.classList.add('showmenu')
})

menuClose.addEventListener('click', function(){
    mobileUl.classList.remove('showmenu')
})