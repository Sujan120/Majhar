
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:2,
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
      0 : {
          items: 1,
      },
      701 : {
          items: 1,
      },
      1201 : {
         items:1,
      }
  }
  });

});




$('.percent1').percentageLoader({
  strokeWidth: 13,
  bgColor: '#d9d9d9',
  ringColor: '#30bae7',
  textColor: '#9a9a9a',
  valElement: 'p',
  fontSize: '20px',
  fontWeight: 'normal'

});


$('.percent2').percentageLoader({
  strokeWidth: 13,
  bgColor: '#d9d9d9',
  ringColor: '#d74680',
  textColor: '#9a9a9a',
  valElement: 'p',
  fontSize: '20px',
  fontWeight: 'normal'

});

$('.percent3').percentageLoader({
  strokeWidth: 13,
  bgColor: '#d9d9d9',
  ringColor: '#15c7a8',
  textColor: '#9a9a9a',
  valElement: 'p',
  fontSize: '20px',
  fontWeight: 'normal'

});

$('.percent4').percentageLoader({
  strokeWidth: 13,
  bgColor: '#d9d9d9',
  ringColor: '#eb7d4b',
  textColor: '#9a9a9a',
  valElement: 'p',
  fontSize: '20px',
  fontWeight: 'normal'

});


$(window).scroll(function() {
  if ($(this).scrollTop() > 600) {
    $(".scrollup").fadeIn();
  } else {
    $(".scrollup").fadeOut();
  }
})

$(".scrollup").click(function() {
  $("html, body").animate({
    scrollTop: 0
  }, 600);
  return false;
})









 