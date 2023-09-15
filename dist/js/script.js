//navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed')
    }
}

//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

document.onclick = function(e){

    if(e.target.id !== 'hamburger' && e.target.id !== 'nav-menu')
    
    {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.remove('hidden');
    navMenu.classList.toggle('hidden')
    }
    }

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');

});

