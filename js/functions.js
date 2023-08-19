/*global jQuery */
/* Contents
// ------------------------------------------------>
	1.  LOADING SCREEN
	2.  MOBILE MENU
	3.	SLICK SLIDER
	4.  OWL CAROUSEL
	5.  MODULE SEARCH
	6.  AOS ANIMATION
	7.  SCROLL TO       
	8.  NAVBAR SCROLLING SECTION
	9.  ITEM ACTION MOBILE

*/
(function($) {
    "use strict";

    /* ------------------  LOADING SCREEN ------------------ */

    $(window).on("load", function() {
        setTimeout(function() {
            $(".preloader").removeClass('is-active');
        }, 300);
    });

    /* ------------------   MOBILE MENU ------------------ */
    
    $('.toggle-menu').click(function() {
        $(this).toggleClass('active');
        $('nav').toggleClass('active');
    });
    $('html').click(function() {
        if ($('nav').hasClass('active')) {
            $('.toggle-menu').click()
        }
    });
    $(".toggle-menu , nav").click(function(e) {
        "use strict";
        e.stopPropagation();
    });

    /* ------------------  SLICK SLIDER  ------------------ */

    $(document).ready(function() {
        if ($('.slider').length > 0) {
            $('.slider').slick({
                centerMode: true,
                centerPadding: '12%',
                slidesToShow: 1,
                arrows: true,
                infinite: true,
                rows: 0,
                speed: 500,
                prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="42" viewBox="0 0 21 42"><path id="Left_Arrow" data-name="Left Arrow" class="cls-1" d="M238.986,839.558l-0.9.43-18.564-20.861,0.9-.43Zm-0.513-41.13-0.9-.428-18.563,20.754,0.9,0.427Zm1.513,41.13-0.9.43-18.563-20.861,0.9-.43Zm-0.513-41.13-0.9-.428-18.563,20.754,0.9,0.427Z" transform="translate(-219 -798)"/></svg></button>',
                nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="42" viewBox="0 0 21 42"><path id="Right_Arrow" data-name="Right Arrow" class="cls-1" d="M1365.01,839.558l0.9,0.43,18.56-20.861-0.89-.43Zm0.52-41.13,0.89-.428,18.57,20.754-0.9.427Zm-1.52,41.13,0.9,0.43,18.56-20.861-0.89-.43Zm0.52-41.13,0.89-.428,18.57,20.754-0.9.427Z" transform="translate(-1364 -798)"/></svg></button>',
                responsive: [{
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '20px',
                            slidesToShow: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '20px',
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }
    });

    /* ------------------  MODULE SEARCH  ------------------ */

    var $moduleSearch = $("#moduleSearch"),
        $moduleSearchWarp = $(".module-search-warp"),
        $moduleCancel = $(".module-search-warp .module-cancel"),
        $siteNav = $("#site-navigation"),
        $toggleMenu = $(".toggle-menu ");

    $moduleSearch.on("click", function() {
        $(this).addClass("module-active");
        $moduleSearchWarp.addClass("search-active");
        $siteNav.removeClass("active");
        $toggleMenu.removeClass("active");
    });

    // If Click on [ Search-cancel ] Link
    $moduleCancel.on("click", function(e) {
        e.stopPropagation();
        e.preventDefault();
        $moduleSearch.removeClass("module-active");
        $moduleSearchWarp.removeClass("search-active");
    });

    //Close Modules On Pressing Esc
    $(document).keyup(function(e) {
        // ESCAPE key pressed
        if (e.keyCode == 27) {
            if ($moduleSearch.hasClass('module-active')) {
                $moduleSearch.removeClass("module-active");
                $moduleSearchWarp.removeClass("search-active");
            }
        }
    });

    /* ------------------  AOS ANIMATION  ------------------ */

    $(document).ready(function() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                // Global settings:
                disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
                startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
                initClassName: 'aos-init', // class applied after initialization
                animatedClassName: 'aos-animate', // class applied on animation
                useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
                disableMutationObserver: false, // disables automatic mutations' detections (advanced)
                debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
                throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

                // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
                offset: 120, // offset (in px) from the original trigger point
                delay: 0, // values from 0 to 3000, with step 50ms
                duration: 400, // values from 0 to 3000, with step 50ms
                easing: 'ease', // default easing for AOS animations
                once: false, // whether animation should happen only once - while scrolling down
                mirror: false, // whether elements should animate out while scrolling past them
                anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

            });
        }
    });

    /* ------------------  SCROLL TO ------------------ */

    var aScroll = $('a[data-scroll="scrollTo"]');
    aScroll.on('click', function(event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 100);
        }
    });

    /* ------------------ NAVBAR SCROLLING SECTION ------------------ */

    var $section = $('.horoof-themes'),
        $bodyScroll = $('body.home');
    if ($bodyScroll.length > 0) {
        $(window).on("scroll", function() {
            $section.each(function() {
                var sectionTop = $(this).offset().top - 300,
                    sectionHight = $(this).outerHeight(),
                    wScroll = $(window).scrollTop();
                if (wScroll > sectionTop - 1) {
                    $bodyScroll.removeClass('bg-animation');
                } else {
                    $bodyScroll.addClass('bg-animation');
                }
            });
        });
    }

    /* ------------------  ITEM ACTION MOBILE ------------------ */

    var mobileAction = $('.item-action-mobile');

    if (mobileAction.length) {
        var scrollTrigger = 500, // px
            ActionToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    mobileAction.addClass('show');
                } else {
                    mobileAction.removeClass('show');
                }
            };
        ActionToTop();
        $(window).on('scroll', function() {
            ActionToTop();
        });
        mobileAction.on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 100);
        });
    }

    /* ------------------  Plugin Carousel ------------------ */
    $(document).ready(function() {
        if ($('.plugin-carousel').length > 0) {
            $('.plugin-carousel').slick({
                dots: false,
                arrows: false,
                infinite: true,
                speed: 300,
                slidesToShow: 5,
                slidesToScroll: 5,
                responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4,
                            infinite: true,
                            dots: false
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }
    });

    $('#menu-item-30 a').on('click', function(e){ 
        e.preventDefault(); 
        var url = $(this).attr('href'); 
        window.open(url, '_blank');
    });

})(jQuery);