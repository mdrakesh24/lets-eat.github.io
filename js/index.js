function toggleMenu() {
  var menu = document.getElementById('menu');
  var bar = document.getElementById('menu-icon');

  if(menu.style.display === "flex"){
      menu.style.display = "none";
      bar.style.backgroundColor = "transparent";
  }
  else{
      menu.style.display = "flex";
      bar.style.backgroundColor = "gray";
  }
}

//Scroll Reveal
const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: '1000',
  reset: true
});

sr.reveal('.home', {delay: 300});
sr.reveal('.container', {delay: 300});
sr.reveal('.about', {delay: 300});
sr.reveal('.food', {delay: 300});
sr.reveal('.review', {delay: 300});
sr.reveal('.contact', {delay: 300});
sr.reveal('.menu', {delay: 300});

//Swiper JS
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//Sign In Modal
var modal = document.getElementById('signInModal');
var btn = document.getElementById("signInBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}