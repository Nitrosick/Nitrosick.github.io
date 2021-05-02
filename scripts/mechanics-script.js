"use strict";

// Генерация оглавления
const generateTOC = (block) => {
	block.insertAdjacentHTML('beforeend', tableOfContent.replaceAll(pageName, ''));
}

// Изменение размера текста
const setFontSize = (px) => {
    for (let par of paragraph) {par.style.fontSize = px + 'px';}
	for (let tit of titleH2) {tit.style.fontSize = (+px + 2) + 'px';}
	for (let tab of tables) {tab.style.fontSize = px + 'px';}
    fontImg.textContent = px + 'px';
    localStorage.setItem('fontSize', px);
}

// Переключение цветовой схемы
const themeColor = (elem, textColor, bgColor) => {
	elem.style.color = textColor;
	elem.style.background = bgColor;
}

const themeChange = (dark) => {
    if (dark) {
		for (let par of paragraph) {themeColor(par, '#cfcfcf', '#303030');}
		for (let tab of tables) {themeColor(tab, '#cfcfcf', '#303030');}
		for (let t of titleH1) {themeColor(t, 'white', '#af9001');}
		for (let t of titleH2) {themeColor(t, '#cfcfcf', '#0d0d0d');}
		for (let b of bold) {b.style.color = 'white';}
        localStorage.setItem('theme', 'dark');
	} else {
		for (let par of paragraph) {themeColor(par, '#303030', '#cfcfcf');}
		for (let tab of tables) {themeColor(tab, '#303030', '#cfcfcf');}
		for (let t of titleH1) {themeColor(t, '#cfcfcf', '#0d0d0d');}
		for (let t of titleH2) {themeColor(t, '#cfcfcf', '#303030');}
		for (let b of bold) {b.style.color = 'black';}
        localStorage.setItem('theme', 'light');
	}
}

// Отображение и скрытие подзаголовков
const showingSublinks = (open) => {
    if (open) {
		for (let s of sublinks) {s.classList.remove('hidden');}
		showSublinks.textContent = 'Скрыть подзаголовки';
	} else if (!open) {
		for (let s of sublinks) {s.classList.add('hidden');}
		showSublinks.textContent = 'Отобразить подзаголовки';
	}
}

// Элементы и переменные
const linksBlock = document.querySelector('.storylist .links');
let pageBack, titleH1, titleH2, paragraph, size, bold, tables, minTables, fontImg,
	progress, theme, shift, links, list, sublinks, showSublinks, checkboxes;

const initElements = () => {
	pageBack = document.querySelector('.mechanics-page');
	titleH1 = document.querySelectorAll('h1');
	titleH2 = document.querySelectorAll('h2');
	paragraph = document.querySelectorAll('p');
	size = document.querySelector('.size');
	bold = document.querySelectorAll('strong');
	tables = document.querySelectorAll('table');
	minTables = document.querySelectorAll('.minimized');
	fontImg = document.querySelector('.fontImg');
	progress = document.querySelectorAll('.in-progress');
	theme = document.getElementById('payt1');
	shift = document.querySelector('.shift');
	links = document.querySelectorAll('a.link');
	list = document.querySelector('.storylist');
	sublinks = document.querySelectorAll('a.sublink');
	showSublinks = document.querySelector('.show-sublinks');
	checkboxes = document.querySelectorAll('.checkboxes input');
};

// Обработчики событий
document.addEventListener('click', event => {
	for (let p of progress) {
		if (p == event.target) {
			alert('Раздел редактируется и будет дополняться новой информацией.');
		}
	}
	for (let t of minTables) {
		if (t == event.target && event.ctrlKey) {
			t.classList.toggle('minimized-o');
			if (t.classList.contains('minimized-o')) {t.innerHTML = t.innerHTML.replace('▼', '▲');}
			else {t.innerHTML = t.innerHTML.replace('▲', '▼');}
		}
	}
	if (shift == event.target || shift == event.target.parentNode) {
		list.classList.toggle('closed');
	}
	for (let s of story) {
		if (s == event.target || s == event.target.parentNode || pageBack == event.target) {
			list.classList.add('closed');
		}
	}
	if (showSublinks == event.target) {
		if (showSublinks.textContent == 'Отобразить подзаголовки') {
			showingSublinks(true);
			localStorage.setItem('sublinks', 1);
		} else {
			showingSublinks(false);
			localStorage.setItem('sublinks', 0);
		}
	}
	for (let c of checkboxes) {
		if (c == event.target) {
			for (let i=1; i<story.length; i++) {
				story[i].classList.add('hidden');
				links[i-1].classList.add('disabled');
			}
			let tags = [];
			for (let ch of checkboxes) {
				if (ch.checked) {tags.push(ch.value);}
			}
			for (let t of tags) {
				for (let i=1; i<story.length; i++) {
					if (story[i].dataset.fil.includes(t)) {
						story[i].classList.remove('hidden');
						links[i-1].classList.remove('disabled');
					}
				}
			}
			for (let l of links) {
				if (l.classList.contains('disabled')) {
					for (let sl of sublinks) {
						if (sl.name == l.id) {
							sl.classList.add('disabled');
						}
					}
				} else {
					for (let sl of sublinks) {
						if (sl.name == l.id) {
							sl.classList.remove('disabled');
						}
					}
				}
			}
		}
	}
	for (let l of links) {
		if (l == event.target) {
			if (l.classList.contains('disabled')) {event.preventDefault();}
			else {list.classList.add('closed');}
		}
	}
	for (let l of sublinks) {
		if (l == event.target) {
			if (l.classList.contains('disabled')) {event.preventDefault();}
			else {list.classList.add('closed');}
		}
	}
});

document.addEventListener('change', event => {
	if (size == event.target) {
		setFontSize(size.value);
	}
	if (theme == event.target) {
		if (theme.checked) themeChange(true);
		else themeChange(false);
	}
});

document.addEventListener('touchstart', event => {
	for (let t of minTables) {
		if (t == event.target) {
			event.preventDefault();
			t.classList.toggle('minimized-o');
			if (t.classList.contains('minimized-o')) {t.innerHTML = t.innerHTML.replace('▼', '▲');}
			else {t.innerHTML = t.innerHTML.replace('▲', '▼');}
		}
	}
});

document.addEventListener('keydown', event => {
	if (event.ctrlKey && event.key == 'Delete') {
		for (let c of checkboxes) {c.checked = true;}
		for (let i=1; i<story.length; i++) {
			story[i].classList.remove('hidden');
			links[i-1].classList.remove('disabled');
		}
		for (let l of sublinks) {
			l.classList.remove('disabled');
		}
	} else if (event.key == 'Delete') {
		for (let c of checkboxes) {c.checked = false;}
		for (let i=1; i<story.length; i++) {
			story[i].classList.add('hidden');
			links[i-1].classList.add('disabled');
		}
		for (let l of sublinks) {
			l.classList.add('disabled');
		}
	}
});

window.addEventListener('load', () => {
	generateTOC(linksBlock);
	initElements();
	size.value = localStorage.getItem('fontSize') == null ? 16 : localStorage.getItem('fontSize');
	setFontSize(localStorage.getItem('fontSize') == null ? 16 : localStorage.getItem('fontSize'));
	if (localStorage.getItem('theme') == 'dark') {
		theme.checked = true;
		themeChange(true);
	}
	if (localStorage.getItem('sublinks') == 0) {
		showingSublinks(false);
	}
});
