$(document).ready(function() {

	//POPUP-VIDEO
    $(".js-play-btn").fancybox({
        speed : 330,
        transitionEffect: "slide", 
        animationEffect: "zoom-in-out", 
        infobar: false,
        buttons: [
            "close"
        ],
    });

    $('body').on('click','.menu-btn', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.top-nav').toggleClass('active');
        $('body').toggleClass('hidden');
    });


    //REC slider
    if ($( ".recommend-slider" ).length>0) {
        var $slider_rec = $('.recommend-slider');
        $slider_rec.slick({
            dots: true,
            arrows:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
            //autoplay: true,
            // autoplaySpeed: 5000,
            // pauseOnHover:false,
        });

        var slideCount = $slider_rec.slick("getSlick").slideCount;

        if (slideCount<2) {
            $('.slick-dots').hide();
        }
    };


    //sentence-dealer slider
    if ($( ".sentence-dealer__slider" ).length>0) {
        var $slider_sntnc = $('.sentence-dealer__slider');
        $slider_sntnc.slick({
            dots: false,
            arrows:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover:false,
            infinite:true,
            fade:true,
        });

    };



    if ($( ".rest-slider" ).length>0) {
        var $slider_rec = $('.rest-slider');
        $slider_rec.slick({
            dots: true,
            arrows:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
        });

        var slideCount = $slider_rec.slick("getSlick").slideCount;

        if (slideCount<2) {
            $('.slick-dots').hide();
        }
    };




    $('body').on('click','.filter-item', function(e){
        e.preventDefault();
        $('.cases-toggle__item').removeClass('active');
        $(this).addClass('active');
        var filter = $(this).data('filter');
        window.location.hash = filter;
        if (filter == 'all') {
            $('.cases-item').show();
        } else{
            $('.cases-item').hide();
            $('.cases-item[data-category="'+filter+'"]').show();
        }
    });
    if ($('.cases-toggle.m-filter').length>0) {
        if(window.location.hash){
            let filter = window.location.hash.split("#").join('');
            $('.cases-toggle__item').removeClass('active');
            $('.cases-toggle__item[data-filter="'+filter+'"]').addClass('active');

            if (filter == 'all') {
                $('.cases-item').show();
            } else{
                $('.cases-item').hide();
                $('.cases-item[data-category="'+filter+'"]').show();
            }
        }
    }



    if ($('.more__counter').length>0) {
        $('.more__counter').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 1000,
                // easing: 'linear',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }




    $('.scroll-item').on('click', function() {

        var scrollAnchor = $(this).attr('data-scroll'),
            scrollPoint = $('.scroll-section[data-anchor="' + scrollAnchor + '"]').offset().top - 100;

        $('body,html').animate({
            scrollTop: scrollPoint
        }, 500);

        return false;

    })

    $('body').on('click','.section-toggle__link', function(e){
        e.preventDefault();
        var num = $(this).data('num');
        $(".section-toggle__link").removeClass('active');
        $(this).addClass('active');
        $(".services-item").removeClass('active');
        $("#service"+num).addClass('active');
    });


    //NEWS-IN slider
    if ($( ".news-in-media-slider" ).length>0) {
        var $slider_m = $('.news-in-media-slider');
        $slider_m.slick({
            dots: true,
            arrows:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
            fade:true,
            //autoplay: true,
            //autoplaySpeed: 5000,
            //pauseOnHover:false,
        });

        var slideCount = $slider_m.slick("getSlick").slideCount;

        if (slideCount<2) {
            $('.slick-dots').hide();
        }
    };


    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            $('.scroll-section').each(function(i) {
                if ($(this).position().top <= windscroll) {
                    $('.scroll-item.active').removeClass('active');
                    $('.scroll-item').eq(i).addClass('active');
                }
            });
        } else {
            $('.scroll-item.active').removeClass('active');
            $('.scroll-item:first').addClass('active');
        }
    }).scroll();

    if ($('.recommend-slider').length>0) {
        // setHeight();
        $('.recommend-more').each(function (index, value){
            var height = $(this).attr("data-height");
            $(this).css("height", height);
        });
    }

    $('body').on('click','.recommend-show-link', function(e){
        e.preventDefault();
        $(this).parents('.recommend-show-wrap').prev('.recommend-more').addClass('visible');
        $(this).parents('.recommend-show-wrap').hide();
    });



    $("body").on("click", ".top-nav.active .top-nav__item.m-sub .top-nav-toggle", function(e){
		$(this).parents('.top-nav__item').find('.submenu').slideToggle();
        $(this).parents('.top-nav__item').toggleClass('toggled');
	});




    //REC slider
    if ($( ".index-news__slider" ).length>0) {
        var $slider_in = $('.index-news__slider');
        $slider_in.slick({
            dots: false,
            arrows:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover:false,
            infinite:true,
        });
        $slider_in.slick('slickPause');

        $(window).scroll(function() {
            var hT = $slider_in.offset().top,
                hH = $slider_in.outerHeight(),
                wH = $(window).height(),
                wS = $(this).scrollTop();
            if (wS > (hT+hH-wH)){
                // console.log('play')
                $slider_in.slick('slickPlay');
            }
         });
    };

    if($('.index-top-services__item').length>0){
        var interval;
        var slides = $('.index-top-services__item'),
        counter = 0;
        slides.eq(0).addClass('active');
        $('.index-top-services__item').on('mouseenter touchstart', function() {
            clearInterval(interval);
            slides.removeClass('active');  
            $(this).addClass('active');
        });

        $('.index-top-services__item').on('mouseleave touchend', function() {
            counter = ($(this).index());
            
            interval = setInterval(function(){
                slides.removeClass('active');
                slides.eq(counter).addClass('active');
                counter++;
    
                if (counter == slides.length) counter = 0;
            }, 3000);
        });
        interval = setInterval(function(){
            slides.removeClass('active');
            slides.eq(counter).addClass('active');
            counter++;
            if (counter == slides.length) counter = 0;
        }, 3000);
        
        
    }
    //INDEX_TOP_SLIDER
    if ($( ".index-top-slider-wrap" ).length>0) {
        $('.index-top-slider-view').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.index-top-slider'
          });
          $('.index-top-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.index-top-slider-view',
            dots: false,
            arrows:false,
            focusOnSelect: true,
            autoplay: true,
            autoplaySpeed: 2500,
            pauseOnHover:false,
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll:1,
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll:1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll:1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll:1,
                    }
                },
            ]
          });
    };

    //INDUSTRIES-SLIDER
    if ($( ".industries-slider" ).length>0) {
        var $slider_i = $('.industries-slider');

        $slider_i.slick({
            infinite: true,
            dots: false,
            arrows:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
            // variableWidth: true,
            centerMode:true,
            speed: 250,
            autoplay: true,
            autoplaySpeed: 3000,
        });
    };



    //SUCCESS SLIDER
	if ($( ".audit-slider" ).length>0) {
		var $slider_s = $('.audit-slider');

        var updateSliderCounter = function(slick, currentIndex) {
            currentSlide = slick.slickCurrentSlide() + 1;
            slidesCount = slick.slideCount;
            $('.audit-slider-counter__in').text(currentSlide + '/' +slidesCount)
        };
        $slider_s.on('init', function(event, slick) {
            updateSliderCounter(slick);
        });
        $slider_s.on('afterChange', function(event, slick, currentSlide) {
            updateSliderCounter(slick, currentSlide);
        });

        $slider_s.slick({
            infinite: false,
            dots: false,
            arrows:true,
            slidesToShow: 3,
            slidesToScroll: 1,
            adaptiveHeight: false,
            prevArrow: $('.audit-slider-prev__arr'),
            nextArrow: $('.audit-slider-next__arr'),
            // infinite:true,
            responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 2,
            		slidesToScroll: 1,
			      }
			    },
			    {
			      breakpoint: 576,
			      settings: {
			        slidesToShow: 1,
            		slidesToScroll: 1,
			      }
			    },
			]
        });

	};
});

function setHeight() {
    var jqel = $('.recommend-more');
    var height = jqel.attr("data-height");
    jqel.css("height", height);
}



$(function() {
    var $animation_elements = $('.animated_el');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();

        var window_bottom_position = (window_top_position + window_height);
     
        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top - 30;
            var element_bottom_position = ((element_top_position) + element_height);
            if (element_top_position <= window_bottom_position) {
                $element.addClass('is-ready');
            } else {
                $element.removeClass('is-ready');
            }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
});


