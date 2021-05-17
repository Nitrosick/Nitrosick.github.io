"use strict";

// Отрисовка списка мобов
const mobsRender = (array, elem) => {
	let emptySlot = document.createElement('option');
	emptySlot.value = 'empty';
	emptySlot.textContent = 'Выберите существо';
	elem.appendChild(emptySlot);

	for (let i=0; i<array.length; i++) {
		let mobLine = document.createElement('option');
		mobLine.value = array[i].engname;
		mobLine.textContent = array[i].rusname.charAt(0).toUpperCase() + array[i].rusname.substr(1);

		elem.appendChild(mobLine);
	}
}

// Функция сравнения показателей
const goldColor = (parameter, i) => {
	if (i == 0) {
		parameter[0].style.color = '#eeca24';
		parameter[1].style.color = '#cfcfcf';
	} else if (i == 1) {
		parameter[0].style.color = '#cfcfcf';
		parameter[1].style.color = '#eeca24';
	} else {
		parameter[0].style.color = '#cfcfcf';
		parameter[1].style.color = '#cfcfcf';
	}
}

const toCompare = (parameters) => {
	if (+parameters[0].innerHTML > +parameters[1].innerHTML) {
		goldColor(parameters, 0);
	} else if (+parameters[0].innerHTML < +parameters[1].innerHTML) {
		goldColor(parameters, 1);
	} else {
		goldColor(parameters, -1);
	}
}

const compareFields = () => {
	if (name[0].innerHTML != '' && name[1].innerHTML != '') {

		// --- Сравнение атаки, защиты, здоровья, скорости, ценности и прироста
		toCompare(attack);
		toCompare(defense);
		toCompare(health);
		toCompare(speed);
		toCompare(value);
		toCompare(growth);

		// --- Сравнение кол-ва выстрелов
		if (shoots[0].innerHTML != '-' && shoots[1].innerHTML != '-') {
			toCompare(shoots);
		}

		// --- Сравнение уровня
		if (+level[0].innerHTML.charAt(0) > +level[1].innerHTML.charAt(0)) {
			goldColor(level, 0);
		} else if (level[0].innerHTML.charAt(0) < level[1].innerHTML.charAt(0)) {
			goldColor(level, 1);
		} else {
			if (level[0].innerHTML.length == 2 && level[1].innerHTML.length != 2) {
				goldColor(level, 0);
			} else if (level[0].innerHTML.length != 2 && level[1].innerHTML.length == 2) {
				goldColor(level, 1);
			} else {
				goldColor(level, -1);
			}
		}

		// --- Сравнение урона
		let damage1 = ((+damage[0].innerHTML.split('-')[0]) + (+damage[0].innerHTML.split('-')[1])) / 2;
		let damage2 = ((+damage[1].innerHTML.split('-')[0]) + (+damage[1].innerHTML.split('-')[1])) / 2;

		if (damage1 > damage2) {
			goldColor(damage, 0);
		} else if (damage1 < damage2) {
			goldColor(damage, 1);
		} else {
			goldColor(damage, -1);
		}

		// --- Сравнение стоимости
		if (+cost[0].innerHTML.split(/[^0-9]/)[0] > +cost[1].innerHTML.split(/[^0-9]/)[0]) {
			goldColor(cost, 1);
		} else if (+cost[0].innerHTML.split(/[^0-9]/)[0] < +cost[1].innerHTML.split(/[^0-9]/)[0]) {
			goldColor(cost, 0);
		} else {
			goldColor(cost, -1);
		}
	}
}

// Заполнение полей характеристик
const selectMob = (i, j) => {
	if (mobColumns[i][0].value == 'empty') mobColumns[i][0].remove();

	name[i].innerHTML = mobsArray[j].rusname.charAt(0).toUpperCase() + mobsArray[j].rusname.substr(1);
	portrait[i].src = 'images/mobs/' + mobsArray[j].engname.replace(/[^a-z]+/g, '') + '.jpg';

	level[i].innerHTML = mobsArray[j].level;
	castle[i].innerHTML = mobsArray[j].castle;
	attack[i].innerHTML = mobsArray[j].attack;
	defense[i].innerHTML = mobsArray[j].defense;

	if (mobsArray[j].damage.split('-')[0] == mobsArray[j].damage.split('-')[1]) {
		damage[i].innerHTML = mobsArray[j].damage.split('-')[0];
	}
	else {damage[i].innerHTML = mobsArray[j].damage;}

	shoots[i].innerHTML = mobsArray[j].shoots;
	health[i].innerHTML = mobsArray[j].health;
	speed[i].innerHTML = mobsArray[j].speed;
	move[i].innerHTML = mobsArray[j].move;
	value[i].innerHTML = mobsArray[j].value;
	cost[i].innerHTML = getCost(mobsArray[j].cost);
	growth[i].innerHTML = mobsArray[j].growth;
	stat[i].innerHTML = mobsArray[j].stat;
	land[i].innerHTML = mobsArray[j].land;
	ability[i].innerHTML = mobsArray[j].ability.replace(/mechanics-page/g, 'mechanics-page-m');

	compareFields();
}

// Общий сброс
const paramReset = (params) => {
	for (let p of params) {
		p.innerHTML = '';
		p.style.color = '#cfcfcf';
	}
}

const cooldown = () => {
	document.getElementById('lMobName').value = '';
	document.getElementById('rMobName').value = '';

	portrait[0].src = 'images/mobs/empty.png';
	portrait[1].src = 'images/mobs/empty.png';

	for (let p of paramFields) {paramReset(p);}
}

// Элементы и переменные
const leftFilter = document.getElementById('lMobName');
const rightFilter = document.getElementById('rMobName');
const mobColumns = [leftFilter, rightFilter];
const portrait = [document.querySelector('.l-portrait img'), document.querySelector('.r-portrait img')];
const refresh = document.querySelector('.refresh');
const name = document.querySelectorAll('.stat-name');
const level = document.querySelectorAll('.stat-level');
const castle = document.querySelectorAll('.stat-castle');
const attack = document.querySelectorAll('.stat-attack');
const defense = document.querySelectorAll('.stat-defense');
const damage = document.querySelectorAll('.stat-damage');
const shoots = document.querySelectorAll('.stat-shoots');
const health = document.querySelectorAll('.stat-health');
const speed = document.querySelectorAll('.stat-speed');
const move = document.querySelectorAll('.stat-move');
const value = document.querySelectorAll('.stat-value');
const cost = document.querySelectorAll('.stat-cost');
const growth = document.querySelectorAll('.stat-growth');
const stat = document.querySelectorAll('.stat-stat');
const land = document.querySelectorAll('.stat-land');
const ability = document.querySelectorAll('.stat-ability');
const paramFields = [name, level, castle, attack, defense, damage, shoots, health, speed, move, value, cost, growth, stat, land, ability];

// Обработчики событий
refresh.addEventListener('click', () => {
	cooldown();
});

document.addEventListener('change', event => {
	for (let i=0; i<mobsArray.length; i++) {
		if (event.target == leftFilter && leftFilter.value == mobsArray[i].engname) {
			selectMob(0, i);
			break;
		}
	}
	for (let i=0; i<mobsArray.length; i++) {
		if (event.target == rightFilter && rightFilter.value == mobsArray[i].engname) {
			selectMob(1, i);
			break;
		}
	}
});

window.addEventListener('load', () => {
	mobsRender(mobsArray, leftFilter);
	mobsRender(mobsArray, rightFilter);
});
