"use strict";

// Смена города
const changeTown = (town) => {
    townSelector.value = town;
    clearFields();
    changeTownIcon(town);
    changeTownInfo(town);
    changeTownAudio(town);
    changeTownBack(town);
    changeColor(town);
    pullStructures(town);
    changeTownScheme(town);
    pullMobs(town);
    pullHeroes(town);
    changeTownMosaic(town);
    changeAppearance(town);

    localStorage.setItem('selectedTown', town);
};

const clearFields = () => {
    document.querySelector('.town-structures').innerHTML = '';
    document.querySelectorAll('.tree-column').forEach(el => {el.innerHTML = '';});
    document.querySelector('.town-mobs-block').innerHTML = '';
    document.querySelector('.town-heroes-block').innerHTML = '';
};

const changeTownIcon = (town) => {
    const icon = document.querySelector('.town-icon');
    icon.src = `images/towns/${town}/${town}-icon.jpg`;
};

const changeTownInfo = (town) => {
    const title = document.querySelector('.town-info-title');
    const text = document.querySelector('.town-info-text');
    townsArray.forEach(el => {
        if (el.engname == town) {
            title.textContent = `${el.engname.charAt(0).toUpperCase() + el.engname.substr(1)} / ${el.rusname.charAt(0).toUpperCase() + el.rusname.substr(1)}`;
            text.innerHTML = el.info;
            return;
        }
    });
};

const changeTownAudio = (town) => {
    const audio = document.querySelector('#town-audio');
    if (ua.browser.family == 'Opera' || ua.browser.family == 'Firefox') {
        audio.src = `images/towns/${town}/${town}-theme.ogg`;
    } else {
        audio.src = `images/towns/${town}/${town}-theme.mp3`;
    }
};

const changeTownBack = (town) => {
    document.querySelector('#full-town').src = `images/towns/${town}/${town}-back-full.jpg`;
    document.querySelector('#empty-town').src = `images/towns/${town}/${town}-back-empty.jpg`;
    document.querySelector('#siege-town').src = `images/towns/${town}/${town}-back-siege.jpg`;
    document.querySelector('#marks-town').src = `images/towns/${town}/${town}-back-marks.jpg`;
};

const changeColor = (town) => {
    townsArray.forEach(el => {
        if (el.engname == town) {
            document.querySelector('.common-background').style.background = `
                linear-gradient(#303030, transparent 18%, transparent 90%, #303030),
                url(images/towns/${town}/${town}-color-1.png) top left no-repeat,
                url(images/towns/${town}/${town}-color-2.png) top right no-repeat
            `;
            document.querySelector('header .wrapper').style.boxShadow = `0 15px 25px -20px #${el.color}`;
            document.querySelector('footer .wrapper').style.boxShadow = `0 -15px 25px -20px #${el.color}`;
        }
        return;
    });
};

const changeTownScheme = (town) => {
    const columns = document.querySelectorAll('.tree-column');
    commonStructures.forEach(el => {
        columns[el.column - 1].insertAdjacentHTML('beforeend', `
            <div class="tree-column-item tree-${el.class}" data-id="${el.id}" data-chain="${el.chain}">
				<img src="images/towns/${town}/${el.engname.replace(/[^a-z1-5()]+/g, '')}.jpg" alt="Изображение постройки" width="135">
				<span>${el.rusname.charAt(0).toUpperCase() + el.rusname.substr(1)}</span>
			</div>
        `);
    });
    townsArray.forEach(elem => {
        if (elem.engname == town) {
            columns.forEach(el => {el.style.maxHeight = elem.height + 'px';});
            elem.structures.forEach(el => {
                columns[el.column - 1].insertAdjacentHTML('beforeend', `
                    <div class="tree-column-item tree-${el.class}" data-id="${el.id}" data-chain="${el.chain}">
                        <img src="images/towns/${town}/${el.engname.replace(/[^a-z1-5()]+/g, '')}.jpg" alt="Изображение постройки" width="135">
                        <span>${el.rusname.charAt(0).toUpperCase() + el.rusname.substr(1)}</span>
                    </div>
                `);
            });
            return;
        }
    });
};

const showChain = (chain) => {
    document.querySelectorAll('.tree-column')[6].classList.remove('last-tree-column');
    const chainArr = chain.split('/');
    clearChain();
    document.querySelectorAll('.tree-column-item').forEach(el => {
        if (chainArr.includes(el.dataset.id)) {
            el.classList.add('tree-column-item-on');
        } else {
            el.classList.add('tree-column-item-off');
        }
    });
};

const clearChain = () => {
    document.querySelectorAll('.tree-column-item').forEach(el => {
        el.classList.remove('tree-column-item-on', 'tree-column-item-off');
    });
};

const changeTownMosaic = (town) => {
    document.querySelector('#mosaic-img-1').src = `images/towns/${town}/${town}-mosaic-1.jpg`;
    document.querySelector('#mosaic-img-2').src = `images/towns/${town}/${town}-mosaic-2.jpg`;
    document.querySelector('#town-grail').src = `images/towns/${town}/grail.jpg`;
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

const getTotalCost = (town) => {
    document.querySelector('.town-structures').insertAdjacentHTML('beforeend', `
        <div class="total-cost block">
			<span>Суммарная стоимость всех построек города:</span>
            ${getCostStr(town.total)}
		</div>
    `)
};

const itemGenerate = (town, elem, index) => {
    return `
        <div class="town-structures-item" style="z-index: ${index}">
            <img src="images/towns/${town}/${elem.engname.replace(/[^a-z1-5()]+/g, '')}.jpg" alt="Городская постройка">
            <div class="name-box">
                <h3>${elem.rusname.charAt(0).toUpperCase() + elem.rusname.substr(1)}</h3>
            </div>
            <div class="droped-info">
                <span class="about">${elem.desc}</span>
                <span class="requirements">Требования:${elem.req}</span>
                <div class="cost"><span>Цена:&nbsp;</span>${getCostStr(elem.cost)}</div>
            </div>
        </div>
    `;
};

const pullStructures = (town) => {
    const structuresBlock = document.querySelector('.town-structures');
    townsArray.forEach(el => {
        if (el.engname == town) {
            let index = 100;
            getTotalCost(el);
            commonStructures.forEach(struct => {
                structuresBlock.insertAdjacentHTML('beforeend', itemGenerate(town, struct, index));
                index--;
            });
            el.structures.forEach(struct => {
                structuresBlock.insertAdjacentHTML('beforeend', itemGenerate(town, struct, index));
                index--;
            });
            return;
        }
    });
};

const pullMobs = (town) => {
    const mobsBlock = document.querySelector('.town-mobs-block');
    let rusname = '';
    townsArray.forEach(el => {
        if (el.engname == town) {
            rusname = el.rusname;
            document.querySelector('#town-fort').src = `images/towns/${town}/castle.jpg`;
            return;
        }
    });
    if (rusname != '') {
        mobsArray.forEach(el => {
            if (el.castle.toLowerCase() == rusname) {
                mobsBlock.insertAdjacentHTML('beforeend', `
                    <div class="mob-item">
                        <img src="images/mobs/${el.engname.replace(/[^a-z()]+/g, '')}.jpg" alt="Изображение существа">
                        <div class="name-box">
                            <span>${el.rusname.charAt(0).toUpperCase() + el.rusname.substr(1)}</span>
                        </div>
                    </div>
                `);
            }
        });
    }
};

const pullHeroes = (town) => {
    const heroesBlock = document.querySelector('.town-heroes-block');
    let rusname = '';
    townsArray.forEach(el => {
        if (el.engname == town) {
            rusname = el.rusname;
            document.querySelector('#town-tavern').src = `images/towns/${town}/tavern.jpg`;
            return;
        }
    });
    if (rusname != '') {
        heroesArray.forEach(el => {
            if (el.castle.toLowerCase() == rusname) {
                heroesBlock.insertAdjacentHTML('beforeend', `
                    <div class="hero-item">
                        <img src="images/heroes/${el.engname.replace(/[^a-z()]+/g, '')}.jpg" alt="Изображение героя">
                        <div class="name-box">
                            <span>${el.rusname.charAt(0).toUpperCase() + el.rusname.substr(1)}</span>
                        </div>
                    </div>
                `);
            }
        });
    }
};

const changeAppearance = (town) => {
    document.querySelector('#town-appearance-1').src = `images/towns/${town}/${town}-view-1.png`;
    document.querySelector('#town-appearance-2').src = `images/towns/${town}/${town}-view-2.png`;
    document.querySelector('#town-appearance-3').src = `images/towns/${town}/${town}-view-3.png`;
    document.querySelector('#town-appearance-4').src = `images/towns/${town}/${town}-view-4.png`;
};

// Отображение информации о городе
const infoButton = document.querySelector('.town-info-button');
const townInfo = document.querySelector('.town-info');

const switchInfo = (open) => {
    if (open) {
        infoButton.style.opacity = 0;
        infoButton.style.cursor = 'default';
        townInfo.classList.add('town-info-opened');
    } else {
        infoButton.style.opacity = 1;
        infoButton.style.cursor = 'pointer';
        townInfo.classList.remove('town-info-opened');
    }
}

// Переключение вида города
const viewButtons = [
    document.querySelector('#switcher-full'),
    document.querySelector('#switcher-empty'),
    document.querySelector('#switcher-siege'),
    document.querySelector('#switcher-marks')
];
const townBackgrounds = [
    document.querySelector('#full-town'),
    document.querySelector('#empty-town'),
    document.querySelector('#siege-town'),
    document.querySelector('#marks-town')
];

const switchTownPic = (view) => {
    townBackgrounds.forEach(el => {el.style.opacity = 0});
    viewButtons.forEach(el => {el.classList.remove('active')});
    switch (view) {
        case 'switcher-full':
            townBackgrounds[0].style.opacity = 1;
            viewButtons[0].classList.add('active');
            break;
        case 'switcher-empty':
            townBackgrounds[1].style.opacity = 1;
            viewButtons[1].classList.add('active');
            break;
        case 'switcher-siege':
            townBackgrounds[2].style.opacity = 1;
            viewButtons[2].classList.add('active');
            break;
        case 'switcher-marks':
            townBackgrounds[3].style.opacity = 1;
            viewButtons[3].classList.add('active');
            break;
    }
    localStorage.setItem('townView', view);
};

// Переключение вкладок
const tabsArray = [
    document.querySelector('#structures-tab'),
    document.querySelector('#tree-tab'),
    document.querySelector('#mobs-tab'),
    document.querySelector('#heroes-tab'),
    document.querySelector('#mosaic-tab')
];
const tilesBlock = [
    document.querySelector('.town-structures'),
    document.querySelector('.town-tree'),
    document.querySelector('.town-mobs'),
    document.querySelector('.town-heroes'),
    document.querySelector('.town-mosaic')
];

const switchTab = (tab) => {
    tilesBlock.forEach(el => {el.classList.add('hidden-block');});
    tabsArray.forEach(el => {el.classList.remove('active');});
    switch (tab) {
        case 'structures-tab':
            tilesBlock[0].classList.remove('hidden-block');
            tabsArray[0].classList.add('active');
            break;
        case 'tree-tab':
            tilesBlock[1].classList.remove('hidden-block');
            tabsArray[1].classList.add('active');
            break;
        case 'mobs-tab':
            tilesBlock[2].classList.remove('hidden-block');
            tabsArray[2].classList.add('active');
            break;
        case 'heroes-tab':
            tilesBlock[3].classList.remove('hidden-block');
            tabsArray[3].classList.add('active');
            break;
        case 'mosaic-tab':
            tilesBlock[4].classList.remove('hidden-block');
            tabsArray[4].classList.add('active');
            break;
    }
    localStorage.setItem('selectedTab', tab);
};

// Обработчики событий
document.addEventListener('click', event => {
    if (event.target == infoButton) {
        switchInfo(true);
    } else if (event.target.id == 'full-town') {
        switchInfo(false);
    }
    viewButtons.forEach(el => {
        if (event.target == el) {
            switchTownPic(event.target.id);
            return;
        }
    });
    tabsArray.forEach(el => {
        if (event.target == el) {
            switchTab(event.target.id);
            return;
        }
    });
    if (event.target.parentNode.classList.contains('tree-column-item')) {
        showChain(event.target.parentNode.dataset.chain);
    } else {
        clearChain();
    }
});

const townSelector = document.querySelector('#town');
const options = document.querySelectorAll('#town option');

townSelector.addEventListener('change', () => {
    changeTown(townSelector.value);
});

window.addEventListener('load', () => {
    if (localStorage.getItem('selectedTown') != null) {
        changeTown(localStorage.getItem('selectedTown'));
        townSelector.value = localStorage.getItem('selectedTown');
    } else {
        changeTown('castle');
    }
    if (localStorage.getItem('townView') != null) switchTownPic(localStorage.getItem('townView'));
    if (localStorage.getItem('selectedTab') != null) switchTab(localStorage.getItem('selectedTab'));

    document.querySelector('.town-background').style.height = window.innerWidth < 1560 ? window.innerWidth / 2.1333 + 'px' : '703px';
    document.querySelector('.town-info').style.overflowY = window.innerWidth < 1560 ? 'auto' : 'hidden';
});

window.addEventListener('resize', () => {
    document.querySelector('.town-background').style.height = document.querySelector('#full-town').getBoundingClientRect().height + 'px';
    document.querySelector('.town-info').style.overflowY = window.innerWidth < 1560 ? 'auto' : 'hidden';
});

document.addEventListener('keydown', event => {
    if (event.key == 'Tab') {
        event.preventDefault();
        for (let i=0; i<tabsArray.length; i++) {
            if (tabsArray[i].classList.contains('active')) {
                i == 4 ? switchTab(tabsArray[0].id) : switchTab(tabsArray[i+1].id);
                return;
            }
        }
    } else if ((event.ctrlKey && event.key == 'ArrowRight') ||
               (event.ctrlKey && event.key == 'ArrowDown')) {
        const currentTown = townSelector.value;
        for (let i=0; i<options.length; i++) {
            if (options[i].value == currentTown) {
                i == options.length-1 ? changeTown(options[0].value) : changeTown(options[i+1].value);
            }
        }
    } else if ((event.ctrlKey && event.key == 'ArrowLeft') ||
               (event.ctrlKey && event.key == 'ArrowUp')) {
        const currentTown = townSelector.value;
        for (let i=0; i<options.length; i++) {
            if (options[i].value == currentTown) {
                i == 0 ? changeTown(options[options.length-1].value) : changeTown(options[i-1].value);
            }
        }
    }
    if (event.key == 'Escape') {
        switchInfo(false);
    }
});
