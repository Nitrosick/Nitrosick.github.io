"use strict";

// Создание Datalist со списком вариантов
const makeDatalist = (elem) => {
	let tempArray = [];
	for (let a of artifactsArray) {
		tempArray.push(a.rusname.charAt(0).toUpperCase() + a.rusname.substr(1));
	}
	tempArray.sort();
	for (let a of tempArray) {
		let option = document.createElement('option');
		option.value = a;
		elem.appendChild(option);
	}
}

// Отрисовка карточек мобов
const artifactsRender = (array, elem) => {
	let groupCategory = '';

	for (let i=0; i<array.length; i++) {

		if (array[i].slotname != groupCategory) {
			elem.insertAdjacentHTML('beforeend', `<div class="group group-opened" data-slot="${array[i].slot}">${array[i].slotname}</div>`);
			groupCategory = array[i].slotname;
		}

		let bonus = array[i].bonus.replace(/mechanics-page/g, 'mechanics-page-m');

		let artName = document.createElement('span');
		artName.textContent = array[i].rusname.charAt(0).toUpperCase() + array[i].rusname.substr(1);
		nameCheck(artName, array[i].rusname);

		elem.insertAdjacentHTML('beforeend',
		`<div class="artifact" data-engname="${array[i].engname}" data-rusname="${array[i].rusname}" data-id="${array[i].id}"
		data-level="${array[i].level}" data-cost="${array[i].cost}" data-sale="${array[i].sale}" data-slot="${array[i].slot}"
		data-bonus="${bonus}" data-set="${array[i].set}" data-category="${array[i].category}" data-value="${array[i].value}">
		<img data-src="images/artifacts/${array[i].photo}.jpg"><div class="name-box">${artName.outerHTML}</div></div>`);
	}
}

// Фильтры
const filtersChange = () => {
	const levelFilter = document.getElementById('artLevel').value; 	// Значение фильтра: Класс
	const slotFilter = document.getElementById('artSlot').value; 	// Значение фильтра: Слот
	const nameFilter = document.getElementById('artName').value; 	// Значение строки поиска
	const bonusFilter = document.getElementById('artBonus').value; 	// Значение фильтра: Бонус

	hideObjects(artifacts);
	openAllGroups();
	hideGroups();

	for (let art of artifacts) {
		if ((art.dataset.slot == slotFilter || slotFilter == 'all')
			&&(art.dataset.level == levelFilter || levelFilter == 'all')
			&&(art.dataset.category == bonusFilter || bonusFilter == 'all')
			&&(art.dataset.engname.includes(nameFilter.toLowerCase())
			|| art.dataset.rusname.includes(nameFilter.toLowerCase())
			|| nameFilter == '')) {
			art.classList.remove('hidden');
		}
	}

	if (levelFilter == 'all' && nameFilter == '' && bonusFilter == 'all') {
		for (let g of groups) {
			if (g.dataset.slot == slotFilter || slotFilter == 'all') {
				g.classList.remove('hidden');
			}
		}
	}
}

// Выделение комплекта
const setButtonReset = () => {
	set.style.overflowY = 'hidden';
	showSet.style.color = '#5b5b5b';
	showSet.style.cursor = 'auto';
}

// Заполнение полей характеристик
const artSelect = (arr, i) => {
	for (let art of artifacts) {art.classList.remove('selected');}
	arr[i].classList.add('selected');
	stats.style.display = 'grid';

	portrait.src = 'images/artifacts/' + artifactsArray[i].photo + '.jpg';
	name.innerHTML = arr[i].dataset.engname.charAt(0).toUpperCase() + arr[i].dataset.engname.substr(1) + "<br>" +
					 arr[i].dataset.rusname.charAt(0).toUpperCase() + arr[i].dataset.rusname.substr(1);
	level.innerHTML = arr[i].dataset.level;
	cost.innerHTML = getCost(arr[i].dataset.cost);
	sale.innerHTML = getCost(arr[i].dataset.sale);
	slot.innerHTML = arr[i].dataset.slot;
	bonus.innerHTML = arr[i].dataset.bonus;
	set.innerHTML = arr[i].dataset.set;
	val.innerHTML = arr[i].dataset.value;

	if (arr[i].dataset.set != '') {showSet.style.color = '#cfcfcf';}
	else {showSet.style.color = '#5b5b5b';}
}

// Сброс выбранных фильтров
const cooldown = () => {
	for (let a of artifacts) {a.classList.remove('selected');}

	document.getElementById('artLevel').value = "all";
	document.getElementById('artSlot').value = "all";
	document.getElementById('artName').value = "";
	document.getElementById('artBonus').value = "all";

	showObjects(artifacts);
	openAllGroups();
	filtersChange();
}

// Отображение и скрытие имен
const nameDisplayOn = () => {
    for (let a of artifacts) {a.style.height = '145px';}
    localStorage.setItem('nameDisplay', 1);
}
const nameDisplayOff = () => {
    for (let a of artifacts) {a.style.height = '100px';}
    localStorage.setItem('nameDisplay', 0);
}

// Настройка оступов в фильтрах
const setFilterPaddings = () => {
	let padding = 0;
	for (let t of textIn) {if (t.offsetWidth > padding) {padding = t.offsetWidth;}}
	for (let f of filters) {f.style.paddingLeft = (padding + 5) + 'px';}
};

// Элементы и переменные
const datalist = document.getElementById('artifactsList');
const artifactsColumn = document.querySelector('.objects-column');
let closeButton, filters, artifacts, groups, showSet, cancel, nameOn, nameOff,
	textIn, stats, portrait, name, level, cost, sale, slot, bonus, set, val;

const initElements = () => {
	textIn = document.querySelectorAll('.filter-text-in');
	closeButton = document.querySelector('.close');
	filters = document.getElementsByName('filter');
	artifacts = document.querySelectorAll('.artifact');
	groups = document.querySelectorAll('.group');
	showSet = document.querySelector('.showset');
	cancel = document.querySelector('.cancel-button');
	nameOn = document.querySelector('.name-on');
	nameOff = document.querySelector('.name-off');
	stats = document.querySelector('.stats');
	portrait = document.querySelector('.portrait');
	name = document.querySelector('.stat-name');
	level = document.querySelector('.stat-level');
	cost = document.querySelector('.stat-cost');
	sale = document.querySelector('.stat-sale');
	slot = document.querySelector('.stat-slot');
	bonus = document.querySelector('.stat-bonus');
	set = document.querySelector('.stat-set');
	val = document.querySelector('.stat-value');
};

// Обработчики событий
document.addEventListener('click', event => {
	for (let i=0; i<artifacts.length; i++) {
		if (event.target == artifacts[i] || event.target.parentNode == artifacts[i]) {
			artSelect(artifacts, i);
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
	artifactsRender(artifactsArray, artifactsColumn);
	initElements();

	closeButton.addEventListener('click', () => {
		closeStats(artifacts);
	});
	for (let gr of groups) {
		gr.addEventListener('click', () => {
			if (gr.classList.contains('group-opened')) {groupClose(gr, artifacts, 'slot');}
			else {groupOpen(gr, artifacts, 'slot');}
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
	showSet.addEventListener('click', () => {
		if (set.innerHTML != '') {
			let number;
			hideGroups();
			for (let art of artifacts) {
				if (art.classList.contains('selected')) {number = art.dataset.id;}
			}
			for (let art of artifacts) {
				if (art.dataset.id != number) {art.classList.add('hidden');}
				else {art.classList.remove('hidden');}
			}
			stats.style.display = 'none';
		}
	});

	setFilterPaddings();
	if (localStorage.getItem('nameDisplay') == 0) {nameDisplayOff();}
});
