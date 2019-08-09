
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