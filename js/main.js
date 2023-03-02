
jQuery(document).ready(function($) {

	var volenter = $("#volenter");
	
			volenter.owlCarousel({
					    loop:true,
					    margin:10,
					    nav:false,
					    dots:true,
					    autoplay:true,
					    autoplayTimeout:3000,
						responsive:{
							0:{
								items:1
							},
							600:{
								items:2
							},
							1000:{
								items:2
							}
						}
					});

	var testimonial = $("#testimonial");
			testimonial.owlCarousel({
					    loop:true,
					    margin:10,
					    nav:true,
					    dots:true,
					    autoplay:true,
					    autoplayTimeout:3000,
					    center:true,
						responsive:{
							0:{
								items:1
							},
							600:{
								items:3
							},
							1000:{
								items:3
							}
						}
					});

	var patner = $("#patnerslider");
			patner.owlCarousel({
					    loop:true,
					    margin:10,
					    nav:true,
					    dots:true,
					    autoplay:true,
					    autoplayTimeout:3000,
						responsive:{
							0:{
								items:1
							},
							600:{
								items:3
							},
							1000:{
								items:4
							}
						}
					   
					});
					
					jQuery(document).ready(function($) {
						$('.counter').counterUp({
							delay: 10,
							time: 1000
						});
					});

		});

		function increase1() {
			// Change the variable to modify the speed of the number increasing from 0 to (ms)
			let SPEED = 40;
			// Retrieve the percentage value
			let limit = parseInt(document.getElementById("progress2").innerHTML, 10);
		
		
			for(let i = 0; i <= limit; i++) {
				setTimeout(function () {
					document.getElementById("progress2").innerHTML = i + "%";
				}, SPEED * i);
			}
		}
		
		increase1();

		function increase2() {
			// Change the variable to modify the speed of the number increasing from 0 to (ms)
			let SPEED = 40;
			// Retrieve the percentage value
			let limit = parseInt(document.getElementById("progress3").innerHTML, 10);
		
		
			for(let i = 0; i <= limit; i++) {
				setTimeout(function () {
					document.getElementById("progress3").innerHTML = i + "%";
				}, SPEED * i);
			}
		}
		increase2();
	





