'use strict';

var elMenu = function elMenu(selector, buttonSelector, props) {
	this.selector = selector;
	this.btnSelector = buttonSelector;
	this.props = props;
	this.active = false;

	this.menu = document.querySelector(this.selector);
	this.menuButton = document.querySelector(this.btnSelector);

	this.toggleMenu = function () {
		if (this.active) {
			this.menu.style.display = 'none';
			this.active = false;
		} else {
			this.menu.style.display = 'block';
			this.active = true;
		}
	};

	this.toggleMenuButton = function () {
		if (this.active) {
			this.menuButton.style.display = 'none';
			this.active = false;
		} else {
			this.menuButton.style.display = 'block';
			this.active = true;
		}
	};

	this.menuButton.addEventListener('click', this.toggleMenu);

	return this;
};