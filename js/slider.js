
//Document ready function
$(document).ready(function () {

	$('.bannerSlider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		dots: false,
		autoplaySpeed: 5000,
		speed: 600,
		cssEase: 'linear',
		pauseOnFocus: false,
		pauseOnHover: false,
		rows: 1,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1
			}
		}, {
			breakpoint: 992,
			settings: {
				slidesToShow: 1
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}, {
			breakpoint: 600,
			settings: {
				slidesToShow: 1
			}
		}, {
			breakpoint: 460,
			settings: {
				slidesToShow: 1
			}
		}

		]

	});

	$('.vcSlider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
		dots: false,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		}, {
			breakpoint: 600,
			settings: {
				slidesToShow: 1
			}
		}, {
			breakpoint: 460,
			settings: {
				slidesToShow: 1
			}
		}

		]

	});

    $('.additionalSlider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
		dots: false,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 3
			}
		}, {
			breakpoint: 600,
			settings: {
				slidesToShow: 2
			}
		}, {
			breakpoint: 460,
			settings: {
				slidesToShow: 2
			}
		}

		]

	});

	
	//End Document ready function
});

