"use strict";

// Всплывающее меню
const bar = document.querySelector('.bar');

document.querySelector('.burger').addEventListener('click', () => {
	bar.classList.toggle('bar-opened');
});

// Закрытие панели статов
const closeStats = (arr) => {
    for (let a of arr) {a.classList.remove('selected');}
	stats.style.display = 'none';
}

// Кнопка возврата в начало страницы и сворачивание постера
const ret = document.querySelector('.return');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 700) {
		ret.classList.remove('hidden');
		bar.classList.remove('bar-opened');
	}
	else {ret.classList.add('hidden');}

	try {
		document.querySelector('.page-art').classList.add('page-art-folded');
	} catch (e) {}
});

// Отслеживание поворота экрана
let screenOrient = '';

const getOrient = () => {
	if (window.innerWidth > window.innerHeight) {
		screenOrient = 'landscape';
	} else {
		screenOrient = 'portrait';
	}
}

getOrient();

window.addEventListener("orientationchange", () => {
    getOrient();
}, false);

// Проверка и корректировка названия объекта
const nameCheck = (obj, rus) => {
	if (rus.length >= 28) {
		obj.className = 'compress20per';
		return;
	}
	let nameArr = rus.split(' ');
	for (let n of nameArr) {
		if (n.length > 13 && !rus.includes('-')) {
			obj.className = 'compress30per';
			return;
		} else if (n.length > 12 && !rus.includes('-')) {
			obj.className = 'compress20per';
		} else if (n.length > 10 && !rus.includes('-')) {
			obj.className = 'compress10per';
		}
	}
}

// Функции скрытия и отображения объектов
const hideObjects = (arr) => {
	for (let a of arr) {a.classList.add('hidden');}
}
const showObjects = (arr) => {
	for (let a of arr) {a.classList.remove('hidden');}
}

// Манипуляции с группами
const hideGroups = () => {
	for (let g of groups) {g.classList.add('hidden');}
}
const showGroups = () => {
	for (let g of groups) {g.classList.remove('hidden');}
}
const closeAllGroups = () => {
	for (let g of groups) {
		g.classList.remove('group-opened');
		g.classList.add('group-closed');
	}
}
const openAllGroups = () => {
	for (let g of groups) {
		g.classList.remove('group-closed');
		g.classList.add('group-opened');
	}
}
const groupClose = (group, arr, tag) => {
	group.classList.remove('group-opened');
	group.classList.add('group-closed');
	for (let a of arr) {
		if (a.dataset[tag] == group.dataset[tag]) {a.classList.add('hidden');}
	}
}
const groupOpen = (group, arr, tag) => {
	group.classList.remove('group-closed');
	group.classList.add('group-opened');
	for (let a of arr) {
		if (a.dataset[tag] == group.dataset[tag]) {a.classList.remove('hidden');}
	}
}

// Формирование цены
const getCost = (string) => {
	if (string == 'Нельзя купить' || string == '-') return string;
	let array = string.split('_');
	if (string.charAt(0) == '_') {
		return `${array[1]}<b class='resources ${array[2]}'></b>
			  / ${array[3]}<b class='resources ${array[4]}'></b>
			  / ${array[5]}<b class='resources ${array[6]}'></b>`;
	} else {
		if (array.length <= 2) {
			return `${array[0]}<b class='resources ${array[1]}'></b>`;
		} else {
			return `${array[0]}<b class='resources ${array[1]}'></b>${array[2]}<b class='resources ${array[3]}'></b>`;
		}
	}
};
