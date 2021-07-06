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

// Отрисовка артефактов
const artifactsRender = (array, elem) => {
	let groupCategory = '';

	for (let i=0; i<array.length; i++) {

		if (array[i].slotname != groupCategory) {
			elem.insertAdjacentHTML('beforeend', `<div class="group group-opened" data-slot="${array[i].slot}">${array[i].slotname}</div>`);
			groupCategory = array[i].slotname;
		}

		let artName = document.createElement('span');
		artName.textContent = array[i].rusname.charAt(0).toUpperCase() + array[i].rusname.substr(1);
		nameCheck(artName, array[i].rusname);

		elem.insertAdjacentHTML('beforeend',
		`<div class="artifact" data-engname="${array[i].engname}" data-rusname="${array[i].rusname}" data-id="${array[i].id}"
		data-level="${array[i].level}" data-cost="${array[i].cost}" data-sale="${array[i].sale}" data-slot="${array[i].slot}"
		data-bonus="${array[i].bonus}" data-set="${array[i].set}" data-category="${array[i].category}" data-value="${array[i].value}">
		<img data-src="images/artifacts/${array[i].photo}.jpg"><div class="name-box">${artName.outerHTML}</div></div>`);
	}
}

// Фильтры
const filtersChange = () => {
	let levelFilter = document.getElementById('artLevel').value; 	// Значение фильтра: Класс
	let slotFilter = document.getElementById('artSlot').value; 		// Значение фильтра: Слот
	let nameFilter = document.getElementById('artName').value; 		// Значение строки поиска
	let bonusFilter = document.getElementById('artBonus').value; 	// Значение фильтра: Бонус

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
	lookSet.style.color = '#5b5b5b';
	lookSet.style.cursor = 'auto';
}

// Заполнение таблицы характеристик
const artSelect = (arr, i) => {
	for (let a of arr) {a.classList.remove('selected');}

	arr[i].classList.add('selected');
	name.innerHTML = arr[i].dataset.engname.charAt(0).toUpperCase() + arr[i].dataset.engname.substr(1) + "<br>" +
					 arr[i].dataset.rusname.charAt(0).toUpperCase() + arr[i].dataset.rusname.substr(1);
	level.innerHTML = arr[i].dataset.level;
	cost.innerHTML = getCost(arr[i].dataset.cost);
	sale.innerHTML = getCost(arr[i].dataset.sale);
	slot.innerHTML = arr[i].dataset.slot;
	bonus.innerHTML = arr[i].dataset.bonus;
	set.innerHTML = arr[i].dataset.set;
	val.innerHTML = arr[i].dataset.value;

	if (set.innerHTML != '') {
		lookSet.style.color = '#cfcfcf';
		lookSet.style.cursor = 'pointer';
	} else {
		lookSet.style.color = '#5b5b5b';
		lookSet.style.cursor = 'auto';
	}
}

// Сброс выбранных фильтров
const cooldown = () => {
	for (let a of artifacts) {a.classList.remove('selected');}
	name.innerHTML = '';
	level.innerHTML = '';
	cost.innerHTML = '';
	sale.innerHTML = '';
	slot.innerHTML = '';
	bonus.innerHTML = '';
	set.innerHTML = '';
	val.innerHTML = '';

	document.getElementById('artLevel').value = "all";
	document.getElementById('artSlot').value = "all";
	document.getElementById('artName').value = "";
	document.getElementById('artBonus').value = "all";

	showObjects(artifacts);
	openAllGroups();
	filtersChange();
	setButtonReset();
}

// Элементы и переменные
const mobsColumn = document.querySelector('.objects-column');
const datalist = document.getElementById('artifactsList');
const artifactsColumn = document.querySelector('.objects-column');
let statsCol, artifacts, groups, filters, lookSet, name, level, cost, sale, slot, bonus, set, val, cancel;

const initElements = () => {
	statsCol = document.querySelector('.stats-column');
	artifacts = document.querySelectorAll('.artifact');
	groups = document.querySelectorAll('.group');
	filters = document.getElementsByName('filter');
	lookSet = document.querySelector('.look-set');
	name = document.querySelector('.stat-name');
	level = document.querySelector('.stat-level');
	cost = document.querySelector('.stat-cost');
	sale = document.querySelector('.stat-sale');
	slot = document.querySelector('.stat-slot');
	bonus = document.querySelector('.stat-bonus');
	set = document.querySelector('.stat-set');
	val = document.querySelector('.stat-value');
	cancel = document.querySelector('.cancel');
};

// Обработчики событий
document.addEventListener('click', event => {
	if (event.target == lookSet && set.innerHTML != '') {
		let number;
		hideGroups();
		for (let art of artifacts) {
			if (art.classList.contains('selected')) {number = art.dataset.id;}
		}
		for (let art of artifacts) {
			if (art.dataset.id != number) {art.classList.add('hidden');}
			else {art.classList.remove('hidden');}
		}
	}
	for (let i=0; i<artifacts.length; i++) {
		if (event.target == artifacts[i] ||
			event.target.parentNode == artifacts[i] ||
			event.target == artifacts[i].querySelector('span')) {
			artSelect(artifacts, i);
		}
	}
	for (let gr of groups) {
		if (event.target == gr) {
			if (event.ctrlKey) {
				openAllGroups();
				for (let g of groups) {groupClose(g, artifacts, 'slot');}
			} else {
				if (gr.classList.contains('group-opened')) {groupClose(gr, artifacts, 'slot');}
				else {groupOpen(gr, artifacts, 'slot');}
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
		elemPadding = (window.innerHeight - artifacts[0].getBoundingClientRect().height) / 2;

		current = getCurrent(artifacts);
		if (current != -1) {
			try {
				current = switchRight(artifacts, current);
				artSelect(artifacts, current);
				window.scrollTo(0, (artifacts[current].getBoundingClientRect().top + window.pageYOffset - elemPadding));
			} catch (exception) {
				console.log('Граница массива');
			}
		}
	} else if (e.key == 'ArrowLeft') {
		elemPadding = (window.innerHeight - artifacts[0].getBoundingClientRect().height) / 2;

		current = getCurrent(artifacts);
		if (current != -1) {
			try {
				current = switchLeft(artifacts, current);
				artSelect(artifacts, current);
				window.scrollTo(0, (artifacts[current].getBoundingClientRect().top + window.pageYOffset - elemPadding));
			} catch (exception) {
				console.log('Граница массива');
			}
		}
	}
});

window.addEventListener('load', () => {
	makeDatalist(datalist);
	artifactsRender(artifactsArray, artifactsColumn);
	initElements();
	statsPosition(statsCol);
	gridRebuild(mobsColumn);
	backCorrect();
});

window.addEventListener('resize', () => {
	statsPosition(statsCol);
	gridRebuild(mobsColumn);
	backCorrect();
});

window.addEventListener('scroll', () => {
	statsDisplace(statsCol);
});
