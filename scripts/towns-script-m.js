"use strict";

const changeTown = (town) => {
	refresh();
	changeBacklight(town);
	changeTownIcon(town);
	changeTownBackground(town);
	changeTownAudio(town);
	showDetails();
	generateStructures(town);
	generateMobs(town);
	generateHeroes(town);
	changeMosaic(town);
	makeTreeSelector(town);
	changeTreeIcon(treeSelector.value, townSelector.value);
	changeDescription(town);
	changeTownViews(town);
	hideStructInfo();

	localStorage.setItem('selectedTown-m', town);
};

const refresh = () => {
    document.querySelector('footer').style.boxShadow = 'none';
	document.querySelector('#town-background').src = `images/svg-icon.svg`;
	document.querySelector('.town-structures').innerHTML = '';
	document.querySelector('#treeSelector').innerHTML = '';
	document.querySelector('#tree-selector-icon').src = `images/svg-icon.svg`;
	document.querySelector('.town-tree-items').innerHTML = '';
	document.querySelector('.no-requires').classList.add('hidden');
	document.querySelector('.town-mobs').innerHTML = '';
	document.querySelector('.town-heroes').innerHTML = '';
	document.querySelector('#town-mosaic-1').src = `images/svg-icon.svg`;
	document.querySelector('#town-mosaic-2').src = `images/svg-icon.svg`;
	document.querySelector('.town-description').innerHTML = '';
	document.querySelector('#town-appearance-1').src = `images/svg-icon.svg`;
	document.querySelector('#town-appearance-2').src = `images/svg-icon.svg`;
	document.querySelector('#town-appearance-3').src = `images/svg-icon.svg`;
	document.querySelector('#town-appearance-4').src = `images/svg-icon.svg`;
};

const changeBacklight = (town) => {
	townsArray.forEach(el => {
		if (el.engname == town) {
            document.querySelector('footer').style.boxShadow = `0 -15px 25px -20px #${el.color}`;
		}
		return;
	});
};

const changeTownIcon = (town) => {
	document.querySelector('#town-icon').src = `images/towns/${town}/${town}-icon.jpg`;
};

const changeTownBackground = (town) => {
	document.querySelector('#town-background').src = `images/towns/${town}/${town}-back-full-m.jpg`;
};

const changeTownAudio = (town) => {
    document.querySelector('#town-audio').src = `images/towns/${town}/${town}-theme.mp3`;
};

const tabsChange = (direction, current) => {
	const tabsLine = document.querySelector('.town-details-tabs');
	switch(direction) {
		case 'left': if (current == 1) {
			tabsLine.className = 'town-details-tabs tab-6';
			currentTab = 6;
		} else {
			tabsLine.className = `town-details-tabs tab-${+current - 1}`;
			currentTab = +current - 1;
		}
		localStorage.setItem('selectedTab-m', currentTab);
		break;
		case 'right': if (current == 6) {
			tabsLine.className = 'town-details-tabs tab-1';
			currentTab = 1;
		} else {
			tabsLine.className = `town-details-tabs tab-${+current + 1}`;
			currentTab = +current + 1;
		}
		localStorage.setItem('selectedTab-m', currentTab);
		break;
		case 'no': tabsLine.className = `town-details-tabs tab-${+current}`;
		break;
	}
	hideStructInfo();
};

const showDetails = () => {
	const detailsTabs = document.querySelectorAll('.town-details');
	detailsTabs.forEach(el => {
		el.classList.add('hidden');
	});
	detailsTabs.forEach(el => {
		if (el.id.slice(-1) == currentTab) {
			el.classList.remove('hidden');
		}
	});
};

const generateStructures = (town) => {
	commonStructures.forEach(el => {
		document.querySelector('.town-structures').insertAdjacentHTML('beforeend', `
			<div class="town-structures-item">
				<img src="images/towns/${town}/${el.engname.replace(/[^a-z1-5()]+/g, '')}.jpg" alt="Постройка">
				<div class="structure-name">
					<span>${el.rusname.charAt(0).toUpperCase() + el.rusname.substr(1)}</span>
				</div>
				<div class="structure-overlay" data-engname="${el.engname}" data-rusname="${el.rusname}" data-req="${el.req}" data-cost="${el.cost}" data-desc="${el.desc}"></div>
			</div>
		`);
	});

	townsArray.forEach(el => {
		if (el.engname == town) {
			el.structures.forEach(struct => {
				document.querySelector('.town-structures').insertAdjacentHTML('beforeend', `
					<div class="town-structures-item">
						<img src="images/towns/${town}/${struct.engname.replace(/[^a-z1-5()]+/g, '')}.jpg" alt="Постройка">
						<div class="structure-name">
							<span>${struct.rusname.charAt(0).toUpperCase() + struct.rusname.substr(1)}</span>
						</div>
						<div class="structure-overlay" data-engname="${struct.engname}" data-rusname="${struct.rusname}" data-req="${struct.req}" data-cost="${struct.cost}" data-desc="${struct.desc}"></div>
					</div>
				`);
			});
		}
		return;
	});
};

const getCostStr = (str) => {
    if (str == 'Нельзя купить') return str;
    const costArray = str.split('_');
    let result = '';
    for (let i=0; i<costArray.length; i++) {
        if (i % 2 != 0) {
            result += `<span>&nbsp;${costArray[i-1]}<b class='resources ${costArray[i]}'></b></span>`;
        }
    }
    return result;
};

const selectStructure = (elem) => {
	document.querySelector('.structure-info-img').src = `images/towns/${townSelector.value}/${elem.dataset.engname.replace(/[^a-z1-5()]+/g, '')}.jpg`;
	document.querySelector('.structure-info-name').innerHTML = elem.dataset.rusname.charAt(0).toUpperCase() + elem.dataset.rusname.substr(1);
	document.querySelector('.structure-info-desc').innerHTML = elem.dataset.desc;
	document.querySelector('.structure-info-requires').innerHTML = `Требования:${elem.dataset.req}`;
	document.querySelector('.structure-info-cost').innerHTML = `Цена: ${getCostStr(elem.dataset.cost)}`;
};

const showStructInfo = () => {
	const infoWindow = document.querySelector('.structure-info');
	infoWindow.classList.remove('hidden');
	infoWindow.style.marginTop = `-${infoWindow.offsetHeight / 2}px`;
};
const hideStructInfo = () => {
	document.querySelector('.structure-info').classList.add('hidden');
};

const generateMobs = (town) => {
	townsArray.forEach(el => {
		if (el.engname == town) {
			mobsArray.forEach(elem => {
				if (el.rusname == elem.castle.toLowerCase()) {
					document.querySelector('.town-mobs').insertAdjacentHTML('beforeend', `
						<div class="town-mobs-item">
							<img src="images/mobs/${elem.engname.replace(/[^a-z1-5()]+/g, '')}.jpg" alt="Изображение существа">
							<div class="mob-name">
								<span>${elem.rusname.charAt(0).toUpperCase() + elem.rusname.substr(1)}</span>
							</div>
						</div>
					`);
				}
			});
		}
		return;
	});
};

const generateHeroes = (town) => {
	townsArray.forEach(el => {
		if (el.engname == town) {
			heroesArray.forEach(elem => {
				if (el.rusname == elem.castle.toLowerCase()) {
					document.querySelector('.town-heroes').insertAdjacentHTML('beforeend', `
						<div class="town-heroes-item">
							<img src="images/heroes/${elem.engname.replace(/[^a-z1-5()]+/g, '')}.jpg" alt="Изображение героя">
							<div class="hero-name">
								<span>${elem.rusname.charAt(0).toUpperCase() + elem.rusname.substr(1)}</span>
							</div>
						</div>
					`);
				}
			});
		}
		return;
	});
};

const changeMosaic = (town) => {
	document.querySelector('#town-mosaic-1').src = `images/towns/${town}/${town}-mosaic-1.jpg`;
	document.querySelector('#town-mosaic-2').src = `images/towns/${town}/${town}-mosaic-2.jpg`;
};

const makeTreeSelector = (town) => {
	commonStructures.forEach(el => {
		document.querySelector('#treeSelector').insertAdjacentHTML('beforeend', `
			<option value="${el.engname}" data-chain="${el.chain}">${el.rusname.charAt(0).toUpperCase() + el.rusname.substr(1)}</option>
		`);
	});

	townsArray.forEach(el => {
		if (el.engname == town) {
			el.structures.forEach(struct => {
				document.querySelector('#treeSelector').insertAdjacentHTML('beforeend', `
					<option value="${struct.engname}" data-chain="${struct.chain}">${struct.rusname.charAt(0).toUpperCase() + struct.rusname.substr(1)}</option>
				`);
			});
		}
		return;
	});
};

const changeTreeIcon = (structure, town) => {
	document.querySelector('#tree-selector-icon').src = `images/towns/${town}/${structure.replace(/[^a-z1-5()]+/g, '')}.jpg`;
};

const pullTreeStructures = (chain, town) => {
	document.querySelector('.town-tree-items').innerHTML = '';
	document.querySelector('.no-requires').classList.add('hidden');
	if (chain.includes('/')) {
		const chainArr = chain.split('/').slice(0, -1);
		chainArr.sort(function(a,b){return a-b});
		for (let c of chainArr) {
			commonStructures.forEach(el => {
				if (el.id == c) {
					document.querySelector('.town-tree-items').insertAdjacentHTML('beforeend', `
						<div class="town-tree-item">
							<img src="images/towns/${town}/${el.engname.replace(/[^a-z1-5()]+/g, '')}.jpg" alt="Постройка">
							<span>${el.rusname.charAt(0).toUpperCase() + el.rusname.substr(1)}</span>
						</div>
					`);
				}
				return;
			});
			townsArray.forEach(el => {
				if (el.engname == town) {
					el.structures.forEach(struct => {
						if (struct.id == c) {
							document.querySelector('.town-tree-items').insertAdjacentHTML('beforeend', `
								<div class="town-tree-item">
									<img src="images/towns/${town}/${struct.engname.replace(/[^a-z1-5()]+/g, '')}.jpg" alt="Постройка">
									<span>${struct.rusname.charAt(0).toUpperCase() + struct.rusname.substr(1)}</span>
								</div>
							`);
						}
						return;
					});
				}
				return;
			});
		}
	} else {
		document.querySelector('.no-requires').classList.remove('hidden');
	}
};

const changeDescription = (town) => {
	townsArray.forEach(el => {
		if (el.engname == town) {
			document.querySelector('.town-description').insertAdjacentHTML('beforeend', el.info);
			document.querySelector('.town-description').insertAdjacentHTML('beforeend', `
				<div class="total-cost">
					<span>Стоимость всех построек города:</span>
					${getCostStr(el.total)}
				</div>
    		`)
		}
		return;
	});
};

const changeTownViews = (town) => {
	document.querySelector('#town-appearance-1').src = `images/towns/${town}/${town}-view-1.png`;
	document.querySelector('#town-appearance-2').src = `images/towns/${town}/${town}-view-2.png`;
	document.querySelector('#town-appearance-3').src = `images/towns/${town}/${town}-view-3.png`;
	document.querySelector('#town-appearance-4').src = `images/towns/${town}/${town}-view-4.png`;
};

// Элементы и переменные
const townSelector = document.querySelector('#townSelect');
const treeSelector = document.querySelector('#treeSelector');
const tabLeft = document.querySelector('.tab-selector-left');
const tabRight = document.querySelector('.tab-selector-right');
const closeButton = document.querySelector('.close-button');
let currentTab = 1;

// Обработчики событий
document.addEventListener('click', event => {
	currentTab = document.querySelector('.town-details-tabs').className.slice(-1);

	if (event.target.className == 'structure-overlay') {
		selectStructure(event.target);
		showStructInfo();
	}

	if (event.target == tabLeft) {
		tabsChange('left', currentTab);
		showDetails();
	} else if (event.target == tabRight) {
		tabsChange('right', currentTab);
		showDetails();
	}

	if (event.target == closeButton) {
		hideStructInfo();
	}

	if (event.target.parentNode.className == 'require-item') {
		pushRequireItems(event.target.parentNode, townSelector.value);
	}
});

townSelector.addEventListener('change', () => {
	changeTown(townSelector.value);
});
$('#treeSelector').change(function(){
	changeTreeIcon(treeSelector.value, townSelector.value);
	pullTreeStructures($(this).find(':selected').data('chain').toString(), townSelector.value);
})

window.addEventListener('load', () => {
	if (localStorage.getItem('selectedTab-m') != null) currentTab = +localStorage.getItem('selectedTab-m');
	tabsChange('no', currentTab);
	if (localStorage.getItem('selectedTown-m') != null) {
        changeTown(localStorage.getItem('selectedTown-m'));
        townSelector.value = localStorage.getItem('selectedTown-m');
    } else {
        changeTown('castle');
    }
	changeTreeIcon(treeSelector.value, townSelector.value);
});
