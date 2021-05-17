"use strict";

// Создание Datalist со списком вариантов
const makeDatalist = (elem) => {
	let tempArray = [];
	for (let m of mobsArray) {
		tempArray.push(m.rusname.charAt(0).toUpperCase() + m.rusname.substr(1));
	}
	tempArray.sort();
	for (let a of tempArray) {
		let option = document.createElement('option');
		option.value = a;
		elem.appendChild(option);
	}
}

// Отрисовка списка мобов
const mobsRender = (array, elem) => {
	let splitCheck = array[0].group;

	for (let i=0; i<array.length; i++) {
		if (array[i].group != splitCheck) {
			let splitter = document.createElement('div');
			splitter.classList.add('separator');
			elem.appendChild(splitter);
			splitCheck = array[i].group;
		}

		let mobLine = document.createElement('span');
		mobLine.dataset.engname = array[i].engname;
		mobLine.textContent = array[i].rusname.charAt(0).toUpperCase() + array[i].rusname.substr(1);

		elem.appendChild(mobLine);
	}
}

const hideSeparators = (arr) => {
	for (let sep of arr) {sep.classList.add('hidden');}
}
const showSeparators = (arr) => {
	for (let sep of arr) {sep.classList.remove('hidden');}
}
const hideMobs = (arr) => {
	for (let mob of arr) {mob.classList.add('hidden');}
}

// Поиск существ
const searchMob = (filter, sep, column) => {
	if (filter == '') {showSeparators(sep);}
	else {hideSeparators(sep);}

	hideMobs(column);

	for (let mob of column) {
		if (mob.dataset.engname.includes(filter.toLowerCase()) ||
			mob.textContent.toLowerCase().includes(filter.toLowerCase())) {
			mob.classList.remove('hidden');
		}
	}
}

// Функция сравнения показателей
const goldColor = (side, i) => {
	if (side == 'l') {
		lParamFields[i].style.color = '#eeca24';
		rParamFields[i].style.color = '#cfcfcf';
	} else if (side == 'r') {
		rParamFields[i].style.color = '#eeca24';
		lParamFields[i].style.color = '#cfcfcf';
	} else {
		lParamFields[i].style.color = '#cfcfcf';
		rParamFields[i].style.color = '#cfcfcf';
	}
}

const compareFields = () => {
	for (let i=0; i<lCompArray.length; i++) {
		if (lCompArray[i] < rCompArray[i]) {
			i != 11 ? goldColor('r', i) : goldColor('l', i);
		} else if (lCompArray[i] > rCompArray[i]) {
			i != 11 ? goldColor('l', i) : goldColor('r', i);
		} else {
			goldColor('=', i);
		}
	}
};

const fillCompArrays = (mob) => {
	let compArr = [];
	compArr.push('-');
	// Уровень
	if (mob.level.includes('+')) compArr.push(+mob.level.charAt(0) + 0.5);
	else compArr.push(+mob.level);
	compArr.push('-');
	// Атака
	compArr.push(+mob.attack);
	// Защита
	compArr.push(+mob.defense);
	// Урон
	compArr.push((+mob.damage.split('-')[0] + +mob.damage.split('-')[1]) / 2);
	// Выстрелы
	if (mob.shoots == '-') compArr.push(0);
	else compArr.push(+mob.shoots);
	// Здоровье
	compArr.push(+mob.health);
	// Скорость
	compArr.push(+mob.speed);
	compArr.push('-');
	// Ценность
	compArr.push(+mob.value);
	// Стоимость
	compArr.push(+mob.cost.split('_')[0]);
	// Прирост
	compArr.push(+mob.growth);
	compArr.push('-');
	compArr.push('-');
	compArr.push('-');
	return compArr;
};

// Выбор моба и заполнение характеристик
const portrait = [
	document.querySelector('.l-portrait img'),
	document.querySelector('.r-portrait img')
];

const selectMob = (side, column, i, params, portrait) => {
	if (!column[i].classList.contains('disabled')) {
		if (side == 'l') {
			lMobColumn.forEach(el => {el.classList.remove('selected');});
			rMobColumn.forEach(el => {el.classList.remove('disabled');});
			lMobColumn[i].classList.add('selected');
			rMobColumn[i].classList.add('disabled');
			lCompArray = fillCompArrays(mobsArray[i]);
		} else {
			rMobColumn.forEach(el => {el.classList.remove('selected');});
			lMobColumn.forEach(el => {el.classList.remove('disabled');});
			rMobColumn[i].classList.add('selected');
			lMobColumn[i].classList.add('disabled');
			rCompArray = fillCompArrays(mobsArray[i]);
		}
		portrait.src = 'images/mobs/' + column[i].dataset.engname.replaceAll(' ', '') + '.jpg';
		fillParams(mobsArray[i], params);
	}
};

const fillParams = (mob, params) => {
	params[0].innerHTML = mob.rusname.charAt(0).toUpperCase() + mob.rusname.substr(1);
	params[1].innerHTML = mob.level;
	params[2].innerHTML = mob.castle;
	params[3].innerHTML = mob.attack;
	params[4].innerHTML = mob.defense;
	params[5].innerHTML = mob.damage.split('-')[0] == mob.damage.split('-')[1] ? mob.damage.split('-')[0] : mob.damage;
	params[6].innerHTML = mob.shoots;
	params[7].innerHTML = mob.health;
	params[8].innerHTML = mob.speed;
	params[9].innerHTML = mob.move;
	params[10].innerHTML = mob.value;
	params[11].innerHTML = getCost(mob.cost);
	params[12].innerHTML = mob.growth;
	params[13].innerHTML = mob.stat;
	params[14].innerHTML = mob.land;
	params[15].innerHTML = mob.ability;
	compareFields();
};

// Общий сброс
const mobListReset = (arr) => {
	for (let a of arr) {
		a.classList.remove('selected');
		a.classList.remove('hidden');
		a.classList.remove('disabled');
	}
}

const paramReset = (params) => {
	for (let p of params) {
		p.innerHTML = '';
		p.style.color = '#cfcfcf';
	}
}

const cooldown = () => {
	document.getElementById('lMobName').value = '';
	document.getElementById('rMobName').value = '';

	mobListReset(lMobColumn);
	mobListReset(rMobColumn);
	for (let sep of lSeparators) {sep.classList.remove('hidden');}
	for (let sep of rSeparators) {sep.classList.remove('hidden');}

	portrait[0].src = 'images/mobs/empty.png';
	portrait[1].src = 'images/mobs/empty.png';

	paramReset(lParamFields);
	paramReset(rParamFields);
};

// Элементы и переменные
const comparator = document.querySelector('.comparator');
const datalist = document.getElementById('mobsList');
const lColumn = document.querySelector('.l-column');
const rColumn = document.querySelector('.r-column');
let lCompArray = [];
let rCompArray = [];
let lMobColumn, rMobColumn, lSeparators, rSeparators, lParamFields, rParamFields, search, refresh;

const initElements = () => {
	lMobColumn = document.querySelectorAll('.l-column span');
	rMobColumn = document.querySelectorAll('.r-column span');
	lSeparators = document.querySelectorAll('.l-column .separator');
	rSeparators = document.querySelectorAll('.r-column .separator');
	search = document.getElementsByName('filter');
	refresh = document.querySelector('.refresh');
	lParamFields = [
		document.querySelector('.stat-name.stat-left'),
		document.querySelector('.stat-level.stat-left'),
		document.querySelector('.stat-castle.stat-left'),
		document.querySelector('.stat-attack.stat-left'),
		document.querySelector('.stat-defense.stat-left'),
		document.querySelector('.stat-damage.stat-left'),
		document.querySelector('.stat-shoots.stat-left'),
		document.querySelector('.stat-health.stat-left'),
		document.querySelector('.stat-speed.stat-left'),
		document.querySelector('.stat-move.stat-left'),
		document.querySelector('.stat-value.stat-left'),
		document.querySelector('.stat-cost.stat-left'),
		document.querySelector('.stat-growth.stat-left'),
		document.querySelector('.stat-stat.stat-left'),
		document.querySelector('.stat-land.stat-left'),
		document.querySelector('.stat-ability.stat-left')
	];
	rParamFields = [
		document.querySelector('.stat-name.stat-right'),
		document.querySelector('.stat-level.stat-right'),
		document.querySelector('.stat-castle.stat-right'),
		document.querySelector('.stat-attack.stat-right'),
		document.querySelector('.stat-defense.stat-right'),
		document.querySelector('.stat-damage.stat-right'),
		document.querySelector('.stat-shoots.stat-right'),
		document.querySelector('.stat-health.stat-right'),
		document.querySelector('.stat-speed.stat-right'),
		document.querySelector('.stat-move.stat-right'),
		document.querySelector('.stat-value.stat-right'),
		document.querySelector('.stat-cost.stat-right'),
		document.querySelector('.stat-growth.stat-right'),
		document.querySelector('.stat-stat.stat-right'),
		document.querySelector('.stat-land.stat-right'),
		document.querySelector('.stat-ability.stat-right')
	];
};

// Обработчики событий
document.addEventListener('change', event => {
	if (event.target == search[0]) {
		searchMob(document.getElementById('lMobName').value, lSeparators, lMobColumn);
	}
	if (event.target == search[1]) {
		searchMob(document.getElementById('rMobName').value, rSeparators, rMobColumn);
	}
});

document.addEventListener('click', event => {
	lMobColumn.forEach((el, index) => {
		if (event.target == el) {
			selectMob('l', lMobColumn, index, lParamFields, portrait[0]);
		}
	});
	rMobColumn.forEach((el, index) => {
		if (event.target == el) {
			selectMob('r', rMobColumn, index, rParamFields, portrait[1]);
		}
	});
	if (event.target == refresh) {
		cooldown();
	}
});

document.addEventListener('keydown', event => {
	if (event.key == 'Delete') {
		cooldown();
	}
});

window.addEventListener('load', () => {
	if (screen.width < 1600) {comparator.style.fontSize = '14px';}
	else {comparator.style.fontSize = '16px';}
	makeDatalist(datalist);
	mobsRender(mobsArray, lColumn);
	mobsRender(mobsArray, rColumn);
	initElements();
});
