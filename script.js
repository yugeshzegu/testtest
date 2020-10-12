$(document).ready( function () {
	    var swiper = new Swiper('.swiper-container.swiper1', {
			loop:true,
			observer: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},		
		});
		var swiper = new Swiper('.swiper-container.swiper2', {
			slidesPerView: 4,
			spaceBetween: 30,
			breakpoints: {
			1024: {
				slidesPerView: 4,
				simulateTouch: true,
				
			},
			768: {
				slidesPerView: 2,
				simulateTouch: true
			},
			640: {
				slidesPerView: 1.3,
				spaceBetween: 5,
			},
			320: {
				slidesPerView: 1.3,
				spaceBetween: 5,
			}
			}
		});
		var swiper = new Swiper('.swiper-container.swiper3', {
			slidesPerView: 1.05,
			loop:true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
		var swiper = new Swiper('.swiper-container.swiper4', {
			slidesPerView: 5,
			spaceBetween: 30,
			loop:true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
			1024: {
				slidesPerView: 4,
				simulateTouch: true,
				
			},
			768: {
				slidesPerView: 2,
				simulateTouch: true
			},
			640: {
				slidesPerView: 1.3,
				spaceBetween: 5,
			},
			320: {
				slidesPerView: 1.3,
				spaceBetween: 5,
			}
			}
		});
		$('.clse').hide();
		$('.clck').click (function () {
			$(this).toggleClass('showmenu');
			if($(this).hasClass('showmenu')){
				$('.mob_menu').hide();
				$('.search, .menu, .clse').slideDown();
			}else {
				$('.search, .menu, .clse').slideUp();	
				setTimeout(function () {
					$('.mob_menu').show();
				},500)
			}
		})
});