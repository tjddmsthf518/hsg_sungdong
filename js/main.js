$(document).ready(function () {

  // $(".top_btn").click(function(){
  //   $('body, html').scrollTop({
  //     top: 0
  //   });
  // });

  $(".top_btn").click(function(){
    $("body, html").stop().animate({
      scrollTop: 0
    });
  });

  $(".menu_bar").click(function(){
    $(".sub_menu_wrap").stop().animate({
      right: 0
    });

    $("body").css({
      overflowY: "hidden"
    });
  });

  $(".close_btn").click(function(){
    $(".sub_menu_wrap").stop().animate({
      right: "-100%"
    });

    $("body").css({
      overflowY: "unset"
    });
  });
  
  // $(window).scroll(function(){
  //   var pageY = $(window).scrollTop();
  // });

  var swiper = new Swiper(".con_wrap_4", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
    slidesPerView: 1.35,
    grabCursor: true,
    spaceBetween: 16,
  });
});
