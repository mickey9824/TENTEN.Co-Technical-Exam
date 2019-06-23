var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
});

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("auto-slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "block"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "none"; 
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


