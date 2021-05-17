"use strict";

// Генерация оглавления
const generateTOC = () => {
	const regExp = new RegExp(pageName, 'g');
	linksBlock.insertAdjacentHTML('beforeend', tableOfContentM.replace(regExp, ''));
}

// Изменение размера текста
const fontSize = (px) => {
    for (let par of paragraph) {par.style.fontSize = px + 'px';}
	for (let r of ref) {r.style.fontSize = px + 'px';}
	for (let tit of subtitle) {tit.style.fontSize = +px + 1 + 'px';}
	for (let tit of title) {tit.style.fontSize = +px + 2 + 'px';}

	for (let tab of tables) {
		if (px <= 11) {tab.style.fontSize = '12px';}
		else if (px > 11 && px < 17) {tab.style.fontSize = '14px';}
		else {tab.style.fontSize = '16px';}
	}
    localStorage.setItem('fontSizeM', px);
}

// Переключение цветовой схемы
const lightTheme = () => {
    for (let par of paragraph) {
		par.style.background = '#cfcfcf';
		par.style.color = '#303030';
	}
	for (let b of bold) {b.style.color = 'black';}

	for (let tab of tables) {
		tab.style.background = '#cfcfcf';
		tab.style.color = '#303030';
	}
    localStorage.setItem('theme', 'light');
}
const darkTheme = () => {
    for (let par of paragraph) {
		par.style.background = '#303030';
		par.style.color = '#cfcfcf';
	}
	for (let b of bold) {b.style.color = 'white';}

	for (let tab of tables) {
		tab.style.background = '#303030';
		tab.style.color = '#cfcfcf';
	}
    localStorage.setItem('theme', 'dark');
}

// Открытие и закрытие оглавления
const openList = () => {
	storyList.style.top = 0;
	storyList.style.opacity = 1;
}
const closeList = () => {
	storyList.style.top = '-100vh';
	storyList.style.opacity = 0;
}

// Элементы и переменные
const linksBlock = document.querySelector('.story-list-scroll');
const pageName = window.location.pathname.split('/').reverse()[0];
let size, paragraph, ref, title, subtitle, tables, progress, minTables,	storyListOpen,
	storyList, storyListClose, storyLinks, separateLinks, bold, light, dark;

const initElements = () => {
	size = document.querySelector('.size');
	paragraph = document.querySelectorAll('p');
	ref = document.querySelectorAll('.story a');
	title = document.querySelectorAll('h1');
	subtitle = document.querySelectorAll('h2');
	tables = document.querySelectorAll('table');
	progress = document.querySelectorAll('.in-progress');
	minTables = document.querySelectorAll('.minimized');
	storyListOpen = document.querySelector('.story-list-button');
	storyList = document.querySelector('.story-list');
	storyListClose = document.querySelector('.story-list-close');
	storyLinks = document.querySelectorAll('.story-link');
	separateLinks = document.querySelectorAll('.separate-link');
	bold = document.querySelectorAll('strong');
	light = document.querySelector('.light');
	dark = document.querySelector('.dark');
};

// Обработчики событий
document.addEventListener('click', event => {
	for (let p of progress) {
		if (event.target == p) {
			alert('Раздел редактируется и будет дополняться новой информацией.');
		}
	}
	for (let t of minTables) {
		if (event.target == t) {
			t.classList.toggle('minimized-o');
			if (t.classList.contains('minimized-o')) {t.innerHTML = t.innerHTML.replace('▼', '▲');}
			else {t.innerHTML = t.innerHTML.replace('▲', '▼');}
		}
	}
	for (let l of storyLinks) {
		if (event.target == l || event.target.parentNode == l) {
			closeList();
		}
	}
	for (let l of separateLinks) {
		if (event.target == l || event.target.parentNode == l) {
			closeList();
		}
	}
	if (event.target == light) {
		lightTheme();
	} else if (event.target == dark) {
		darkTheme();
	}
});

document.addEventListener('change', event => {
	if (event.target == size) {
		fontSize(size.value);
	}
});

document.addEventListener('scroll', event => {
	if (window.pageYOffset > 700) {
		bar.classList.remove('bar-opened');
	}
});

window.addEventListener('load', () => {
	generateTOC();
	initElements();

	storyListOpen.addEventListener('click', () => {
		openList();
	});

	storyListClose.addEventListener('click', () => {
		closeList();
	});

	size.value = localStorage.getItem('fontSizeM') == null ? 14 : localStorage.getItem('fontSizeM');
	fontSize(localStorage.getItem('fontSizeM') == null ? 14 : localStorage.getItem('fontSizeM'));
	if (localStorage.getItem('theme') == 'dark') {darkTheme()}
});
