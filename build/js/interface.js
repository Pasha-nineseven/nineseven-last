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




    $('body').on('click','.cases-toggle__item', function(e){
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
});




$(window).resize(function () {

});

// $(window).load(function(){

// });

// functions


