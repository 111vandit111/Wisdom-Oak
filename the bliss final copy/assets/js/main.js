/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1500,
    reset: true
});
/*SCROLL HOME*/
sr.reveal('.img-container',{delay: 100}); 
sr.reveal('.img-container .img',{delay: 200}); 
sr.reveal('.img-container .text',{delay: 200});
sr.reveal('.underc-img',{delay:200});


const vr = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
});

vr.reveal('.odd .video',{ delay:200});
vr.reveal('.even .text',{ delay:200});

const tr = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 1500,
  reset: true
});

tr.reveal('.even .video',{ delay:200});
tr.reveal('.odd .text',{ delay:200});