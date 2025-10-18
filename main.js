// VARIABLES 
const nav_links = document.querySelector('.nav-links'); 
const menu_hamburger = document.querySelector('.menu-hamburger')

menu_hamburger.addEventListener('click', () => {
    nav_links.classList.toggle('active');
});


// HERO SECTION NAVBAR TRANSPARENCY
// ======= تغيير خلفية النافبار عند النزول =======
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if(window.scrollY > window.innerHeight * 0.5){
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
