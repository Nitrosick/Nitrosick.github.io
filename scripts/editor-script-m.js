"use strict";

// Изменение размера текста
const fontSize = (px) => {
    for (let par of paragraph) {par.style.fontSize = px + 'px';}
	for (let r of ref) {r.style.fontSize = px + 'px';}
	for (let tit of subtitle) {tit.style.fontSize = +px + 1 + 'px';}
	for (let tit of title) {tit.style.fontSize = +px + 2 + 'px';}

	document.querySelectorAll('.icon-in-text').forEach(el => {
		el.style.height = +px + 3 + 'px';
	});

    localStorage.setItem('fontSizeM', px);
}

// Переключение цветовой схемы
const lightTheme = () => {
    for (let par of paragraph) {
		par.style.background = '#cfcfcf';
		par.style.color = '#303030';
	}
	for (let b of bold) {b.style.color = 'black';}

    localStorage.setItem('theme', 'light');
}
const darkTheme = () => {
    for (let par of paragraph) {
		par.style.background = '#303030';
		par.style.color = '#cfcfcf';
	}
	for (let b of bold) {b.style.color = 'white';}

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

// Генерация отступов и выделения
const changeSymbols = () => {
	paragraph.forEach(el => {
		el.innerHTML = el.innerHTML.replace(/\[t\]/g, '<mark class="tab"></mark>').replace(/\[s\]/g, '<strong>').replace(/\[\/s\]/g, '</strong>').replace(/\[m\]/g, '<mark>').replace(/\[\/m\]/g, '</mark>');
	});
};

// Элементы и переменные
let size, paragraph, ref, title, subtitle, storyListOpen,
	storyList, storyListClose, separateLinks, bold, light, dark;

const initElements = () => {
	size = document.querySelector('.size');
	paragraph = document.querySelectorAll('p');
	ref = document.querySelectorAll('.story a');
	title = document.querySelectorAll('h1');
	subtitle = document.querySelectorAll('h2');
	storyListOpen = document.querySelector('.story-list-button');
	storyList = document.querySelector('.story-list');
	storyListClose = document.querySelector('.story-list-close');
	separateLinks = document.querySelectorAll('.separate-link');
	bold = document.querySelectorAll('strong');
	light = document.querySelector('.light');
	dark = document.querySelector('.dark');
};

// Обработчики событий
document.addEventListener('click', event => {
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
	initElements();
	changeSymbols();

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
