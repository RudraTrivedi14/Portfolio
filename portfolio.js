// menu show y hidden


  const navMenu=document.getElementById('nav_menu');
  const navToggle=document.getElementById('nav-toggle');
  const navClose=document.getElementById('nav-close');


//   menu show


if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    });
}

// MENU HIDDEN 

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    });
}

// remove menu mobile

const navLink=document.querySelectorAll('.nav_link');


function linkAction(){
    const navMenu=document.getElementById('nav_menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n=>n.addEventListener('click',linkAction));