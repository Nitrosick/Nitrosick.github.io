// Ключевые слова для поиска
const associations = [
	{link: 'mobs-page.html', 						keywords: ['Мобы', 'Существа', 'Монстры', 'Юниты', 'Статы мобов', 'Характеристики существ']},
	{link: 'comparator-page.html', 					keywords: ['Сравнить существ', 'Сопоставить существ', 'Компаратор']},
	{link: 'artifact-page.html', 					keywords: ['Артефакты', 'Арты', 'Лут', 'Шмот', 'Оружие', 'Броня', 'Кольца', 'Амулеты']},
	{link: 'heroes-page.html', 						keywords: ['Герои', 'Чары', 'Чемпионы', 'Персонажи', 'Персы', 'Стартовая армия', 'Биография']},
	{link: 'spells-page.html', 						keywords: ['Заклинания', 'Спеллы', 'Магия', 'Вода', 'Огонь', 'Земля', 'Воздух']},
	{link: 'objects-page.html', 					keywords: ['Игровые объекты', 'Объекты', 'Сокровищницы', 'Двелл', 'Карта приключений', 'Жилища', 'Шахты', 'Порталы']},
	{link: 'maps-page.html', 						keywords: ['Карты', 'Мапы', 'Пользовательские карты', 'Кастомные карты', 'Скачать карты']},
	{link: 'soft-page.html', 						keywords: ['Софт', 'Программы', 'Утилиты', 'Патчи', 'Проги', 'Дополнения', 'HotA скачать', 'Герои 3 скачать']},
	{link: 'towns-page.html', 						keywords: ['Города', 'Замки', 'Постройки', 'Цепочка построек', 'Карта загадки']},
	{link: 'editor-page.html', 						keywords: ['Редактор карт', 'Гайд по редактору', 'Создание карт']},
	{link: 'mechanics-page.html', 					keywords: ['Механики игры', 'Секреты', 'Хитрости', 'Информация по игре']},
	{link: 'mechanics-page.html#atk_dfs_dmg', 		keywords: ['Урон', 'Атака', 'Защита', 'Рассчет урона']},
	{link: 'mechanics-page.html#atk_dfs_dmg.3', 	keywords: ['Модификаторы урона']},
	{link: 'mechanics-page.html#luck_morale', 		keywords: ['Удача', 'Боевой дух', 'Мораль', 'Дополнительный ход', 'Пропуск хода']},
	{link: 'mechanics-page.html#archery', 			keywords: ['Стрельба']},
	{link: 'mechanics-page.html#archery.2', 		keywords: ['Штрафы стрельбы']},
	{link: 'mechanics-page.html#archery.4', 		keywords: ['Блокирование']},
	{link: 'mechanics-page.html#health', 			keywords: ['Здоровье существ', 'ХП', 'Хиты']},
	{link: 'mechanics-page.html#move_speed', 		keywords: ['Скорость существ', 'Передвижение', 'Очки передвижения', 'Штрафы местности', 'Разгон']},
	{link: 'mechanics-page.html#move_speed.2', 		keywords: ['Запас хода', 'МП']},
	{link: 'mechanics-page-2.html#ai', 				keywords: ['ИИ', 'Компьютерный игрок', 'Искуственный интеллект', 'Уровень сложности', 'Сложность', 'Поведение ИИ', 'Агрессия ИИ']},
	{link: 'mechanics-page-2.html#ai.5', 			keywords: ['Выбор заклинаний ИИ', 'Ценность заклинаний']},
	{link: 'mechanics-page-2.html#ai.8', 			keywords: ['Движение ИИ в бою']},
	{link: 'mechanics-page-3.html#growth', 			keywords: ['Прирост существ', 'Базовый прирост', 'Население']},
	{link: 'mechanics-page-3.html#growth.2', 		keywords: ['Недели существ', 'Месяцы существ', 'Чума', 'Недели чумы']},
	{link: 'mechanics-page-3.html#status', 			keywords: ['Статус существ', 'Нежить', 'Големы', 'Живые существа', 'Горгульи', 'Элементали']},
	{link: 'mechanics-page-3.html#land', 			keywords: ['Почва', 'Родная земля', 'Местность']},
	{link: 'mechanics-page-3.html#ctrstrike', 		keywords: ['Контратака', 'Контрудар', 'Ответка', 'Сдача']},
	{link: 'mechanics-page-3.html#hatred', 			keywords: ['Ненависть', 'Заклятые враги', 'Антагонисты']},
	{link: 'mechanics-page-3.html#neutralize', 		keywords: ['Нейтрализация заклинаний', 'Сопротивление магии']},
	{link: 'mechanics-page-3.html#absorption', 		keywords: ['Поглощение', 'Резист', 'Снижение урона']},
	{link: 'mechanics-page-3.html#firebreath', 		keywords: ['Огненное дыхание', 'Дыхание драконов', 'Прожиг', 'Массовая атака', 'Фэйк прожиг', 'Разворот и атака']},
	{link: 'mechanics-page-3.html#mob_skills', 		keywords: ['Способности существ', 'Скиллы', 'Особенности существ', 'Рут', 'Заклинания существ']},
	{link: 'mechanics-page-3.html#mob_skills.2',	keywords: ['Воскрешение']},
	{link: 'mechanics-page-3.html#mob_skills.9',	keywords: ['Яд', 'Старость']},
	{link: 'mechanics-page-3.html#mob_skills.4',	keywords: ['Стан', 'Паралич', 'Окаменение']},
	{link: 'mechanics-page-3.html#combat_veh', 		keywords: ['Боевые машины', 'Осадные машины', 'Машины']},
	{link: 'mechanics-page-3.html#combat_veh.1',	keywords: ['Катапульта']},
	{link: 'mechanics-page-3.html#combat_veh.2',	keywords: ['Баллиста']},
	{link: 'mechanics-page-3.html#combat_veh.3',	keywords: ['Пушка']},
	{link: 'mechanics-page-3.html#combat_veh.4',	keywords: ['Палатка']},
	{link: 'mechanics-page-3.html#combat_veh.5',	keywords: ['Подвода с боеприпасами', 'Тележка']},
	{link: 'mechanics-page-4.html#spells', 			keywords: ['Механика заклинаний', 'Особенности заклинаний']},
	{link: 'mechanics-page-4.html#spells.2', 		keywords: ['Стена огня', 'Огненная стена', 'Стенка']},
	{link: 'mechanics-page-4.html#spells.3', 		keywords: ['Берсерк']},
	{link: 'mechanics-page-4.html#spells.4', 		keywords: ['Огненный щит', 'Щит огня', 'Щит ифритов']},
	{link: 'mechanics-page-4.html#spells.5', 		keywords: ['Телепорт', 'Блинк']},
	{link: 'mechanics-page-4.html#spells.6', 		keywords: ['Клон', 'Двойник']},
	{link: 'mechanics-page-4.html#spells.7', 		keywords: ['Маскировка']},
	{link: 'mechanics-page-4.html#spells.8', 		keywords: ['Гипноз', 'Контроль']},
	{link: 'mechanics-page-4.html#spells.9', 		keywords: ['Цепная молния', 'Чайник']},
	{link: 'mechanics-page-4.html#spells.10', 		keywords: ['Полет', 'Флай']},
	{link: 'mechanics-page-4.html#spells.11', 		keywords: ['Антимагия']},
	{link: 'mechanics-page-4.html#spells.12', 		keywords: ['Силовое поле', 'Форс филд']},
	{link: 'mechanics-page-4.html#spells.13', 		keywords: ['Заклинания на землю', 'Устанавливаемые заклинания']},
	{link: 'mechanics-page-4.html#specialize', 		keywords: ['Специализации героев', 'Специализация по заклинаниям']},
	{link: 'mechanics-page-4.html#grail.1', 		keywords: ['Грааль', 'Раскопки грааля']},
	{link: 'mechanics-page-4.html#grail.2', 		keywords: ['Храм грааля']},
	{link: 'mechanics-page-4.html#fortification',	keywords: ['Фортификации', 'Осада города', 'Штурм города', 'Городские укрепления', 'Оборонные сооружения']},
	{link: 'mechanics-page-4.html#fortification.1',	keywords: ['Стены города', 'Ворота']},
	{link: 'mechanics-page-4.html#fortification.2',	keywords: ['Башни', 'Стрелковые башни']},
	{link: 'mechanics-page-4.html#fortification.3',	keywords: ['Ров', 'Мины']},
	{link: 'community-page', 						keywords: ['Игровые сообщества', 'Сообщества Героев 3', 'Сайты по Героям 3', 'Стримы', 'Форумы']},
	{link: 'about-page', 							keywords: ['О проекте', 'О сайте Hommbase', 'Наша миссия']}
];
