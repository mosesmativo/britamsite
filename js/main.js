$(document).ready(function () {
    'use strict';
    /*-----------------------------------------------------------------------------------*/
    $(function () {
        setTimeout(function () {
            if (location.hash) {
                window.scrollTo(0, 0);
                var target = location.hash.split('#');
                smoothScrollTo($('#' + target[1]));
            }
        }, 1);
        $('a.scroll[href*="#"]:not([href="#"])').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                smoothScrollTo($(this.hash));
                return false;
            }
        });
        function smoothScrollTo(target) {
            var target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1500, 'easeInOutExpo');
            }
        }
    });
});


if ($.fn.classyNav) {
    $('#roamingnav').classyNav();
}

// nav scroll   
var myoffset = $('#dtr-header-global').height();
$('.navbar a[href^="#"]').click(function () {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - myoffset
    }, "slow", "easeInSine");
});

//stickyatTop
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 340) {
        $(".scrollheader").addClass("is-sticky");
        $('.scrollheader').css('position', 'fixed');
    } else {
        $(".scrollheader").removeClass("is-sticky");
        $(".scrollheader").css('position', 'relative');
    }
});

$('.five-cards').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: false,
    margin: 10,
    mouseDrag: false,
    smartSpeed: 800,
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 2,
            nav: false,
            dots: true,
            mouseDrag: true,
        },
        576: {
            items: 2,
            nav: false,
            dots: true,
            mouseDrag: true,
        },
        768: {
            items: 3,
            nav: false,
            dots: true,
            mouseDrag: true,
        },
        992: {
            items: 4,
            nav: true,
            dots: true,
        },
        1200: {
            items: 5,
            nav: true,
            dots: true,
        }
    }
});

$('.news-and-stories').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: false,
    margin: 20,
    mouseDrag: false,
    smartSpeed: 800,
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 2,
            nav: false,
            dots: true,
            mouseDrag: true,
        },
        576: {
            items: 2,
            nav: false,
            dots: true,
            mouseDrag: true,
        },
        768: {
            items: 2,
            nav: false,
            dots: true,
        },
        992: {
            items: 3,
            nav: false,
            dots: true,
        },
        1200: {
            items: 3,
            nav: false,
            dots: false,
        }
    }
});

$('.history-slider').owlCarousel({
    loop: false,
    mouseDrag: false,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: false,
    margin: 30,
    smartSpeed: 800,
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1,
            nav: false,
            mouseDrag: true,
            dots: true,
        },
        576: {
            items: 2,
            nav: false,
            dots: true,
        },
        768: {
            items: 2,
            nav: false,
            dots: true,
        },
        992: {
            items: 3,
            nav: false,
            dots: true,
        },
        1200: {
            items: 3,
            nav: false,
            dots: true,
        }
    }
});
$('.our-stories').owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: false,
    margin: 20,
    mouseDrag: false,
    smartSpeed: 800,
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true,
        },
        576: {
            items: 2,
            nav: false,
            dots: true,
        },
        768: {
            items: 2,
            nav: false,
            dots: true,
        },
        992: {
            items: 3,
            nav: false,
            dots: true,
        },
        1200: {
            items: 3,
            nav: false,
            dots: true,
        }
    }
});

$('.full-banner').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 5,
    mouseDrag: false,
    smartSpeed: 800,
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1,
        }
    }
});

$('.one-card').owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: false,
    margin: 5,
    smartSpeed: 900,
    responsive: {
        0: {
            items: 1,
        }
    }
});

$('.main-banner-full').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: false,
    margin: 5,
    mouseDrag: false,
    smartSpeed: 900,
    animateOut: 'fadeOut',
    navText: ["<i class='fas fa-long-arrow-left'></i>", "<i class='fas fa-long-arrow-right'></i>"],
    responsive: {
        0: {
            items: 1,
        }
    }
});

//LightBox / Fancybox
$('.lightbox-image').fancybox({
    openEffect: 'fade',
    closeEffect: 'fade',
    helpers: {
        media: {}
    }
});
