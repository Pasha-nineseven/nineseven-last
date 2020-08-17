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
});




$(window).resize(function () {

});

// $(window).load(function(){

// });

// functions


