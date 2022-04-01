var bullet = ['1','2','3'];
var swiper = new Swiper(".slide", {
    mousewheel: false,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet:function(index, className){
        return '<div class="' + className + '"><span>' +
(bullet[index]) + '</span></div>'
      }
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    on: {

      slideChange: function (e) {
        $('.swiper-slide > div').removeClass('active');
        $('.swiper-slide').eq(e.activeIndex).find('> div').eq(0).addClass('active');
      }
    }
  });

  var swiper2 = new Swiper(".slide2", {
    mousewheel: false,
    pagination: {
      el: ".slide2 .pagination2",
      clickable: true,
    },
  
    navigation: {
      nextEl: ".swiper2-button-next",
      prevEl: ".swiper2-button-prev",
    },
    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });