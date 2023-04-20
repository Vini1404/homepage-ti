(function($) {
    "use strict";

    $(document).ready( function() {

        new WOW().init();        

        if($('.hero-1 .hero-slider-active').length > 0) {
            $('.hero-1 .hero-slider-active').slick({
                autoplay: true,
                speed: 1000,
                lazyLoad: 'progressive',
                arrows: true,
                dots: true,
                dotsClass: 'slide-dots',
                prevArrow: '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
                nextArrow: '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
            }).slickAnimation();
        }

        if($('.hero-2 .hero-slider-active').length > 0) {
            $('.hero-2 .hero-slider-active').slick({
                autoplay: true,
                speed: 2500,
                lazyLoad: 'progressive',
                arrows: false,
                dots: true,
                dotsClass: 'slide-right-dots',
            }).slickAnimation();
        }

        
        if($('.customer-feedback-carousel-active').length > 0) {
            $('.customer-feedback-carousel-active').slick({
                autoplay: true,
                speed: 2500,
                lazyLoad: 'progressive',
                arrows: false,
                dots: false,
            });
        }

        if($('.project-showcase-carousel-active').length > 0) {
            $('.project-showcase-carousel-active').slick({
                infinite: false,
                slidesToShow: 3, 
                slidesToScroll: 2, 
                arrows: true,
                speed: 800,
                prevArrow: $('.project-carousel-nav-prev'),
                nextArrow: $('.project-carousel-nav-next'),
                responsive: [
                    {
                      breakpoint: 1600,
                      settings: {
                        slidesToShow: 3
                      }
                    },
                    {
                      breakpoint: 1191,
                      settings: {
                        slidesToShow: 2
                      }
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 1,
                        center: true,
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1
                      }
                    }
                ],

            });
        }

        if($('.testimonial-carousel-grid-active').length > 0) {
            $('.testimonial-carousel-grid-active').slick({
                infinite: true,
                slidesToShow: 2, 
                slidesToScroll: 2, 
                arrows: false,
                dots: true,
                dotsClass: 'circle-dots',
                speed: 800,
                responsive: [
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 1,
                        center: true,
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1
                      }
                    }
                ],
            });
        }

        if($('.brand-carousel-active').length > 0) {
            $('.brand-carousel-active').slick({
                slidesToShow: 5, 
                slidesToScroll: 3, 
                speed: 800,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 1300,
                        settings: {
                          slidesToShow: 4
                        }
                    },
                    {
                      breakpoint: 1191,
                      settings: {
                        slidesToShow: 3
                      }
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 2,
                        center: true,
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        center: true,
                      }
                    }
                ],

            });
        }

        if($('.hero-slider-2').length > 0) {
            $('.hero-slider-2').slick({
                autoplay: true,
                arrows: true,
                speed: 1500,
                lazyLoad: 'progressive',
                prevArrow: '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
                nextArrow: '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
            }).slickAnimation();
        }

        $('.slick-nav').on('click touch', function(e) {
        
            e.preventDefault();
        
            var arrow = $(this);
        
            if(!arrow.hasClass('animate')) {
                arrow.addClass('animate');
                setTimeout(() => {
                    arrow.removeClass('animate');
                }, 1600);
            }
        
        });

        /* =============================================
            # Magnific popup init
         ===============================================*/
        $(".popup-link").magnificPopup({
            type: 'image',
            fixedContentPos: false
        });

        $(".popup-gallery").magnificPopup({
            type: 'image',
            fixedContentPos: false,
            gallery: {
                enabled: true
            },
            // other options
        });

        $(".popup-video, .popup-vimeo, .popup-gmaps").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });        

        /*==========================
           Scroll To Up Init
        ============================*/
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '1110', // Distance from top before showing element (px)
            topSpeed: 5000, // Speed back to top (ms)
            animation: 'slide', // Fade, slide, none
            animationInSpeed: 1000, // Animation in speed (ms)
            animationOutSpeed: 1000, // Animation out speed (ms)
            scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });

        //# Smooth Scroll
        $('#onepagemenu a').on('click', function(event) {
            var $anchor = $(this);
            var headerH = '85';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });

        // Sticky Menu
        $(window).scroll(function() {
            var Width = $(document).width();

            if ($("body").scrollTop() > 100 || $("html").scrollTop() > 100) {
                if (Width > 767) {
                    $("header").addClass("sticky");
                }
            } else {
                $("header").removeClass("sticky");
            }
        });

        $('.container').imagesLoaded(function() {
            $('.case-cat-filter').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });

            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
            });
        });

        var catButton = '.case-cat-filter button';

        $(catButton).on('click', function(){
            $(catButton).removeClass('active');
            $(this).addClass('active');
        });

        $('#hamburger').on('click', function() {            
            $('.mobile-nav').addClass('show');
            $('.overlay').addClass('active');
        });

        $('.close-nav').on('click', function() {            
            $('.mobile-nav').removeClass('show');            
            $('.overlay').removeClass('active');          
        });

        $(".overlay").on("click", function () {
            $(".mobile-nav").removeClass("show");
            $('.overlay').removeClass('active');
        });

        $("#mobile-menu").metisMenu();

        $('.search-btn').on('click', function() {            
            $('.search-box').toggleClass('show');
        });

        if($('.request-quote-form').length > 0) {
            NiceSelect.bind(document.getElementById("transfreight"),);
            NiceSelect.bind(document.getElementById("incoterms"),);
        }

        $('.side-toggle-menu, .offcanvas-btn').on('click', function() {            
            $('.offset-menu').addClass('show');
        });

        $('#offset-menu-close-btn').on('click', function() {            
            $('.offset-menu').removeClass('show');
        });


    }); // end document ready function

    function loader() {
        $(window).on('load', function() {
            // Animate loader off screen
            $(".preloader").addClass('loaded');                    
            $(".preloader").delay(600).fadeOut();                       
        });
    }
    loader();

})(jQuery); // End jQuery