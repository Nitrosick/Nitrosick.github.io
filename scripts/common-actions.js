"use strict";

// Глобальный поиск по сайту
const globalSearchList = document.querySelector('#searchList');
const globalSearchField = document.querySelector('#global-search');
const globalSearchButton = document.querySelector('.search-button');
const pageName = window.location.pathname.split('/').reverse()[0];
let searchList = [];

const getSearchList = (src, result, elem) => {
	src.forEach((el) => {
		el.keywords.forEach((word) => {
			result.push(word);
		});
	});
	result.sort();
	result.forEach((el) => {
		elem.insertAdjacentHTML('beforeend', `<option value="${el}"></option>`);
	});
};

getSearchList(associations, searchList, globalSearchList);

const redirect = (src) => {
	const userText = globalSearchField.value;
	let check = false;
	src.forEach((el) => {
		if (el.keywords.includes(userText.charAt(0).toUpperCase() + userText.substr(1).toLowerCase())) {
			check = true;
			if (pageName != el.link) {
				window.location = el.link;
				return;
			} else {
				globalSearchField.value = '';
				return;
			}
		}
	});
	if (!check && userText != '') {
		globalSearchField.value = '';
		fullMenu.classList.remove('full-menu-closed');
	}
};

// Кнопка возврата в начало страницы
const ret = document.querySelector('.return');

window.addEventListener('scroll', () => {
	if (window.pageYOffset > 700) {
		ret.classList.remove('hidden');
	}
	else {
		ret.classList.add('hidden');
	}
});

const statsDisplace = (col) => {
	if (window.pageYOffset < 55) {
        col.style.top = '75px';
        col.style.bottom = '45px';
    } else {
        col.style.top = '60px';
        col.style.bottom = '60px';
    }
}

// Проверка и корректировка названия объекта
const nameCheck = (obj, rus) => {
	if (rus.length >= 28) {
		obj.className = 'compress10per';
		return;
	}
	let nameArr = rus.split(' ');
	for (let n of nameArr) {
		if (n.length > 13 && !rus.includes('-')) {
			obj.className = 'compress20per';
			return;
		} else if (n.length > 11 && !rus.includes('-')) {
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

// Переключение стрелками на клавиатуре
const getCurrent = (arr) => {
	for (let i=0; i<arr.length; i++) {
		if (arr[i].classList.contains('selected')) {
			return i;
		}
	}
	return -1;
}
const switchRight = (arr, i) => {
	if (i+1 >= arr.length) return i;
	do {i++}
	while (arr[i].classList.contains('hidden'))
	return i;
}
const switchLeft = (arr, i) => {
	if (i-1 < 0) return i;
	do {i--}
	while (arr[i].classList.contains('hidden'))
	return i;
}

// Функция центровки колонки объектов
const statsPosition = (col) => {
	const pageWidth = window.innerWidth;
	if (pageWidth > 1560) {
		col.style.right = (pageWidth - 1500) / 2 + 'px';
	} else {
		col.style.right = '30px';
	}
};

const gridRebuild = (elem) => {
	let width = elem.offsetWidth;
	if (width > 880) {elem.style.gridTemplateColumns = 'repeat(7, 120px)';}
	else if (width > 770 && width <= 880) {elem.style.gridTemplateColumns = 'repeat(6, 120px)';}
	else if (width > 655 && width <= 770) {elem.style.gridTemplateColumns = 'repeat(5, 120px)';}
	else if (width > 520 && width <= 655) {elem.style.gridTemplateColumns = 'repeat(4, 120px)';}
	else if (width > 390 && width <= 520) {elem.style.gridTemplateColumns = 'repeat(3, 120px)';}
	else {elem.style.gridTemplateColumns = 'repeat(2, 120px)';}
};

// Формирование цены
const getCost = (string) => {
	if (string == 'Нельзя купить' || string == '-') return string;
	let array = string.split('_');
	if (string.charAt(0) == '_') {
		return `<span>${array[1]}</span><b class='resources ${array[2]}'></b>
			  / <span>${array[3]}</span><b class='resources ${array[4]}'></b>
			  / <span>${array[5]}</span><b class='resources ${array[6]}'></b>`;
	} else {
		if (array.length <= 2) {
			return `<span>${array[0]}</span><b class='resources ${array[1]}'></b>`;
		} else {
			return `<span>${array[0]}</span><b class='resources ${array[1]}'></b><span>${array[2]}</span><b class='resources ${array[3]}'></b>`;
		}
	}
};

// Обработчики событий
const burger = document.querySelector('.full-menu-open');
const fullMenu = document.querySelector('.full-menu');

globalSearchButton.addEventListener('click', () => {
	redirect(associations);
});

burger.addEventListener('click', () => {
	fullMenu.classList.remove('full-menu-closed');
});

document.addEventListener('click', e => {
	if (e.target == fullMenu) fullMenu.classList.add('full-menu-closed');
});

document.addEventListener('keydown', e => {
	if (e.key == 'Enter') {
		redirect(associations);
	} else if (e.key == 'Escape') {
		fullMenu.classList.add('full-menu-closed');
	}
});
