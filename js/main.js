$('.devices__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: "<img src='./img/prev.svg' class='prev' alt='1'>",
  nextArrow: "<img src='./img/next.svg' class='next' alt='2'>",
});

$('.mission__inner-card').slick({
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows:false,
        dots:true,
      }
    },
    {
      breakpoint: 880,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows:false,
        dots:true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows:false,
        dots:true,
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
]
});

$(document).ready(function() {
  $('.menu-burger__header').click(function(){
      $('.menu-burger__header').toggleClass('open-menu');
      $('.header__nav').toggleClass('open-menu');
  });
});
