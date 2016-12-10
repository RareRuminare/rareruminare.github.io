$("document").ready(function($) {

  // use fixed menu when scrolling
  var header = $('.top-header');
  var content = $('.main-content');
  var navHeight = 30;

  $(window).scroll(function() {
    if ($(this).scrollTop() > navHeight) {
      header.addClass("fixed-nav");
      content.addClass("fixed-nav");
    } else {
      header.removeClass("fixed-nav");
      content.removeClass("fixed-nav");
    }
  });

  var slideshowTimeout = 5000;

  var home = $(".home")

  if(home) {
    window.setTimeout(function() {
      home.addClass("slides");
    }, slideshowTimeout)

    $(".rslides").responsiveSlides({
      auto: true, // Boolean: Animate automatically, true or false
      speed: 1000, // Integer: Speed of the transition, in milliseconds
      timeout: slideshowTimeout, // Integer: Time between slide transitions, in milliseconds
      pager: false, // Boolean: Show pager, true or false
      nav: false, // Boolean: Show navigation, true or false
      random: false, // Boolean: Randomize the order of the slides, true or false
      pause: false, // Boolean: Pause on hover, true or false
      pauseControls: false, // Boolean: Pause when hovering controls, true or false
      prevText: "Previous", // String: Text for the "previous" button
      nextText: "Next", // String: Text for the "next" button
      maxwidth: "", // Integer: Max-width of the slideshow, in pixels
      navContainer: "", // Selector: Where controls should be appended to, default is after the 'ul'
      manualControls: "", // Selector: Declare custom pager navigation
      namespace: "rslides", // String: Change the default namespace used
      before: function() {}, // Function: Before callback
      after: function() {} // Function: After callback
    });

  }
});
