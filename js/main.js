$("document").ready(function($){

    // use fixed menu when scrolling
    var header = $('.top-header');
    var content = $('.main-content');
    var navHeight = 30;

    $(window).scroll(function () {
        if ($(this).scrollTop() > navHeight) {
            header.addClass("fixed-nav");
            content.addClass("fixed-nav");
        } else {
            header.removeClass("fixed-nav");
            content.removeClass("fixed-nav");
        }
    });
});
