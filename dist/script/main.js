'use strict';

smoothScroll.init();

var teamSw = new Swiper('.team .teamblock-container', {
	allowSwipeToPrev: false,
	allowSwipeToNext: false,
	slidesPerView: 3,
	spaceBetween: '3%',
	breakpoints: {
		767: {
			nextButton: '.button-next',
			prevButton: '.button-prev',
			slidesPerView: 2,
			spaceBetween: '10%',
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
			nextButton: '.button-next',
			prevButton: '.button-prev',
			slidesPerView: 2,
			spaceBetween: '10%',
			allowSwipeToPrev: true,
			allowSwipeToNext: true
		},
		767: {
			slidesPerView: 1,
			spaceBetween: '33%',
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

var Accordion = function Accordion(props) {
	this.buttons = [].slice.call(document.querySelectorAll(props.button));

	this.buttons.forEach(function (item, i, arr) {
		item.addEventListener('click', function () {
			item.parentNode.classList.add(props.selector.substring(1, props.selector.length) + '-active');

			for (var j in arr) {
				if (arr[j] != item) arr[j].parentNode.classList.remove(props.selector.substring(1, props.selector.length) + '-active');
			}
		});
	});
	return this;
};

var acc = new Accordion({
	selector: '.acc-block',
	button: '.acc-header'
});

var Menu = function Menu(props) {
	this.active = false;

	this.menu = document.querySelector(props.menu);
	this.menuButton = document.querySelector(props.button);
	this.menuButton.style.cursor = 'pointer';
	this.menuCloseButton = document.querySelector(props.closeButton);
	this.menuCloseButton.style.cursor = 'pointer';

	var toggleMenu = function () {
		if (this.active) {
			this.menu.classList.toggle(props.menu.substring(1, props.menu.length) + '-active');

			this.menuButton.classList.toggle(props.button.substring(1, props.button.length) + '-active');

			this.active = false;
		} else {

			this.menu.classList.toggle(props.menu.substring(1, props.menu.length) + '-active');

			this.menuButton.classList.toggle(props.button.substring(1, props.button.length) + '-active');

			this.active = true;
		}
	}.bind(this);

	this.menuButton.addEventListener('click', toggleMenu);
	this.menuCloseButton.addEventListener('click', toggleMenu);

	[].slice.call(this.menu.querySelectorAll('a')).forEach(function (item, i, arr) {
		item.addEventListener('click', toggleMenu);
	});

	return this;
};

var mobMenu = new Menu({
	menu: '.menu',
	button: '.menu-button',
	closeButton: '.menu-close-button'
});

var header = document.querySelector('header');

window.addEventListener('scroll', function () {
	if (window.pageYOffset > 60) header.classList.add('fixed');else header.classList.remove('fixed');
});