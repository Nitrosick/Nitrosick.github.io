"use strict";

// Создание Datalist со списком вариантов
const makeDatalist = (elem, vars) => {
	let tempArray = [];
	for (let m of mobsArray) {
		tempArray.push(m.rusname.charAt(0).toUpperCase() + m.rusname.substr(1));
	}
	let tempArray1 = tempArray.concat(vars).sort();
	for (let a of tempArray1) {
		let option = document.createElement('option');
		option.value = a;
		elem.appendChild(option);
	}
}

// Отрисовка карточек мобов
const mobsRender = (array, elem) => {
	let groupCategory = '';

	for (let i=0; i<array.length; i++) {

		if (array[i].group != groupCategory) {
			elem.insertAdjacentHTML('beforeend', `<div class="group group-opened" data-number="${+array[i].number - 1}" data-group="${array[i].group}">${array[i].group}</div>`);
			groupCategory = array[i].group;
		}

		let ability = array[i].ability.replace(/mechanics-page/g, 'mechanics-page-m');

		let mobName = document.createElement('span');
		mobName.textContent = array[i].rusname.charAt(0).toUpperCase() + array[i].rusname.substr(1);
		nameCheck(mobName, array[i].rusname);
		if (array[i].engname == 'first aid tent') mobName.classList.add('compress20per');

		let damageSplit = array[i].damage.split('-');

		elem.insertAdjacentHTML('beforeend',
		`<div class="mob" data-number="${array[i].number}" data-engname="${array[i].engname}" data-rusname="${array[i].rusname}"
		data-castle="${array[i].castle}" data-group="${array[i].group}" data-level="${array[i].level.replace(/[\+]/g, '')}" data-up="${array[i].up}"
		data-hexes="${array[i].hexes}" data-cost="${array[i].cost}" data-attack="${array[i].attack}" data-defense="${array[i].defense}"
		data-damage="${array[i].damage}" data-averagedamage="${(+damageSplit[0] + +damageSplit[1]) / 2}" data-shoots="${array[i].shoots}"
		data-health="${array[i].health}" data-speed="${array[i].speed}" data-move="${array[i].move}" data-value="${array[i].value}"
		data-growth="${array[i].growth}" data-stat="${array[i].stat}" data-land="${array[i].land}" data-ability="${ability}">
		<img data-src="images/mobs/${array[i].engname.replace(/[^a-z]+/g, '')}.jpg"><div class="name-box">${mobName.outerHTML}</div></div>`);
	}
}

// Фильтрация и сортировка
const mobSorter = (array, parameter, reverse) => {
	let items = array.childNodes;
	let itemsArr = [];
	for (let i in items) {
		if (items[i].nodeType == 1) {
			itemsArr.push(items[i]);
		}
	}
	if (parameter != 'number') {
		for (let i=0; i<itemsArr.length; i++) {
			if (itemsArr[i].dataset.attack == undefined) {
				itemsArr.splice(i, 1);
			}
		}
	}
	itemsArr.sort(function(a, b) {
		if (+a.dataset[parameter] > +b.dataset[parameter]) {return 1;}
		else if (+a.dataset[parameter] < +b.dataset[parameter]) {return -1;}
		return 0;
	});
	if (reverse) itemsArr.reverse();
	for (let i of itemsArr) {
		array.appendChild(i);
	}
}

const filtersChange = () => {
	const castleFilter = 	document.getElementById('mobCastle').value; // Значение фильтра: Город
	const levelFilter = 	document.getElementById('mobLevel').value;	// Значение фильтра: Уровень
	const nameFilter = 	document.getElementById('mobName').value; 	// Значение строки поиска
	const sorter = 		document.getElementById('sorter').value; 	// Значение поля сортировки

	hideObjects(mobs);
	openAllGroups();
	hideGroups();

	for (let m of mobs) {
		if ((m.dataset.castle == castleFilter || castleFilter == 'all')
			&&(m.dataset.level == levelFilter || levelFilter == 'all')
			&&(m.dataset.engname.includes(nameFilter.toLowerCase())
			|| m.dataset.rusname.includes(nameFilter.toLowerCase())
			|| (m.dataset.move.toLowerCase()).includes(nameFilter.toLowerCase())
			|| (m.dataset.stat.toLowerCase()).includes(nameFilter.toLowerCase())
			|| (m.dataset.land.toLowerCase()).includes(nameFilter.toLowerCase())
			|| ('стрелок'.includes(nameFilter.toLowerCase()) && m.dataset.shoots != '-')
			|| ('стреляет'.includes(nameFilter.toLowerCase()) && m.dataset.shoots != '-')
			|| (m.dataset.hexes.toLowerCase()).includes(nameFilter.toLowerCase())
			|| nameFilter == '')) {

			m.classList.remove('hidden');
		}
	}
	if (levelFilter == 'all' && nameFilter == '' && sorter == 'standard') {
		for (let g of groups) {
			if (g.dataset.castle == castleFilter || castleFilter == 'all') {
				g.classList.remove('hidden');
			}
		}
	}

	switch (sorter) {
		case 'standard':	mobSorter(mobsColumn, 'number', false); break;
		case 'Атака ↑': 	mobSorter(mobsColumn, 'attack', false); break;
		case 'Атака ↓': 	mobSorter(mobsColumn, 'attack', true); break;
		case 'Урон ↑': 		mobSorter(mobsColumn, 'averagedamage', false); break;
		case 'Урон ↓': 		mobSorter(mobsColumn, 'averagedamage', true); break;
		case 'Защита ↑': 	mobSorter(mobsColumn, 'defense', false); break;
		case 'Защита ↓': 	mobSorter(mobsColumn, 'defense', true); break;
		case 'Здоровье ↑': 	mobSorter(mobsColumn, 'health', false); break;
		case 'Здоровье ↓': 	mobSorter(mobsColumn, 'health', true); break;
		case 'Скорость ↑':	mobSorter(mobsColumn, 'speed', false); break;
		case 'Скорость ↓':	mobSorter(mobsColumn, 'speed', true); break;
		case 'Ценность ↑':	mobSorter(mobsColumn, 'value', false); break;
		case 'Ценность ↓':	mobSorter(mobsColumn, 'value', true); break;
	}
}

// Заполнение полей характеристик
const mobSelect = (arr, i) => {
	for (let a of mobs) {a.classList.remove('selected');}
	arr[i].classList.add('selected');
	stats.style.display = 'grid';

	portrait.src = 'images/mobs/' + arr[i].dataset.engname.replace(/[^a-z]/g, '') + '.jpg';
	name.innerHTML = arr[i].dataset.engname.charAt(0).toUpperCase() + arr[i].dataset.engname.substr(1) + " / " +
					 arr[i].dataset.rusname.charAt(0).toUpperCase() + arr[i].dataset.rusname.substr(1);
	city.innerHTML = arr[i].dataset.castle;
	level.innerHTML = arr[i].dataset.level;
	cost.innerHTML = getCost(arr[i].dataset.cost);
	attack.innerHTML = arr[i].dataset.attack;
	defense.innerHTML = arr[i].dataset.defense;
	damage.innerHTML = arr[i].dataset.damage;
	shoots.innerHTML = arr[i].dataset.shoots;
	health.innerHTML = arr[i].dataset.health;
	speed.innerHTML = arr[i].dataset.speed;
	move.innerHTML = arr[i].dataset.move;
	value.innerHTML = arr[i].dataset.value;
	growth.innerHTML = arr[i].dataset.growth;
	stat.innerHTML = arr[i].dataset.stat;
	land.innerHTML = arr[i].dataset.land;
	ability.innerHTML = arr[i].dataset.ability;

	if (mobsArray[i].level.includes('+') && document.getElementById('sorter').value == "standard") {
		if (arr[i].dataset.attack != mobs[i-1].dataset.attack) 		{attack.innerHTML = '<mark class="one">' + attack.innerHTML + '</mark>';}
		if (arr[i].dataset.defense != mobs[i-1].dataset.defense) 	{defense.innerHTML = '<mark class="one">' + defense.innerHTML + '</mark>';}
		if (arr[i].dataset.damage != mobs[i-1].dataset.damage) 		{damage.innerHTML = '<mark class="one">' + damage.innerHTML + '</mark>';}
		if (arr[i].dataset.shoots != mobs[i-1].dataset.shoots) 		{shoots.innerHTML = '<mark class="one">' + shoots.innerHTML + '</mark>';}
		if (arr[i].dataset.health != mobs[i-1].dataset.health) 		{health.innerHTML = '<mark class="one">' + health.innerHTML + '</mark>';}
		if (arr[i].dataset.speed != mobs[i-1].dataset.speed) 		{speed.innerHTML = '<mark class="one">' + speed.innerHTML + '</mark>';}
	}
}

// Сброс выбранных фильтров
const cooldown = () => {
	for (let a of mobs) {a.classList.remove('selected');}

	document.getElementById('mobCastle').value = "all";
	document.getElementById('mobLevel').value = "all";
	document.getElementById('mobName').value = "";
	document.getElementById('sorter').value = "standard";

	showObjects(mobs);
	openAllGroups();
	filtersChange();
}

// Отображение и скрытие имен
const nameDisplayOn = () => {
    for (let m of mobs) {m.style.height = '170px';}
    localStorage.setItem('nameDisplay', 1);
}

const nameDisplayOff = () => {
    for (let m of mobs) {m.style.height = '130px';}
    localStorage.setItem('nameDisplay', 0);
}

// Настройка оступов в фильтрах
const setFilterPaddings = () => {
	let padding = 0;
	for (let t of textIn) {if (t.offsetWidth > padding) {padding = t.offsetWidth;}}
	for (let f of filters) {f.style.paddingLeft = (padding + 5) + 'px';}
};

// Элементы и переменные
const datalist = document.getElementById('mobsList');
const variants = ['Боевая машина', 'Болото', 'Высокогорье', 'Голем', 'Горгулья', 'Грязь',
				  'Двухгексовое','Живой', 'Камни', 'Лава', 'Летает', 'Нежить', 'Одногексовое',
				  'Подземелье', 'Снег', 'Стрелок', 'Телепорт', 'Трава', 'Ходит', 'Элементаль'];
const mobsColumn = document.querySelector('.objects-column');
let closeButton, filters, textIn, mobs, groups, cancel, nameOn, nameOff, stats, portrait, name,	city,
	level, cost, attack, defense, damage, shoots, health, speed, move, value, growth, stat, land, ability;

const initElements = () => {
	closeButton = document.querySelector('.close');
	filters = document.getElementsByName('filter');
	textIn = document.querySelectorAll('.filter-text-in');
	mobs = document.querySelectorAll('.mob');
	groups = document.querySelectorAll('.group');
	cancel = document.querySelector('.cancel-button');
	nameOn = document.querySelector('.name-on');
	nameOff = document.querySelector('.name-off');
	stats = document.querySelector('.stats');
	portrait = document.querySelector('.portrait');
	name = document.querySelector('.stat-name');
	city = document.querySelector('.stat-city');
	level = document.querySelector('.stat-level');
	cost = document.querySelector('.stat-cost');
	attack = document.querySelector('.stat-attack');
	defense = document.querySelector('.stat-defense');
	damage = document.querySelector('.stat-damage');
	shoots = document.querySelector('.stat-shoots');
	health = document.querySelector('.stat-health');
	speed = document.querySelector('.stat-speed');
	move = document.querySelector('.stat-move');
	value = document.querySelector('.stat-value');
	growth = document.querySelector('.stat-growth');
	stat = document.querySelector('.stat-stat');
	land = document.querySelector('.stat-land');
	ability = document.querySelector('.stat-ability');
};

// Обработчики событий
document.addEventListener('click', event => {
	for (let i=0; i<mobs.length; i++) {
		if (event.target == mobs[i] || event.target.parentNode == mobs[i]) {
			mobSelect(mobs, i);
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
	makeDatalist(datalist, variants);
	mobsRender(mobsArray, mobsColumn);
	initElements();

	closeButton.addEventListener('click', () => {
		closeStats(mobs);
	});

	for (let gr of groups) {
		gr.addEventListener('click', () => {
			if (gr.classList.contains('group-opened')) {groupClose(gr, mobs, 'group');}
			else {groupOpen(gr, mobs, 'group');}
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
