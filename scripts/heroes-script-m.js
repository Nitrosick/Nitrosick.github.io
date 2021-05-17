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

		let spec = array[i].spec.replace(/mechanics-page/g, 'mechanics-page-m');

		let artName = document.createElement('span');
		artName.textContent = array[i].rusname.charAt(0).toUpperCase() + array[i].rusname.substr(1);
		nameCheck(artName, array[i].rusname);

		elem.insertAdjacentHTML('beforeend',
		`<div class="hero" data-engname="${array[i].engname}" data-rusname="${array[i].rusname}" data-images="${array[i].images}"
		data-castle="${array[i].castle}" data-race="${array[i].race}" data-sex="${array[i].sex}" data-rank="${array[i].rank}"
		data-mage="${array[i].mage}" data-spell="${array[i].spell}" data-primary="${array[i].primary}" data-secondary1="${array[i].secondary1}"
		data-secondary2="${array[i].secondary2}" data-army="${array[i].army}" data-spec="${spec}" data-bio="${array[i].bio}">
		<img data-src="images/heroes/${array[i].engname.replace(/[^a-z]+/g, '')}.jpg"><div class="name-box">${artName.outerHTML}</div></div>`);
	}
}

// Фильтры
const filtersChange = () => {
	const castleFilter = document.getElementById('heroCastle').value; // Значение фильтра: Замок
	const sexFilter = document.getElementById('heroSex').value; 		// Значение фильтра: Пол
	const nameFilter = document.getElementById('heroName').value; 	// Значение строки поиска
	const rankFilter = document.getElementById('heroRank').value; 	// Значение фильтра: Класс

	hideObjects(heroes);
	openAllGroups();
	hideGroups();

	for (let h of heroes) {
		let specStr = h.dataset.spec.substr(18 , h.dataset.spec.indexOf('</mark>') - 18).toLowerCase();
		if ((h.dataset.castle == castleFilter || castleFilter == 'all')
			&&(h.dataset.sex == sexFilter || sexFilter == 'all')
			&&(h.dataset.mage == rankFilter || rankFilter == 'all')
			&&(h.dataset.engname.includes(nameFilter.toLowerCase())
			|| h.dataset.rusname.includes(nameFilter.toLowerCase())
			|| (h.dataset.race.toLowerCase()).includes(nameFilter.toLowerCase())
			|| (h.dataset.rank.toLowerCase()).includes(nameFilter.toLowerCase())
			|| (h.dataset.spell.toLowerCase()).includes(nameFilter.toLowerCase())
			|| (h.dataset.secondary1.toLowerCase()).includes(nameFilter.toLowerCase())
			|| (h.dataset.secondary2.toLowerCase()).includes(nameFilter.toLowerCase())
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

// Заполнение полей характеристик
const heroSelect = (arr, i) => {
	for (let h of heroes) {h.classList.remove('selected');}
	arr[i].classList.add('selected');
	stats.style.display = 'grid';

	portrait.src = 'images/heroes/' + arr[i].dataset.engname.replace(/[^a-z]/g, '') + '.jpg';
	name.innerHTML = arr[i].dataset.engname + " / " + arr[i].dataset.rusname;
	race.innerHTML = arr[i].dataset.race;
	sex.innerHTML = arr[i].dataset.sex;
	rank.innerHTML = arr[i].dataset.rank;
	spell.innerHTML = arr[i].dataset.spell;
	primary.innerHTML = arr[i].dataset.primary;
	secondary.innerHTML = arr[i].dataset.secondary1 + "<br>" + arr[i].dataset.secondary2;
	army.innerHTML = arr[i].dataset.army;
	spec.innerHTML = arr[i].dataset.spec;
	bio.innerHTML = arr[i].dataset.bio;
}

// Сброс выбранных фильтров
const cooldown = () => {
	for (let h of heroes) {h.classList.remove('selected');}

	document.getElementById('heroCastle').value = "all";
	document.getElementById('heroSex').value = "all";
	document.getElementById('heroName').value = "";
	document.getElementById('heroRank').value = "all";

	showObjects(heroes);
	openAllGroups();
	filtersChange();
}

// Отображение и скрытие имен
const nameDisplayOn = () => {
    for (let h of heroes) {h.style.height = '150px';}
    localStorage.setItem('nameDisplay', 1);
}
const nameDisplayOff = () => {
    for (let h of heroes) {h.style.height = '110px';}
    localStorage.setItem('nameDisplay', 0);
}

// Настройка оступов в фильтрах
const setFilterPaddings = () => {
	let padding = 0;
	for (let t of textIn) {if (t.offsetWidth > padding) {padding = t.offsetWidth;}}
	for (let f of filters) {f.style.paddingLeft = (padding + 5) + 'px';}
};

// Элементы и переменные
const heroesColumn = document.querySelector('.objects-column');
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
let textIn, heroes, filters, groups, cancel, nameOn, nameOff, closeButton, stats, portrait,
	name, race, sex, rank, spell, primary, secondary, army, spec, bio;

const initElements = () => {
	textIn = document.querySelectorAll('.filter-text-in');
	heroes = document.querySelectorAll('.hero');
	filters = document.getElementsByName('filter');
	groups = document.querySelectorAll('.group');
	cancel = document.querySelector('.cancel-button');
	nameOn = document.querySelector('.name-on');
	nameOff = document.querySelector('.name-off');
	closeButton = document.querySelector('.close');
	stats = document.querySelector('.stats');
	portrait = document.querySelector('.portrait');
	name = document.querySelector('.stat-name');
	race = document.querySelector('.stat-race');
	sex = document.querySelector('.stat-sex');
	rank = document.querySelector('.stat-rank');
	spell = document.querySelector('.stat-spell');
	primary = document.querySelector('.stat-primary');
	secondary = document.querySelector('.stat-secondary');
	army = document.querySelector('.stat-army');
	spec = document.querySelector('.stat-spec');
	bio = document.querySelector('.stat-bio');
};

// Обработчики событий
document.addEventListener('click', event => {
	for (let i=0; i<heroes.length; i++) {
		if (event.target == heroes[i] || event.target.parentNode == heroes[i]) {
			heroSelect(heroes, i);
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
	heroesRender(heroesArray, heroesColumn);
	initElements();

	closeButton.addEventListener('click', () => {
		closeStats(heroes);
	});
	for (let gr of groups) {
		gr.addEventListener('click', () => {
			if (gr.classList.contains('group-opened')) {groupClose(gr, heroes, 'castle');}
			else {groupOpen(gr, heroes, 'castle');}
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
