$(document).ready(function() {
	flexibility(document.documentElement);
	// $("body").on("click", ".test", function(e){
	// 	e.preventDefault();
	// })
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
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover:false,
        });

        var slideCount = $slider_rec.slick("getSlick").slideCount;

        if (slideCount<2) {
            $('.slick-dots').hide();
        }
    };


    //REC slider
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
        if (filter == 'all') {
            $('.cases-item').show();
        } else{
            $('.cases-item').hide();
            $('.cases-item[data-category="'+filter+'"]').show();
        }
    });



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
});



$(function() {
    var $animation_elements = $('.animated_el');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        console.log(window_height);
        var window_top_position = $window.scrollTop();

        var window_bottom_position = (window_top_position + window_height);
     
        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top - 30;
            var element_bottom_position = ((element_top_position) + element_height);
            console.log(element_top_position)
         
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