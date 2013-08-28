$('.toggle').click(function(){
	$('.main-nav').toggleClass('show');

});

$(document).ready(function() {
  $("img").unveil();
});


// pure JS
//var elem = document.getElementById('mySwipe');
//window.mySwipe = Swipe(elem, {
  // startSlide: 4,
 //  auto: 5000,
  // continuous: true,
  // disableScroll: true,
  // stopPropagation: true,
  // callback: function(index, element) {},
  // transitionEnd: function(index, element) {}
//});

$(document).ready(function() {
  $('.has-modal').magnificPopup({type:'image'});
});

$(document).ready(function() {
 
  $("#owl-slider").owlCarousel({

    autoplay: 3000,
    goToFirst: true,
    goToFirstSpeed:  1000,
    navigation : true,
    items : 4,
  });
 
});