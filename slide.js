var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");
var timer;

// Hide all the images but the first one
for (var i = 1; i < slides.length; i++) {
  slides[i].style.display = "none";
}
slides[0].style.display = "block"; 

function showSlides() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block"; 
  timer = setTimeout(showSlides, 4000); // Change image every 4 seconds
}

function startSlideshow() {
  var imgElement = document.getElementById("main_img");
  imgElement.style.display = "none";
  showSlides();
}

function pauseSlideshow() {
  clearTimeout(timer);
}
