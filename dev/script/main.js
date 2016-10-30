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
})

var sw2 = new Swiper('.feedback-2 .container', {
	grabCursor: true,
	nextButton: '.button-next',
	prevButton: '.button-prev',
	spaceBetween: 600
})

var Accordion = function (props) {
	this.buttons = [].slice.call(
		document.querySelectorAll(props.button));

	this.buttons.forEach(function (item, i, arr) {
		item.addEventListener('click', function () {
			item.parentNode.classList.add(
						props.selector.substring(1, props.selector.length) + '-active');

		for (let j in arr)	
			if (arr[j] != item)
				arr[j].parentNode.classList.remove(
					props.selector.substring(1, props.selector.length) + '-active');
		});
	});
	return this;
};

var test1 = new Accordion({
	selector: '.acc-block',
	button: '.acc-header'
});


var Menu = function (props) {
	this.active = false;

	this.menu = document.querySelector(props.menu);
	this.menuButton = document.querySelector(props.button);
	this.menuButton.style.cursor = 'pointer';
	this.menuCloseButton = document.querySelector(props.closeButton);
	this.menuCloseButton.style.cursor = 'pointer';

	this.toggleMenu = function () {
		if (this.active) {
			this.menu.classList.toggle(props.menu + '-active');
			this.menuButton.classList.toggle(props.button + '-active');
			this.active = false;			
		} else {
			this.menu.classList.toggle(props.menu + '-active');
			this.menuButton.classList.toggle(props.button + '-active');
			this.active = true;
		}
	}.bind(this);

	this.menuButton.addEventListener('click', this.toggleMenu);
	this.menuCloseButton.addEventListener('click', this.toggleMenu);

	return this;
};

var test = new Menu({
	menu: '.menu',
	button: '.menu-button',
	closeButton: '.menu-close-button'
});