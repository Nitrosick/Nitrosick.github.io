"use strict";

// Создание Datalist со списком вариантов
const capitalize = (str) => {
    return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
}

const makeDatalist = (elem, vars) => {
	let tempArray = [];
	for (let h of heroesArray) {
		tempArray.push(capitalize(h.rusname));
	}
	let tempArray1 = tempArray.concat(vars).sort();
	for (let a of tempArray1) {
		let option = document.createElement('option');
		option.value = a.charAt(0).toUpperCase() + a.substr(1);
		elem.appendChild(option);
	}
}

// Отрисовка карточек героев
const heroesRender = (array, elem) => {
	let groupCategory = '';

	for (let i=0; i<array.length; i++) {

		if (array[i].castle != groupCategory) {
			elem.insertAdjacentHTML('beforeend', `<div class="group group-opened" data-castle="${array[i].castle}">${array[i].castle}</div>`);
			groupCategory = array[i].castle;
		}

		let artName = document.createElement('span');
		artName.textContent = array[i].rusname.charAt(0).toUpperCase() + array[i].rusname.substr(1);
		nameCheck(artName, array[i].rusname);

		elem.insertAdjacentHTML('beforeend',
		`<div class="hero" data-engname="${array[i].engname}" data-rusname="${array[i].rusname}" data-images="${array[i].images}"
		data-castle="${array[i].castle}" data-race="${array[i].race}" data-sex="${array[i].sex}" data-rank="${array[i].rank}"
		data-mage="${array[i].mage}" data-spell="${array[i].spell}" data-primary="${array[i].primary}" data-secondary1="${array[i].secondary1}"
		data-secondary2="${array[i].secondary2}" data-army="${array[i].army}" data-spec="${array[i].spec}" data-bio="${array[i].bio}">
		<img data-src="images/heroes/${array[i].engname.replaceAll(' ', '')}.jpg"><div class="name-box">${artName.outerHTML}</div></div>`);
	}
}

// Фильтры
const filtersChange = () => {
	const castleFilter = document.getElementById('heroCastle').value; // Значение фильтра: Замок
	const sexFilter = document.getElementById('heroSex').value;       // Значение фильтра: Пол
	const nameFilter = document.getElementById('heroName').value;     // Значение строки поиска
	const rankFilter = document.getElementById('heroRank').value;     // Значение фильтра: Класс

	hideObjects(heroes);
	openAllGroups();
	hideGroups();

	for (let h of heroes) {
        let specStr = h.dataset.spec.substr(18, h.dataset.spec.indexOf('</mark>') - 18).toLowerCase();
		if ((h.dataset.castle == castleFilter || castleFilter == 'all')
			&&(h.dataset.sex == sexFilter || sexFilter == 'all')
			&&(h.dataset.mage == rankFilter || rankFilter == 'all')
			&&(h.dataset.engname.includes(nameFilter.toLowerCase())
			|| h.dataset.rusname.includes(nameFilter.toLowerCase())
			|| (h.dataset.race.toLowerCase()).includes(nameFilter.toLowerCase())
			|| (h.dataset.rank.toLowerCase()).includes(nameFilter.toLowerCase())
			|| (h.dataset.spell.toLowerCase()).includes(nameFilter.toLowerCase())
			|| (h.dataset.secondary1.substr(2).toLowerCase()).includes(nameFilter.toLowerCase())
			|| (h.dataset.secondary2.substr(2).toLowerCase()).includes(nameFilter.toLowerCase())
			|| specStr.includes(nameFilter.toLowerCase())
			|| nameFilter == '')) {
			h.classList.remove('hidden');
		}
	}

	if (sexFilter == 'all' && nameFilter == '' && rankFilter == 'all') {
		for (let g of groups) {
			if (g.dataset.castle == castleFilter || castleFilter == 'all') {
				g.classList.remove('hidden');
			}
		}
	}
}

// Заполнение таблицы характеристик
const heroSelect = (arr, i) => {
	for (let a of arr) {a.classList.remove('selected');}

    arr[i].classList.add('selected');
    let imagesSplit = arr[i].dataset.images.split('/');
	name.innerHTML = arr[i].dataset.engname + " / " + arr[i].dataset.rusname;
	race.innerHTML = arr[i].dataset.race;
	sex.innerHTML = arr[i].dataset.sex;
	rank.innerHTML = arr[i].dataset.rank;
	spell.innerHTML = arr[i].dataset.spell;
	primary.innerHTML = arr[i].dataset.primary;
    secondary1.innerHTML = arr[i].dataset.secondary1;
    secondary1.style.backgroundImage = 'url(images/skills/' + imagesSplit[0] + '.jpg)';
    secondary2.innerHTML = arr[i].dataset.secondary2;
    secondary2.style.backgroundImage = 'url(images/skills/' + imagesSplit[1].replace('_', 'empty') + '.jpg)';
	army.innerHTML = arr[i].dataset.army;
	spec.innerHTML = arr[i].dataset.spec;
    bio.innerHTML = arr[i].dataset.bio;
    backSpec.style.backgroundImage = 'url(images/skills/' + imagesSplit[2] + '.jpg)';
}

// Сброс выбранных фильтров
const cooldown = () => {
	for (let h of heroes) {h.classList.remove('selected');}
	name.innerHTML = '';
	race.innerHTML = '';
	sex.innerHTML = '';
	rank.innerHTML = '';
	spell.innerHTML = '';
	primary.innerHTML = '';
	secondary1.innerHTML = '';
	secondary2.innerHTML = '';
	army.innerHTML = '';
	spec.innerHTML = '';
    bio.innerHTML = '';

	secondary1.style.backgroundImage = 'none';
	secondary2.style.backgroundImage = 'none';
	backSpec.style.backgroundImage = 'none';

	document.getElementById('heroCastle').value = "all";
	document.getElementById('heroSex').value = "all";
	document.getElementById('heroName').value = "";
	document.getElementById('heroRank').value = "all";

	showObjects(heroes);
	openAllGroups();
	filtersChange();
}

// Элементы и переменные
const datalist = document.getElementById('heroesList');
const variants = ['адские гончие', 'алхимик', 'арбалетчики', 'артиллерия', 'баллиста', 'баллистика', 'бесы', 'бехолдеры',
                  'благословение', 'боевой маг', 'вампир', 'вампиры', 'варвар', 'василиски', 'ведьма', 'виверны',
                  'водные элементали', 'водный элементаль', 'воздушный щит', 'воитель стихий', 'волна смерти', 'волшебная стрела',
                  'волшебство', 'воскрешение', 'вызвать корабль', 'гарпии', 'гипноз', 'гнолл', 'гноллы', 'гном', 'гномы', 'гоблин',
                  'гоблины', 'гоги', 'големы', 'горгоны', 'горгульи', 'грамотность', 'грифоны', 'демон', 'демоны', 'дендроиды',
                  'джинн', 'джинны', 'дипломатия', 'доспехи', 'драгоценные камни', 'друид', 'духи', 'духи океана', 'дьявол',
                  'дьяволы', 'единороги', 'еретик', 'жажда крови', 'жрицы моря', 'забывчивость', 'защита от воздуха', 'защита от огня',
                  'земляной элементаль', 'земляные элементали', 'змии', 'золото', 'интеллект', 'инферно', 'ифрит', 'ифриты',
                  'кавалеристы', 'каменная кожа', 'капитан', 'клон', 'кольцо холода', 'кристаллические драконы', 'кристаллы',
                  'ледяная молния', 'ледяной элементаль', 'лечение', 'лидерство', 'лич', 'личи', 'логистика', 'лорд',
                  'маг', 'маги', 'магический элементаль', 'магия воды', 'магия воздуха', 'магия земли', 'магия огня',
                  'магмовый элементаль', 'мантикоры', 'матросы', 'медлительность', 'метеоритный дождь', 'мечники', 'минотавр',
                  'минотавры', 'мистицизм', 'молитва', 'монахи', 'морские волки', 'мудрость', 'навигатор', 'навигация', 'наги',
                  'наездники на волках', 'нападение', 'некромант', 'некромантия', 'никс', 'никсы', 'нимфа', 'нимфы', 'обучение',
                  'огненные элементали', 'огненный шар', 'огненный элементаль', 'огр', 'огры', 'одержимый', 'орки', 'орлиный глаз',
                  'отродья пропасти', 'палач', 'пегасы', 'первая помощь', 'пираты', 'повелитель зверей', 'поднятие мертвецов',
                  'поиск пути', 'получеловек', 'полуэльф вори, получеловек', 'поместья', 'помехи', 'проклятье', 'просмотр земли',
                  'психические элементали', 'психический элементаль', 'птицы рух', 'пушка', 'разведка', 'разрушающий луч',
                  'рейнджер', 'ртуть', 'рыцарь', 'рыцарь смерти', 'священник', 'сера', 'скелеты', 'скорость', 'слабость',
                  'снайперы', 'снятие заклинаний', 'сопротивление', 'стена огня', 'стрельба', 'тактика', 'точность', 'троглодит',
                  'троглодиты', 'удача', 'ускорение', 'ходячие мертвецы', 'цепная молния', 'циклопы', 'чародеи', 'человек',
                  'чернокнижник', 'черные рыцари', 'чудища', 'щит', 'элементалист', 'эльф', 'эльфы', 'энергетический элементаль', 'ящер', 'ящеры'];
const heroesColumn = document.querySelector('.objects-column');
let statsCol, heroes, groups, filters, cancel, name, race, sex, rank,
	spell, primary, secondary1, secondary2, army, spec, backSpec, bio;

const initElements = () => {
	statsCol = document.querySelector('.stats-column');
	heroes = document.querySelectorAll('.hero');
	groups = document.querySelectorAll('.group');
	filters = document.getElementsByName('filter');
	cancel = document.querySelector('.cancel');
	name = document.querySelector('.stat-name');
	race = document.querySelector('.stat-race');
	sex = document.querySelector('.stat-sex');
	rank = document.querySelector('.stat-rank');
	spell = document.querySelector('.stat-spell');
	primary = document.querySelector('.stat-primary');
	secondary1 = document.querySelector('.stat-secondary1');
	secondary2 = document.querySelector('.stat-secondary2');
	army = document.querySelector('.stat-army');
	spec = document.querySelector('.stat-spec');
	backSpec = document.querySelector('.back-spec');
	bio = document.querySelector('.stat-bio');
};

// Обработчики событий
document.addEventListener('click', event => {
	for (let i=0; i<heroes.length; i++) {
		if (event.target == heroes[i] ||
			event.target.parentNode == heroes[i] ||
			event.target == heroes[i].querySelector('span')) {
			heroSelect(heroes, i);
		}
	}
	for (let gr of groups) {
		if (event.target == gr) {
			if (event.ctrlKey) {
				openAllGroups();
				for (let g of groups) {groupClose(g, heroes, 'castle');}
			} else {
				if (gr.classList.contains('group-opened')) {groupClose(gr, heroes, 'castle');}
				else {groupOpen(gr, heroes, 'castle');}
			}
		}
	}
	if (event.target == cancel) {
		cooldown();
	}
});

window.addEventListener('load', () => {
	makeDatalist(datalist, variants);
	heroesRender(heroesArray, heroesColumn);
	initElements();
	statsPosition(statsCol);
	gridRebuild(heroesColumn);
	backCorrect();
});

window.addEventListener('resize', () => {
	statsPosition(statsCol);
	gridRebuild(heroesColumn);
	backCorrect();
});

window.addEventListener('scroll', () => {
	statsDisplace(statsCol);
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
		elemPadding = (window.innerHeight - heroes[0].getBoundingClientRect().height) / 2;

		current = getCurrent(heroes);
		if (current != -1) {
			try {
				current = switchRight(heroes, current);
				heroSelect(heroes, current);
				window.scrollTo(0, (heroes[current].getBoundingClientRect().top + window.pageYOffset - elemPadding));
			} catch (exception) {
				console.log('Граница массива');
			}
		}
	} else if (e.key == 'ArrowLeft') {
		elemPadding = (window.innerHeight - heroes[0].getBoundingClientRect().height) / 2;

		current = getCurrent(heroes);
		if (current != -1) {
			try {
				current = switchLeft(heroes, current);
				heroSelect(heroes, current);
				window.scrollTo(0, (heroes[current].getBoundingClientRect().top + window.pageYOffset - elemPadding));
			} catch (exception) {
				console.log('Граница массива');
			}
		}
	}
});
