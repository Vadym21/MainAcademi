// Фіксація шапки при скролі
/*$(document).ready(function(){
    $('#header-fixed-scroll').removeClass("default");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1){
            $("#header-fixed-scroll").addClass("default");
        } else {
            $("#header-fixed-scroll").removeClass("default");
        }
    });
});*/

//
//
// menu.onclick = function menuFunction(){
//     var x = document.getElementById("myTopmenu");
//
//     if(x.className ==="menu__container__ul"){
//         x.className += "responsive";
//     } else {
//         x.className = "menu__container__ul";
//     }
// };




//
// //  Анімація тексту на головній сторінці
// $(window).scroll(function() {
//     $('.mov').each(function(){
//         var imagePos = $(this).offset().top;
//         var topOfWindow = $(window).scrollTop();
//         if (imagePos < topOfWindow+700) {
//             $(this).addClass('fadeInLeft');
//         }
//     });
// });
//
// $(window).scroll(function() {
//     $('.move').each(function(){
//         var imagePos = $(this).offset().top;
//         var topOfWindow = $(window).scrollTop();
//         if (imagePos < topOfWindow+700) {
//             $(this).addClass('fadeInRight');
//         }
//     });
// });


 //------------------------------- Карусель на головній сторінці-----------------------------------------------

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


//------------------------------- Google Maps-----------------------------------------------
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 49.554290, lng: 25.594258},
        zoom: 15,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ]
    });


    var marker = new google.maps.Marker({
        position: {lat: 49.554290, lng: 25.594258},
        map: map,
        title: "Landscaping",


    });

}


//------------------------------- portfolio-----------------------------------------------
//
// $("#filter button").each(function() {
//     $(this).on("click", function(){
//         var filtertag = $(this).attr('class');
//         $('.post').show();
//         $('.post:not(.' + filtertag + ')').hide();
//     });
// });
// function buttonClick(button) {
//     alert("hello");
//     $( "div" )
//             .css( "background", "#c8ebcc" )
//             .filter( ".middle" )
//             .css( "border-color", "red" );
// }
//
// $('div').on('click','.middle',function(){
//     $( "div" )
//         .css( "background", "#c8ebcc" )
//         .filter( ".middle" )
//         .css( "border-color", "red" );
// });
//
// $(function(){
//     $('button').bind('click', function(){
//         if($(this).hasClass("langs")){
//             $('body').append('<ul><li>Java</li><li>JavaScript</li></ul>');
//         }
//         alert('Обработчик события click');
//     });
// });


// зробити редірект
//пагінацію
