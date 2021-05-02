"use strict";

// Создание Datalist со списком вариантов
const makeDatalist = (elem) => {
	let tempArray = [];
	for (let s of spellsArray) {
		tempArray.push(s.rusname.charAt(0).toUpperCase() + s.rusname.substr(1));
	}
	tempArray.sort();
	for (let a of tempArray) {
		let option = document.createElement('option');
		option.value = a;
		elem.appendChild(option);
	}
}

// Отрисовка заклинаний
const spellsRender = (array, elem) => {
	let groupCategory = '';

	for (let i=0; i<array.length; i++) {

		if (array[i].category != groupCategory) {
			elem.insertAdjacentHTML('beforeend', `<div class="group group-opened" data-element="${array[i].element}">${array[i].category}</div>`);
			groupCategory = array[i].category;
		}

		let basic = array[i].basic.replace(/mechanics-page/g, 'mechanics-page-m');
		let advance = array[i].advance.replace(/mechanics-page/g, 'mechanics-page-m');
		let expert = array[i].expert.replace(/mechanics-page/g, 'mechanics-page-m');

		let splName = document.createElement('span');
		splName.textContent = array[i].rusname.charAt(0).toUpperCase() + array[i].rusname.substr(1);
		nameCheck(splName, array[i].rusname);

		elem.insertAdjacentHTML('beforeend',
		`<div class="spell" data-engname="${array[i].engname}" data-rusname="${array[i].rusname}" data-element="${array[i].element}"
		data-level="${array[i].level}" data-class="${array[i].class}" data-cost="${array[i].cost}" data-duration="${array[i].duration}"
		data-value="${array[i].value}" data-basic="${basic}" data-advance="${advance}" data-expert="${expert}">
		<img data-src="images/spells/${array[i].engname.replace(/[^a-z]+/g, '')}.png">
		<div class="name-box">${splName.outerHTML}</div></div>`);
	}
}

// Фильтры
const filtersChange = () => {
	let levelFilter = document.getElementById('spellLevel').value; 	// Значение фильтра: Уровень
	let classFilter = document.getElementById('spellClass').value; 	// Значение фильтра: Класс
	let elementFilter = document.getElementById('spellElem').value; // Значение фильтра: Стихия
	let nameFilter = document.getElementById('spellName').value; 	// Значение строки поиска

	hideObjects(spells);
	openAllGroups();
	hideGroups();

	for (let s of spells) {
		if ((s.dataset.level == levelFilter || levelFilter == 'all')
			&&(s.dataset.class == classFilter || classFilter == 'all')
			&&(s.dataset.element == elementFilter || elementFilter == 'all')
			&&(s.dataset.engname.includes(nameFilter.toLowerCase())
			|| s.dataset.rusname.includes(nameFilter.toLowerCase())
			|| nameFilter == '')) {
			s.classList.remove('hidden');
		}
	}

	if (levelFilter == 'all' && nameFilter == '' && classFilter == 'all') {
		for (let g of groups) {
			if (g.dataset.element == elementFilter || elementFilter == 'all') {
				g.classList.remove('hidden');
			}
		}
	}
}

// Заполнение полей характеристик
const spellSelect = (arr, i) => {
	for (let s of spells) {s.classList.remove('selected');}
	arr[i].classList.add('selected');
	stats.style.display = 'grid';

	portrait.src = 'images/spells/' + arr[i].dataset.engname.replace(/[^a-z]/g, '') + '.png';
	name.innerHTML = arr[i].dataset.engname.charAt(0).toUpperCase() + arr[i].dataset.engname.substr(1) + " / " +
					 arr[i].dataset.rusname.charAt(0).toUpperCase() + arr[i].dataset.rusname.substr(1);
	sElement.innerHTML = arr[i].dataset.element;
	level.innerHTML = arr[i].dataset.level;
	sClass.innerHTML = arr[i].dataset.class;
	cost.innerHTML = arr[i].dataset.cost;
	duration.innerHTML = arr[i].dataset.duration;
	value.innerHTML = arr[i].dataset.value;
	basic.innerHTML = arr[i].dataset.basic;
	advance.innerHTML = arr[i].dataset.advance;
	expert.innerHTML = arr[i].dataset.expert;
}

// Сброс выбранных фильтров
const cooldown = () => {
	for (let s of spells) {s.classList.remove('selected');}

	document.getElementById('spellLevel').value = "all";
	document.getElementById('spellClass').value = "all";
	document.getElementById('spellElem').value = "all";
	document.getElementById('spellName').value = "";

	showObjects(spells);
	openAllGroups();
	filtersChange();
}

// Отображение и скрытие имен
const nameDisplayOn = () => {
    for (let s of spells) {s.style.height = '135px';}
    localStorage.setItem('nameDisplay', 1);
}

const nameDisplayOff = () => {
    for (let s of spells) {s.style.height = '75px';}
    localStorage.setItem('nameDisplay', 0);
}

// Настройка оступов в фильтрах
const setFilterPaddings = () => {
	let padding = 0;
	for (let t of textIn) {if (t.offsetWidth > padding) {padding = t.offsetWidth;}}
	for (let f of filters) {f.style.paddingLeft = (padding + 5) + 'px';}
};

// Элементы и переменные
const spellsColumn = document.querySelector('.objects-column');
const datalist = document.getElementById('spellsList');
let closeButton, filters, textIn, spells, groups, cancel, nameOn, nameOff, stats, name,
	portrait, sElement, level, sClass, cost, duration, value, basic, advance, expert;

const initElements = () => {
	closeButton = document.querySelector('.close');
	filters = document.getElementsByName('filter');
	textIn = document.querySelectorAll('.filter-text-in');
	spells = document.querySelectorAll('.spell');
	groups = document.querySelectorAll('.group');
	cancel = document.querySelector('.cancel-button');
	nameOn = document.querySelector('.name-on');
	nameOff = document.querySelector('.name-off');
	stats = document.querySelector('.stats');
	portrait = document.querySelector('.portrait');
	name = document.querySelector('.stat-name');
	sElement = document.querySelector('.stat-element');
	level = document.querySelector('.stat-level');
	sClass = document.querySelector('.stat-class');
	cost = document.querySelector('.stat-sCost');
	duration = document.querySelector('.stat-duration');
	value = document.querySelector('.stat-value');
	basic = document.querySelector('.stat-basic');
	advance = document.querySelector('.stat-adv');
	expert = document.querySelector('.stat-exp');
};

// Обработчики событий
document.addEventListener('click', event => {
	for (let i=0; i<spells.length; i++) {
		if (event.target == spells[i] || event.target.parentNode == spells[i]) {
			spellSelect(spells, i);
		}
	}
});

document.addEventListener('change', event => {
	for (let f of filters) {
		if (event.target == f) {
			filtersChange();
		}
	}
});

window.addEventListener('load', () => {
	makeDatalist(datalist);
	spellsRender(spellsArray, spellsColumn);
	initElements();

	closeButton.addEventListener('click', () => {
		closeStats(spells);
	});

	for (let gr of groups) {
		gr.addEventListener('click', () => {
			if (gr.classList.contains('group-opened')) {groupClose(gr, spells, 'element');}
			else {groupOpen(gr, spells, 'element');}
		});
	}

	cancel.addEventListener('click', () => {
		cooldown();
	});

	nameOn.addEventListener('click', () => {
		nameDisplayOn();
	});

	nameOff.addEventListener('click', () => {
		nameDisplayOff();
	});

	setFilterPaddings();
	if (localStorage.getItem('nameDisplay') == 0) {nameDisplayOff();}
});
