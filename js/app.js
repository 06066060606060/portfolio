var slideIndex = 0;
showSlides();
window.onresize = myFunction;

//slideshow photo
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // 4 secondes
}

function updateTextInput(val) {
  document.getElementById('textInput').value=val; 
  console.log("ok value1");
}
function updateTextInput2(val) {
  document.getElementById('textInput2').value=val; 
  console.log("ok value2");
}

var xcontrol = document.querySelector('control');
var xslide = document.querySelector('range');
var xslide2 = document.querySelector('range2');

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position < 60) {
    header.style.backgroundColor = "transparent";
    xcontrol.style.display = "";
    xslide.style.display = "";
    xslide2.style.display = "";

  } else 
  {
    header.style.backgroundColor = "#41306b";
    xslide.style.display = "none";
    xslide2.style.display = "none";
    xcontrol.style.display = "none";
   // console.log("ok scroll capté");
  }
});