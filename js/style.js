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

$('#bigowl').owlCarousel({
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

var owl = $('#slider');
owl.owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },            
        960:{
            items:5
        },
        1200:{
            items:7
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});