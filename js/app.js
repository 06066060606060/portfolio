var slideIndex = 0;
showSlides();

window.onresize = myFunction;

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

function play() {
  var audio = new Audio("/js/clic.wav");
  audio.play();
  // console.log("play sound");
}



document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 878) {
    header.style.backgroundColor = "#41306b";
   // document.body.style.background = "#41406b";
   // console.log("OKI JE SUIS LA111111111111");
  } else {
    header.style.backgroundColor = "transparent";
  //  document.body.style.background = "#000000";
  //  console.log("OKI JE PAS LA222222222222222");
  }
});
