"use strict";

// Настройка отступа слева
const poster = document.querySelector('.main-poster');
const mechanics = document.querySelector('.mechanics-link');

const setPadding = (elem1, elem2) => {
	const width = document.documentElement.clientWidth;
	if (width > 1560) {
		elem1.style.paddingLeft = (width - 1500) / 2 + 'px';
		elem2.style.paddingRight = (width - 1500) / 2 + 'px';
	} else {
		elem1.style.paddingLeft = '30px';
		elem2.style.paddingRight = '30px';
	}
};

setPadding(poster, mechanics);
window.addEventListener('resize', () => {
	setPadding(poster, mechanics);
});

// Появление тайлов на постере
const tiles = document.querySelectorAll('.poster-tile');

const getRandomNums = (count) => {
	let nums = [];
	while (nums.length < count) {
		let num = parseInt(Math.random() * count);
		if (!nums.includes(num)) nums.push(num);
	}
	return nums;
};

const unSepia = (arr) => {
	arr.forEach(el => {
		el.classList.remove('sepia');
	});
};

const showTile = (tileNum) => {
	tiles[tileNum].classList.remove('opacity');
};

const startTimer = (loops, delay, array) => {
	const arr = getRandomNums(loops);
	let counter = 0;
	const timer = setInterval(() => {
		showTile(arr[counter]);
		counter++;
	}, delay);
	setTimeout(() => {
		clearInterval(timer);
		unSepia(array);
	}, delay * loops + 190);
};

window.addEventListener('load', () => {
	startTimer(12, 200, tiles);
});
