'use strict';

smoothScroll.init();

var teamSw = new Swiper('.team .teamblock-container', {
	allowSwipeToPrev: false,
	allowSwipeToNext: false,
	slidesPerView: 3,
	spaceBetween: '3%',
	breakpoints: {
		767: {
			slidesPerView: 2,
			allowSwipeToPrev: true,
			allowSwipeToNext: true
		},
		549: {
			slidesPerView: 1,
			spaceBetween: '20%',
			allowSwipeToPrev: true,
			allowSwipeToNext: true
		}
	}
});

var blogSw = new Swiper('.blog .blog-container', {
	allowSwipeToPrev: false,
	allowSwipeToNext: false,
	slidesPerView: 3,
	spaceBetween: '3%',
	breakpoints: {
		1023: {
			slidesPerView: 2,
			allowSwipeToPrev: true,
			allowSwipeToNext: true
		},
		767: {
			slidesPerView: 1,
			spaceBetween: '20%',
			allowSwipeToPrev: true,
			allowSwipeToNext: true
		}
	}
});

var sw1 = new Swiper('.feedback .container', {
	grabCursor: true,
	nextButton: '.button-next',
	prevButton: '.button-prev',
	spaceBetween: 600
});

var sw2 = new Swiper('.feedback-2 .container', {
	grabCursor: true,
	nextButton: '.button-next',
	prevButton: '.button-prev',
	spaceBetween: 600
});