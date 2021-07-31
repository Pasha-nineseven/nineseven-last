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

    //SEARCH
    $('body').on('click','.top-search', function(e){
        e.preventDefault();
        $('.top-search-form').addClass('active');
    });
    $('body').on('click','.search-form__close', function(e){
        e.preventDefault();
        $('.top-search-form').removeClass('active');
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
            arrows:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
            // autoplay: true,
            autoplay: false,
            autoplaySpeed: 3000,
            pauseOnHover:false,
            infinite:true,
        });
    };

    if($('.index-top-services__item').length>0){
        var interval;
        var slides = $('.index-top-services__item'),
        counter = 1;
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
            dots: true,
            arrows:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
            speed: 250,
            fade: true,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: false,
            customPaging : function(slider, i) {
                var thumb = $(slider.$slides[i]).find('.slider-nav');
                return thumb;
            },
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



    //TEMPLATE SLIDER
    if ($( ".template-slider" ).length>0) {
        var $slider_t = $('.template-slider');

        $slider_t.slick({
            dots: true,
            arrows:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        // autoplay: false,
                    }
                },
            ]
        });
    };
    //ANALISIS SLIDER
	if ($('.b-analysis__slider').length>0) {
		var $statusTop = $('.b-analysis-pagingInfo .s-current');
		var $statusTotalTop = $('.b-analysis-pagingInfo .s-total');
    	var $sliderTop = $('.b-analysis__slider');
        
    	$sliderTop.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            let i = (currentSlide ? currentSlide : 0) + 1;
            $statusTop.text('0' + i + '/');
            $statusTotalTop.text('0' + slick.slideCount);
        });
	    $sliderTop.slick({
	        infinite: true,
	        slidesToShow: 4,
            slidesToScroll: 1,
	        lazyLoad: 'progressive',
	        arrows:true,
	        useTransform:true,
	        equalizeHeight: false,
	        speed: 500,
	        pauseOnHover:false,
	        prevArrow: $(".js-top-prev"),
      		nextArrow: $(".js-top-next"),
              responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 650,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
	    });
	}

    $('body').on('click','.benefits-pager__link', function(e){
        e.preventDefault();
        var aid = $(this).attr("href");
        $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
    });
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


