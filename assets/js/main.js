/**
* Template Name: Personal - v2.4.0
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";
  $('.product_btn a').click(function(){
    $('.nav-menu .active, .mobile-nav .active').removeClass('active');
    $('.nav-menu, .mobile-nav').find('a[href="' + initial_nav + '"]').parent('li').addClass('active');
  })
  // Nav Menu
  $(document).on('click', '.nav-menu a, .mobile-nav a, .product_btn a', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var hash = this.hash;
      var target = $(hash);
      if (target.length) {
        e.preventDefault();

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if (hash == '#header') {
          $('#header').removeClass('header-top');
          $("section").removeClass('section-show');
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').fadeOut();
          }
          return;
        }

        if (!$('#header').hasClass('header-top')) {
          $('#header').addClass('header-top');
          setTimeout(function() {
            $("section").removeClass('section-show');
            $(hash).addClass('section-show').css("display","block");

          }, 350);
        } else {
          $("section").removeClass('section-show');
          $(hash).addClass('section-show').css("display","block");
        }

        $('html, body').animate({
          scrollTop: 0
        }, 350);

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }

        return false;

      }
    }
  });

  // Activate/show sections on load with hash links
  if (window.location.hash) {
    var initial_nav = window.location.hash;
    if ($(initial_nav).length) {
      $('#header').addClass('header-top');
      $('.nav-menu .active, .mobile-nav .active').removeClass('active');
      $('.nav-menu, .mobile-nav').find('a[href="' + initial_nav + '"]').parent('li').addClass('active');
      setTimeout(function() {
        $("section").removeClass('section-show');
        $(initial_nav).addClass('section-show');
      }, 350);
    }
  }

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // recommendation carousel (uses the Owl Carousel library)
  $(".recommendation-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var productIsotope = $('.product-container').isotope({
      itemSelector: '.product-item',
      layoutMode: 'fitRows'
    });

    $('#product-flters li').on('click', function() {
      $("#product-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      productIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function() {
    $('.venobox').venobox({
      'share': false
    });
  });

  // product details carousel
  $(".product-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });
  var txt=$("p span");
      var body = $("body");
      var btn=$("button");

      var clock=setInterval(function(){
        var now = new Date; 
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();

        if(hour<10){
          hour = "0"+hour;
        }
        else if(minute<10){
          minute = "0"+minute;
        }
        else if(second<10){
          second = "0"+second;
        }
        txt.eq(0).text(hour);
        txt.eq(1).text(minute);
        txt.eq(2).text(second);

        if(hour>5&&hour<10){
          body.css({"background":"url(img/bg_morning.jpg)","color":"tomato"});
        }
        else if(hour>9&&hour<18){
          body.css({"background":"url(img/bg_afternoon.jpg)","color":"orange"});
        }
        else if(hour>17&&hour<22){
          body.css("background","url(img/bg_evening.jpg)");
        }
        else{
          body.css("background","url(img/bg_night.jpg)");
        }

        btn.click(function(){
          clearInterval(clock);
        })
      })

      $('.event_btn').click(function(){
        alert("쿠폰이 모두 지급되었습니다. '마이페이지'에서 쿠폰을 확인하시기 바랍니다.")
      })

})(jQuery);