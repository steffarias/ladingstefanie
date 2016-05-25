$(document).foundation();
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:false,
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
    });
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-100
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
    $('#inicio').on('click',function () {
        $("html, body").animate({
            scrollTop: 0
        }, 900);
        return false;
    });

    
});

