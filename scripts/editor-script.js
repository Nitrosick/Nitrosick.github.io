"use strict";

// Изменение размера текста
const setFontSize = (px) => {
    for (let par of paragraph) {par.style.fontSize = px + 'px';}
	for (let nav of navLinks) {nav.style.fontSize = px + 'px';}
	for (let tit of titleH2) {tit.style.fontSize = (+px + 2) + 'px';}
    fontImg.textContent = px + 'px';
    localStorage.setItem('fontSize', px);
	document.querySelectorAll('.icon-in-text').forEach(el => {
		el.style.height = +px + 3 + 'px';
	});
	setTOC();
}

// Переключение цветовой схемы
const themeColor = (elem, textColor, bgColor) => {
	elem.style.color = textColor;
	elem.style.background = bgColor;
}

const themeChange = (dark) => {
    if (dark) {
		for (let par of paragraph) {themeColor(par, '#cfcfcf', '#303030');}
		for (let nav of navLinks) {themeColor(nav, '#cfcfcf', 'transparent');}
		for (let t of titleH2) {themeColor(t, '#cfcfcf', '#0d0d0d');}
		for (let s of splitters) {themeColor(s, 'transparent', '#cfcfcf');}
		for (let b of bold) {b.style.color = 'white';}
		document.querySelector('.navigation span').style.color = 'white';
        localStorage.setItem('theme', 'dark');
	} else {
		for (let par of paragraph) {themeColor(par, '#303030', '#cfcfcf');}
		for (let nav of navLinks) {themeColor(nav, '#303030', 'transparent');}
		for (let t of titleH2) {themeColor(t, '#cfcfcf', '#303030');}
		for (let s of splitters) {themeColor(s, 'transparent', '#303030');}
		for (let b of bold) {b.style.color = 'black';}
		document.querySelector('.navigation span').style.color = '#303030';
        localStorage.setItem('theme', 'light');
	}
}

// Формирование оглавления
const setTOC = () => {
	document.querySelector('.navigation').style.height = paragraph[0].offsetHeight - 20 + 'px';
};

// Генерация отступов и выделения
const changeSymbols = () => {
	paragraph.forEach(el => {
		el.innerHTML = el.innerHTML.replaceAll('[t]', '<mark class="tab"></mark>').replaceAll('[s]', '<strong>').replaceAll('[/s]', '</strong>').replaceAll('[m]', '<mark>').replaceAll('[/m]', '</mark>');
	});
};

// Элементы и переменные
const paragraph = document.querySelectorAll('p');
let titleH2, size, bold, fontImg, theme, navLinks, splitters;

const initElements = () => {
	titleH2 = document.querySelectorAll('h2');
	size = document.querySelector('.size');
	bold = document.querySelectorAll('strong');
	fontImg = document.querySelector('.fontImg');
	theme = document.getElementById('payt1');
	navLinks = document.querySelectorAll('.navigation-link');
	splitters = document.querySelectorAll('.p-splitter');
};

// Обработчики событий
document.addEventListener('change', event => {
	if (size == event.target) {
		setFontSize(size.value);
	}
	if (theme == event.target) {
		if (theme.checked) themeChange(true);
		else themeChange(false);
	}
});

window.addEventListener('resize', () => {
	setTOC();
	backCorrect();
});

window.addEventListener('load', () => {
	changeSymbols();
	initElements();
	backCorrect();
	size.value = localStorage.getItem('fontSize') == null ? 16 : localStorage.getItem('fontSize');
	setFontSize(localStorage.getItem('fontSize') == null ? 16 : localStorage.getItem('fontSize'));
	if (localStorage.getItem('theme') == 'dark') {
		theme.checked = true;
		themeChange(true);
	}
	if (localStorage.getItem('sublinks') == 0) {
		showingSublinks(false);
	}
	setTOC();
});
