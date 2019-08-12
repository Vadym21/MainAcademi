// Фіксація шапки при скролі
$(document).ready(function(){
    $('#header-fixed-scroll').removeClass("default");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1){
            $("#header-fixed-scroll").addClass("default");
        } else {
            $("#header-fixed-scroll").removeClass("default");
        }
    });
});

//  Анімація тексту на головній сторінці
$(window).scroll(function() {
    $('.mov').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+700) {
            $(this).addClass('fadeInLeft');
        }
    });
});

$(window).scroll(function() {
    $('.move').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+700) {
            $(this).addClass('fadeInRight');
        }
    });
});


 // Карусель на головній сторінці

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
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