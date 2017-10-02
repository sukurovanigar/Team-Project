$(document).ready(function(){
    $("#firstCarousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
      }); 
    $(".footer-carousel").owlCarousel({
        stagePadding: 50,
        loop:false,
        autoplay:true,
        autoplayTimeout:4000,
        margin:10,
        nav:false,
        dots:false,
        smartSpeed:1500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
      });
    $("#secondCarousel").owlCarousel({
        items: 3,
        loop: true,
        margin:3,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        smartSpeed:1500,
         responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            800:{
                items:3
            }
        }
      });
      $('#testimonial-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            items: 1,
            smartSpeed: 1000,
            dots: false,
            nav: false,  
        });
})
// Hamburger Nav
 var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
     var hamburgers = document.querySelectorAll(".hamburger");
     if (hamburgers.length > 0) {
       forEach(hamburgers, function(hamburger) {
         hamburger.addEventListener("click", function() {
           this.classList.toggle("is-active");
         }, false);
       });
   }