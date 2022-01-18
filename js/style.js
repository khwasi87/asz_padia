$(document).ready(function() {
    $('.toggle').click(function() {
        $('nav').toggleClass('active')
    })
})
$(document).ready(function() {
    $('.search').click(function() {
        $('.search2').toggleClass('expand')
    })
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: [
        '<i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>'
    ],
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})