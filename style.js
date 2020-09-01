console.log("Galerie-zahrada");


$('a.elipse').on('click', function(e) {
  let cil = $(this).attr('href');
  let rychlost = 1000;

  $("html, body").stop().animate(
      { scrollTop: $(cil).offset().top},
  rychlost);

  e.preventDefault();
});

//button circle
function prepnoutTridu(element, trida) {
  if (element.className.match(trida)) {
    element.className = element.className.replace(trida, "");
  }
  else {
    element.className += " " + trida;
  }
}
//carousel
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  //dots[slideIndex-1].className += " active";
}

