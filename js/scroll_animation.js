$(window).on("scroll", function() {
      if($(window).scrollTop()) {
            $('header').addClass('h_color_scroll');
      }

      else {
            $('header').removeClass('h_color_scroll');
      }
})