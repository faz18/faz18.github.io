// show menu

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

// remove menu for desktop?

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// set header colour
document.getElementById("l-header").style.background = "var(--lgreen-color)";

// slideshow
var slideIndex = [1,1,1];
var slideId = ["s_mw0", "s_mw1", "s_mw2"]
var myTimer = [];


window.addEventListener("load",function() {
    showSlides(1,0);
    myTimer[0] = setInterval(function(){plusSlides(1,0)}, 4000);
    showSlides(1,1);
    myTimer[1] = setInterval(function(){plusSlides(1,1)}, 4000);
    showSlides(1,2);
    myTimer[2] = setInterval(function(){plusSlides(1,2)}, 4000);
})

function plusSlides(n,no){
    clearInterval(myTimer[no]);
    if (n < 0){
      showSlides(slideIndex[no] -= 1,no);
    } else {
     showSlides(slideIndex[no] += 1,no); 
    }
    if (n === -1){
      myTimer[no] = setInterval(function(){plusSlides(n + 2,no)}, 4000);
    } else {
      myTimer[no] = setInterval(function(){plusSlides(n + 1,no)}, 4000);
    }
  }

  function showSlides(n,no){
    var i;
    var slides = document.getElementsByClassName(slideId[no]);
    if (n > slides.length) {slideIndex[no] = 1}
    if (n < 1) {slideIndex[no] = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex[no]-1].style.display = "block";
  }

//   scroll reveal
window.sr = ScrollReveal();

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false
})

sr.reveal('.subsection', {interval: 400})