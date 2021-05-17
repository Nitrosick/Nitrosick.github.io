"use strict";

// Создание Datalist со списком вариантов
const makeDatalist = (elem) => {
	let tempArray = [];
	for (let o of objectsArray) {
		tempArray.push(o.rusname.charAt(0).toUpperCase() + o.rusname.substr(1));
	}
	tempArray.sort();
	for (let a of tempArray) {
		let option = document.createElement('option');
		option.value = a;
		elem.appendChild(option);
	}
}

// Отрисовка карточек объектов
const objectsRender = (array, elem) => {
	let groupCategory = '';

	for (let i=0; i<array.length; i++) {

		if (array[i].category != groupCategory) {
			elem.insertAdjacentHTML('beforeend', `<div class="group group-opened" data-category="${array[i].category}">${array[i].category}</div>`);
			groupCategory = array[i].category;
		}

		let text = array[i].text.replace(/mechanics-page/g, 'mechanics-page-m');

		let objName = document.createElement('span');
		objName.textContent = array[i].rusname.charAt(0).toUpperCase() + array[i].rusname.substr(1);
		nameCheck(objName, array[i].rusname);

		elem.insertAdjacentHTML('beforeend',
		`<div class="object" data-engname="${array[i].engname}" data-rusname="${array[i].rusname}"
		data-category="${array[i].category}" data-scheme="${array[i].scheme}" data-text="${text}">
		<img ${array[i].gif == 1 ? "class=img-gif" : ""} data-src="images/objects/${array[i].engname.replace(/[^a-z()]+/g, '')}.jpg">
		<div class="name-box">${objName.outerHTML}</div></div>`);
	}
}

// Поиск объекта
const filtersChange = () => {
	let nameFilter = searchField.value;

	hideObjects(objects);
	openAllGroups();
	hideGroups();

	for (let o of objects) {
		if ((o.dataset.engname.includes(nameFilter.toLowerCase())
			|| o.dataset.rusname.toLowerCase().includes(nameFilter.toLowerCase())
			|| nameFilter == '')) {

			o.classList.remove('hidden');
		}
	}
	if (nameFilter == '') showGroups();
}

// Заполнение описания объекта
const objSelect = (arr, i) => {
	for (let a of objects) {a.classList.remove('selected');}

	arr[i].classList.add('selected');
	stats.style.display = 'grid';

	if (arr[i].querySelector('img').classList.contains('img-gif')) {
		portrait.src = 'images/objects/' + arr[i].dataset.engname.replace(/[^a-z()]/g, '') + '.gif';
	} else {
		portrait.src = 'images/objects/' + arr[i].dataset.engname.replace(/[^a-z()]/g, '') + '.jpg';
	}
	name.innerHTML = arr[i].dataset.engname.charAt(0).toUpperCase() + arr[i].dataset.engname.substr(1) + "<br>" +
					 arr[i].dataset.rusname.charAt(0).toUpperCase() + arr[i].dataset.rusname.substr(1);
	description.innerHTML = arr[i].dataset.text;
	if (arr[i].dataset.scheme != '') {
		scheme.style.backgroundImage = 'url(images/objects/schemes/' + arr[i].dataset.scheme + '.png), url(images/objects/schemes/grid.png)';
	} else {
		scheme.style.backgroundImage = 'url(images/objects/schemes/grid.png)';
	}
}

// Сброс выбранных фильтров
const cooldown = () => {
	for (let a of objects) {a.classList.remove('selected');}

	document.getElementById('objectName').value = "";

	showObjects(objects);
	openAllGroups();
	filtersChange();
}

// Отображение и скрытие имен
const nameDisplayOn = () => {
    for (let o of objects) {o.style.height = '145px';}
    localStorage.setItem('nameDisplay', 1);
}

const nameDisplayOff = () => {
    for (let o of objects) {o.style.height = '100px';}
    localStorage.setItem('nameDisplay', 0);
}

// Элементы и переменные
const objectsColumn = document.querySelector('.objects-column');
const datalist = document.getElementById('objectsList');
let closeButton, searchField, objects, groups, cancel, nameOn, nameOff, stats, portrait, name, description, scheme;

const initElements = () => {
	closeButton = document.querySelector('.close');
	searchField = document.getElementById('objectName');
	objects = document.querySelectorAll('.object');
	groups = document.querySelectorAll('.group');
	cancel = document.querySelector('.cancel-button');
	nameOn = document.querySelector('.name-on');
	nameOff = document.querySelector('.name-off');
	stats = document.querySelector('.stats');
	portrait = document.querySelector('.portrait');
	name = document.querySelector('.stat-name');
	description = document.querySelector('.stat-desc');
	scheme = document.querySelector('.stat-scheme');
};

// Обработчики событий
document.addEventListener('click', event => {
	for (let i=0; i<objects.length; i++) {
		if (event.target == objects[i] || event.target.parentNode == objects[i]) {
			objSelect(objects, i);
		}
	}
});

document.addEventListener('change', event => {
	if (event.target == searchField) {
		filtersChange();
	}
});

window.addEventListener('load', () => {
	makeDatalist(datalist);
	objectsRender(objectsArray, objectsColumn);
	initElements();

	closeButton.addEventListener('click', () => {
		closeStats(objects);
	});

	for (let gr of groups) {
		gr.addEventListener('click', () => {
			if (gr.classList.contains('group-opened')) {groupClose(gr, objects, 'category');}
			else {groupOpen(gr, objects, 'category');}
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

	searchField.style.paddingLeft = searchField.offsetWidth / 3 + 'px';
	if (localStorage.getItem('nameDisplay') == 0) {nameDisplayOff();}
});
