	
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 50,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
})

var nav = $('.navbar'),
    about = $('#about'),
    headerH = $(".header").innerHeight(),
    scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);
    
$(window).on("scroll", function() {
  scrollOffset = $(this).scrollTop();

  checkScroll(scrollOffset);

});

function checkScroll(scrollOffset) {
  if( scrollOffset >= headerH ) {
    nav.addClass("sticky");
    about.css('padding-top', '160px');
  } else {
    nav.removeClass("sticky");
    about.css('padding-top', '');
  }
}




$(function(){

  $('.nav-link').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 2000);
  });

});

$('.nav-link').on('click', function() {
  $('.navbar-collapse').removeClass('show');
});
