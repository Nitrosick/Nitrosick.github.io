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
			elem.insertAdjacentHTML('beforeend', `<div ${array[i].category == 'Адаптивные' ? "title='Стихия этих заклинаний подстраивается под наиболее прокачанный вторичный навык (Магия огня, воды, воздуха или земли).'" : ""} class="group group-opened" data-element="${array[i].element}">${array[i].category}</div>`);
			groupCategory = array[i].category;
		}

		let splName = document.createElement('span');
		splName.textContent = array[i].rusname.charAt(0).toUpperCase() + array[i].rusname.substr(1);
		nameCheck(splName, array[i].rusname);

		elem.insertAdjacentHTML('beforeend',
		`<div class="spell" data-engname="${array[i].engname}" data-rusname="${array[i].rusname}" data-element="${array[i].element}"
		data-level="${array[i].level}" data-class="${array[i].class}" data-cost="${array[i].cost}" data-duration="${array[i].duration}"
		data-value="${array[i].value}" data-basic="${array[i].basic}" data-advance="${array[i].advance}" data-expert="${array[i].expert}">
		<img data-src="images/spells/${array[i].engname.replace(/[^a-z]+/g, '')}.png">
		<div class="name-box">${splName.outerHTML}</div></div>`);
	}
}

// Фильтры
const filtersChange = () => {
	let elementFilter = document.getElementById('spellElem').value; // Значение фильтра: Стихия
	let levelFilter = document.getElementById('spellLevel').value; 	// Значение фильтра: Уровень
	let nameFilter = document.getElementById('spellName').value; 	// Значение строки поиска
	let classFilter = document.getElementById('spellClass').value; 	// Значение фильтра: Класс

	hideObjects(spells);
	openAllGroups();
	hideGroups();

	for (let s of spells) {
		if ((s.dataset.element == elementFilter || elementFilter == 'all')
			&&(s.dataset.level == levelFilter || levelFilter == 'all')
			&&(s.dataset.class == classFilter || classFilter == 'all')
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

// Заполнение таблицы характеристик
const levelImage = (text) => {
	splLevel[0].style.backgroundImage = 'url(images/skills/magicof' + text + '.jpg)';
	splLevel[1].style.backgroundImage = 'url(images/skills/advmagicof' + text + '.jpg)';
	splLevel[2].style.backgroundImage = 'url(images/skills/expmagicof' + text + '.jpg)';
}

const spellSelect = (arr, i) => {
	for (let a of arr) {a.classList.remove('selected');}

	arr[i].classList.add('selected');
	name.innerHTML = arr[i].dataset.engname.charAt(0).toUpperCase() + arr[i].dataset.engname.substr(1) + " / " +
					 arr[i].dataset.rusname.charAt(0).toUpperCase() + arr[i].dataset.rusname.substr(1);
	elem.innerHTML = arr[i].dataset.element;
	level.innerHTML = arr[i].dataset.level;
	sClass.innerHTML = arr[i].dataset.class;
	cost.innerHTML = arr[i].dataset.cost;
	duration.innerHTML = arr[i].dataset.duration;
	value.innerHTML = arr[i].dataset.value;
	sBasic.innerHTML = arr[i].dataset.basic;
	sAdvance.innerHTML = arr[i].dataset.advance;
	sExpert.innerHTML = arr[i].dataset.expert;

	switch (elem.innerHTML) {
		case 'Огонь': levelImage('fire'); break;
		case 'Вода': levelImage('water'); break;
		case 'Земля': levelImage('earth'); break;
		case 'Воздух':levelImage('air'); break;
		default: for (let s of splLevel) {s.style.backgroundImage = 'url(images/skills/empty.jpg)';}
	}
}

// Сброс выбранных фильтров
const cooldown = () => {
	for (let s of spells) {s.classList.remove('selected');}

	name.innerHTML = '';
	elem.innerHTML = '';
	level.innerHTML = '';
	sClass.innerHTML = '';
	cost.innerHTML = '';
	duration.innerHTML = '';
	value.innerHTML = '';
	sBasic.innerHTML = '';
	sAdvance.innerHTML = '';
	sExpert.innerHTML = '';

	for (let s of splLevel) {s.style.backgroundImage = 'none';}

	document.getElementById('spellElem').value = "all";
	document.getElementById('spellLevel').value = "all";
	document.getElementById('spellName').value = "";
	document.getElementById('spellClass').value = "all";

	showObjects(spells);
	openAllGroups();
	filtersChange();
}

// Элементы и переменные
const datalist = document.getElementById('spellsList');
const spellsColumn = document.querySelector('.objects-column');
let statsCol, spells, groups, filters, cancel, name, elem, level, sClass,
	cost, duration, value, sBasic, sAdvance, sExpert, splLevel;

const initElements = () => {
	statsCol = document.querySelector('.stats-column');
	spells = document.querySelectorAll('.spell');
	groups = document.querySelectorAll('.group');
	filters = document.getElementsByName('filter');
	cancel = document.querySelector('.cancel');
	name = document.querySelector('.stat-name');
	elem = document.querySelector('.stat-element');
	level = document.querySelector('.stat-level');
	sClass = document.querySelector('.stat-class');
	cost = document.querySelector('.stat-sCost');
	duration = document.querySelector('.stat-duration');
	value = document.querySelector('.stat-value');
	sBasic = document.querySelector('.stat-basic');
	sAdvance = document.querySelector('.stat-adv');
	sExpert = document.querySelector('.stat-exp');
	splLevel = document.querySelectorAll('.spl-level');
};

// Обработчики событий
document.addEventListener('click', event => {
	for (let i=0; i<spells.length; i++) {
		if (event.target == spells[i] ||
			event.target.parentNode == spells[i] ||
			event.target == spells[i].querySelector('span')) {
			spellSelect(spells, i);
		}
	}
	for (let gr of groups) {
		if (event.target == gr) {
			if (event.ctrlKey) {
				openAllGroups();
				for (let g of groups) {groupClose(g, spells, 'element');}
			} else {
				if (gr.classList.contains('group-opened')) {groupClose(gr, spells, 'element');}
				else {groupOpen(gr, spells, 'element');}
			}
		}
	}
	if (event.target == cancel) {
		cooldown();
	}
});

document.addEventListener('change', event => {
	for (let f of filters) {
		if (event.target == f) {
			filtersChange();
		}
	}
});

document.addEventListener('keydown', e => {
	let current = -1;
	let elemPadding;

	if (e.key == 'Delete') {
		cooldown();
	} else if (e.key == 'ArrowRight') {
		elemPadding = (window.innerHeight - spells[0].getBoundingClientRect().height) / 2;

		current = getCurrent(spells);
		if (current != -1) {
			try {
				current = switchRight(spells, current);
				spellSelect(spells, current);
				window.scrollTo(0, (spells[current].getBoundingClientRect().top + window.pageYOffset - elemPadding));
			} catch (exception) {
				console.log('Граница массива');
			}
		}
	} else if (e.key == 'ArrowLeft') {
		elemPadding = (window.innerHeight - spells[0].getBoundingClientRect().height) / 2;

		current = getCurrent(spells);
		if (current != -1) {
			try {
				current = switchLeft(spells, current);
				spellSelect(spells, current);
				window.scrollTo(0, (spells[current].getBoundingClientRect().top + window.pageYOffset - elemPadding));
			} catch (exception) {
				console.log('Граница массива');
			}
		}
	}
});

window.addEventListener('load', () => {
	makeDatalist(datalist);
	spellsRender(spellsArray, spellsColumn);
	initElements();
	statsPosition(statsCol);
	gridRebuild(spellsColumn);
	backCorrect();
});

window.addEventListener('resize', () => {
	statsPosition(statsCol);
	gridRebuild(spellsColumn);
	backCorrect();
});

window.addEventListener('scroll', () => {
	statsDisplace(statsCol);
});
