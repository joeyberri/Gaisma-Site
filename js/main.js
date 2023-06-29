jQuery(function ($) {
  "use strict",
    //Countdown js
    $("#countdown").countdown(
      {
        date: "December 24, 2023 16:00:00",
        format: "on",
      },

      function () {
        // callback function
      }
    );

  $("a[href*=#]").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      500
    );
    return false;
  });
  //Scroll Menu

  function menuToggle() {
    var windowWidth = $(window).width();

    if (windowWidth > 767) {
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 405) {
          $(".main-nav").addClass("fixed-menu animated slideInDown");
        } else {
          $(".main-nav").removeClass("fixed-menu animated slideInDown");
        }
      });
    } else {
      $(".main-nav").addClass("fixed-menu animated slideInDown");
    }
  }

  menuToggle();

  // Carousel Auto Slide Off
  $("#event-carousel, #twitter-feed, #sponsor-carousel ").carousel({
    interval: false,
  });

  // Contact form validation
  var form = $(".contact-form");
  form.submit(function () {
    "use strict", ($this = $(this));
    $.post(
      $(this).attr("action"),
      function (data) {
        $this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
      },
      "json"
    );
    return false;
  });

  $(window).resize(function () {
    menuToggle();
  });

  $(".main-nav ul").onePageNav({
    currentClass: "active",
    changeHash: false,
    scrollSpeed: 900,
    scrollOffset: 0,
    scrollThreshold: 0.3,
    filter: ":not(.no-scroll)",
  });
});
