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

		let objName = document.createElement('span');
		objName.textContent = array[i].rusname.charAt(0).toUpperCase() + array[i].rusname.substr(1);
		nameCheck(objName, array[i].rusname);

		elem.insertAdjacentHTML('beforeend',
		`<div class="object" data-engname="${array[i].engname}" data-rusname="${array[i].rusname}"
		data-category="${array[i].category}" data-scheme="${array[i].scheme}" data-text="${array[i].text}">
		<img ${array[i].gif == 1 ? "class=img-gif" : ""} data-src="images/objects/${array[i].engname.replace(/[^a-z()]+/g, '')}.jpg">
		<div class="name-box">${objName.outerHTML}</div></div>`);
	}
}

// Поиск объекта
const filtersChange = () => {
	let nameFilter = search.value;

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
const selectObject = (arr, i) => {
	for (let o of objects) {o.classList.remove('selected');}
	for (let g of gifPictures) {g.src = g.src.replace('.gif', '.jpg');}

	arr[i].classList.add('selected');
	name.innerHTML = arr[i].dataset.engname.charAt(0).toUpperCase() + arr[i].dataset.engname.substr(1) + " / " + arr[i].dataset.rusname.charAt(0).toUpperCase() + arr[i].dataset.rusname.substr(1);
	text.innerHTML = arr[i].dataset.text;
	if (arr[i].dataset.scheme != '') {
		scheme.style.backgroundImage = 'url(images/objects/schemes/' + arr[i].dataset.scheme + '.png), url(images/objects/schemes/grid.png)';
	} else {
		scheme.style.backgroundImage = 'url(images/objects/schemes/grid.png)';
	}

	let img = arr[i].querySelector('img');
	if (img.classList.contains('img-gif')) img.src = img.src.replace('.jpg', '.gif');
}

// Сброс выбранных фильтров
const cooldown = () => {
	for (let o of objects) {o.classList.remove('selected');}
	for (let g of gifPictures) {g.src = g.src.replace('.gif', '.jpg');}

	name.innerHTML = '';
	text.innerHTML = '';
	scheme.style.backgroundImage = 'url(images/objects/schemes/grid.png)';

	document.getElementById('objectName').value = "";

	showObjects(objects);
	showGroups();
	openAllGroups();
}

// Элементы и переменные
const datalist = document.getElementById('objectsList');
const objectsColumn = document.querySelector('.objects-column');
let statsCol, objects, groups, search, cancel, gifPictures, name, text, scheme;

const initElements = () => {
	statsCol = document.querySelector('.stats-column');
	objects = document.querySelectorAll('.object');
	groups = document.querySelectorAll('.group');
	search = document.getElementById('objectName');
	cancel = document.querySelector('.cancel');
	gifPictures = document.querySelectorAll('.img-gif');
	name = document.querySelector('.stat-name');
	text = document.querySelector('.stat-text');
	scheme = document.querySelector('.stat-scheme');
};

// Обработчики событий
document.addEventListener('click', event => {
	for (let i=0; i<objects.length; i++) {
		if (event.target == objects[i] ||
			event.target.parentNode == objects[i] ||
			event.target == objects[i].querySelector('span')) {
			selectObject(objects, i);
		}
	}
	for (let gr of groups) {
		if (event.target == gr) {
			if (event.ctrlKey) {
				openAllGroups();
				for (let g of groups) {groupClose(g, objects, 'category');}
			} else {
				if (gr.classList.contains('group-opened')) {groupClose(gr, objects, 'category');}
				else {groupOpen(gr, objects, 'category');}
			}
		}
	}
	if (event.target == cancel) {
		cooldown();
	}
});

document.addEventListener('change', event => {
	if (event.target == search) {
		filtersChange();
	}
});

document.addEventListener('keydown', e => {
	let current = -1;
	let elemPadding;

	if (e.key == 'Delete') {
		cooldown();
	} else if (e.key == 'ArrowRight') {
		elemPadding = (window.innerHeight - objects[0].getBoundingClientRect().height) / 2;

		current = getCurrent(objects);
		if (current != -1) {
			try {
				current = switchRight(objects, current);
				selectObject(objects, current);
				window.scrollTo(0, (objects[current].getBoundingClientRect().top + window.pageYOffset - elemPadding));
			} catch (exception) {
				console.log('Граница массива');
			}
		}
	} else if (e.key == 'ArrowLeft') {
		elemPadding = (window.innerHeight - objects[0].getBoundingClientRect().height) / 2;

		current = getCurrent(objects);
		if (current != -1) {
			try {
				current = switchLeft(objects, current);
				selectObject(objects, current);
				window.scrollTo(0, (objects[current].getBoundingClientRect().top + window.pageYOffset - elemPadding));
			} catch (exception) {
				console.log('Граница массива');
			}
		}
	}
});

window.addEventListener('load', () => {
	makeDatalist(datalist);
	objectsRender(objectsArray, objectsColumn);
	initElements();
	statsPosition(statsCol);
	gridRebuild(objectsColumn);
});

window.addEventListener('resize', () => {
	statsPosition(statsCol);
	gridRebuild(objectsColumn);
});

window.addEventListener('scroll', () => {
	statsDisplace(statsCol);
});
