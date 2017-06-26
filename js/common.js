$(document).ready(function () {
    $(".section_preview_carousel").owlCarousel({
        items:1,
        loop:true,
        margin:20,
        dotsSpeed:500,
        responsive:{
            0:{
                autoplay:true,
                autoplayTimeout:2000
            },
            767:{
                autoplay:false
            }
        }
    });
    $(".drop_down_button").click(function () {
       $(".header_drop_down_menu").slideToggle();
    });
    $(".drop_down_button").click(function (e) {
        e.stopPropagation();
    });
    $(".header_drop_down_menu").click(function (e) {
        e.stopPropagation();
    });
    $("body").click(function () {
       $(".header_drop_down_menu").slideUp();
    });
});