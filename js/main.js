$(".top_img_fade").imagesLoaded( { background: true }, function() {

    setTimeout(function(){
        $("#loading").fadeOut(3000);
	}, 500);

	setTimeout(function(){
		$(".top_img_fade").fadeOut(2000);
	}, 5000);

	$(".hamburger_btn_sp").click(function(){
		console.log("push");
		const hamburgerNaviMenu = $(".header_menu_sp");
		if (hamburgerNaviMenu.is(":visible")) {
			hamburgerNaviMenu.slideUp();
		} else {
			hamburgerNaviMenu.slideDown();
		}
	});

	$('#slider_area').slick({
		centerMode: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [
			{
			  	breakpoint: 768, //767px以下
					settings: {
					slidesToShow: 1,
				},
			},
		],
	});

});