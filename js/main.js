$('.toggle').click(function(){
	$('.main-nav').toggleClass('show');

});

$(document).ready(function() {
  $("img").unveil();
});


// pure JS
var elem = document.getElementById('mySwipe');
window.mySwipe = Swipe(elem, {
  // startSlide: 4,
   auto: 5000,
  // continuous: true,
  // disableScroll: true,
  // stopPropagation: true,
  // callback: function(index, element) {},
  // transitionEnd: function(index, element) {}
});

$('.bxslider').bxSlider({
  minSlides: 1,
  maxSlides: 2,
  slideWidth: 360,
  slideMargin: 10
});