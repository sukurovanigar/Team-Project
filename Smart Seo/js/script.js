new WOW().init();

$(document).ready(function () {
  var owl = $(' .testimonial  .owl-carousel');
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    autoplaySpeed: 1500,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],

  });
  $(".counter").each(function () {
    $(this).prop("Counter", 0).animate({
      Counter: $(this).text()
    }, {
        duration: 4000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
  });
  var owl = $('.slider_2 .owl-carousel');
  owl.owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 1500,
    autoplayTimeout: 2000,

    margin: 20,
    center: true,
    items: 6,
  });


  /* Case Carousel */
  var caseCarousel = $('#case-carousel');
  caseCarousel.owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      }
    }
  });




});

function myMap() {
  var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  }
  