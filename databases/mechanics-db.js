// Оглавление страниц механик
const tableOfContent = `
	<a class="link" href="mechanics-page.html#atk_dfs_dmg" id="link1">				1. Атака, Защита и Урон</a>
		<a class="sublink" href="mechanics-page.html#atk_dfs_dmg.1" name="link1">	1.1 Расчет нанесенного урона в бою</a>
		<a class="sublink" href="mechanics-page.html#atk_dfs_dmg.2" name="link1">	1.2 Базовый урон юнита</a>
		<a class="sublink" href="mechanics-page.html#atk_dfs_dmg.3" name="link1">	1.3 Модификатор базового урона</a>
		<a class="sublink" href="mechanics-page.html#atk_dfs_dmg.4" name="link1">	1.4 Модификатор нападения</a>
		<a class="sublink" href="mechanics-page.html#atk_dfs_dmg.5" name="link1">	1.5 Модификатор стрельбы</a>
		<a class="sublink" href="mechanics-page.html#atk_dfs_dmg.6" name="link1">	1.6 Модификатор удачи</a>
		<a class="sublink" href="mechanics-page.html#atk_dfs_dmg.7" name="link1">	1.7 Модификаторы суммарного урона</a>
	<a class="link" href="mechanics-page.html#luck_morale" id="link2">				2. Удача и Боевой дух</a>
	<a class="link" href="mechanics-page.html#archery" id="link3">					3. Стрельба</a>
		<a class="sublink" href="mechanics-page.html#archery.1" name="link3">		3.1 Количество выстрелов</a>
		<a class="sublink" href="mechanics-page.html#archery.2" name="link3">		3.2 Штрафы стрельбы</a>
		<a class="sublink" href="mechanics-page.html#archery.3" name="link3">		3.3 Стрельба через крепостные стены</a>
		<a class="sublink" href="mechanics-page.html#archery.4" name="link3">		3.4 Блокирование</a>
	<a class="link" href="mechanics-page.html#health" id="link4">					4. Здоровье юнитов</a>
	<a class="link" href="mechanics-page.html#move_speed" id="link5">				5. Передвижение и Скорость</a>
		<a class="sublink" href="mechanics-page.html#move_speed.1" name="link5">	5.1 Скорость существ</a>
		<a class="sublink" href="mechanics-page.html#move_speed.2" name="link5">	5.2 Запас хода и особенности перемещения</a>
		<a class="sublink" href="mechanics-page.html#move_speed.3" name="link5">	5.3 Стартовый запас хода героев</a>
	<a class="link" href="mechanics-page-2.html#ai" id="link6">						6. Поведение ИИ</a>
		<a class="sublink" href="mechanics-page-2.html#ai.1" name="link6">			6.1 Уровень сложности игры</a>
		<a class="sublink" href="mechanics-page-2.html#ai.2" name="link6">			6.2 Выбор вторичных навыков</a>
		<a class="sublink" href="mechanics-page-2.html#ai.3" name="link6">			6.3 Выбор артефактов</a>
		<a class="sublink" href="mechanics-page-2.html#ai.4" name="link6">			6.4 Решение о нападении</a>
		<a class="sublink" href="mechanics-page-2.html#ai.5" name="link6">			6.5 Ценность заклинаний</a>
		<a class="sublink" href="mechanics-page-2.html#ai.6" name="link6">			6.6 Расстановка отрядов в армии ИИ</a>
		<a class="sublink" href="mechanics-page-2.html#ai.7" name="link6">			6.7 Поведение ИИ в бою</a>
		<a class="sublink" href="mechanics-page-2.html#ai.8" name="link6">			6.8 Движение по полю боя</a>
	<a class="link" href="mechanics-page-3.html#growth" id="link7">					7. Прирост существ</a>
	    <a class="sublink" href="mechanics-page-3.html#growth.1" name="link7">		7.1 Базовый прирост существ в городах</a>
		<a class="sublink" href="mechanics-page-3.html#growth.2" name="link7">		7.2 Недели и месяцы существ</a>
	<a class="link" href="mechanics-page-3.html#status" id="link8">					8. Статус юнита</a>
	<a class="link" href="mechanics-page-3.html#land" id="link9">					9. Родная земля</a>
	<a class="link" href="mechanics-page-3.html#ctrstrike" id="link10">				10. Контратака</a>
	<a class="link" href="mechanics-page-3.html#hatred" id="link11">				11. Ненависть</a>
	<a class="link" href="mechanics-page-3.html#neutralize" id="link12">			12. Нейтрализация заклинаний</a>
	<a class="link" href="mechanics-page-3.html#absorption" id="link13">			13. Поглощение урона от магии</a>
	<a class="link" href="mechanics-page-3.html#firebreath" id="link14">			14. Огненное дыхание и Разворот перед атакой</a>
	<a class="link" href="mechanics-page-3.html#mob_skills" id="link15">			15. Способности юнитов</a>
		<a class="sublink" href="mechanics-page-3.html#mob_skills.1" name="link15">	15.1 Кавалерийский разбег</a>
		<a class="sublink" href="mechanics-page-3.html#mob_skills.2" name="link15">	15.2 Архангелы: Воскрешение</a>
		<a class="sublink" href="mechanics-page-3.html#mob_skills.3" name="link15">	15.3 Дендроиды и Дендроиды-солдаты: Корни</a>
		<a class="sublink" href="mechanics-page-3.html#mob_skills.4" name="link15">	15.4 Способности: Ослепление, Окаменение и Паралич</a>
		<a class="sublink" href="mechanics-page-3.html#mob_skills.5" name="link15">	15.5 Верховные джинны: Заклинания</a>
		<a class="sublink" href="mechanics-page-3.html#mob_skills.6" name="link15">	15.6 Черти: Кража маны</a>
		<a class="sublink" href="mechanics-page-3.html#mob_skills.7" name="link15">	15.7 Властители пропасти: Демонология</a>
		<a class="sublink" href="mechanics-page-3.html#mob_skills.8" name="link15">	15.8 Могучие горгоны: Смертельный взгляд</a>
		<a class="sublink" href="mechanics-page-3.html#mob_skills.9" name="link15">	15.9 Яд и Старость</a>
		<a class="sublink" href="mechanics-page-3.html#mob_skills.10" name="link15">15.10 Фениксы: Перерождение</a>
		<a class="sublink" href="mechanics-page-3.html#mob_skills.11" name="link15">15.11 Морские волки: Точный выстрел</a>
		<a class="sublink" href="mechanics-page-3.html#mob_skills.12" name="link15">15.12 Аспиды: Месть</a>
		<a class="sublink" href="mechanics-page-3.html#mob_skills.13" name="link15">15.13 Фангармы: Гипноз</a>
		<a class="sublink" href="mechanics-page-3.html#mob_skills.14" name="link15">15.14 Чародеи: Заклинания</a>
		<a class="sublink" href="mechanics-page-3.html#mob_skills.15" name="link15">15.15 Сказочные драконы: Заклинания</a>
		<a class="sublink" href="mechanics-page-3.html#mob_skills.16" name="link15">15.16 Ржавые драконы: Кислотное дыхание</a>
	<a class="link" href="mechanics-page-3.html#combat_veh" id="link16">			16. Боевые машины</a>
		<a class="sublink" href="mechanics-page-3.html#combat_veh.1" name="link16">	16.1 Катапульта</a>
		<a class="sublink" href="mechanics-page-3.html#combat_veh.2" name="link16">	16.2 Баллиста</a>
		<a class="sublink" href="mechanics-page-3.html#combat_veh.3" name="link16">	16.3 Пушка</a>
		<a class="sublink" href="mechanics-page-3.html#combat_veh.4" name="link16">	16.4 Палатка первой помощи</a>
		<a class="sublink" href="mechanics-page-3.html#combat_veh.5" name="link16">	16.5 Подвода с боеприпасами</a>
	<a class="link" href="mechanics-page-4.html#spells" id="link17">				17. Механика заклинаний</a>
		<a class="sublink" href="mechanics-page-4.html#spells.1" name="link17">		17.1 Адаптивные заклинания</a>
		<a class="sublink" href="mechanics-page-4.html#spells.2" name="link17">		17.2 Стена огня</a>
		<a class="sublink" href="mechanics-page-4.html#spells.3" name="link17">		17.3 Берсерк</a>
		<a class="sublink" href="mechanics-page-4.html#spells.4" name="link17">		17.4 Огненный щит</a>
		<a class="sublink" href="mechanics-page-4.html#spells.5" name="link17">		17.5 Телепорт</a>
		<a class="sublink" href="mechanics-page-4.html#spells.6" name="link17">		17.6 Клон</a>
		<a class="sublink" href="mechanics-page-4.html#spells.7" name="link17">		17.7 Маскировка</a>
		<a class="sublink" href="mechanics-page-4.html#spells.8" name="link17">		17.8 Гипноз</a>
		<a class="sublink" href="mechanics-page-4.html#spells.9" name="link17">		17.9 Цепная молния</a>
		<a class="sublink" href="mechanics-page-4.html#spells.10" name="link17">	17.10 Полет</a>
		<a class="sublink" href="mechanics-page-4.html#spells.11" name="link17">	17.11 Антимагия</a>
		<a class="sublink" href="mechanics-page-4.html#spells.12" name="link17">	17.12 Силовое поле</a>
		<a class="sublink" href="mechanics-page-4.html#spells.13" name="link17">	17.13 Заклинания, устанавливаемые на землю</a>
	<a class="link" href="mechanics-page-4.html#specialize" id="link18">			18. Специализация героев по заклинаниям</a>
	<a class="link" href="mechanics-page-4.html#secondary" id="link19">				19. Вторичные навыки</a>
	<a class="link" href="mechanics-page-4.html#grail" id="link20">					20. Грааль</a>
		<a class="sublink" href="mechanics-page-4.html#grail.1" name="link20">		20.1 Раскопки Грааля</a>
		<a class="sublink" href="mechanics-page-4.html#grail.2" name="link20">		20.2 Храм Грааля</a>
	<a class="link" href="mechanics-page-4.html#fortification" id="link21">			21. Фортификационные укрепления города и их штурм</a>
		<a class="sublink" href="mechanics-page-4.html#fortification.1" name="link21">21.1 Городские стены</a>
		<a class="sublink" href="mechanics-page-4.html#fortification.2" name="link21">21.2 Стрелковые башни</a>
		<a class="sublink" href="mechanics-page-4.html#fortification.3" name="link21">21.3 Ров и его аналоги</a>
`;

const tableOfContentM = `
	<details class="story-list-part">
		<summary>1. Атака, Защита и Урон</summary>
		<ul>
			<li class="story-link"><a href="mechanics-page-m.html#atk_dfs_dmg.1">	1.1 Расчет нанесенного урона в бою</a></li>
			<li class="story-link"><a href="mechanics-page-m.html#atk_dfs_dmg.2">	1.2 Базовый урон юнита</a></li>
			<li class="story-link"><a href="mechanics-page-m.html#atk_dfs_dmg.3">	1.3 Модификатор базового урона</a></li>
			<li class="story-link"><a href="mechanics-page-m.html#atk_dfs_dmg.4">	1.4 Модификатор нападения</a></li>
			<li class="story-link"><a href="mechanics-page-m.html#atk_dfs_dmg.5">	1.5 Модификатор стрельбы</a></li>
			<li class="story-link"><a href="mechanics-page-m.html#atk_dfs_dmg.6">	1.6 Модификатор удачи</a></li>
			<li class="story-link"><a href="mechanics-page-m.html#atk_dfs_dmg.7">	1.7 Модификаторы суммарного урона</a></li>
		</ul>
	</details>
	<a class="separate-link" href="mechanics-page-m.html#luck_morale">				2. Удача и Боевой дух</a>
	<details class="story-list-part">
		<summary>3. Стрельба</summary>
		<ul>
			<li class="story-link"><a href="mechanics-page-m.html#archery.1">		3.1 Количество выстрелов</a></li>
			<li class="story-link"><a href="mechanics-page-m.html#archery.2">		3.2 Штрафы стрельбы</a></li>
			<li class="story-link"><a href="mechanics-page-m.html#archery.3">		3.3 Стрельба через крепостные стены</a></li>
			<li class="story-link"><a href="mechanics-page-m.html#archery.4">		3.4 Блокирование</a></li>
		</ul>
	</details>
	<a class="separate-link" href="mechanics-page-m.html#health">					4. Здоровье юнитов</a>
	<details class="story-list-part">
		<summary>5. Передвижение и Скорость</summary>
		<ul>
			<li class="story-link"><a href="mechanics-page-m.html#move_speed.1">	5.1 Скорость существ</a></li>
			<li class="story-link"><a href="mechanics-page-m.html#move_speed.2">	5.2 Запас хода и особенности перемещения</a></li>
			<li class="story-link"><a href="mechanics-page-m.html#move_speed.3">	5.3 Стартовый запас хода героев</a></li>
		</ul>
	</details>
	<details class="story-list-part">
		<summary>6. Поведение ИИ</summary>
		<ul>
			<li class="story-link"><a href="mechanics-page-m-2.html#ai.1">			6.1 Уровень сложности игры</a></li>
			<li class="story-link"><a href="mechanics-page-m-2.html#ai.2">			6.2 Выбор вторичных навыков</a></li>
			<li class="story-link"><a href="mechanics-page-m-2.html#ai.3">			6.3 Выбор артефактов</a></li>
			<li class="story-link"><a href="mechanics-page-m-2.html#ai.4">			6.4 Решение о нападении</a></li>
			<li class="story-link"><a href="mechanics-page-m-2.html#ai.5">			6.5 Ценность заклинаний</a></li>
			<li class="story-link"><a href="mechanics-page-m-2.html#ai.6">			6.6 Расстановка отрядов в армии ИИ</a></li>
			<li class="story-link"><a href="mechanics-page-m-2.html#ai.7">			6.7 Поведение ИИ в бою</a></li>
			<li class="story-link"><a href="mechanics-page-m-2.html#ai.8">			6.8 Движение по полю боя</a></li>
		</ul>
	</details>
	<details class="story-list-part">
		<summary>7. Прирост существ</summary>
		<ul>
			<li class="story-link"><a href="mechanics-page-m-3.html#growth.1">		7.1 Базовый прирост существ в городах</a></li>
			<li class="story-link"><a href="mechanics-page-m-3.html#growth.2">		7.2 Недели и месяцы существ</a></li>
		</ul>
	</details>
	<a class="separate-link" href="mechanics-page-m-3.html#status">					8. Статус юнита</a>
	<a class="separate-link" href="mechanics-page-m-3.html#land">					9. Родная земля</a>
	<a class="separate-link" href="mechanics-page-m-3.html#ctrstrike">				10. Контратака</a>
	<a class="separate-link" href="mechanics-page-m-3.html#hatred">					11. Ненависть</a>
	<a class="separate-link" href="mechanics-page-m-3.html#neutralize">				12. Нейтрализация заклинаний</a>
	<a class="separate-link" href="mechanics-page-m-3.html#absorption">				13. Поглощение урона от магии</a>
	<a class="separate-link" href="mechanics-page-m-3.html#firebreath">				14. Огненное дыхание и Разворот перед атакой</a>
	<details class="story-list-part">
		<summary>15. Способности юнитов</summary>
		<ul>
			<li class="story-link"><a href="mechanics-page-m-3.html#mob_skills.1">	15.1 Кавалерийский разбег</a></li>
			<li class="story-link"><a href="mechanics-page-m-3.html#mob_skills.2">	15.2 Архангелы: Воскрешение</a></li>
			<li class="story-link"><a href="mechanics-page-m-3.html#mob_skills.3">	15.3 Дендроиды и Дендроиды-солдаты: Корни</a></li>
			<li class="story-link"><a href="mechanics-page-m-3.html#mob_skills.4">	15.4 Способности: Ослепление, Окаменение и Паралич</a></li>
			<li class="story-link"><a href="mechanics-page-m-3.html#mob_skills.5">	15.5 Верховные джинны: Заклинания</a></li>
			<li class="story-link"><a href="mechanics-page-m-3.html#mob_skills.6">	15.6 Черти: Кража маны</a></li>
			<li class="story-link"><a href="mechanics-page-m-3.html#mob_skills.7">	15.7 Властители пропасти: Демонология</a></li>
			<li class="story-link"><a href="mechanics-page-m-3.html#mob_skills.8">	15.8 Могучие горгоны: Смертельный взгляд</a></li>
			<li class="story-link"><a href="mechanics-page-m-3.html#mob_skills.9">	15.9 Яд и Старость</a></li>
			<li class="story-link"><a href="mechanics-page-m-3.html#mob_skills.10">	15.10 Фениксы: Перерождение</a></li>
			<li class="story-link"><a href="mechanics-page-m-3.html#mob_skills.11">	15.11 Морские волки: Точный выстрел</a></li>
			<li class="story-link"><a href="mechanics-page-m-3.html#mob_skills.12">	15.12 Аспиды: Месть</a></li>
			<li class="story-link"><a href="mechanics-page-m-3.html#mob_skills.13">	15.13 Фангармы: Гипноз</a></li>
			<li class="story-link"><a href="mechanics-page-m-3.html#mob_skills.14">	15.14 Чародеи: Заклинания</a></li>
			<li class="story-link"><a href="mechanics-page-m-3.html#mob_skills.15">	15.15 Сказочные драконы: Заклинания</a></li>
			<li class="story-link"><a href="mechanics-page-m-3.html#mob_skills.16">	15.16 Ржавые драконы: Кислотное дыхание</a></li>
		</ul>
	</details>
	<details class="story-list-part">
		<summary>16. Боевые машины</summary>
		<ul>
			<li class="story-link"><a href="mechanics-page-m-3.html#combat_veh.1">	16.1 Катапульта</a></li>
			<li class="story-link"><a href="mechanics-page-m-3.html#combat_veh.2">	16.2 Баллиста</a></li>
			<li class="story-link"><a href="mechanics-page-m-3.html#combat_veh.3">	16.3 Пушка</a></li>
			<li class="story-link"><a href="mechanics-page-m-3.html#combat_veh.4">	16.4 Палатка первой помощи</a></li>
			<li class="story-link"><a href="mechanics-page-m-3.html#combat_veh.5">	16.5 Подвода с боеприпасами</a></li>
		</ul>
	</details>
	<details class="story-list-part">
		<summary>17. Механика заклинаний</summary>
		<ul>
			<li class="story-link"><a href="mechanics-page-m-4.html#spells.1">		17.1 Адаптивные заклинания</a></li>
			<li class="story-link"><a href="mechanics-page-m-4.html#spells.2">		17.2 Стена огня</a></li>
			<li class="story-link"><a href="mechanics-page-m-4.html#spells.3">		17.3 Берсерк</a></li>
			<li class="story-link"><a href="mechanics-page-m-4.html#spells.4">		17.4 Огненный щит</a></li>
			<li class="story-link"><a href="mechanics-page-m-4.html#spells.5">		17.5 Телепорт</a></li>
			<li class="story-link"><a href="mechanics-page-m-4.html#spells.6">		17.6 Клон</a></li>
			<li class="story-link"><a href="mechanics-page-m-4.html#spells.7">		17.7 Маскировка</a></li>
			<li class="story-link"><a href="mechanics-page-m-4.html#spells.8">		17.8 Гипноз</a></li>
			<li class="story-link"><a href="mechanics-page-m-4.html#spells.9">		17.9 Цепная молния</a></li>
			<li class="story-link"><a href="mechanics-page-m-4.html#spells.10">		17.10 Полет</a></li>
			<li class="story-link"><a href="mechanics-page-m-4.html#spells.11">		17.11 Антимагия</a></li>
			<li class="story-link"><a href="mechanics-page-m-4.html#spells.12">		17.12 Силовое поле</a></li>
			<li class="story-link"><a href="mechanics-page-m-4.html#spells.13">		17.13 Заклинания, устанавливаемые на землю</a></li>
		</ul>
	</details>
	<a class="separate-link" href="mechanics-page-m-4.html#specialize">				18. Специализация героев по заклинаниям</a>
	<a class="separate-link" href="mechanics-page-m-4.html#secondary">				19. Вторичные навыки</a>
	<details class="story-list-part">
		<summary>20. Грааль</summary>
		<ul>
			<li class="story-link"><a href="mechanics-page-m-4.html#grail.1">		20.1 Раскопки Грааля</a></li>
			<li class="story-link"><a href="mechanics-page-m-4.html#grail.2">		20.2 Храм Грааля</a></li>
		</ul>
	</details>
	<details class="story-list-part">
		<summary>21. Фортификационные укрепления города и их штурм</summary>
		<ul>
			<li class="story-link"><a href="mechanics-page-m-4.html#fortification.1">21.1 Городские стены</a></li>
			<li class="story-link"><a href="mechanics-page-m-4.html#fortification.2">21.2 Стрелковые башни</a></li>
			<li class="story-link"><a href="mechanics-page-m-4.html#fortification.3">21.3 Ров и его аналоги</a></li>
		</ul>
	</details>
`;

// Отдельные таблицы из статей
const separateTables = {
	battleValue: `
	<table class="compress">
		<tr> <td>Крестьянин</td> <td>15</td> <td rowspan="55" style="background: #5b5b5b; width: 0.5%; border: none"></td> <td>Мумия</td> <td>270</td> <td rowspan="55" style="background: #5b5b5b; width: 0.5%; border: none"></td> <td>Птица грома</td> <td>869</td> </tr>
		<tr> <td>Пикси</td> <td>40</td> 				<td>Адская гончая</td> <td>275</td> 			<td>Могущественный лич</td> <td>889</td> </tr>
		<tr> <td>Бес</td> <td>50</td> 					<td>Кочевник</td> <td>285</td> 					<td>Король минотавров</td> <td>890</td> </tr>
		<tr> <td>Нимфа</td> <td>52</td> 				<td>Цербер</td> <td>308</td> 					<td>Горгона</td> <td>890</td> </tr>
		<tr> <td>Гремлин</td> <td>55</td> 				<td>Корсар</td> <td>311</td> 					<td>Фангарм</td> <td>929</td> </tr>
		<tr> <td>Гремлин-мастер</td> <td>55</td> 		<td>Водный элементаль</td> <td>315</td> 		<td>Тролль</td> <td>1024</td> </tr>
		<tr> <td>Океанида</td> <td>60</td> 				<td>Элементаль льда</td> <td>315</td> 			<td>Могучая горгона</td> <td>1028</td> </tr>
		<tr> <td>Хоббит</td> <td>60</td> 				<td>Грифон</td> <td>324</td> 					<td>Виверна</td> <td>1050</td> </tr>
		<tr> <td>Черт</td> <td>60</td> 					<td>Воздушный элементаль</td> <td>324</td> 		<td>Циклоп</td> <td>1055</td> </tr>
		<tr> <td>Гоблин</td> <td>60</td> 				<td>Элементаль шторма</td> <td>324</td> 		<td>Властитель пропасти</td> <td>1071</td> </tr>
		<tr> <td>Хобгоблин</td> <td>65</td> 			<td>Каменный голем</td> <td>339</td> 			<td>Король циклопов</td> <td>1110</td> </tr>
		<tr> <td>Фея</td> <td>70</td> 					<td>Огненный элементаль</td> <td>345</td> 		<td>Мантикора</td> <td>1215</td> </tr>
		<tr> <td>Гнолл</td> <td>70</td> 				<td>Элементаль энергии</td> <td>360</td> 		<td>Скорпикора</td> <td>1248</td> </tr>
		<tr> <td>Троглодит</td> <td>73</td> 			<td>Королевский грифон</td> <td>364</td> 		<td>Ифрит</td> <td>1413</td> </tr>
		<tr> <td>Скелет</td> <td>75</td>				<td>Морской волк</td> <td>376</td> 				<td>Никс</td> <td>1415</td> </tr>
		<tr> <td>Троглодит-охотник</td> <td>84</td> 	<td>Медуза</td> <td>379</td> 					<td>Психический элементаль</td> <td>1431</td> </tr>
		<tr> <td>Скелет-воин</td> <td>85</td> 			<td>Дух океана</td> <td>386</td> 				<td>Виверна-монарх</td> <td>1518</td> </tr>
		<tr> <td>Гнолл-мародер</td> <td>90</td> 		<td>Пегас</td> <td>407</td> 					<td>Единорог</td> <td>1548</td> </tr>
		<tr> <td>Кентавр</td> <td>100</td> 				<td>Железный голем</td> <td>412</td> 			<td>Кавалерист</td> <td>1668</td> </tr>
		<tr> <td>Копейщик</td> <td>100</td>				<td>Снайпер</td> <td>415</td> 					<td>Элементаль магии</td> <td>1724</td> </tr>
		<tr> <td>Арбалетчик</td> <td>115</td> 			<td>Земляной элементаль</td> <td>415</td> 		<td>Черный рыцарь</td> <td>1753</td> </tr>
		<tr> <td>Искусный арбалетчик</td> <td>115</td>	<td>Маг</td> <td>418</td> 						<td>Никс-воин</td> <td>1763</td> </tr>
		<tr> <td>Ящер</td> <td>115</td> 				<td>Серебряный пегас</td> <td>418</td> 			<td>Чемпион</td> <td>1800</td> </tr>
		<tr> <td>Алебардщик</td> <td>115</td> 			<td>Медуза-королева</td> <td>423</td> 			<td>Султан-ифрит</td> <td>1802</td> </tr>
		<tr> <td>Капитан кентавров</td> <td>115</td> 	<td>Мечник</td> <td>445</td> 					<td>Нага</td> <td>2016</td> </tr>
		<tr> <td>Ящер-воин</td> <td>130</td> 			<td>Демон</td> <td>445</td> 					<td>Рыцарь смерти</td> <td>2029</td> </tr>
		<tr> <td>Наездник на волке</td> <td>130</td> 	<td>Архимаг</td> <td>467</td> 					<td>Боевой единорог</td> <td>2030</td> </tr>
		<tr> <td>Вор</td> <td>135</td> 					<td>Сатир</td> <td>471</td> 					<td>Костяной дракон</td> <td>2420</td> </tr>
		<tr> <td>Гарпия</td> <td>140</td> 				<td>Ассида</td> <td>478</td> 					<td>Королева наг</td> <td>2840</td> </tr>
		<tr> <td>Живой мертвец</td> <td>140</td> 		<td>Рогатый демон</td> <td>480</td> 			<td>Огненная птица</td> <td>3097</td> </tr>
		<tr> <td>Гог</td> <td>145</td> 					<td>Монах</td> <td>485</td> 					<td>Гигант</td> <td>3146</td> </tr>
		<tr> <td>Наездник на кабане</td> <td>145</td> 	<td>Элементаль магмы</td> <td>490</td> 			<td>Чудище</td> <td>3162</td> </tr>
		<tr> <td>Каменная горгулья</td> <td>150</td> 	<td>Фанатик</td> <td>500</td> 					<td>Морской змей</td> <td>3162</td> </tr>
		<tr> <td>Обсидиановая горгулья</td> <td>155</td><td>Василиск</td> <td>506</td> 					<td>Призрачный дракон</td> <td>3228</td> </tr>
		<tr> <td>Матрос</td> <td>155</td> 				<td>Вампир</td> <td>518</td> 					<td>Ангел</td> <td>3585</td> </tr>
		<tr> <td>Зомби</td> <td>160</td> 				<td>Огр</td> <td>520</td> 						<td>Зеленый дракон</td> <td>3654</td> </tr>
		<tr> <td>Налетчик</td> <td>174</td> 			<td>Великий василиск</td> <td>561</td> 			<td>Дьявол</td> <td>3759</td> </tr>
		<tr> <td>Головорез</td> <td>174</td> 			<td>Крестоносец</td> <td>588</td> 				<td>Красный дракон</td> <td>3762</td> </tr>
		<tr> <td>Орк</td> <td>175</td> 					<td>Стальной голем</td> <td>597</td> 			<td>Гидра</td> <td>4120</td> </tr>
		<tr> <td>Гном</td> <td>194</td> 				<td>Золотой голем</td> <td>600</td> 			<td>Феникс</td> <td>4929</td> </tr>
		<tr> <td>Эльф</td> <td>195</td> 				<td>Жрица морей</td> <td>608</td> 				<td>Титан</td> <td>5000</td> </tr>
		<tr> <td>Благородный эльф</td> <td>195</td> 	<td>Лорд вампиров</td> <td>652</td> 			<td>Архидьявол</td> <td>5243</td> </tr>
		<tr> <td>Гарпия-ведьма</td> <td>196</td> 		<td>Заклинательница</td> <td>655</td> 			<td>Гидра хаоса</td> <td>5272</td> </tr>
		<tr> <td>Вождь орков</td> <td>200</td> 			<td>Огр-маг</td> <td>672</td> 					<td>Древнее чудище</td> <td>5397</td> </tr>
		<tr> <td>Пират</td> <td>208</td> 				<td>Джинн</td> <td>680</td> 					<td>Аспид</td> <td>5554</td> </tr>
		<tr> <td>Лепрекон</td> <td>208</td> 			<td>Дендроид</td> <td>690</td> 					<td>Архангел</td> <td>6033</td> </tr>
		<tr> <td>Боевой гном</td> <td>209</td> 			<td>Лич</td> <td>742</td> 						<td>Золотой дракон</td> <td>6220</td> </tr>
		<tr> <td>Магог</td> <td>210</td> 				<td>Мастер-джинн</td> <td>748</td> 				<td>Черный дракон</td> <td>6783</td> </tr>
		<tr> <td>Змий</td> <td>215</td> 				<td>Отродье пропасти</td> <td>765</td> 			<td>Сказочный дракон</td> <td>16317</td> </tr>
		<tr> <td>Дух</td> <td>231</td> 					<td>Дендроид-солдат</td> <td>765</td> 			<td>Ржавый дракон</td> <td>24030</td> </tr>
		<tr> <td>Бехолдер</td> <td>240</td> 			<td>Алмазный голем</td> <td>775</td>			<td>Кристаллический дракон</td> <td>30260</td> </tr>
		<tr> <td>Зловещий глаз</td> <td>245</td> 		<td>Птица рух</td> <td>790</td> 				<td>Лазурный дракон</td> <td>56315</td> </tr>
		<tr> <td>Ядовитый змий</td> <td>250</td> 		<td>Чародей</td> <td>805</td> 					<td colspan="2" rowspan="3"></td> </tr>
		<tr> <td>Привидение</td> <td>252</td> 			<td>Минотавр</td> <td>835</td>					</tr>
	</table>
	`,

	battleValueM: `
	<table>
		<tr> <td>Крестьянин</td> <td>15</td> <td rowspan="83" style="background: #5b5b5b; width: 0.5%; border: none"></td> <td>Архимаг</td> <td>467</td> </tr>
		<tr> <td>Пикси</td> <td>40</td> 				 <td>Сатир</td> <td>471</td> </tr>
		<tr> <td>Бес</td> <td>50</td> 					 <td>Ассида</td> <td>478</td> </tr>
		<tr> <td>Нимфа</td> <td>52</td> 				 <td>Рогатый демон</td> <td>480</td> </tr>
		<tr> <td>Гремлин</td> <td>55</td> 				 <td>Монах</td> <td>485</td> </tr>
		<tr> <td>Гремлин-мастер</td> <td>55</td> 		 <td>Элементаль магмы</td> <td>490</td> </tr>
		<tr> <td>Океанида</td> <td>60</td> 				 <td>Фанатик</td> <td>500</td> </tr>
		<tr> <td>Хоббит</td> <td>60</td> 				 <td>Василиск</td> <td>506</td> </tr>
		<tr> <td>Черт</td> <td>60</td> 					 <td>Вампир</td> <td>518</td> </tr>
		<tr> <td>Гоблин</td> <td>60</td> 				 <td>Огр</td> <td>520</td> </tr>
		<tr> <td>Хобгоблин</td> <td>65</td> 			 <td>Великий василиск</td> <td>561</td> </tr>
		<tr> <td>Фея</td> <td>70</td> 					 <td>Крестоносец</td> <td>588</td> </tr>
		<tr> <td>Гнолл</td> <td>70</td> 				 <td>Стальной голем</td> <td>597</td> </tr>
		<tr> <td>Троглодит</td> <td>73</td> 			 <td>Золотой голем</td> <td>600</td> </tr>
		<tr> <td>Скелет</td> <td>75</td>				 <td>Жрица морей</td> <td>608</td> </tr>
		<tr> <td>Троглодит-охотник</td> <td>84</td> 	 <td>Лорд вампиров</td> <td>652</td> </tr>
		<tr> <td>Скелет-воин</td> <td>85</td> 			 <td>Заклинательница</td> <td>655</td> </tr>
		<tr> <td>Гнолл-мародер</td> <td>90</td> 		 <td>Огр-маг</td> <td>672</td> </tr>
		<tr> <td>Кентавр</td> <td>100</td> 				 <td>Джинн</td> <td>680</td> </tr>
		<tr> <td>Копейщик</td> <td>100</td>				 <td>Дендроид</td> <td>690</td> </tr>
		<tr> <td>Арбалетчик</td> <td>115</td> 			 <td>Лич</td> <td>742</td> </tr>
		<tr> <td>Искусный арбалетчик</td> <td>115</td>	 <td>Мастер-джинн</td> <td>748</td> </tr>
		<tr> <td>Ящер</td> <td>115</td> 				 <td>Отродье пропасти</td> <td>765</td> </tr>
		<tr> <td>Алебардщик</td> <td>115</td> 			 <td>Дендроид-солдат</td> <td>765</td> </tr>
		<tr> <td>Капитан кентавров</td> <td>115</td> 	 <td>Алмазный голем</td> <td>775</td> </tr>
		<tr> <td>Ящер-воин</td> <td>130</td> 			 <td>Птица рух</td> <td>790</td> </tr>
		<tr> <td>Наездник на волке</td> <td>130</td> 	 <td>Чародей</td> <td>805</td> </tr>
		<tr> <td>Вор</td> <td>135</td> 					 <td>Минотавр</td> <td>835</td> </tr>
		<tr> <td>Гарпия</td> <td>140</td> 				 <td>Птица грома</td> <td>869</td> </tr>
		<tr> <td>Живой мертвец</td> <td>140</td> 		 <td>Могущественный лич</td> <td>889</td> </tr>
		<tr> <td>Гог</td> <td>145</td> 					 <td>Король минотавров</td> <td>890</td> </tr>
		<tr> <td>Наездник на кабане</td> <td>145</td> 	 <td>Горгона</td> <td>890</td> </tr>
		<tr> <td>Каменная горгулья</td> <td>150</td> 	 <td>Фангарм</td> <td>929</td> </tr>
		<tr> <td>Обсидиановая горгулья</td> <td>155</td> <td>Тролль</td> <td>1024</td> </tr>
		<tr> <td>Матрос</td> <td>155</td> 				 <td>Могучая горгона</td> <td>1028</td>	</tr>
		<tr> <td>Зомби</td> <td>160</td> 				 <td>Виверна</td> <td>1050</td> </tr>
		<tr> <td>Налетчик</td> <td>174</td> 			 <td>Циклоп</td> <td>1055</td> </tr>
		<tr> <td>Головорез</td> <td>174</td> 			 <td>Властитель пропасти</td> <td>1071</td> </tr>
		<tr> <td>Орк</td> <td>175</td> 					 <td>Король циклопов</td> <td>1110</td> </tr>
		<tr> <td>Гном</td> <td>194</td> 				 <td>Мантикора</td> <td>1215</td> </tr>
		<tr> <td>Эльф</td> <td>195</td> 				 <td>Скорпикора</td> <td>1248</td> </tr>
		<tr> <td>Благородный эльф</td> <td>195</td> 	 <td>Ифрит</td> <td>1413</td> </tr>
		<tr> <td>Гарпия-ведьма</td> <td>196</td> 		 <td>Никс</td> <td>1415</td> </tr>
		<tr> <td>Вождь орков</td> <td>200</td> 			 <td>Психический элементаль</td> <td>1431</td> </tr>
		<tr> <td>Пират</td> <td>208</td> 				 <td>Виверна-монарх</td> <td>1518</td> </tr>
		<tr> <td>Лепрекон</td> <td>208</td> 			 <td>Единорог</td> <td>1548</td> </tr>
		<tr> <td>Боевой гном</td> <td>209</td> 			 <td>Кавалерист</td> <td>1668</td> </tr>
		<tr> <td>Магог</td> <td>210</td> 				 <td>Элементаль магии</td> <td>1724</td> </tr>
		<tr> <td>Змий</td> <td>215</td> 				 <td>Черный рыцарь</td> <td>1753</td> </tr>
		<tr> <td>Дух</td> <td>231</td> 					 <td>Никс-воин</td> <td>1763</td> </tr>
		<tr> <td>Бехолдер</td> <td>240</td> 			 <td>Чемпион</td> <td>1800</td>	</tr>
		<tr> <td>Зловещий глаз</td> <td>245</td> 		 <td>Султан-ифрит</td> <td>1802</td> </tr>
		<tr> <td>Ядовитый змий</td> <td>250</td> 		 <td>Нага</td> <td>2016</td> </tr>
		<tr> <td>Привидение</td> <td>252</td> 			 <td>Рыцарь смерти</td> <td>2029</td> </tr>
		<tr> <td>Мумия</td> <td>270</td>				 <td>Боевой единорог</td> <td>2030</td> </tr>
		<tr> <td>Адская гончая</td> <td>275</td>		 <td>Костяной дракон</td> <td>2420</td> </tr>
		<tr> <td>Кочевник</td> <td>285</td>				 <td>Королева наг</td> <td>2840</td> </tr>
		<tr> <td>Цербер</td> <td>308</td>				 <td>Огненная птица</td> <td>3097</td> </tr>
		<tr> <td>Корсар</td> <td>311</td>				 <td>Гигант</td> <td>3146</td> </tr>
		<tr> <td>Водный элементаль</td> <td>315</td>	 <td>Чудище</td> <td>3162</td> </tr>
		<tr> <td>Элементаль льда</td> <td>315</td>		 <td>Морской змей</td> <td>3162</td> </tr>
		<tr> <td>Грифон</td> <td>324</td>				 <td>Призрачный дракон</td> <td>3228</td> </tr>
		<tr> <td>Воздушный элементаль</td> <td>324</td>	 <td>Ангел</td> <td>3585</td> </tr>
		<tr> <td>Элементаль шторма</td> <td>324</td>	 <td>Зеленый дракон</td> <td>3654</td> </tr>
		<tr> <td>Каменный голем</td> <td>339</td>		 <td>Дьявол</td> <td>3759</td> </tr>
		<tr> <td>Огненный элементаль</td> <td>345</td>	 <td>Красный дракон</td> <td>3762</td> </tr>
		<tr> <td>Элементаль энергии</td> <td>360</td>	 <td>Гидра</td> <td>4120</td> </tr>
		<tr> <td>Королевский грифон</td> <td>364</td>	 <td>Феникс</td> <td>4929</td> </tr>
		<tr> <td>Морской волк</td> <td>376</td>			 <td>Титан</td> <td>5000</td> </tr>
		<tr> <td>Медуза</td> <td>379</td>				 <td>Архидьявол</td> <td>5243</td> </tr>
		<tr> <td>Дух океана</td> <td>386</td>			 <td>Гидра хаоса</td> <td>5272</td> </tr>
		<tr> <td>Пегас</td> <td>407</td>				 <td>Древнее чудище</td> <td>5397</td> </tr>
		<tr> <td>Железный голем</td> <td>412</td>		 <td>Аспид</td> <td>5554</td> </tr>
		<tr> <td>Снайпер</td> <td>415</td>				 <td>Архангел</td> <td>6033</td> </tr>
		<tr> <td>Земляной элементаль</td> <td>415</td>	 <td>Золотой дракон</td> <td>6220</td> </tr>
		<tr> <td>Маг</td> <td>418</td>					 <td>Черный дракон</td> <td>6783</td> </tr>
		<tr> <td>Серебряный пегас</td> <td>418</td>		 <td>Сказочный дракон</td> <td>16317</td> </tr>
		<tr> <td>Медуза-королева</td> <td>423</td>		 <td>Ржавый дракон</td> <td>24030</td> </tr>
		<tr> <td>Мечник</td> <td>445</td>				 <td>Кристаллический дракон</td> <td>30260</td> </tr>
		<tr> <td>Демон</td> <td>445</td>				 <td>Лазурный дракон</td> <td>56315</td> </tr>
	</table>
	`,

	towersPriority: `
	<tr> <td>Крестьянин</td> <td>1</td> <td rowspan="55" style="background: #5b5b5b; width: 0.5%; border: none"></td> <td>Фанатик</td> <td>15</td> <td rowspan="55" style="background: #5b5b5b; width: 0.5%; border: none"></td> <td>Отродье пропасти</td> <td>22</td> </tr>
	<tr> <td>Пикси</td> <td>2</td> 					<td>Наездник на кабане</td> <td>15</td> 		<td>Властитель пропасти</td> <td>22</td> </tr>
	<tr> <td>Фея</td> <td>2</td> 					<td>Пегас</td> <td>15</td> 						<td>Ифрит</td> <td>22</td> </tr>
	<tr> <td>Гремлин-мастер</td> <td>3</td> 		<td>Серебряный пегас</td> <td>15</td> 			<td>Султан-ифрит</td> <td>22</td> </tr>
	<tr> <td>Нимфа</td> <td>3</td> 					<td>Архимаг</td> <td>15</td> 					<td>Стальной голем</td> <td>22</td> </tr>
	<tr> <td>Океанида</td> <td>3</td> 				<td>Живой мертвец</td> <td>15</td> 				<td>Минотавр</td> <td>23</td> </tr>
	<tr> <td>Хоббит</td> <td>3</td> 				<td>Лепрекон</td> <td>15</td> 					<td>Король минотавров</td> <td>23</td> </tr>
	<tr> <td>Гремлин</td> <td>4</td> 				<td>Вампир</td> <td>15</td> 					<td>Золотой голем</td> <td>23</td> </tr>
	<tr> <td>Бес</td> <td>4</td> 					<td>Лич</td> <td>15</td> 						<td>Дендроид</td> <td>24</td> </tr>
	<tr> <td>Черт</td> <td>4</td> 					<td>Медуза-королева</td> <td>15</td> 			<td>Огр-маг</td> <td>25</td> </tr>
	<tr> <td>Арбалетчик</td> <td>5</td> 			<td>Элементаль льда</td> <td>15</td> 			<td>Алмазный голем</td> <td>25</td> </tr>
	<tr> <td>Искусный арбалетчик</td> <td>5</td> 	<td>Матрос</td> <td>15</td> 					<td>Дендроид-солдат</td> <td>26</td> </tr>
	<tr> <td>Троглодит</td> <td>5</td> 				<td>Головорез</td> <td>15</td> 					<td>Горгона</td> <td>27</td> </tr>
	<tr> <td>Гоблин</td> <td>5</td> 				<td>Дух океана</td> <td>15</td> 				<td>Могучая горгона</td> <td>27</td> </tr>
	<tr> <td>Хобгоблин</td> <td>5</td> 				<td>Ассида</td> <td>15</td> 					<td>Костяной дракон</td> <td>28</td> </tr>
	<tr> <td>Скелет</td> <td>6</td> 				<td>Чародей</td> <td>15</td> 					<td>Психический элементаль</td> <td>28</td> </tr>
	<tr> <td>Скелет-воин</td> <td>6</td> 			<td>Элементаль энергии</td> <td>16</td> 		<td>Огненная птица</td> <td>28</td> </tr>
	<tr> <td>Троглодит-охотник</td> <td>6</td> 		<td>Сатир</td> <td>16</td> 						<td>Дьявол</td> <td>29</td> </tr>
	<tr> <td>Гнолл</td> <td>6</td> 					<td>Жрица морей</td> <td>16</td> 				<td>Элементаль магии</td> <td>29</td> </tr>
	<tr> <td>Гнолл-мародер</td> <td>6</td> 			<td>Заклинательница</td> <td>16</td> 			<td>Единорог</td> <td>30</td> </tr>
	<tr> <td>Гог</td> <td>7</td> 					<td>Гном</td> <td>17</td> 						<td>Зеленый дракон</td> <td>30</td> </tr>
	<tr> <td>Магог</td> <td>7</td> 					<td>Боевой гном</td> <td>17</td> 				<td>Красный дракон</td> <td>30</td> </tr>
	<tr> <td>Ящер</td> <td>8</td> 					<td>Джинн</td> <td>17</td> 						<td>Никс</td> <td>30</td> </tr>
	<tr> <td>Гарпия</td> <td>8</td> 				<td>Мастер-джинн</td> <td>17</td> 				<td>Кавалерист</td> <td>31</td> </tr>
	<tr> <td>Гарпия-ведьма</td> <td>8</td> 			<td>Зомби</td> <td>17</td> 						<td>Чемпион</td> <td>31</td> </tr>
	<tr> <td>Эльф</td> <td>9</td> 					<td>Лорд вампиров</td> <td>17</td> 				<td>Ангел</td> <td>31</td> </tr>
	<tr> <td>Благородный эльф</td> <td>9</td> 		<td>Могущественный лич</td> <td>17</td> 		<td>Архидьявол</td> <td>31</td> </tr>
	<tr> <td>Орк</td> <td>9</td> 					<td>Фангарм</td> <td>17</td> 					<td>Призрачный дракон</td> <td>31</td> </tr>
	<tr> <td>Ящер-воин</td> <td>9</td> 				<td>Адская гончая</td> <td>18</td> 				<td>Феникс</td> <td>31</td> </tr>
	<tr> <td>Пират</td> <td>9</td> 					<td>Цербер</td> <td>18</td> 					<td>Боевой единорог</td> <td>32</td> </tr>
	<tr> <td>Корсар</td> <td>9</td> 				<td>Воздушный элементаль</td> <td>18</td> 		<td>Нага</td> <td>32</td> </tr>
	<tr> <td>Морской волк</td> <td>9</td> 			<td>Каменный голем</td> <td>19</td> 			<td>Королева наг</td> <td>32</td> </tr>
	<tr> <td>Снайпер</td> <td>9</td> 				<td>Птица рух</td> <td>19</td> 					<td>Никс-воин</td> <td>33</td> </tr>
	<tr> <td>Кентавр</td> <td>10</td> 				<td>Птица грома</td> <td>19</td> 				<td>Черный рыцарь</td> <td>34</td> </tr>
	<tr> <td>Каменная горгулья</td> <td>10</td> 	<td>Водный элементаль</td> <td>19</td> 			<td>Рыцарь смерти</td> <td>34</td> </tr>
	<tr> <td>Обсидиановая горгулья</td> <td>10</td> <td>Мумия</td> <td>19</td> 						<td>Баллиста</td> <td>35</td> </tr>
	<tr> <td>Дух</td> <td>11</td> 					<td>Кочевник</td> <td>19</td> 					<td>Пушка</td> <td>35</td> </tr>
	<tr> <td>Привидение</td> <td>11</td> 			<td>Мечник</td> <td>20</td> 					<td>Архангел</td> <td>36</td> </tr>
	<tr> <td>Вождь орков</td> <td>12</td> 			<td>Крестоносец</td> <td>20</td> 				<td>Золотой дракон</td> <td>36</td> </tr>
	<tr> <td>Змий</td> <td>12</td> 					<td>Железный голем</td> <td>20</td> 			<td>Гигант</td> <td>37</td> </tr>
	<tr> <td>Ядовитый змий</td> <td>12</td> 		<td>Демон</td> <td>20</td> 						<td>Титан</td> <td>37</td> </tr>
	<tr> <td>Копейщик</td> <td>12</td> 				<td>Циклоп</td> <td>20</td> 					<td>Черный дракон</td> <td>37</td> </tr>
	<tr> <td>Алебардщик</td> <td>12</td> 			<td>Король циклопов</td> <td>20</td> 			<td>Чудище</td> <td>38</td> </tr>
	<tr> <td>Капитан кентавров</td> <td>12</td> 	<td>Василиск</td> <td>20</td> 					<td>Гидра</td> <td>39</td> </tr>
	<tr> <td>Наездник на волке</td> <td>12</td> 	<td>Виверна</td> <td>20</td> 					<td>Морской змей</td> <td>40</td> </tr>
	<tr> <td>Налетчик</td> <td>12</td> 				<td>Виверна-монарх</td> <td>20</td> 			<td>Подвода с боеприпасами</td> <td>41</td> </tr>
	<tr> <td>Вор</td> <td>12</td> 					<td>Огненный элементаль</td> <td>20</td> 		<td>Палатка первой помощи</td> <td>41</td> </tr>
	<tr> <td>Бехолдер</td> <td>13</td> 				<td>Рогатый демон</td> <td>21</td> 				<td>Гидра хаоса</td> <td>42</td> </tr>
	<tr> <td>Зловещий глаз</td> <td>13</td> 		<td>Мантикора</td> <td>21</td> 					<td>Сказочный дракон</td> <td>42</td> </tr>
	<tr> <td>Грифон</td> <td>14</td> 				<td>Скорпикора</td> <td>21</td> 				<td>Древнее чудище</td> <td>43</td> </tr>
	<tr> <td>Королевский грифон</td> <td>14</td> 	<td>Огр</td> <td>21</td> 						<td>Аспид</td> <td>43</td> </tr>
	<tr> <td>Маг</td> <td>14</td> 					<td>Великий василиск</td> <td>21</td> 			<td>Ржавый дракон</td> <td>44</td> </tr>
	<tr> <td>Медуза</td> <td>14</td> 				<td>Земляной элементаль</td> <td>21</td> 		<td>Лазурный дракон</td> <td>45</td> </tr>
	<tr> <td>Элементаль шторма</td> <td>14</td> 	<td>Элементаль магмы</td> <td>21</td> 			<td>Кристаллический дракон</td> <td>46</td> </tr>
	<tr> <td>Монах</td> <td>15</td> 				<td>Тролль</td> <td>21</td> 					<td>Катапульта</td> <td>47</td> </tr>
	`,

	towersPriorityM: `
	<tr> <td>Крестьянин</td> <td>1</td> 			<td rowspan="83" style="background: #5b5b5b; width: 0.5%; border: none"></td> <td>Адская гончая</td> <td>18</td> </tr>
	<tr> <td>Пикси</td> <td>2</td> 					<td>Цербер</td> <td>18</td> </tr>
	<tr> <td>Фея</td> <td>2</td> 					<td>Воздушный элементаль</td> <td>18</td> </tr>
	<tr> <td>Гремлин-мастер</td> <td>3</td> 		<td>Каменный голем</td> <td>19</td> </tr>
	<tr> <td>Нимфа</td> <td>3</td> 					<td>Птица рух</td> <td>19</td> </tr>
	<tr> <td>Океанида</td> <td>3</td> 				<td>Птица грома</td> <td>19</td>  </tr>
	<tr> <td>Хоббит</td> <td>3</td> 				<td>Водный элементаль</td> <td>19</td> </tr>
	<tr> <td>Гремлин</td> <td>4</td> 				<td>Мумия</td> <td>19</td> </tr>
	<tr> <td>Бес</td> <td>4</td> 					<td>Кочевник</td> <td>19</td> </tr>
	<tr> <td>Черт</td> <td>4</td> 					<td>Мечник</td> <td>20</td> </tr>
	<tr> <td>Арбалетчик</td> <td>5</td> 			<td>Крестоносец</td> <td>20</td> </tr>
	<tr> <td>Искусный арбалетчик</td> <td>5</td> 	<td>Железный голем</td> <td>20</td> </tr>
	<tr> <td>Троглодит</td> <td>5</td> 				<td>Демон</td> <td>20</td> </tr>
	<tr> <td>Гоблин</td> <td>5</td> 				<td>Циклоп</td> <td>20</td> </tr>
	<tr> <td>Хобгоблин</td> <td>5</td> 				<td>Король циклопов</td> <td>20</td> </tr>
	<tr> <td>Скелет</td> <td>6</td> 				<td>Василиск</td> <td>20</td> </tr>
	<tr> <td>Скелет-воин</td> <td>6</td> 			<td>Виверна</td> <td>20</td> </tr>
	<tr> <td>Троглодит-охотник</td> <td>6</td> 		<td>Виверна-монарх</td> <td>20</td> </tr>
	<tr> <td>Гнолл</td> <td>6</td> 					<td>Огненный элементаль</td> <td>20</td> </tr>
	<tr> <td>Гнолл-мародер</td> <td>6</td> 			<td>Рогатый демон</td> <td>21</td> </tr>
	<tr> <td>Гог</td> <td>7</td> 					<td>Мантикора</td> <td>21</td> </tr>
	<tr> <td>Магог</td> <td>7</td> 					<td>Скорпикора</td> <td>21</td> </tr>
	<tr> <td>Ящер</td> <td>8</td> 					<td>Огр</td> <td>21</td> </tr>
	<tr> <td>Гарпия</td> <td>8</td> 				<td>Великий василиск</td> <td>21</td> </tr>
	<tr> <td>Гарпия-ведьма</td> <td>8</td> 			<td>Земляной элементаль</td> <td>21</td> </tr>
	<tr> <td>Эльф</td> <td>9</td> 					<td>Элементаль магмы</td> <td>21</td> </tr>
	<tr> <td>Благородный эльф</td> <td>9</td> 		<td>Тролль</td> <td>21</td> </tr>
	<tr> <td>Орк</td> <td>9</td> 					<td>Отродье пропасти</td> <td>22</td> </tr>
	<tr> <td>Ящер-воин</td> <td>9</td> 				<td>Властитель пропасти</td> <td>22</td> </tr>
	<tr> <td>Пират</td> <td>9</td> 					<td>Ифрит</td> <td>22</td> </tr>
	<tr> <td>Корсар</td> <td>9</td> 				<td>Султан-ифрит</td> <td>22</td> </tr>
	<tr> <td>Морской волк</td> <td>9</td> 			<td>Стальной голем</td> <td>22</td> </tr>
	<tr> <td>Снайпер</td> <td>9</td> 				<td>Минотавр</td> <td>23</td> </tr>
	<tr> <td>Кентавр</td> <td>10</td> 				<td>Король минотавров</td> <td>23</td> </tr>
	<tr> <td>Каменная горгулья</td> <td>10</td> 	<td>Золотой голем</td> <td>23</td> </tr>
	<tr> <td>Обсидиановая горгулья</td> <td>10</td> <td>Дендроид</td> <td>24</td> </tr>
	<tr> <td>Дух</td> <td>11</td> 					<td>Огр-маг</td> <td>25</td> </tr>
	<tr> <td>Привидение</td> <td>11</td> 			<td>Алмазный голем</td> <td>25</td> </tr>
	<tr> <td>Вождь орков</td> <td>12</td> 			<td>Дендроид-солдат</td> <td>26</td> </tr>
	<tr> <td>Змий</td> <td>12</td> 					<td>Горгона</td> <td>27</td> </tr>
	<tr> <td>Ядовитый змий</td> <td>12</td> 		<td>Могучая горгона</td> <td>27</td> </tr>
	<tr> <td>Копейщик</td> <td>12</td> 				<td>Костяной дракон</td> <td>28</td> </tr>
	<tr> <td>Алебардщик</td> <td>12</td> 			<td>Психический элементаль</td> <td>28</td> </tr>
	<tr> <td>Капитан кентавров</td> <td>12</td> 	<td>Огненная птица</td> <td>28</td> </tr>
	<tr> <td>Наездник на волке</td> <td>12</td> 	<td>Дьявол</td> <td>29</td> </tr>
	<tr> <td>Налетчик</td> <td>12</td> 				<td>Элементаль магии</td> <td>29</td> </tr>
	<tr> <td>Вор</td> <td>12</td> 					<td>Единорог</td> <td>30</td> </tr>
	<tr> <td>Бехолдер</td> <td>13</td> 				<td>Зеленый дракон</td> <td>30</td> </tr>
	<tr> <td>Зловещий глаз</td> <td>13</td> 		<td>Красный дракон</td> <td>30</td> </tr>
	<tr> <td>Грифон</td> <td>14</td> 				<td>Никс</td> <td>30</td> </tr>
	<tr> <td>Королевский грифон</td> <td>14</td> 	<td>Кавалерист</td> <td>31</td> </tr>
	<tr> <td>Маг</td> <td>14</td> 					<td>Чемпион</td> <td>31</td> </tr>
	<tr> <td>Медуза</td> <td>14</td> 				<td>Ангел</td> <td>31</td> </tr>
	<tr> <td>Элементаль шторма</td> <td>14</td> 	<td>Архидьявол</td> <td>31</td> </tr>
	<tr> <td>Монах</td> <td>15</td> 				<td>Призрачный дракон</td> <td>31</td> </tr>
	<tr> <td>Фанатик</td> <td>15</td> 				<td>Феникс</td> <td>31</td> </tr>
	<tr> <td>Наездник на кабане</td> <td>15</td> 	<td>Боевой единорог</td> <td>32</td> </tr>
	<tr> <td>Пегас</td> <td>15</td> 				<td>Нага</td> <td>32</td> </tr>
	<tr> <td>Серебряный пегас</td> <td>15</td> 		<td>Королева наг</td> <td>32</td> </tr>
	<tr> <td>Архимаг</td> <td>15</td> 				<td>Никс-воин</td> <td>33</td> </tr>
	<tr> <td>Живой мертвец</td> <td>15</td> 		<td>Черный рыцарь</td> <td>34</td> </tr>
	<tr> <td>Лепрекон</td> <td>15</td> 				<td>Рыцарь смерти</td> <td>34</td> </tr>
	<tr> <td>Вампир</td> <td>15</td> 				<td>Баллиста</td> <td>35</td> </tr>
	<tr> <td>Лич</td> <td>15</td> 					<td>Пушка</td> <td>35</td> </tr>
	<tr> <td>Медуза-королева</td> <td>15</td> 		<td>Архангел</td> <td>36</td> </tr>
	<tr> <td>Элементаль льда</td> <td>15</td> 	<td>Золотой дракон</td> <td>36</td> </tr>
	<tr> <td>Матрос</td> <td>15</td> 				<td>Гигант</td> <td>37</td> </tr>
	<tr> <td>Головорез</td> <td>15</td> 			<td>Титан</td> <td>37</td> </tr>
	<tr> <td>Дух океана</td> <td>15</td> 			<td>Черный дракон</td> <td>37</td> </tr>
	<tr> <td>Ассида</td> <td>15</td> 				<td>Чудище</td> <td>38</td> </tr>
	<tr> <td>Чародей</td> <td>15</td> 				<td>Гидра</td> <td>39</td> </tr>
	<tr> <td>Элементаль энергии</td> <td>16</td> <td>Морской змей</td> <td>40</td> </tr>
	<tr> <td>Сатир</td> <td>16</td> 				<td>Подвода с боеприпасами</td> <td>41</td> </tr>
	<tr> <td>Жрица морей</td> <td>16</td> 			<td>Палатка первой помощи</td> <td>41</td> </tr>
	<tr> <td>Заклинательница</td> <td>16</td> 		<td>Гидра хаоса</td> <td>42</td> </tr>
	<tr> <td>Гном</td> <td>17</td> 					<td>Сказочный дракон</td> <td>42</td> </tr>
	<tr> <td>Боевой гном</td> <td>17</td> 			<td>Древнее чудище</td> <td>43</td> </tr>
	<tr> <td>Джинн</td> <td>17</td> 				<td>Аспид</td> <td>43</td> </tr>
	<tr> <td>Мастер-джинн</td> <td>17</td> 			<td>Ржавый дракон</td> <td>44</td> </tr>
	<tr> <td>Зомби</td> <td>17</td> 				<td>Лазурный дракон</td> <td>45</td> </tr>
	<tr> <td>Лорд вампиров</td> <td>17</td> 		<td>Кристаллический дракон</td> <td>46</td> </tr>
	<tr> <td>Могущественный лич</td> <td>17</td> 	<td>Катапульта</td> <td>47</td> </tr>
	<tr> <td>Фангарм</td> <td>17</td> 				<td colspan="2"></td> </tr>
	`,

	wallTeleport: `
	<tr> <th>Клетка</th> <th>Клетки, доступные для телепортации</th> <th>Схема</th> </tr>
	<tr> <th>1</th> <td>2, 3, 4, 5 или 7</td> <td class="td-picture" rowspan="11" style="width: 500px"><img height="600" data-src="images/storypictures/teleport.png" alt="Телепорт"></td> </tr>
	<tr> <th>2</th> <td>1, 3, 4, 5, 7, а также за стену на <strong>красные</strong> клетки</td> </tr>
	<tr> <th>3</th> <td>1, 2, 4, 5 или 7</td> </tr>
	<tr> <th>4</th> <td>1, 2, 3, 5, 7, а также на <strong>оранжевые</strong> клетки</td> </tr>
	<tr> <th>5</th> <td>1, 2, 3, 4, 6, 7, 8, 9, 11, а также на <strong>желтые</strong> клетки</td> </tr>
	<tr> <th>6</th> <td>5 или 7, а также за стену на <strong>зеленые</strong> клетки</td> </tr>
	<tr> <th>7</th> <td>1, 2, 3, 4, 5, 8, 9, 10, 11, а также на <strong>синие</strong> клетки</td> </tr>
	<tr> <th>8</th> <td>5, 7, 9, 10 или 11</td> </tr>
	<tr> <th>9</th> <td>5, 7, 10, 11, а также на <strong>фиолетовые</strong> клетки</td> </tr>
	<tr> <th>10</th> <td>7, 9 или 11</td> </tr>
	<tr> <th>11</th> <td>7, 9, а также на <strong>серые</strong> клетки</td> </tr>
	<tr> <td colspan="3">(Клетка под номером 6 доступна только при открытых или сломанных воротах)</td> </tr>
	`,

	wallTeleportM: `
	<tr> <th>Клетка</th> <th>Клетки, доступные для телепортации</th> </tr>
	<tr> <th>1</th> <td>2, 3, 4, 5 или 7</td> </tr>
	<tr> <th>2</th> <td>1, 3, 4, 5, 7, а также за стену на <strong>красные</strong> клетки</td> </tr>
	<tr> <th>3</th> <td>1, 2, 4, 5 или 7</td> </tr>
	<tr> <th>4</th> <td>1, 2, 3, 5, 7, а также на <strong>оранжевые</strong> клетки</td> </tr>
	<tr> <th>5</th> <td>1, 2, 3, 4, 6, 7, 8, 9, 11, а также на <strong>желтые</strong> клетки</td> </tr>
	<tr> <th>6</th> <td>5 или 7, а также за стену на <strong>зеленые</strong> клетки</td> </tr>
	<tr> <th>7</th> <td>1, 2, 3, 4, 5, 8, 9, 10, 11, а также на <strong>синие</strong> клетки</td> </tr>
	<tr> <th>8</th> <td>5, 7, 9, 10 или 11</td> </tr>
	<tr> <th>9</th> <td>5, 7, 10, 11, а также на <strong>фиолетовые</strong> клетки</td> </tr>
	<tr> <th>10</th> <td>7, 9 или 11</td> </tr>
	<tr> <th>11</th> <td>7, 9, а также на <strong>серые</strong> клетки</td> </tr>
	<tr> <td colspan="2">(Клетка под номером 6 доступна только при открытых или сломанных воротах)</td> </tr>
	<tr> <th colspan="2" class="td-picture"><img width="300" data-src="images/storypictures/teleport.png" alt="Телепорт"></th> </tr>
	`,

	chainPriority: `
	<table>
		<tr> <th style="width: 25%"></th> <th>Одногексовые существа</th> <th>Двухгексовые существа</th> </tr>
		<tr> <th>Вражеские существа вокруг основной цели</th> <td class="td-picture"><img height="150" data-src="images/storypictures/chain_priority_1.png" alt="Приоритет молнии"></td> <td class="td-picture"><img height="150" data-src="images/storypictures/chain_priority_3.png" alt="Приоритет молнии"></td> </tr>
		<tr> <th>Союзные существа вокруг основной цели</th> <td class="td-picture"><img height="150" data-src="images/storypictures/chain_priority_2.png" alt="Приоритет молнии"></td> <td class="td-picture"><img height="150" data-src="images/storypictures/chain_priority_4.png" alt="Приоритет молнии"></td> </tr>
	</table>
	`,

	chainPriorityM: `
	<table>
		<tr> <th colspan="2">Одногексовые существа</th> </tr>
		<tr> <th style="width: 40%">Вражеские существа вокруг основной цели</th> <td class="td-picture"><img height="100" data-src="images/storypictures/chain_priority_1.png" alt="Приоритет молнии"></td> </tr>
		<tr> <th>Союзные существа вокруг основной цели</th> <td class="td-picture"><img height="100" data-src="images/storypictures/chain_priority_2.png" alt="Приоритет молнии"></td> </tr>
		<tr> <th colspan="2">Двухгексовые существа</th> </tr>
		<tr> <th>Вражеские существа вокруг основной цели</th> <td class="td-picture"><img height="100" data-src="images/storypictures/chain_priority_3.png" alt="Приоритет молнии"></td> </tr>
		<tr> <th>Союзные существа вокруг основной цели</th> <td class="td-picture"><img height="100" data-src="images/storypictures/chain_priority_4.png" alt="Приоритет молнии"></td> </tr>
	</table>
	`,

	structures: `
	<table class="compress"}>
		<tr> <th>Город</th> <th>Стандартные структуры</th> <th>Уникальные структуры</th> <th>Не структуры</th> </tr>
		<tr> <td>Замок</td> <td rowspan="10" width="20%">Префектура, Таверна, Кузница, Рынок, Хранилище ресурсов, Гильдия магов 1 уровня, Храм грааля, Жилища существ 1-7 уровней</td> <td>Верфь, Маяк, Конюшни</td> <td>Братство меча, Бастион грифонов</td> </tr>
		<tr> <td>Оплот</td> <td>Таинственный пруд, Сокровищница</td> <td>Гильдия горняков, Фонтан удачи, Побеги дендроидов</td> </tr>
		<tr> <td>Башня</td> <td>Торговцы артефактами, Библиотека, Смотровая башня, Стена знаний</td> <td>Крылья ваятеля</td> </tr>
		<tr> <td>Инферно</td> <td>Культ огня, Серные тучи, Врата замка</td> <td>Инкубатор, Клетки</td> </tr>
		<tr> <td>Некрополис</td> <td>Усилитель некромантии, Вуаль тьмы, Преобразователь скелетов, Верфь</td> <td>Разрытые могилы</td> </tr>
		<tr> <td>Темница</td> <td>Академия боевых искусств, Вихрь маны, Портал вызова, Торговцы артефактами</td> <td>Грибные кольца</td> </tr>
		<tr> <td>Цитадель</td> <td>Чертоги вальгаллы, Черный ход, Гильдия наемников, Двор баллист</td> <td>Столовая</td> </tr>
		<tr> <td>Крепость</td> <td>Клетка воителей, Обелиск крови, Верфь, Знаки страха</td> <td>Пост капитана</td> </tr>
		<tr> <td>Сопряжение</td> <td>Университет магии, Торговцы артефактами, Верфь, Погребальная урна</td> <td>Сад жизни</td> </tr>
		<tr> <td>Причал</td> <td>Пороховой склад, Верфь, Гильдия воров, Грот</td> <td>Кабак, Насест</td> </tr>
	</table>
	`,

	structuresM: `
	<table>
		<tr> <th>Город</th> <th>Структуры</th> <th>Не структуры</th> </tr>
		<tr> <td>Замок</td> <td>Верфь, Маяк, Конюшни</td> <td>Братство меча, Бастион грифонов</td> </tr>
		<tr> <td>Оплот</td> <td>Таинственный пруд, Сокровищница</td> <td>Гильдия горняков, Фонтан удачи, Побеги дендроидов</td> </tr>
		<tr> <td>Башня</td> <td>Торговцы артефактами, Библиотека, Смотровая башня, Стена знаний</td> <td>Крылья ваятеля</td> </tr>
		<tr> <td>Инферно</td> <td>Культ огня, Серные тучи, Врата замка</td> <td>Инкубатор, Клетки</td> </tr>
		<tr> <td>Некрополис</td> <td>Усилитель некромантии, Вуаль тьмы, Преобразователь скелетов, Верфь</td> <td>Разрытые могилы</td> </tr>
		<tr> <td>Темница</td> <td>Академия боевых искусств, Вихрь маны, Портал вызова, Торговцы артефактами</td> <td>Грибные кольца</td> </tr>
		<tr> <td>Цитадель</td> <td>Чертоги вальгаллы, Черный ход, Гильдия наемников, Двор баллист</td> <td>Столовая</td> </tr>
		<tr> <td>Крепость</td> <td>Клетка воителей, Обелиск крови, Верфь, Знаки страха</td> <td>Пост капитана</td> </tr>
		<tr> <td>Сопряжение</td> <td>Университет магии, Торговцы артефактами, Верфь, Погребальная урна</td> <td>Сад жизни</td> </tr>
		<tr> <td>Причал</td> <td>Пороховой склад, Верфь, Гильдия воров, Грот</td> <td>Кабак, Насест</td> </tr>
		<tr> <th>Общие структуры</th> <td colspan="2">Префектура, Таверна, Кузница, Рынок, Хранилище ресурсов, Гильдия магов 1 уровня, Храм грааля, Жилища существ 1-7 уровней</td> </tr>
	</table>
	`
};

// Контент статей
let m = ua.device.type == 'Mobile' ? true : false;

const mechanicsContent = [
	{id: 'atk_dfs_dmg', text: `
	<h1>Атака, Защита и Урон</h1>
	<h2 id="atk_dfs_dmg.1">Расчет нанесенного урона в бою</h2>
	<p>
		[t]Существует четыре основных параметра, определяющих величину суммарного урона [s]D(sum)[/s], который сможет нанести ваш юнит противнику:<br><br>
		[t]1. [s]Базовый урон[/s] вашего юнита [s]D(bas)[/s], выражен в хитпоинтах [s](HP)[/s];<br><br>
		[t]2. [s]Модификатор базового урона[/s] [s]MD(bas)[/s], который зависит от сравнительной характеристики величины [s]Атаки[/s] вашего юнита и [s]Защиты[/s] жертвы, выражен в хитпоинтах [s](HP)[/s];<br><br>
		[t]3. [s]Модификатор нападения M(of) / Модификатор стрельбы М(ar)[/s], который зависит от наличия и степени прокачки вторичного навыков [s]Нападение[/s] у вашего героя, выражен в хитпоинтах [s](HP)[/s];<br><br>
		[t]4. [s]Модификатор удачи M(luck)[/s], который проявляется в случае выпадения [s]Удачи[/s], при атаке или контратаке в текущем раунде боя. (Примечание: выпадение [s]Морали[/s] не рассматриваем, так как это просто возможность повторить ход в текущем раунде боя и расчет суммарного урона в этом случае делается отдельно).<br><br>
		[t]Все остальные модификаторы, к которым относятся всевозможные заклинания, специализации героев и юнитов, только лишь видоизменяют один или несколько из указанных выше параметров.<br>
		[t]Ниже эти параметры рассмотрены подробнее.
	</p>
	<h2 id="atk_dfs_dmg.2">Базовый урон юнита</h2>
	<p>
		[t]Каждый юнит имеет определенный интервал значений урона [s][Dmin;Dmax][/s], в пределах которого случайным образом будет взят базовый урон для расчета величины суммарного урона. Значение выбирается в каждом раунде боя случайным образом.<br><br>
		[t]На базовый урон могут оказать влияние два заклинания:<br><br>
		[t]&bull; [m]Благословление[/m] – все юниты наносят фиксированный базовый урон, который равен [s]Dmax[/s] [или [s]Dmax + 1[/s] при продвинутой / экспертной магии];<br><br>
		[t]&bull; [m]Проклятие[/m] - все юниты наносят фиксированный базовый урон, который равен [s]Dmin[/s] [или [s]0,8 * (Dmin - 1)[/s] при продвинутой / экспертной магии]. Однако урон, наносимый юнитом, не может быть меньше [s]1 HP[/s].
	</p>
	<h2 id="atk_dfs_dmg.3">Модификатор базового урона</h2>
	<p>
		[t]В случае равенства параметров [s]Атаки[/s] нападающего и [s]Защиты[/s] жертвы модификатор базового урона равен нулю. В случае, когда [s]Атака (Att)[/s] нападающего юнита (с учетом всех артефактов) больше [s]Защиты (Def)[/s] жертвы, за каждую единицу разницы модификатор увеличивается на [s]5%[/s] от величины базового урона (максимальное превышение, разрешенное в игре составляет [s]300%[/s], при дальнейшем росте дельты [s]Атака-Защита[/s] эффект не усиливается). В случае, когда [s]Атака[/s] нападающего юнита (с учетом всех артефактов) меньше [s]Защиты[/s] жертвы, за каждую единицу разницы модификатор увеличивается (по модулю) на [s]2,5%[/s] от величины базового урона (максимальное снижение - на [s]70%[/s]), причем в этом случае модификатор имеет отрицательный знак. Т.е. в итоге он уменьшает суммарный урон юнита.<br><br>
		[t]&bull; Если [s]Атака[/s] больше [s]Защиты[/s]:<br><br>
		[t][s]МD(bas) = (Att - Def) * 0,05 * D(bas)[/s]<br><br>
		[t]Максимум на [s]300%[/s], т.е. максимальный урон будет, когда [s]Атака[/s] больше [s]Защиты[/s] на 60.<br><br>
		[t]&bull; Если [s]Атака[/s] меньше [s]Защиты[/s]:<br><br>
		[t][s]MD(bas) = (Att - Def) * 0,025 * D(bas)[/s]<br><br>
		[t]Максимум на [s]70%[/s], т.е. минимальный урон будет, когда [s]Защита[/s] превышает [s]Атаку[/s] на 28 или более пунктов.<br><br>
		[t]Примечание: Отсюда видно, что модификатор базового урона может принимать значения в диапазоне [s][-0,7; 3,0][/s], где за единицу принят базовый урон [s]D(bas)[/s]. Или, другими словами, базовый урон, скорректированный модификатором в итоге составит величину [s][0,3; 4,0][/s].<br><br>
		[t]На модификатор базового урона могут оказать влияние следующие заклинания:<br><br>
		[t]&bull; [m]Жажда крови[/m] – добавляет +3 (+6 на продвинутом) к [s]Атаке[/s] указанному (или всем - на эксперте) стеку;<br>
		[t]&bull; [m]Бешенство[/m] - добавляет одинарное (полуторное - на продвинутом уровне магии, удвоенное - на эксперте) количество баллов [s]Защиты[/s] к [s]Атаке[/s] указанному юниту ([s]Защита[/s] юнита обнуляется);<br>
		[t]&bull; [m]Палач[/m] – добавляет +8 к [s]Атаке[/s] против всех юнитов 7-го уровня и выше;<br>
		[t]&bull; [m]Молитва[/m] – добавляет +2 (+4 на продвинутом) к [s]Атаке[/s], [s]Защите[/s] и [s]Скорости[/s] указанному (или всем - на эксперте) стеку;<br>
		[t]&bull; [m]Точность[/m] - добавляет +3 (+6 на продвинутом) к [s]Атаке[/s] указанному стрелку (или всем стрелкам - на эксперте);<br>
		[t]&bull; [m]Слабость[/m] – снижает на 3 (6 на продвинутом) балла [s]Атаку[/s] указанному (или всем - на эксперте) стеку;<br>
		[t]&bull; [m]Каменная кожа[/m] - добавляет +3 (+6 на продвинутом) к [s]Защите[/s] указанному (или всем - на эксперте) стеку;<br>
		[t]&bull; [m]Разрушающий луч[/m] - снижает [s]Защиту[/s] выбранного юнита на 3 балла (на продвинутом - 4, на эксперте - 5). Единственное заклинание из указанных, эффект от которого действует до конца боя или до применения [m]Снятия заклинаний[/m]. Также особенностью этого заклинания является то, что его можно наложить несколько раз на одного юнита, причем эффект будет суммироваться, т.е. [s]Защиту[/s] юнита за несколько раундов боя можно снизить до нуля.<br><br>
		[t]Таким образом, важно понимать, что все указанные выше заклинания оказывают влияние только на один из параметров, составляющих суммарный урон, а именно - на модификатор базового урона. Ни на какие другие параметры суммарного урона указанные 8 заклинаний не влияют.<br><br>
		[t]Эффект применения этих заклинаний будет зависеть от значимости модификатора базового урона для каждого конкретного юнита. Например, если [s]Атака[/s] нападающего больше [s]Защиты[/s] жертвы, то заклинание [m]Жажда крови[/m] увеличит суммарный урон на [s]6 * 5% = 30%[/s] (от величины базового урона). Действие этого заклинания для такого юнита в точности соответствует экспертному вторичному навыку [s]Нападение[/s]. Однако, если [s]Атака[/s] нападающего существенно меньше [s]Защиты[/s] жертвы, то эффект от заклинания будет в два раза слабее и составит только [s]6 * 2,5% = 15%[/s] от величины базового урона.<br><br>
		[t]На основании вышесказанного легко проследить преимущества и недостатки того или иного заклинания в каждом конкретном случае. Например, для таких юнитов как [m]Копейщик[/m], [m]Фея[/m], [m]Гарпия[/m] или [m]Цербер[/m], у которых большой разброс базового урона - намного эффективнее будет экспертное [m]Благословение[/m], (которое увеличит базовый урон минимум в два раза и это отразится не только на одном, а на всех составляющих суммы!), чем [m]Жажда Крови[/m], которая хоть и дает кажущуюся силу +6 в [s]Атаке[/s], тем не менее принесет в итоге только [s]30%[/s] от базового урона всего для одного из четырех слагаемых.<br><br>
		[t]Кроме того, максимальное эффективное значение любого первичного навыка равно 99 единицам, однако дальнейшее повышение возможно до 127 единиц (учитываться и отображаться будет 99). После 127 произойдет сброс параметров [s]Атаки[/s] и [s]Защиты[/s] на 0.
	</p>
	<h2 id="atk_dfs_dmg.4">Модификатор нападения</h2>
	<p>
		<img class="story-img img-in-text-l" data-src="images/storypictures/offense.jpg" alt="Навык нападения" height="100">
		[t]Третья составляющая суммарного урона - модификатор нападения [s]M(of)[/s] зависит от степени развития вторичного навыка [s]Нападение[/s] (если он присутствует среди навыков героя) и составляет величину [s]10-20-30%[/s] от базового урона [s]D(bas)[/s]. В расчете этого параметра модификатор базового урона не применяется, т.е. никакие из указанных выше заклинаний, никакие артефакты не изменят эту составляющую суммарного урона. Она строго фиксирована и определяется непосредственно рандомным базовым уроном в каждом раунде боя.<br><br>
		[t]Особое внимание стоит уделить героям, которые имеют специализацию [s]Нападение[/s] ([m]Крэг Хэк[/m], [m]Гундула[/m], [m]Коркес[/m]). Эти герои имеют бонус, который увеличивает модификатор нападения (и только его) на [s]5%[/s] за каждый достигнутый уровень опыта.<br><br>
		[t][s]M(of) = 0,30 * (1 + 0,05 * Level) *D(bas)[/s]<br><br>
		[t](Указано для экспертного уровня навыка [s]Нападения[/s], выражен в хитпоинтах [s](HP)[/s]).<br><br>
		[t]Следует обратить внимание, что эти проценты имеют относительный, а не абсолютный характер, т.е. спец по [s]Нападению[/s] десятого уровня, имеющий экспертный навык [s]Нападение[/s] (бонус [s]+30%[/s] базового урона) в итоге будет иметь [s]M(of) = 30 * (1 + 0,05 * 10 Level) = 45%[/s], а не [s]30 + 5 * 10 = 80%[/s], как иногда ошибочно считают.<br><br>
		[t]В силу того, что спец по [s]Нападению[/s] изначально имеет базовый навык [s]Нападение[/s], его бонус на старте составляет [s]M(of) = 10 * (1 + 0,05 * 1 Level) = 10,5%[/s] от базового урона. Максимально достижимый уровень в игре – 108, что позволит спецу в этом случае иметь бонус [s]M(of) = 30 * (1 + 0,05 * 108 Level) = 192%[/s] от базового урона.<br><br>
		[t]Модификатор нападения не участвует в расчете урона, наносимого стрелками на расстоянии.
	</p>
	<h2 id="atk_dfs_dmg.5">Модификатор стрельбы</h2>
	<p>
		<img class="story-img img-in-text-l" data-src="images/storypictures/archery.jpg" alt="Навык стрельбы" height="100">
		[t]Альтернативная третья составляющая суммарного урона — модификатор стрельбы [s]M(ar)[/s] зависит от степени развития вторичного навыка [s]Стрельба[/s] (если он присутствует среди навыков героя) и составляет величину [s]10-25-50%[/s] от базового урона [s]D(bas)[/s]. В расчете этого параметра модификатор базового урона не применяется, т.е. никакие из указанных выше заклинаний, никакие артефакты не изменят эту составляющую суммарного урона. Она строго фиксирована и определяется непосредственно рандомным базовым уроном в каждом раунде боя.<br><br>
		[t]Особое внимание стоит уделить герою [m]Оррину[/m], имеющему специализацию [s]Стрельбы[/s] которая увеличивает модификатор стрельбы (и только его) на [s]5%[/s] за каждый достигнутый уровень опыта.<br><br>
		[t][s]M(ar) = 0,50 * (1 + 0,05 * Level) * D(bas)[/s]<br><br>
		[t](Указано для экспертного уровня навыка [s]Стрельба[/s], выражен в хитпоинтах [s](HP)[/s]).<br><br>
		[t]Следует обратить внимание, что эти проценты имеют относительный, а не абсолютный характер, т.е. [m]Оррин[/m] десятого уровня, имеющий экспертный навык [s]Стрельба[/s] (бонус [s]+50%[/s] базового урона) в итоге будет иметь [s]M(ar) = 50 * (1 + 0,05 * 10 Level) = 75%[/s], а не [s]50 + (5 * 10) = 100%[/s].<br><br>
		[t]В силу того, что [m]Оррин[/m] изначально имеет базовый навык [s]Стрельба[/s], его бонус на старте составляет [s]M(ar) = 10 * (1 + 0,05 * 1 Level) = 10,5%[/s] от базового урона. Максимально достижимый уровень в игре – 108, что позволит спецу в этом случае иметь бонус [s]M(ar) = 50 * (1 + 0,05 * 108 Level) = 320%[/s] от базового урона.<br><br>
		[t]Модификатор стрельбы участвует только в расчете урона от стрельбы (модификатор также влияет на урон [m]Баллисты[/m] и [m]Пушки[/m]).
	</p>
	<h2 id="atk_dfs_dmg.6">Модификатор удачи</h2>
	<p>
		<img class="story-img img-in-text-l" data-src="images/storypictures/luck.jpg" alt="Удача" height="100">
		[t]Наиболее простой и понятный модификатор из всех четырех. Потому что в случае срабатывания [s]Удачи[/s] во время нанесения удара, юнит наносит дополнительно урон равный базовому урону [s]D(bas)[/s], определенному для этого раунда боя. Понятно, что если на юнит, к примеру, наложено заклинание [m]Благословение[/m], то урон от удачи будет равен [s](Dmax + 1)[/s].<br><br>
		[t]Единственной известной особенностью этого модификатора является тот факт, что при расчете урона от юнита, который может атаковать сразу несколько отрядов врага ([m]Гидры[/m], [m]Психические Элементали[/m]) [s]Удача[/s] применяется только к тому юниту, на кого, собственно, совершается нападение. Остальные получают стандартный урон без учета модификатора удачи.<br><br>
		[t][s]M(luck) = D(bas)[/s]
	</p>
	<h2 id="atk_dfs_dmg.7">Модификаторы суммарного урона</h2>
	<p>
		[t][s]Заклинания.[/s]<br><br>
		[t]Отдельно необходимо упомянуть три оставшихся заклинания, которые модифицируют суммарный урон, наносимый юниту.<br><br>
		[t]&bull; [m]Щит[/m] – снижает на [s]15%[/s] ([s]30%[/s] - на продвинутом) суммарный урон, нанесенный юниту в ближнем бою. На эксперте - защищает все стеки в армии героя.<br>
		[t]&bull; [m]Воздушный щит[/m] - снижает на [s]25%[/s] ([s]50%[/s] - на продвинутом) суммарный урон, нанесенный юниту от атак на расстоянии. На эксперте - защищает все стеки в армии героя.<br>
		[t]&bull; [m]Забывчивость[/m] - снижает окончательный урон, наносимый указанным стреляющим стеком противника на [s]50%[/s] (на основном уровне навыка [s]Магия воды[/s]), на продвинутом этот стек (и на эксперте - все стеки стреляющих юнитов противника) теряет способность к стрельбе до истечения времени действия заклинания. Способность атаковать в рукопашную у юнита сохраняется.<br><br>
		[t]Первое из двух предложенных заклинаний часто ставят в спарринг с заклинанием [m]Каменная Кожа[/m] и вопрос "что эффективнее из этих двух заклинаний?" задавал себе, наверное, каждый игрок. Что, если имеется выбор между заклинаниями [m]Каменная Кожа[/m] и [m]Щит[/m]? Эффективнее будет действовать [m]Щит[/m], потому что [m]Каменная Кожа[/m] снижает на [s]15-30%[/s] только модификатор базового урона нападающего (одно из слагаемых суммарного урона). В то время как [m]Щит[/m] снимет [s]30%[/s] от величины всего суммарного урона (что всегда эффективнее).<br><br>
		[t]Действие второго из двух предложенных заклинаний, по сути, аналогично первому, однако имеется один существенный баг, который необходимо учитывать при использовании [m]Воздушного Щита[/m] – если на юнит наложено это заклинание, то он вместо половинного урона получает двойной урон от [s]Стрелковых башен[/s] при осаде города. Это может существенно осложнить процедуру захвата, если не знать этого нюанса.<br><br>
		[t][s]Вторичный навык Доспехи.[/s]<br><br>
		[t]Вторичный навык [s]Доспехи[/s], имеющийся у героя, который подвергается атаке, оказывает влияние на суммарный урон, нанесенный его юнитам и снижает его на [s]5-15%[/s] в зависимости от степени прокачки этого навыка. Для вычисления модификатора защиты [s]M(def)[/s] у специалистов вторичного навыка [s]Доспехи[/s] ([m]Мефала[/m], [m]Нила[/m], [m]Тазар[/m]) применяем тот же механизм расчета, что и для спецов в [s]Нападении[/s] - за каждый достигнутый уровень опыта бонус вторичного навыка увеличивается на [s]5%[/s] (относительных).<br><br>
		[t]Не стоит оспариваться тот факт, что эксперт навыка [s]Доспехи[/s] в большинстве случаев отразит большее число хитпоинтов атаки, чем тому же атакующему принесет экспертный вторичный навык [s]Нападение[/s], даже с учетом того, что в относительном выражении ([s]15%[/s] против [s]30%[/s] у Нападения) он смотрится менее внушительно. Применяется в расчете в последнюю очередь и дополняет действие заклинания [m]Щит[/m] или [m]Воздушный Щит[/m].<br><br>
		[t][s]M(def) = 0,15 * (1 + 0,05 * Level)[/s]<br><br>
		[t](Указано для экспертного уровня навыка [s]Доспехи[/s], выражен в [s]%[/s])<br><br>
		[t]Итого, суммарный урон будет считаться как сумма указанных параметров, скорректированная модификатором защиты (действие заклинаний в формуле не отражено, однако подразумевается):<br><br>
		[t][s]D(sum) = [D(bas) + MD(bas) + M(of) / M(ar)] * [1 - M(def)] + M(luck)[/s]
	</p>
	`},
	{id: 'luck_morale', text: `
	<h1>Удача и Боевой дух</h1>
	<p>
		[t][s]Удача[/s] и [s]Боевой дух[/s] - два параметра, которые отображаются на существах и на персонаже. Оба этих параметра подвержены изменениям и оказывают влияние на существ в бою. [s]Нежить[/s], [s]Элементали[/s], [s]Големы[/s] и [s]Боевые машины[/s] не подвержены действию [s]Боевого духа[/s], но при их атаке может сработать [s]Удача[/s].<br><br>
		[t]Параметры [s]Удачи[/s] и [s]Боевого духа[/s] могут принимать значения от [s]-3[/s] до [s]+3[/s], включая [s]0[/s] (нейтральное), т.е. значения выше, чем [s]+3[/s] будут принматься за [s]+3[/s], а значения ниже, чем [s]-3[/s] как [s]-3[/s]. Однако, есть смысл поднимать [s]Боевой дух[/s] или /strong>Удачу[/s] выше [s]+3[/s]. Если противник использует в бою заклинание [m]Печаль[/m] или [m]Неудача[/m], то лишние баллы [s]Боевого духа[/s] или [s]Удачи[/s] нейтрализуют их эффект.<br><br>
		[t]Ряд эффектов [s]Удачи[/s] и [s]Боевого духа[/s] можно просмотреть в окне персонажа, например эффекты от артефактов или посещенных объектов. Однако, такие негативные эффекты, влияющие на [s]Боевой дух[/s], как присутствие в армии войск более чем одной фракции или наличие в армии [s]Нежити[/s] не будет отображаться.<br><br>
		[t]Самый надежный способ узнать значение [s]Удачи[/s] и [s]Боевого духа[/s] своих существ перед битвой - посмотреть на их иконки в меню существа (картинки ниже) (важно, чтобы сужество находилось в армии персонажа, а не в гарнизоне города или в каком-то другом объекте). Но при этом стоит учитывать такие факторы, как наличие у противника тех или иных существ, а также особых артефактов.
	</p>
	<div class="${!m?'block-img':'picture'}"><img class="img-${!m?'half':'full'}-screen" data-src="images/storypictures/morale_luck.jpg" alt="Иконки удачи и морали"></div>
	<p>
		[t][s]Удача[/s] существа определяет его вероятность нанести дополнительный урон при любой атаке или контратаке. В случае срабатывания [s]Удачи[/s], к урону прибавляется базовый урон [s]D(bas)[/s], если показатель [s]Атаки[/s] у существа выше, чем показатель [s]Защиты[/s] противника; Или же урон удваивается, в том случае, если показатель [s]Атаки[/s] существа ниже или равен показателю [s]Защиты[/s] противника.<br><br>
		[t]Если на существо, к примеру, наложено заклинание [m]Благословение[/m], то урон от срабатывания [s]Удачи[/s], при более высоком показателе [s]Атаки[/s], будет равен [s]D(max)[/s] или [s]D(max) + 1[/s] (на [s]Экспертном[/s] уровне [s]Магии Воды[/s]).<br><br>
		[t]Таким образом модиикатор [s]Удачи[/s] - [s]M(luck)[/s]:<br><br>
		[t]- Если [s]Атака[/s] больше [s]Защиты: M(luck) = D(bas)[/s]<br><br>
		[t]- Если [s]Атака[/s] меньше или равна [s]Защите: M(luck) = [D(bas) + MD(bas) + M(of) / M(ar)] * [1 - M(def)][/s]<br><br>
		[t]Отрицательная [s]Удача[/s] определяет шанс существа нанести половину урона. При негативном показателе [s]Удачи[/s] показатель [s]Защиты[/s] и [s]Атаки[/s] существ на влияет на модификатор удачи [s]M(luck)[/s]:<br><br>
		[t][s]M(luck) = [÷2][/s]<br><br>
		[t]Если существо производит [s]Двойной удар[/s] (например [m]Крестоносец[/m], [m]Налетчик[/m] или [m]Ассида[/m]), то [s]Удача[/s] определяется для каждого из ударов отдельно.<br><br>
		[t]Таблица вероятностей выпадения удачи в зависимости от его значения:
	</p>
		<table class="compress">
			<tr> <th>Значение Удачи</th> <th>Статус</th> <th>Вероятность удачного (+) и неудачного (-) удара</th> </tr>
			<tr> <td>+3</td> <td>Изумительная</td> <td>12,5%</td> </tr>
			<tr> <td>+2</td> <td>Отличная</td> <td>8,3%</td> </tr>
			<tr> <td>+1</td> <td>Хорошая</td> <td>4,2%</td> </tr>
			<tr> <td>0</td> <td>Нормальная</td> <td>0%</td> </tr>
			<tr> <td>-1</td> <td>Плохая</td> <td>8,3%</td> </tr>
			<tr> <td>-2</td> <td>Отвратительная</td> <td>16,7%</td> </tr>
			<tr> <td>-3</td> <td>Отряд проклят!</td> <td>25%</td> </tr>
		</table>
	<p>
		[t]Наличие [m]Лепрекона[/m] в союзных войсках удваивает шанс удачного удара. Т.е. при уровне [s]Удачи +1[/s] существо нанесет удачный удар с вероятностью [s]8,3%[/s] вместо [s]4,2%[/s].<br><br>
		[t]Существа, наносящие урон по нескольким целям, наносят увеличенный [s]Удачей[/s] урон только по одной цели.<br><br>
		[t][m]Гидры[/m], [m]Гидры Хаоса[/m] и [m]Церберы[/m] наносят увеличенный урон по цели с высшим приоритетом (где 1 - высший приоритет) в соответствии со [s]схемой ниже[/s] (правая картинка). [m]Психический[/m] и [m]Магический элементали[/m]: аналогично, но по левой картинке на [s]схеме ниже[/s]. [m]Магог[/m], [m]Лич[/m] и [m]Могущественный лич[/m]: аналогично, но только при стрельбе по нескольким целям. Если цель одна, то она и получит увеличенный урон. Если вторая, третья и т.д. цели являются союзными, они также будут учитываться и увеличенный урон может быть нанесен своим войскам.
	</p>
	<div class="${!m?'block-img':'picture'}"><img class="img-${!m?'two-thirds':'full-screen'}" data-src="images/storypictures/priority_1.png" alt="Приоритеты удачи"></div>
	<p>
		[t][s]Огненное дыхание[/s] имеет эффект увеличенного урона только по основной цели атаки.<br><br>
		[t][s]Боевой дух[/s] существа определяет его вероятность совершить дополнительный ход в текущем раунде после завершения основного (ожидание не является завершением хода).<br><br>
		[t]Отрицательный [s]Боевой дух[/s] существа определяет его вероятность пропустить свой очередной ход, когда до него доходит очередь.<br><br>
		[t]Ниже таблица вероятностей срабатывания отрицательного и положительного [s]Боевого духа[/s] в зависимости от его значения:
	</p>
		<table class="compress">
			<tr> <th>Значение Боевого духа</th> <th>Статус</th> <th>Вероятность дополнительного хода (+) и пропуска (-)</th> </tr>
			<tr> <td>+3</td> <td>Ярость!</td> <td>12,5%</td> </tr>
			<tr> <td>+2</td> <td>Отличный</td> <td>8,3%</td> </tr>
			<tr> <td>+1</td> <td>Хороший</td> <td>4,2%</td> </tr>
			<tr> <td>0</td> <td>Нормальный</td> <td>0%</td> </tr>
			<tr> <td>-1</td> <td>Плохой</td> <td>8,3%</td> </tr>
			<tr> <td>-2</td> <td>Отвратительный</td> <td>16,7%</td> </tr>
			<tr> <td>-3</td> <td>Готовы предать!</td> <td>25%</td> </tr>
		</table>
	<p>
		[t]На значения [s]Удачи[/s] и [s]Боевого духа[/s] могут повлиять следующие артефакты:<br><br>
		[t]&bull; [m]Герб доблести[/m] - Боевой дух героя [s]+1[/s].<br>
		[t]&bull; [m]Знак отваги[/m] - Боевой дух героя [s]+1[/s].<br>
		[t]&bull; [m]Значок смелости[/m] - Боевой дух героя [s]+1[/s]. Защита от [m]Слепоты[/m], [m]Берсерка[/m], [m]Бешенства[/m], [m]Гипноза[/m], [m]Радости[/m], [m]Забывчивости[/m] и [m]Печали[/m].<br>
		[t]&bull; [m]Значок смелости[/m] - Боевой дух героя [s]+1[/s].<br>
		[t]&bull; [m]Карты пророчества[/m] - Удача героя [s]+1[/s].<br>
		[t]&bull; [m]Голубка удачи[/m] - Удача героя [s]+1[/s].<br>
		[t]&bull; [m]Клевер удачи[/m] - Удача героя [s]+1[/s].<br>
		[t]&bull; [m]Застывший глаз дракона[/m] - Боевой дух и Удача героя [s]+1[/s].<br>
		[t]&bull; [m]Амулет бесстрашия[/m] - Боевой дух и Удача героя [s]+3[/s].<br>
		[t]&bull; [m]Кольцо подавления[/m] - Боевой дух вражеского героя [s]-1[/s].<br>
		[t]&bull; [m]Устрашающая маска[/m] - Боевой дух вражеского героя [s]-1[/s].<br>
		[t]&bull; [m]Кулон разорения[/m] - Боевой дух вражеского героя [s]-2[/s].<br>
		[t]&bull; [m]Руны неизбежности[/m] - Удача вражеского героя [s]-1[/s].<br>
		[t]&bull; [m]Подкова демона[/m] - Удача вражеского героя [s]-1[/s].<br>
		[t]&bull; [m]Кукла шамана[/m] - Удача вражеского героя [s]-2[/s].<br>
		[t]&bull; [m]Песочные часы недоброго часа[/m] - Нейтрализует положительную Удачу всех существ на поле боя.<br>
		[t]&bull; [m]Дух уныния[/m] - Нейтрализует положительный Боевой дух всех существ на поле боя.<br><br>
		[t]На значения [s]Удачи[/s] и [s]Боевого духа[/s] могут повлиять следующие заклинания:<br><br>
		[t]&bull; [m]Радость[/m] - Боевой дух целевого существа [s]+1[/s] или [s]+2[/s], в зависимости от уровня развития [s]Магии воды[/s].<br>
		[t]&bull; [m]Печаль[/m] - Боевой дух целевого существа [s]-1[/s] или [s]-2[/s], в зависимости от уровня развития [s]Магии земли[/s].<br>
		[t]&bull; [m]Удача[/m] - Удача целевого существа [s]+1[/s] или [s]+2[/s], в зависимости от уровня развития [s]Магии воздуха[/s].<br>
		[t]&bull; [m]Неудача[/m] - Удача целевого существа [s]-1[/s] или [s]-2[/s], в зависимости от уровня развития [s]Магии огня[/s].<br><br>
		[t]На значения [s]Удачи[/s] и [s]Боевого духа[/s] могут повлиять следующие существа и их способности:<br><br>
		[t]&bull; [m]Лепрекон[/m] - Удваивает шанс удачного удара союзных войск<br>
		[t]&bull; [m]Ангел[/m] / [m]Архангел[/m] - Боевой дух всех дружественных существ [s]+1[/s].<br>
		[t]&bull; [m]Костяной[/m] / [m]Призрачный дракон[/m] - Боевой дух всех вражеских существ [s]-1[/s].<br>
		[t]&bull; [m]Дьявол[/m] - Удача всех вражеских существ [s]-1[/s].<br>
		[t]&bull; [m]Архидьявол[/m] - Удача всех вражеских существ [s]-2[/s].<br>
		[t]&bull; [m]Минотавр[/m] / [m]Король минотавров[/m] - Боевой дух не может быть ниже [s]+1[/s].<br>
		[t]&bull; [m]Хоббит[/m] - Удача не может быть ниже [s]+1[/s].<br>
		[t]&bull; [s]Нежить / Элементали / Големы / Боевые машины[/s] - Существа всегда имеют нейтральный Боевой дух и не подвержены его модификации.<br><br>
		[t]Повысить или понизить [s]Боевой дух[/s] с [s]Удачей[/s] могут следующие объекты на карте приключений:<br><br>
		[t]&bull; [m]Идол удачи[/m]: [s]+1[/s] к Удаче / Боевому духу в зависимости от дня посещения.<br>
		[t]&bull; [m]Храм[/m]: [s]+1 / 2[/s] к Боевому духу в зависимости от дня посещения.<br>
		[t]&bull; [m]Храм лояльности[/m] устраняет падение Боевого духа героя на следующую битву или до конца текущего дня, когда в армии собраны войска разных фракций.<br>
		[t]&bull; [m]Знамя великой битвы[/m]: [s]+1[/s] к Удаче и Боевому духу.<br>
		[t]&bull; [m]Клеверное поле[/m]: [s]+2[/s] к Удаче в бою, если бой проходит на нем.<br>
		[t]&bull; [m]Зловещий туман[/m]: дух всех существ из [s]Темницы[/s] и [s]Инферно[/s] увеличивается на [s]1 ед.[/s], а у существ из [s]Замка[/s], [s]Оплота[/s] и [s]Башни[/s] наоборот - уменьшается на [s]1 ед.[/s], если бой проходит на нем.<br>
		[t]&bull; [m]Святая земля[/m]: дух всех существ из [s]Замка[/s], [s]Оплота[/s] и [s]Башни[/s] увеличивается на [s]1 ед.[/s], а у существ из [s]Темницы[/s] и [s]Инферно[/s] наоборот - уменьшается на [s]1 ед.[/s], если бой проходит на ней.<br>
		[t]&bull; [m]Поля славы[/m]: [s]-2[/s] от Удачи.<br>
		[t]&bull; [m]Гробница воина[/m]: [s]-3[/s] от Боевому духу.<br>
		[t]&bull; [m]Пирамида[/m]: [s]-2[/s] Удачи при повторном посещении.<br>
		[t]&bull; [m]Оазис[/m]: [s]+1[/s] к Боевому духу.<br>
		[t]&bull; [m]Буй[/m]: [s]+1[/s] к Боевому духу.<br>
		[t]&bull; [m]Русалки[/m]: [s]+1[/s] к Удаче.<br>
		[t]&bull; [m]Могила[/m]: [s]-3[/s] к Боевому духу.<br>
		[t]&bull; [m]Минеральный источник[/m]: [s]+1[/s] к Удаче.<br>
		[t]&bull; [m]Грибное кольцо фей[/m]: [s]+1[/s] к Удаче.<br>
		[t]&bull; [m]Водоем[/m]: [s]+1[/s] к Боевому духу.<br>
		[t]&bull; [m]Фонтан молодости[/m]: [s]+1[/s] к Боевому духу.<br>
		[t]&bull; [m]Фонтан удачи[/m]: от [s]-1[/s] до [s]+3[/s] к Удаче.<br>
		[t]&bull; [m]Лебединый пруд[/m]: [s]+2[/s] к Удаче.<br><br>
		[t]Другие модификаторы [s]Удачи[/s] и [s]Боевого духа[/s]:<br><br>
		[t]&bull; Существа получают [s]+1[/s] к Боевому духу, если армия состоит из существ одной фракции.<br>
		[t]&bull; Наличие [s]Нежити[/s] в союзном войске снижает Боевой дух на [s]1 ед.[/s]<br>
		[t]&bull; Если армия героя состоит из существ трех и более разных фракций, то [s]-1[/s] от Боевого духа за каждый тип фракции. Все нейтральные существа считаются представителями одной фракции.
	</p>
	`},
	{id: 'archery', text: `
	<h1>Стрельба</h1>
	<h2 id="archery.1">Количество выстрелов</h2>
	<p>
		[t]Все стрелковые отряды, [m]Катапульта[/m], [m]Баллиста[/m] и [m]Пушка[/m] имеют в запасе определенное количество выстрелов. При достижении нулевого количества выстрелов боевые машины пропускают свой ход, а стрелковые отряды могут вести только ближний бой.<br><br>
		[t][m]Благородные эльфы[/m], [m]Искусные арбалетчики[/m] и [m]Баллиста[/m] (с экспертным навыком [s]Артиллерии[/s]) совершают два выстрела за атаку, однако если цель погибнет от первого попадания, второй выстрел совершен не будет. Если у вышеперечисленных существ останется один выстрел, навык двойного выстрела не сработает.
	</p>
	<h2 id="archery.2">Штрафы стрельбы</h2>
	<p>
		[t]Практически все стрелки обладают тремя штрафами стрельбы: [s]штраф в ближнем бою[/s], [s]штраф за расстояние[/s] и [s]штраф за стрельбу через крепостные стены[/s]. Некоторые существа, способные стрелять, не имеют определенных штрафов; также штрафы стрельбы могут нивелироваться артефактами.<br><br>
		[t]&bull; [s]Штраф в ближнем бою[/s]: все существа кроме [m]Фанатиков[/m], [m]Магов[/m], [m]Архимагов[/m], [m]Титанов[/m], [m]Бехолдеров[/m], [m]Зловещих глаз[/m], [m]Медуз[/m], [m]Королев медуз[/m], [m]Пиратов[/m], [m]Корсаров[/m], [m]Морских волков[/m] и [m]Чародеев[/m] имеют [s]50%[/s] штраф при атаке в ближнем бою (расчет от итогового значения урона). [m]Лук снайпера[/m] нивелирует штраф ближнего боя.<br><br>
		[t]&bull; [s]Штраф за расстояние[/s]: при стрельбе на более чем 10 гексов (отсчет ведется от следующего гекса перед стрелком по направлению к цели и не учитывает ландшафт поля боя) стрелок наносит лишь [s]50%[/s] урона (расчет от итогового значения). При стрельбе по двухгексовому существу, расчет ведется по ближайшему гексу существа врага. Штрафа за расстояние лишены только [m]Снайперы[/m]. [m]Лук снайпера[/m] и [m]Золотой лук[/m] нивелируют штраф за расстояние.<br><br>
		[t]&bull; [s]Штраф при стрельбе через стены[/s]: при стрельбе через крепостные стены при осаде города стрелки наносят только [s]50%[/s] урона, если находятся слева от стен. Этот штраф может суммироваться со штрафом за расстояние и итоговый урон будет уменьшен на [s]75%[/s]. [m]Маги[/m], [m]Архимаги[/m], [m]Чародеи[/m] и [m]Снайперы[/m] не получают этот штраф. [m]Лук снайпера[/m] отменяет штраф при стрельбе через стены.<br><br>
		[t]У стрелков, которые наносят урон по площади, такие как [m]Магоги[/m] и [m]Личи[/m], штраф стрельбы рассчитывается для каждого отдельного гекса, по котрым они попадают снарядом.
	</p>
	<h2 id="archery.3">Стрельба через крепостные стены</h2>
	<p>
		[t]Фортификационные укрепления на поле боя занимают определенные гексы. Некоторые части укреплений ([s]Ворота[/s], 4 элемента [s]Стены[/s]) могут быть разрушены, а другие - нет.<br><br>
		[t]Однако не всегда стены города обеспечивают существам за ними защиту от вражеских выстрелов. Это связано со сложной механикой гексагонального поля боя. На самом деле гексагональное поле в расчетах преобразуется в обычное клеточное и выглядит следующим образом${!m?'':' ([s]Изображения в следующих блоках можно пролистывать[/s])'}:
	</p>
	<div class="${!m?'block-img':'picture slider'}"><img class="img-${!m?'full':'triple'}-screen" data-src="images/storypictures/battlefield_1.jpg" alt="Траектория стрельбы"></div>
	<p>
		[t]На данном примере видно, как гексагональное поле боя ([s]рис. 1[/s]) преобразуется в клеточное ([s]рис. 2, 3[/s]). На [s]рис. 1[/s] отмечены крепостные [s]Стены[/s] и случаи расстановки стрелков атакующего (слева от стен) и войск обороняющегося (справа от стен), когда стрельба не будет иметь штрафа за крепостные стены. На [s]рис. 2[/s] видны эти же положения войск в клеточной системе, а на [s]рис. 3[/s] - эти же войска в расчетной клеточной системе, когда линия стрельбы считается от верхнего левого угла клетки стрелка к левой верхней клетке цели. На [s]рис. 3[/s] видно, как линии стрельбы проходят между фрагментами крепостных стен и именно поэтому штраф не будет работать. В данном примере приведены не все сочетания клеток стрелок-цель, когда штраф нивелируется, лишь те, куда атакующий может изначально поставить свои отряды (в т.ч. при помощи [s]Тактики[/s]), а обороняющиеся войска будут находиться на начальных позициях.<br><br>
		[t]Следует помнить, на каких клетках поля боя изначально могут располагаться существа и боевые машины:<br><br>
		[t]&bull; [m]Подвода с боеприпасами[/m] занимает клетку [s]Б1[/s] и [s]Б15[/s] у обороняющегося.<br>
		[t]&bull; [m]Баллиста[/m] или [m]Пушка[/m] занимает клетку [s]Г1[/s]. У обороняющегося эти машины всегда отсутствуют.<br>
		[t]&bull; [m]Катапульта[/m] занимает клетку [s]З1[/s].<br>
		[t]&bull; [m]Палатка первой помощи[/m] занимает клетку [s]К1[/s] и [s]К15[/s] у обороняющегося.<br>
		[t]&bull; Если в армии 7 видов существ, то изначально они располагаются на клетках [s]А1, В1, Д1, Е1, Ж1, И1, Л1[/s] и аналогично, но с координатой [s]15[/s] у обороняющегося.<br>
		[t]&bull; Если в армии только 6 видов существ, то из расстановки исключается клетка [s]Е1[/s] и [s]Е15[/s] у обороняющегося.<br>
		[t]&bull; Если в армии только 5 видов существ, то расположение можно варьировать кнопкой [s]Плотного строя[/s]. При [s]Свободном строе[/s] существа займут клетки [s]А1, В1, Е1, И1 и Л1[/s], а при [s]Плотном строе[/s] - клетки [s]В1, Д1, Е1, Ж1 и И1[/s].<br>
		[t]&bull; При наличии Базовой [s]Тактики[/s] атакующий герой может расположить войска в пределах трех рядов: [s]1, 2[/s] и [s]3[/s]; при Продвинутой [s]Тактике[/s] - [s]1, 2, 3, 4[/s] и [s]5[/s]; при Экспертной [s]Тактике[/s] - [s]1, 2, 3, 4, 5, 6[/s] и [s]7[/s].<br><br>
		[t]Проанализировав данные выше, можно сделать несколько очевидных выводов и советов как атакующему игроку, так и обороняющемуся:<br><br>
		[t]&bull; Если у нас нет [s]Тактики[/s], то нет особой разницы в расстановке стрелков с целью избежать штрафа при стрельбе через стену. Однако можно переставить стрелков в ближайшие ходы (например [m]Телепортом[/m]) на клетку [s]А5, Б6[/s] или [s]В7[/s], чтобы стрелять без штрафа по существу на клетке [s]Л15[/s] (позиция [s]7[/s] в армии обороняющегося); на клетку [s]А7, Б1, В3, Г5[/s] или [s]Д7[/s], чтобы стрелять по клетке [s]И15[/s] (позиция [s]6[/s] в армии обороняющегося); на клетку [s]А3, Б5[/s] или [s]В7[/s], чтобы стрелять по клетке [s]Ж15[/s] (позиция [s]5[/s] в армии обороняющегося); на клетку [s]В3[/s] или [s]Г7[/s], чтобы стрелять по клетке [s]Е15[/s] (позиция [s]4[/s] в армии обороняющегося); на клетку [s]Л7[/s], чтобы стрелять по клетке [s]Д15[/s] (позиция [s]3[/s] в армии обороняющегося).<br>
		[t]&bull; Если имеется Базовая [s]Тактика[/s], то можно поставить стрелков в позиции [s]Б1[/s] (не должно быть [m]Подводы[/m]), [s]А3[/s] или [s]В3[/s]. Так под стрельбой без штрафа окажутся клетки [s]Ж15[/s] (позиция [s]5[/s] в армии обороняющегося), [s]И15[/s] (позиция [s]6[/s]) и [s]Е15[/s] (позиция [s]4[/s]).<br>
		[t]&bull; Если имеется Продвинутая [s]Тактика[/s], то можно также поставить стрелков в позицию [s]А5[/s], чтобы под стрельбой без штрафа оказалась клетка [s]Л15[/s] (позиция [s]7[/s]).<br>
		[t]&bull; Если имеется Экспертная [s]Тактика[/s], то можно также поставить стрелков в позиции [s]Л6, А7[/s] или [s]Л7[/s], чтобы под стрельбой без штрафа оказалась вражеская [m]Подвода с боеприпасами[/m], клетка [s]И15[/s] (позиция [s]6[/s]), [s]Д15[/s] (позиция [s]3[/s]).<br><br>
		[t]Проблема наличия штрафа упрощается при наличии пробоины в [s]Стене[/s], образованной любым способом. Всего можно пробить 4 участка [s]Стены[/s]: [s]Б12, Д1, З11[/s] и [s]Л15[/s]. Для каждой пробоины появляются новые позиции стрелок-цель, при которых отсутствует штраф стрельбы через крепостные стены.
		${!m?'</p><p>':'<br><br>'}
		[t][s]Пробоина в верхней стене (Б12${!m?'; Красные линии':''}):[/s]
	</p>
	<div class="${!m?'block-img':'picture slider'}"><img class="img-${!m?'two-thirds':'double-screen'}" data-src="images/storypictures/battlefield_2.jpg" alt="Траектория стрельбы"></div>
	<p>
		[t]От пробоины в верхней [s]Стене[/s] частично становятся уязвимы существа обороняющегося на клетках [s]А15[/s] (позиция [s]1[/s]), [s]Б15[/s] ([m]Подвода[/m]), [s]В15[/s] (позиция [s]2[/s]) и [s]Г15[/s] (обычно ничем не занята, но сюда могут быть вызваны [s]элементали[/s] или переставлены войска).<br><br>
		[t]&bull; По клетке [s]А15[/s] (позиция [s]1[/s] в армии обороняющегося) теперь можно попасть без штрафа за стрельбу через крепостные стены с клеток [s]З1[/s] ([m]Катапульту[/m] придется уничтожить), [s]Ж3, Е5[/s] или [s]Д7[/s].<br>
		[t]&bull; Клетка [s]Б15[/s] теперь простреливается без штрафа с любой клетки линии [s]Б[/s], линий [s]В[/s] и [s]Г[/s] в пределах первых семи клеток, а также с клеток [s]Д1[/s] (позиция [s]3[/s]), [s]Д2[/s] и [s]Д3[/s].<br>
		[t]&bull; Клетка [s]В15[/s] теперь простреливается без штрафа с любой клетки линий [s]А[/s] и [s]Б[/s] в пределах первых семи клеток.<br>
		[t]&bull; Клетка [s]Г15[/s] теперь простреливается без штрафа с клетки [s]А7[/s].<br><br>
		[t]Всего, благодаря пролому верхней [s]Стены[/s], открывается 44 новых позиции для стрельбы без штрафа, 3 из которых позволяют стрелять с начальной позиции ряда [s]1[/s], а также открываются недоступные ранее цели [s]А15[/s] и [s]В15[/s] с 18 клеток.
		${!m?'</p><p>':'<br><br>'}
		[t][s]Пробоина в средней верхней стене (Д10${!m?'; Оранжевые линии':''}):[/s]
	</p>
	<div class="${!m?'block-img':'picture slider'}"><img class="img-${!m?'two-thirds':'double-screen'}" data-src="images/storypictures/battlefield_3.jpg" alt="Траектория стрельбы"></div>
	<p>
		[t]От пробоины в средней верхней [s]Стене[/s] частично становятся уязвимы существа обороняющегося на клетках [s]В15[/s] (позиция [s]2[/s]), [s]Г15[/s], [s]Д15[/s] (позиция [s]3[/s]), [s]Е15[/s] (позиция [s]4[/s]), [s]Ж15[/s] (позиция [s]5[/s]) и [s]З15[/s].<br><br>
		[t]&bull; По клетке [s]В15[/s] (позиция [s]2[/s] в армии обороняющегося) теперь можно попасть без штрафа за стрельбу через крепостные стены с клеток [s]И6, К5, Л4[/s] и [s]Л3[/s].<br>
		[t]&bull; Клетка [s]Г15[/s] теперь простреливается без штрафа с клеток [s]К2, И1-И4, З3-З6, Ж6[/s] и [s]Ж7[/s]. [[s]И1[/s] - позиция [s]6[/s]].<br>
		[t]&bull; Клетка [s]Д15[/s] (позиция [s]3[/s]) теперь простреливается без штрафа с любой клетки линии [s]Д[/s], линии [s]Е[/s] в пределах первых семи клеток, а также с клеток [s]Ж1-Ж6, З1[/s] и [s]З2[/s]. [[s]Д1[/s] - позиция [s]3[/s], [s]Е1[/s] - позиция [s]4, Ж1[/s] - позиция [s]5[/s]].<br>
		[t]&bull; Клетка [s]Е15[/s] (позиция [s]4[/s]) теперь простреливается без штрафа с клеток [s]Д1-Д7, Г1-Г6, В1[/s] и [s]В2[/s]. [[s]Д1[/s] - позиция [s]3[/s], [s]Г1[/s] - [m]Баллиста[/m] или [m]Пушка[/m], [s]В1[/s] - позиция [s]2[/s]].<br>
		[t]&bull; Клетка [s]Ж15[/s] (позиция [s]5[/s]) теперь простреливается без штрафа с клеток [s]Г6, Г7, В3-В6, Б1-Б4, А1[/s] и [s]А2[/s]. [[s]А1[/s] - позиция [s]1[/s]].<br>
		[t]&bull; Клетка [s]З15[/s] теперь простреливается без штрафа с клеток [s]А5[/s] и [s]Б6[/s].<br><br>
		[t]Всего, благодаря пролому средней верхней [s]Стены[/s], открывается 67 новых позиций для стрельбы без штрафа, 8 из которых позволяют стрелять с начальной позиции ряда [s]1[/s], а также открывается недоступная ранее цель [s]В15[/s] с 4 клеток. В среднем, можно сказать, что пролом в средней верхней [s]Стене[/s] полезнее пролома в верхней примерно на [s]50%[/s].
		${!m?'</p><p>':'<br><br>'}
		[t][s]Пробоина в средней нижней стене (З11${!m?'; Зеленые линии':''}):[/s]
	</p>
	<div class="${!m?'block-img':'picture slider'}"><img class="img-${!m?'two-thirds':'double-screen'}" data-src="images/storypictures/battlefield_4.jpg" alt="Траектория стрельбы"></div>
	<p>
		[t]От пробоины в средней нижней [s]Стене[/s] частично становятся уязвимы существа обороняющегося на клетках [s]Е15[/s] (позиция [s]4[/s]), [s]Ж15[/s] (позиция [s]5[/s]), [s]З15, И15[/s] (позиция [s]6[/s]) и [s]К15[/s] ([m]Палатка первой помощи[/m]).<br><br>
		[t]&bull; По клетке [s]Е15[/s] (позиция [s]4[/s] в армии обороняющегося) теперь можно попасть без штрафа за стрельбу через крепостные стены с клеток [s]Л5-Л7[/s] и [s]К7[/s].<br>
		[t]&bull; Клетка [s]Ж15[/s] (позиция [s]5[/s]) теперь простреливается без штрафа с клеток [s]Л1-Л6[/s] и [s]К3-К7[/s]. [[s]Л1[/s] - позиция [s]7[/s]].<br>
		[t]&bull; Клетка [s]З15[/s] теперь простреливается без штрафа с любой клетки линии [s]З[/s], линии [s]И[/s] в пределах первых семи клеток, а также с клеток [s]К1-К6, Л1[/s] и [s]Л2[/s]. [[s]И1[/s] - позиция [s]6[/s], [s]Л1[/s] - позиция [s]7[/s]].<br>
		[t]&bull; Клетка [s]И15[/s] (позиция [s]6[/s]) теперь простреливается без штрафа с любой клетки линии [s]З[/s], а также с клеток [s]Ж1-Ж4[/s]. [[s]Ж1[/s] - позиция [s]5[/s]].<br>
		[t]&bull; Клетка [s]К15[/s] ([m]Палатка[/m]) теперь простреливается без штрафа с клеток [s]Д1, Д2, Е3-Е6, Ж6[/s] и [s]Ж7[/s]. [[s]Д1[/s] - позиция [s]3[/s]].<br><br>
		[t]Всего, благодаря пролому средней нижней [s]Стены[/s], открывается 56 новых позиций для стрельбы без штрафа, 4 из которых позволяют стрелять с начальной позиции ряда [s]1[/s], а также открывается недоступная ранее цель [s]К15[/s] с 8 клеток. В среднем, можно сказать, что пролом в средней нижней [s]Стене[/s] полезнее пролома в верхней примерно на [s]25%[/s], но менее полезен, чем пролом в средней верхней [s]Стене[/s].
		${!m?'</p><p>':'<br><br>'}
		[t][s]Пробоина в воротах (Е11${!m?'; Фиолетовые линии':''}):[/s]
	</p>
	<div class="${!m?'block-img':'picture slider'}"><img class="img-${!m?'two-thirds':'double-screen'}" data-src="images/storypictures/battlefield_6.jpg" alt="Траектория стрельбы"></div>
	<p>
		[t]От пробоины в воротах частично становятся уязвимы существа обороняющегося на клетках [s]В15[/s] (позиция [s]2[/s]), [s]Г15, Д15[/s] (позиция [s]3[/s]), [s]Е15[/s] (позиция [s]4[/s]), [s]Ж15[/s] (позиция [s]5[/s]), [s]З15, И15[/s] (позиция [s]6[/s]) и [s]К15[/s] ([m]Палатка первой помощи[/m]).<br><br>
		[t]&bull; По клетке [s]В15[/s] (позиция [s]2[/s] в армии обороняющегося) теперь можно попасть без штрафа за стрельбу через крепостные стены с клеток [s]Л5, К6[/s] и [s]И7[/s].<br>
		[t]&bull; Клетка [s]Г15[/s] теперь простреливается без штрафа с клеток [s]Л1-Л3, К3-К5, И5, И6[/s] и [s]З7[/s]. [[s]Л1[/s] - позиция [s]7[/s]].<br>
		[t]&bull; Клетка [s]Д15[/s] (позиция [s]3[/s]) теперь простреливается без штрафа с клеток [s]К1, К2 И1-И5, З3-З7[/s] и [s]Ж7[/s]. [[s]И1[/s] - позиция [s]6[/s]].<br>
		[t]&bull; Клетка [s]Е15[/s] (позиция [s]4[/s]) теперь простреливается без штрафа с любой клетки линий [s]Е[/s] и [s]Ж[/s] в пределах семи клеток, а также с клеток [s]Д3, Д4[/s] и [s]З1-З4[/s]. [[s]Е1[/s] - позиция [s]4, Ж1[/s] - позиция [s]5[/s]].<br>
		[t]&bull; Клетка [s]Ж15[/s] (позиция [s]5[/s]) теперь простреливается без штрафа с любой клетки линий [s]Д[/s] и [s]Е[/s] в пределах семи клеток. [[s]Д1[/s] - позиция [s]3, Е1[/s] - позиция [s]4[/s]].<br>
		[t]&bull; Клетка [s]З15[/s] теперь простреливается без штрафа с клеток [s]Е7, Д4, Г1-Г5, В1[/s] и [s]В2[/s]. [[s]В1[/s] - позиция [s]2[/s]].<br>
		[t]&bull; Клетка [s]И15[/s] теперь простреливается без штрафа с клеток [s]Г6, В4, Б2, Б3[/s] и [s]А1[/s]. [[s]А1[/s] - позиция [s]1[/s]].<br>
		[t]&bull; Клетка [s]К15[/s] теперь простреливается без штрафа с клеток [s]Г7, В6, Б5[/s] и [s]А3[/s].<br><br>
		[t]Всего, благодаря пролому [s]Ворот[/s], открывается 77 новых позиций для стрельбы без штрафа, 8 из которых позволяют стрелять с начальной позиции ряда [s]1[/s], а также открываются недоступные ранее цели [s]В15[/s] и [s]К15[/s] с 7 клеток. Однозначно можно сказать, что пролом в [s]Воротах[/s] является предпочтительным и наиболее эффективным как с точки зрения снижения штрафа за стрельбу по существам обороняющегося, так и в возможности получения прохода за крепостные стены пешими существами без попадания в [s]Ров[/s].
		${!m?'</p><p>':'<br><br>'}
		[t][s]Пробоина в нижней стене (Л12${!m?'; Синяя линия':''}):[/s]
	</p>
	<div class="${!m?'block-img':'picture'}"><img class="img-${!m?'third':'full'}-screen" data-src="images/storypictures/battlefield_5.jpg" alt="Траектория стрельбы"></div>
	<p>
		[t]От пробоины в нижней стене частично становятся уязвимы существа обороняющегося лишь на клетках [s]Л13[/s], [s]Л14[/s] и [s]Л15[/s] (позиция [s]7[/s]).<br><br>
		[t]&bull; По клеткам [s]Л13-Л15[/s] теперь можно попасть без штрафа за стрельбу через крепостные стены с любой клетки линии [s]Л[/s]. [[s]Л1[/s] - позиция [s]7[/s]].<br><br>
		[t]Однозначно можно сказать, что пролом в нижней [s]Стене[/s] является самым бесполезным и наименее эффективным с точки зрения снижения штрафа за стрельбу по существам обороняющегося.<br><br>
		[t]Таким же образом можно просчитать и построить линии стрельбы для любой клетки поля боя.<br><br>
		[t]Однако теория не всегда совпадает с практикой. Некоторые комбинации клеток, между которыми можно провести линии согласно всем вышеописанным правилам, на практике на работают.<br><br>
		[t]По данной <a href="downloads/trajectory.xlsx" download>[m]ссылке[/m]</a> можно скачать Excel файл с полной таблицей случаев, когда стрелок на определенной клетке ([s]строки таблицы[/s]) не будет иметь штрафа за препятствия при выстреле по цели ([s]столбцы таблицы[/s]).<br><br>
		[t]&bull; [s]Желтые[/s] клетки со знаком "[s]Х[/s]" показывают отсутствие штрафа за препятствия.<br>
		[t]&bull; [s]Белые[/s] клетки со знаком "[s]Х[/s]" - теоретические комбинации, которые на практике не работают в связи с внутренними округлениями программы при расчетах. В остальных случаях (белые клетки или отсутствующие комбинации) штраф у стрелков есть.
	</p>
	<h2 id="archery.4">Блокирование</h2>
	<p>
		[t]Когда рядом со стрелком находится вражеское существо (в том числе боевая машина), стрелок теряет возможность стрелять и может атаковать только в ближнем бою (союзное существо под действием заклинания [m]Гипноз[/m] не может заблокировать стрелка, однако союзное существо под действием заклинания [m]Берсерк[/m] может заблокировать стрелка как если бы это было вражеское существо). [m]Баллиста[/m] и [m]Пушка[/m] не могут быть заблокированы и всегда стреляют не имея, соответственно, штрафа ближнего боя. [m]Лук снайпера[/m] позволяет стрелять даже если стрелок «заблокирован».<br><br>
		[t]Блокирование стрелков — полезный прием как при игре против ИИ компьютера, так и в игре против реального игрока. Иногда целесообразно максимально быстро сблизиться со стрелками противника, чтобы лишить его возможности стрелять по другим существам или навязать ближний бой, в котором стрелок будет иметь штраф. (Этим приемом также пользуется и ИИ компьютера во время боя. Возможность заблокировать стрелка высоко ценится ИИ, и это стоит учитывать при расстановке войск для защиты своих стрелков) В редких случаях можно подставить своих стрелков под блок, чтобы враг подошел на расстояние атаки Ваших бойцов.<br><br>
		[t]Также стоит учитывать, что компьютерный ИИ видит все артефакты игрока и знает о наличии [m]Золотого лука[/m] и [m]Лука снайпера[/m].
	</p>
	`},
	{id: 'health', text: `
	<h1>Здоровье юнитов</h1>
	<p>
		<img class="story-img img-in-text-l" data-src="images/artifacts/lifeblood.jpg" alt="Здоровье юнитов" height="100">
		[t]Каждое существо имеет свой максимальный запас здоровья выраженный в хитпоинтах [s](HP)[/s]. При достижении нулевого показателя [s]HP[/s] существо погибает. При нанесении урона превышающего количество [s]HP[/s] одного существа, существо погибает, а остаток урона наносится следующему существу в стэке и т.д.<br><br>
		[t]На количество максимального здоровья отряда могут влиять:<br><br>
		[t]Артефакты, увеличивающие запас здоровья: [m]Кольцо жизненной силы[/m], [m]Кольцо жизни[/m], [m]Склянка жизненной силы[/m], [m]Эликсир жизни[/m].<br><br>
		[t]Негативные эффекты, снижающие максимальный запас здоровья: [s]Яд[/s] ([m]Виверна монарх[/m], [m]Морской змей[/m], [m]Аспид[/m]), [s]Старость[/s] ([m]Призрачный дракон[/m]).<br><br>
		[t]Здоровье существ можно восполнить заклинанием [m]Лечение[/m]. Заклинания [m]Воскрешение[/m], [m]Жертва[/m] и [m]Поднять мертвецов[/m] также восстанавливают запас здоровья, но их нельзя применить на стэк существ, пока хотя бы одно существо в стэке не погибнет.<br><br>
		[t]Кроме этого, [m]Тролли[/m] (не более [s]50 HP[/s]), [m]Духи[/m] и [m]Привидения[/m] обладают способностью регенерировать здоровье перед своим ходом. А [m]Вампиры-лорды[/m] при каждой атаке восстанавливают столько [s]HP[/s], сколько урона они нанесли (работает только против живых существ), а избыточное лечение воскрешает павших существ в стеке.
	</p>
	`},
	{id: 'move_speed', text: `
	<h1>Передвижение и Скорость</h1>
	<h2 id="move_speed.1">Скорость существ</h2>
	<p>
		<img class="story-img img-in-text-l" data-src="images/artifacts/capeofvelocity.jpg" alt="Скорость существ" height="100">
		[t]Каждое существо, за исключением боевых машин (они не могут передвигаться), обладает показателем [s]Скорости[/s], который определяет количество гексов, на которое сможет переместиться существо (без учета препятствий).<br><br>
		[t]Кроме дальности перемещения по полю боя кратко рассмотрим другие аспекты, на которые параметр [s]Скорости[/s] оказывает влияние:<br><br>
		[t]&bull; Инициатива в бою — чем выше [s]Скорость[/s] существа, тем раньше оно сходит в бою (подробнее см. статью [s]"Порядок ходов на поле битвы"[/s])<br><br>
		[t]&bull; Запас очков передвижения на карте приключений — чем выше [s]Скорость[/s] (максимальный эффект достигается при показателе скорости 11) самых медленных существ в отряде героя в начале хода, тем большим будет запас очков передвижения героя на карте приключений (подробнее см. статью <a href="#4.2">[s]"Запас хода и особенности перемещения"[/s]</a>)<br><br>
		[t]На [s]Скорость[/s] существ могут влиять:<br><br>
		[t]&bull; Артефакты: [m]Кольцо странника[/m] (+1 к скорости), [m]Накидка скорости[/m] (+2 к скорости), [m]Ожерелье стремительности[/m] (+1 к скорости))<br><br>
		[t]&bull; Родная земля (Если существо находится на своей родной земле, кроме прочих бонусов существо также получает +1 к показателю скорости)<br><br>
		[t]&bull; Герои со специализацией существ (Герои специализирующиеся на существах дают им +1 к показателю скорости. Исключением являются персонажи: [m]Мутаре[/m], [m]Пасис[/m], [m]Монер[/m], [m]Джелу[/m], [m]Дракон[/m], [m]Лорд Хаарт[/m], [m]Килгор[/m], [m]Лакус[/m], [m]Кальт[/m], [m]Тунар[/m], [m]Эрдамон[/m], [m]Игнисса[/m] и [m]Фьюр[/m])<br><br>
		[t]&bull; Герой [m]Сэр-Мюллих[/m] (увеличивает скорость всех союзных существ на 2)<br><br>
		[t]&bull; Заклинания: [m]Молитва[/m] (+2/+3/+4 к скорости), [m]Медлительность[/m] (-25/-50% скорости), [m]Ускорение[/m] (+3/+5 к скорости) подробнее см. статью <a href="#16">[s]"Механика заклинаний"[/s]</a> (Эффект этих заклинаний может быть усилен героями [m]Лоинс[/m] (Специализация [s]Молитва[/s]), [m]Кира[/m], [m]Терек[/m] и [m]Брисса[/m] (Специализация [s]Ускорение[/s]) подробнее про специализации можно прочитать на странице <a href="heroes-page${!m?'':'-m'}.html">[s]"Герои"[/s]</a>).<br><br>
		[t]Параметр [s]Передвижение[/s] определяет способ, которым существо перемещается по полю битвы.<br><br>
		[t]Всего различается три типа передвижения: [s]Ходит[/s], [s]Летает[/s], [s]Телепортируется[/s]; однако фактически полет и телепортация отличаются лишь анимацией.<br><br>
		[t]Существо, которое способно летать или телепортироваться, может перемещаться игнорируя препятствия на поле боя, в том числе стены и ров при осаде или обороне замка, существ и [m]Силовое поле[/m]. Также такие существа не подвержены действию заклинания [m]Зыбучие пески[/m], не получают урон при перемещении к цели сквозь [m]Стену огня[/m], через мины, созданные заклинанием [m]Минное поле[/m] или находящиеся у стен замка [s]Башня[/s] (при построенной цитадели).<br><br>
		[t]Пешие существа — напротив: вынуждены обходить все препятствия и получают эффекты и урон от вышеописанных препятствий и заклинаний.
	</p>
	<h2 id="move_speed.2">Запас хода и особенности перемещения</h2>
	<p>
		[t]Расчет запаса очков передвижения героя производится в начале игрового дня. Вне зависимости от того, начинает он свой день на воде или на суше; количество единиц передвижения можно посмотреть в нижней части экрана, если навести курсор на портрет персонажа. Важно, что отображаться будет количество единиц по суше или воде в зависимости от того, где находится персонаж в данный момент, однако расчет проводится для воды и суши одновременно в начале игрового дня и единицы перемещения по другой поверхности скрыты до тех пор, пока герой не переместится на нее.<br><br>
		[t]При расчете базового количества [s]MP[/s] ([s]Movement points[/s]) на суше ключевую роль играет [s]Скорость[/s] самого медленного существа в армии героя на начало игрового дня.
	</p>
	<table ${!m?'class="compress"':''}">
		<tr> <th>Скорость существ</th> <th>Очки передвижения</th> <th>Существа</th> </tr>
		<tr> <td>3</td> <td>1500</td> <td>Гном, Крестьянин</td> </tr>
		<tr> <td>4</td> <td>1560</td> <td>Зомби, Дендроид-солдат</td> </tr>
		<tr> <td>5</td> <td>1630</td> <td>Алебардщик, Огр-маг</td> </tr>
		<tr> <td>6</td> <td>1700</td> <td>Кентавр, Королева медуз</td> </tr>
		<tr> <td>7</td> <td>1760</td> <td>Фанатик, Пикси</td> </tr>
		<tr> <td>8</td> <td>1830</td> <td>Цербер, Налетчик</td> </tr>
		<tr> <td>9</td> <td>1900</td> <td>Чемпион, Фея</td> </tr>
		<tr> <td>10</td> <td>1960</td> <td>Зеленый дракон</td> </tr>
		<tr> <td>11 и выше</td> <td>2000</td> <td>Титан, Феникс</td> </tr>
	</table>
	<p>
		[t]Так герой, имея в своей армии хотя бы одного [m]Крестьянина[/m], будет иметь лишь 1500 единиц передвижения.<br><br>
		[t]Для получения большего кол-ва очков передвижения для главного героя применяется следующий метод: при завершении хода желательно оставить всех медленных (со [s]Скоростью[/s] ниже 11) существ в [s]городе[/s] / [s]гарнизоне[/s] / [s]шахте[/s] или же на вспомгательных персонажах (стоит учитывать, что в этом случае второстепенный персонаж не получит "[s]разгон[/s]"). Тем самым основной герой на начало следующего дня будет иметь увеличенный запас хода, так как в расчете [s]MP[/s] не будут участвовать медленные существа. Нюансы передачи армии при подобных действиях подробнее смотрите в статье [s]"Перемещение по карте приключений"[/s].<br><br>
		[t]На расчет [s]Скорости[/s] существ влияют специализации героев, которые прибавляют существам показатель [s]Скорости[/s], однако специальность [m]Сэра Мюллиха[/m] (+2 к скорости всех существ) не учитывается. Также не учитывается бонус от артефактов на [s]Скорость[/s] существ и бонус от [s]Родной земли[/s] существ.<br><br>
		[t]Если герой был убит в битве или уволен, то при следующем его выкупе в таверне он будет иметь 2000 [s]MP[/s]. Также максимальный запас [s]MP[/s] (2000) будет иметь герой без армии (все слоты под войска должны быть пустыми).<br><br>
		[t]Существует три сценария, при которых герой может остаться без армии (не считая багов):<br>
		[t]&bull; Если герой оставляет своих последних существ по заданию;<br>
		[t]&bull; Если герой делает полный обмен армиями с героем, не имеющим существ;<br>
		[t]&bull; Если герой оканчивает битву (вне зависимости от ее исхода) только с призванными существами. В таком случае он попадет в [m]Таверну[/m] и будет доступен для выкупа, но без армии.<br><br>
		[t]К базовому показателю [s]MP[/s] применяется модификатор навыка [s]Логистики[/s] и специализации [s]Логистики[/s] у героев [m]Десса[/m], [m]Гуннар[/m] и [m]Киррь[/m].
	</p>
	<table ${!m?'class="compress"':''}>
		<tr> <th>Уровень Логистики</th> <th>Бонус</th> </tr>
		<tr> <td>Базовый</td> <td>5%</td> </tr>
		<tr> <td>Продвинутый</td> <td>10%</td> </tr>
		<tr> <td>Экспертный</td> <td>20%</td> </tr>
	</table>
	<p>
		[t]При расчете базового количества [s]MP[/s] на воде играет роль только навык [s]Навигации[/s] и специализация в [s]Навигации[/s] у героев [m]Сильвия[/m], [m]Вой[/m] и [m]Элмор[/m].
	</p>
	<table ${!m?'class="compress"':''}>
		<tr> <th>Уровень Навигации</th> <th>Запас хода (MP)</th> <th>Прирост MP за навык</th> </tr>
		<tr> <td>Нет</td> <td>1500</td> <td>-</td> </tr>
		<tr> <td>Базовый</td> <td>2250</td> <td>+750</td> </tr>
		<tr> <td>Продвинутый</td> <td>3000</td> <td>+1500</td> </tr>
		<tr> <td>Экспертный</td> <td>3750</td> <td>+2250</td> </tr>
	</table>
	<p>
		[t]Сверх вышеуказанных расчетов [s]MP[/s] прибавляется фиксированное и не зависящее от навыков [s]Навигации[/s] и [s]Логистики[/s] количество очков за артефакты и объекты.<br><br>
		[t]Так как расчет [s]MP[/s] происходит в начале дня, артефакты, дающие бонус к очкам передвижения, можно надевать перед самым окончанием хода и снимать, как только начался новый игровой день (естественно, всегда стоит учитывать опасность нападения противника и другие игровые нюансы при переодевании артефактов).<br><br>
		[t]Особого внимания заслуживает перерасчет очков передвижения при использовании [m]Шляпы адмирала[/m]. Кроме бонуса к очкам перемещения по воде артефактов-комплектующих [m]Шляпы адмирала[/m] (+1500 [s]MP[/s]), она также снимает штраф за посадку и высадку из корабля, и вместо потери всех очков передвижения герой конвертирует все очки передвижения по суще в очки передвижения на воде и наоборот. Подробнее рассмотрим формулу пересчета:<br><br>
		[t]Для расчета используются всего пять параметров:<br><br>
		[t][s]M[/s] - базовый запас движения героя по суше ([s]МР[/s]) + артефакты на бонусные [s]MP[/s] при перемещении по суше<br>
		[t][s]M'[/s] - базовый запас движения героя по воде ([s]МР[/s]) + артефакты на бонусные [s]MP[/s] при перемещении по воде<br>
		[t][s]M(тек)[/s] - текущий запас движения героя по суше ([s]МР[/s]).<br>
		[t][s]M'(тек)[/s] - текущий запас движения героя по воде ([s]МР[/s]).<br>
		[t][s]m[/s] - количество [s]MP[/s], требуемых на шаг с суши в лодку и наоборот (это шаг по прямой или шаг по диагонали)<br><br>
		[t]При перерасчете очков перемещения при посадке со [m]Шляпой адмирала[/m] формула выглядит так:<br><br>
		[t][s]M’(тек) = (M(тек) - m) * (M’ / M)[/s]<br><br>
		[t]А при высадке:<br><br>
		[t][s]M(тек) = (M’(тек) - m) /  (M’ / M)[/s]<br><br>
		[t]Что важно учитвать? Если не вдаваться в точные расчеты, то для наиболее эффективного использования [m]Шляпы адмирала[/m], выгодно не только надевать артефакты для перемещения по суше и брать существ со [s]Скоростью[/s] выше 11, но и надевать саму [m]Шляпу адмирала[/m] перед окончанием хода. Так, если Вы понимаете, что в следующем ходу вам нужно будет совершить посадку в корабль или же наоборот высадиться, то Вам стоит позаботиться и об очках перемещения по суше, и об очках перемещения по воде. Если же Вам не нужно совершать посадку и высадку, то стоит беспокоиться только об очках передвижения по той поверхности, на которой вы будете находиться весь следующий день.<br><br>
		[t]Мы разобрались с тем, как производится расчет очков передвижения в начале хода, теперь давайте разберемся с тем, как и на что они расходуются.<br><br>
		[t]&bull; Движение в одну из сторон света или по диагонали (сюда входит и взаимодействие с объектами, на которые герой не наступает: производя действие с объектом, он теряет такое же количество [s]MP[/s], как если бы он сдвинулся на эту клетку);<br><br>
		[t]&bull; Посадка или высадка из лодки отнимает все оставшиеся очки перемещения (исключение - надетая [m]Шляпа адмирала[/m]);<br><br>
		[t]&bull; Раскопки [m]Грааля[/m]. На раскопки [m]Грааля[/m] герой теряет весь ход. Копать [m]Грааль[/m] в день прибытия на место будущих раскопок не позволено. Но тут есть исключение: возможность раскопок [m]Грааля[/m] определяется от максимума запаса [s]МР[/s] героя, т.е. если герой с [m]Фениксом[/m] (2000 [s]МР[/s]) сделал 5 шагов по траве (-500 [s]МР[/s]), а потом обменял Феникса на [m]Гнома[/m] (1500 [s]МР[/s]), то проверку на ход в этот день он пройдет, т.е. игра разрешит ему копать [m]Грааль[/m], получается, что запас его хода (2000 - 500 = 1500 [s]МР[/s]) равен максимальному запасу, высчитанному по [m]Гному[/m].<br><br>
		[t]Находясь на объекте, можно нажать [s]Пробел[/s] и повторно взаимодействовать с ним не затрачивая на это [s]MP[/s] (если затраты [s]MP[/s] не предусматривает сам объект).<br><br>
		[t]Изначально ход по прямой затрачивает 100 [s]MP[/s], а ход по диагонали 141 [s]MP[/s]. Однако передвижение по разным типам почвы требует разного количества очков перемещения. Передвижение по [s]Грязи[/s], [s]Траве[/s], [s]Высокогорью[/s], [s]Лаве[/s], [s]Подземелью[/s] и [s]Воде[/s] никак не усложняет перемещение, другие же типы территории и дороги увеличивают или уменьшают затраты [s]MP[/s] при перемещении по ним. Вторичный навык [s]Поиск пути[/s], в свою очередь, снижает штраф при перемещении по местности, замедляющей героя, но никак не влияет на перемещение по "нормальному" ландшафту, дорогам и воде.
		${!m?'</p><p><img class="story-img img-in-text-r" data-src="images/storypictures/mpscale.jpg" alt="Индикатор MP" height="120">[t]Приблизительный запас MP можно определить по зеленой полоске около портрета персонажа:<br><br>':''}
		${m?'<br><br>[t]Приблизительный запас MP можно определить по зеленой полоске около портрета персонажа:<br><br></p><div class="picture" style="height: 80px"><img class="story-img" data-src="images/storypictures/mpscale.jpg" alt="Индикатор MP" height="80"></div><p>':''}
		[t]&bull; Уровень индикатора [s]+++[/s] соответствует 2800 [s]МР[/s] и более.<br>
		[t]&bull; Уровень индикатора [s]++[/s] соответствует 2500 [s]МР[/s] и более.<br>
		[t]&bull; Уровень индикатора [s]+[/s] соответствует 2300 [s]МР[/s] и более.<br>
		[t]&bull; Максимальный уровень индикатора соответствует 2200 [s]МР[/s] и более.<br>
		[t]&bull; Далее по убыванию [s]~1px[/s] за каждые 100 [s]МР[/s]. Половина индикатора - 1100 [s]МР[/s].
		${!m?'</p><p>':'<br><br>'}
		[t]Посмотреть точное количество [s]MP[/s], которое потребуется, чтобы дойти до определенной точки при всех нынешних условиях, можно внизу экрана, зажав клавишу [s]Alt[/s] и наведя курсор в финальную точку маршрута. Стоит уичтывать, что игра покажет требуемое и остаточное количество [s]MP[/s] только в том случае, если до финальной точки можно проложить автоматический маршрут без препятствий. Кроме того и сам расчет будет произведен по автоматически проложенной траектории (нажатие [s]ЛКМ[/s]).<br><br>
		[t]Ниже приведена таблица, где указан процент затрат очков перемещения. Так на [s]Мощеной дороге[/s] герой будет тратить лишь [s]50% MP[/s], т.е. 50 [s]MP[/s] при движении по прямой и 70 [s]MP[/s] при движении по диагонали.
	</p>
	<div class="minimized">&#9660;&nbsp;Таблица: Затраты очков передвижения
	<table ${!m?'class="compress"':''}>
		<tr> <th rowspan="2">Тип территории</th> <th rowspan="2" style="width: 20%">Норма</th> <th colspan="2">Уровень навыка Поиск пути</th> </tr>
		<tr> <th style="width: 20%">Базовый</th> <th style="width: 20%">Продвинутый</th> </tr>
		<tr> <td>Грязь</td> 			<td>100%</td> 	<td>100%</td> 	<td>100%</td> </tr>
		<tr> <td>Трава</td> 			<td>100%</td> 	<td>100%</td> 	<td>100%</td> </tr>
		<tr> <td>Лава</td> 				<td>100%</td> 	<td>100%</td> 	<td>100%</td> </tr>
		<tr> <td>Подземелье</td> 		<td>100%</td> 	<td>100%</td> 	<td>100%</td> </tr>
		<tr> <td>Высокогорье</td> 		<td>100%</td> 	<td>100%</td> 	<td>100%</td> </tr>
		<tr> <td>Мощеная дорога</td> 	<td>50%</td> 	<td>50%</td> 	<td>50%</td> </tr>
		<tr> <td>Гравийная дорога</td> 	<td>65%</td> 	<td>65%</td> 	<td>65%</td> </tr>
		<tr> <td>Грязевая дорога</td> 	<td>75%</td> 	<td>75%</td> 	<td>75%</td> </tr>
		<tr> <td>Камни</td> 			<td>125%</td> 	<td>100%</td> 	<td>100%</td> </tr>
		<tr> <td>Пустоши</td> 			<td>125%</td> 	<td>100%</td> 	<td>100%</td> </tr>
		<tr> <td>Песок</td> 			<td>150%</td> 	<td>125%</td> 	<td>100%</td> </tr>
		<tr> <td>Снег</td> 				<td>150%</td> 	<td>125%</td> 	<td>100%</td> </tr>
		<tr> <td>Болото</td> 			<td>175%</td> 	<td>150%</td> 	<td>125%</td> </tr>
		<tr> <td>Попутный ветер (только на воде)</td> <td>66%</td> <td>66%</td> <td>66%</td> </tr>
	</table>
	</div>
	<p>
		[t]В случае, когда герой преодолевает границу между двумя типами ландшафта с различными по величине штрафами (или бонусами) на перемещение, в расчете очков движения ([s]MP[/s]) первого шага применяется штраф той клетки, с которой герой начинает его. Т.е., если герой движется с [s]Камней[/s] на [s]Болото[/s] и делает 5 ходов, то первый шаг имеет штраф передвижения по [s]Камням[/s], и четыре шага - штраф [s]Болота[/s]. Это правило не распространяется на шаг с дороги на "бездорожье". В этом случает первый шаг сразу считается со штрафом.<br><br>
		[t]Также этому правилу не подчиняется случай, когда герой посещает с дороги объект не вставая на клетку посещения (например [s]Таверну[/s]), под которой нет дороги. Т.е. герой остается на дороге, но затраты хода считаются по той местности, на которой находится объект.<br><br>
		[t][s]Мосты[/s], соединяющие части какой-либо дороги, являются декоративными объектами и не снижают затраты на перемещение по их клеткам, если автор карты под ними не провел дорогу. При случайной генерации [s]Мосты[/s] не встречаются.<br><br>
		${!m?'[t]Границы ландшафтов визуально определяются достаточно сложно, однако есть некоторые общие особенности:<br><br><img class="story-img img-in-text-r" data-src="images/storypictures/roadborder.png" alt="Границы дорог" height="200">[t]&bull; На рисунке справа изображены границы дорог, не зависимо от материала, из которого они сделаны. Находясь в красной зоне, герой будет получать бонус передвижения;<br><br>':''}
		${m?'[t]Границы ландшафтов визуально определяются достаточно сложно, однако есть некоторые общие особенности:</p><div class="picture"><img class="img-full-screen" data-src="images/storypictures/landborders.png" alt="Стыки ландшафтов"></div><p>':''}
		[t]&bull; Базовыми ландшафтами являются [s]Песок[/s] и [s]Грязь[/s]. Они не создают швов при стыке друг с другом и с другими ландшафтами.<br><br>
		[t]&bull; Граница между [s]Грязью / Песком[/s] и другим ландшафтом определяется Правилом: если на клетке присутствует хотя бы часть другого ландшафта, то клетка является частью этого другого ландшафта (см. [s]рис 1-6[/s]).<br><br>
		[t]&bull; При стыке [s]Грязи[/s] с [s]Песком[/s] базовым ландшафтом считается [s]Песок[/s], т.е., если на клетке [s]Песка[/s] присутствует хотя бы часть [s]Грязи[/s], то эта клетка является частью [s]Грязи[/s] (см. [s]рис 7[/s]).<br><br>
		[t]&bull; Остальные ландшафты (кроме [s]Грязи[/s] и [s]Песка[/s]) при стыке между собой создают швы, визуально являющиеся [s]Грязью[/s]. Однако эта [s]Грязь[/s] никак не влияет на логистику и является границей с тем же Правилом: если на пограничной [s]Грязи[/s] присутствует хотя бы часть какого-либо из соседних ландшафтов, то эта клетка является частью этого ландшафта (см. [s]рис 8-10[/s]).<br><br>
		[t]&bull; Особым случаем является граница между ландшафтом и [s]Водой[/s]. При стыке с [s]Водой[/s] всегда создаются швы, визуально являющиеся [s]Песком[/s]. Однако этот [s]Песок[/s] никак не влияет на логистику, но битва на клетке, граничащей с водой (включая диагонали), будет проходить на [s]Песке[/s]. Граница [s]Воды[/s] также подчиняется Правилу (см. [s]рис 11[/s]).<br><br>
		[t]&bull; Вторым частным случаем является граница между ландшафтом и [s]Скалами[/s] (пустотой). При стыке со [s]Скалами[/s] также всегда создаются швы, визуально являющиеся [s]Песком[/s]. Однако этот [s]Песок[/s] не влияет на логистику и на ландшафт в битве. Граница [s]Скал[/s] также подчиняется Правилу (см. [s]рис 12[/s]).
		${!m?'':'<img class="story-img img-in-text-r" data-src="images/storypictures/roadborder.png" alt="Границы дорог" width="150" style="box-shadow: none">'}
		${!m?'</p><div class="block-img"><img data-src="images/storypictures/landborders.png" alt="Стыки ландшафтов" width="450"></div><p>':''}
		${m?'<br><br>[t]&bull; На рисунке справа изображены границы дорог, не зависимо от материала, из которого они сделаны. Находясь в красной зоне, герой будет получать бонус передвижения;<br><br>':''}
		[t]Штрафы местности не действуют, если:<br><br>
		[t]&bull; Герой находится под действием заклинания [m]Полет[/m] (однако это заклинание имеет свою собственную систему штрафов);<br>
		[t]&bull; Наличие в армии [m]Кочевников[/m] позволяет ходить по [s]Песку[/s] без штрафов;<br>
		[t]&bull; Герой имеет Экспертный [s]Поиск пути[/s];<br>
		[t]&bull; Армия героя состоит целиком из существ, для которых эта земля является "[s]родной[/s]";<br>
		[t]&bull; Герой имеет [m]Сапоги странника[/m] (эффект аналогичен наличию Экспертного [s]Поиска пути[/s]);<br>
		[t]&bull; Армия героя состоит из существ [s]Причала[/s], а в одном из [s]Причалов[/s] на карте установлен [m]Грааль[/m] ([s]Путеводная звезда[/s]), делающий любою землю для них "[s]родной[/s]";<br>
		[t]&bull; Посещение [s]Проводника[/s] снижает затраты хода при движении по [s]Пустошам[/s] до конца недели на [s]50%[/s], т.е. убирает [s]25%[/s] штраф и дает [s]25%[/s] бонус, как [s]Земляная дорога[/s];<br>
		[t]&bull; У героя нет войск.<br><br>
		[t]Особый интерес представляет принцип Последнего шага: Если у героя недостаточно очков движения ([s]МР[/s]) для шага по диагонали (141), но достаточно для шага по горизонтали или вертикали (т.е. [s]141≥ MP ≥100[/s]), он все же может шагнуть или посетить объект по диагонали, но лишь в случае отсутствия штрафов на передвижение (дороги, состав армии и заклинание [m]Полет[/m] в расчет не принимаются - т.е. штраф местности для последнего шага действует всегда).<br><br>
		[t]Это особенно важно при постройке маршрута на несколько дней или при сборе ресурсов и нападении на существ, так как автомаршрут не учитывает дальнейших действий персонажа, а при постройке длинного маршрута измеряет продолжительность всего маршрута и не учитвает количество [s]MP[/s], которые можно сэкономить используя "последние" диагональные шаги.<br><br>
		[t]В целом не стоит всегда доверять автомаршруту. Следует всегда учитывать направление дальнейшего движения и запас очков передвижения. Так при возможности стоит подбирать ресурсы по прямой, а передачу артефактов и армии между героями совершать, стоя на дорогах.
	</p>
	<h2 id="move_speed.3">Стартовый запас хода героев</h2>
	<p>
		[t]У каждого героя на старте игры или при покупке его в [s]Таверне[/s], имеется определнный запас хода. Для разных персонажей это значение очков передвижения (далее [s]MP - Movement Points[/s]) может отличаться. В таблице ниже можно увидеть стартовое значение [s]MP[/s] для каждого героя.
	</p>
	<div class="minimized">&#9660;&nbsp;Таблица: Стартовый запас MP героев
	<table ${!m?'class="compress"':''}>
		<tr> <th style="width: 25%">Герой</th> <th>Кол-во MP</th> <td rowspan="91" style="background: #5b5b5b; width: 0.5%; border: none"></td> <th style="width: 25%">Герой</th> <th>Кол-во MP</th> </tr>
		<tr> <td>Оррин</td> 		<td>1560</td>		<td>Синка</td> 			<td>1560</td> </tr>
		<tr> <td>Валеска</td> 		<td>1630</td>		<td>Шакти</td> 			<td>1630</td> </tr>
		<tr> <td>Эдрик</td> 		<td>1560</td>		<td>Аламар</td> 		<td>1560</td> </tr>
		<tr> <td>Сильвия</td> 		<td>1560</td>		<td>Ягар</td> 			<td>1560</td> </tr>
		<tr> <td>Беатрис</td> 		<td>1560</td>		<td>Малекит</td> 		<td>1560</td> </tr>
		<tr> <td>Сэр Мюллих</td> 	<td>1560</td>		<td>Джеддит</td> 		<td>1560</td> </tr>
		<tr> <td>Лорд Хаарт</td> 	<td>1560</td>		<td>Геон</td> 			<td>1560</td> </tr>
		<tr> <td>Сорша</td> 		<td>1560</td>		<td>Димер</td> 			<td>1560</td> </tr>
		<tr> <td>Кристиан</td> 		<td>1560</td>		<td>Сефинрот</td> 		<td>1560</td> </tr>
		<tr> <td>Тирис</td> 		<td>1560</td>		<td>Дарксторн</td> 		<td>1560</td> </tr>
		<tr> <td>Рион</td> 			<td>1560</td>		<td>Йог</td> 			<td>1560</td> </tr>
		<tr> <td>Адель</td> 		<td>1560</td>		<td>Гурниссон</td> 		<td>1560</td> </tr>
		<tr> <td>Катберт</td> 		<td>1560</td>		<td>Жабаркас</td> 		<td>1630</td> </tr>
		<tr> <td>Аделаида</td> 		<td>1560</td>		<td>Шива</td> 			<td>1560</td> </tr>
		<tr> <td>Инхам</td> 		<td>1560</td>		<td>Гретчин</td> 		<td>1700</td> </tr>
		<tr> <td>Сания</td> 		<td>1560</td>		<td>Креллион</td> 		<td>1560</td> </tr>
		<tr> <td>Лойнис</td> 		<td>1560</td>		<td>Крэг Хэк</td> 		<td>1560</td> </tr>
		<tr> <td>Кейтлин</td> 		<td>1560</td>		<td>Тираксор</td> 		<td>1760</td> </tr>
		<tr> <td>Мефала</td> 		<td>1500</td>		<td>Гирд</td> 			<td>1560</td> </tr>
		<tr> <td>Уфретин</td> 		<td>1560</td>		<td>Вей</td> 			<td>1560</td> </tr>
		<tr> <td>Енова</td> 		<td>1500</td>		<td>Десса</td> 			<td>1723</td> </tr>
		<tr> <td>Риланд</td> 		<td>1500</td>		<td>Терек</td> 			<td>1560</td> </tr>
		<tr> <td>Торгрим</td> 		<td>1500</td>		<td>Зубин</td> 			<td>1560</td> </tr>
		<tr> <td>Жизель</td> 		<td>1500</td>		<td>Гундула</td> 		<td>1560</td> </tr>
		<tr> <td>Ивор</td> 			<td>1700</td>		<td>Орис</td> 			<td>1560</td> </tr>
		<tr> <td>Клэнси</td> 		<td>1500</td>		<td>Сауруг</td> 		<td>1560</td> </tr>
		<tr> <td>Киррь</td> 		<td>1657</td>		<td>Брон</td> 			<td>1560</td> </tr>
		<tr> <td>Короний</td> 		<td>1500</td>		<td>Дрэйкон</td> 		<td>1630</td> </tr>
		<tr> <td>Уланд</td> 		<td>1500</td>		<td>Вистан</td> 		<td>1630</td> </tr>
		<tr> <td>Эллешар</td> 		<td>1500</td>		<td>Тазар</td> 			<td>1560</td> </tr>
		<tr> <td>Джем</td> 			<td>1700</td>		<td>Алкин</td> 			<td>1560</td> </tr>
		<tr> <td>Мальком</td> 		<td>1500</td>		<td>Корбак</td> 		<td>1560</td> </tr>
		<tr> <td>Мелодиа</td> 		<td>1500</td>		<td>Гервульф</td> 		<td>1560</td> </tr>
		<tr> <td>Алагар</td> 		<td>1500</td>		<td>Брохильд</td> 		<td>1560</td> </tr>
		<tr> <td>Аэрис</td> 		<td>1500</td>		<td>Мирланда</td> 		<td>1560</td> </tr>
		<tr> <td>Пикедрам</td> 		<td>1760</td>		<td>Розик</td> 			<td>1560</td> </tr>
		<tr> <td>Тан</td> 			<td>1500</td>		<td>Вой</td> 			<td>1560</td> </tr>
		<tr> <td>Жозефина</td> 		<td>1560</td>		<td>Кинкерия</td> 		<td>1560</td> </tr>
		<tr> <td>Нила</td> 			<td>1500</td>		<td>Вердиш</td> 		<td>1560</td> </tr>
		<tr> <td>Торосар</td> 		<td>1500</td>		<td>Мерист</td> 		<td>1560</td> </tr>
		<tr> <td>Фафнер</td> 		<td>1500</td>		<td>Стиг</td> 			<td>1560</td> </tr>
		<tr> <td>Ризза</td> 		<td>1500</td>		<td>Андра</td> 			<td>1560</td> </tr>
		<tr> <td>Иона</td> 			<td>1500</td>		<td>Тива</td> 			<td>1560</td> </tr>
		<tr> <td>Астрал</td> 		<td>1500</td>		<td>Пасис</td> 			<td>1760</td> </tr>
		<tr> <td>Халон</td> 		<td>1500</td>		<td>Тунар</td> 			<td>1630</td> </tr>
		<tr> <td>Серена</td> 		<td>1500</td>		<td>Игнисса</td> 		<td>1630</td> </tr>
		<tr> <td>Дейрмиф</td> 		<td>1500</td>		<td>Лакус</td> 			<td>1630</td> </tr>
		<tr> <td>Теодор</td> 		<td>1500</td>		<td>Монер</td> 			<td>1936</td> </tr>
		<tr> <td>Солмир</td> 		<td>1500</td>		<td>Эрдамон</td> 		<td>1630</td> </tr>
		<tr> <td>Кира</td> 			<td>1500</td>		<td>Фьюр</td> 			<td>1630</td> </tr>
		<tr> <td>Айне</td> 			<td>1500</td>		<td>Кальт</td> 			<td>1630</td> </tr>
		<tr> <td>Фиона</td> 		<td>1630</td>		<td>Луна</td> 			<td>1630</td> </tr>
		<tr> <td>Рашка</td> 		<td>1560</td>		<td>Брисса</td> 		<td>1630</td> </tr>
		<tr> <td>Мариус</td> 		<td>1560</td>		<td>Циэль</td> 			<td>1630</td> </tr>
		<tr> <td>Игнат</td> 		<td>1700</td>		<td>Лабета</td> 		<td>1630</td> </tr>
		<tr> <td>Октавия</td> 		<td>1560</td>		<td>Интей</td> 			<td>1630</td> </tr>
		<tr> <td>Калх</td> 			<td>1630</td>		<td>Анаин</td> 			<td>1630</td> </tr>
		<tr> <td>Пайр</td> 			<td>1793</td>		<td>Джелар</td> 		<td>1630</td> </tr>
		<tr> <td>Нимус</td> 		<td>1560</td>		<td>Гриндан</td> 		<td>1630</td> </tr>
		<tr> <td>Айден</td> 		<td>1560</td>		<td>Коркес</td> 		<td>1630</td> </tr>
		<tr> <td>Ксирон</td> 		<td>1560</td>		<td>Джереми</td> 		<td>1700</td> </tr>
		<tr> <td>Аксис</td> 		<td>1560</td>		<td>Иллор</td> 			<td>1700</td> </tr>
		<tr> <td>Олема</td> 		<td>1560</td>		<td>Дерек</td> 			<td>1700</td> </tr>
		<tr> <td>Калид</td> 		<td>1560</td>		<td>Элмор</td> 			<td>1630</td> </tr>
		<tr> <td>Аш</td> 			<td>1560</td>		<td>Лина</td> 			<td>1630</td> </tr>
		<tr> <td>Зидар</td> 		<td>1560</td>		<td>Аннабель</td> 		<td>1630</td> </tr>
		<tr> <td>Ксарфакс</td> 		<td>1560</td>		<td>Кассиопея</td> 		<td>1760</td> </tr>
		<tr> <td>Стракер</td> 		<td>1560</td>		<td>Мириам</td> 		<td>1793</td> </tr>
		<tr> <td>Вокиал</td> 		<td>1500</td>		<td>Касметра</td> 		<td>1630</td> </tr>
		<tr> <td>Моандор</td> 		<td>1500</td>		<td>Эоваций</td> 		<td>1630</td> </tr>
		<tr> <td>Чарна</td> 		<td>1560</td>		<td>Спинт</td> 			<td>1630</td> </tr>
		<tr> <td>Тамика</td> 		<td>1500</td>		<td>Андал</td> 			<td>1630</td> </tr>
		<tr> <td>Исра</td> 			<td>1500</td>		<td>Манфред</td> 		<td>1630</td> </tr>
		<tr> <td>Клавий</td> 		<td>1500</td>		<td>Зилар</td> 			<td>1630</td> </tr>
		<tr> <td>Ранлу</td> 		<td>1560</td>		<td>Астра</td> 			<td>1630</td> </tr>
		<tr> <td>Галтран</td> 		<td>1630</td>		<td>Даргем</td> 		<td>1630</td> </tr>
		<tr> <td>Септиенна</td> 	<td>1500</td>		<td>Борагус</td> 		<td>1560</td> </tr>
		<tr> <td>Эйслин</td> 		<td>1500</td>		<td>Килгор</td> 		<td>1560</td> </tr>
		<tr> <td>Сандро</td> 		<td>1500</td>		<td>Адриэн</td> 		<td>1630</td> </tr>
		<tr> <td>Нимбус</td> 		<td>1500</td>		<td>Ксерон</td> 		<td>1630</td> </tr>
		<tr> <td>Тант</td> 			<td>1500</td>		<td>Мутаре</td> 		<td>1560</td> </tr>
		<tr> <td>Кси</td> 			<td>1500</td>		<td>Мутаре Дрэйк</td> 	<td>1560</td> </tr>
		<tr> <td>Видомина</td> 		<td>1500</td>		<td>Дракон</td> 		<td>1900</td> </tr>
		<tr> <td>Нагаш</td> 		<td>1500</td>		<td>Катерина</td> 		<td>1560</td> </tr>
		<tr> <td>Лорелей</td> 		<td>1760</td>		<td>Роланд</td> 		<td>1560</td> </tr>
		<tr> <td>Арлах</td> 		<td>1560</td>		<td>Хаарт Лич</td> 		<td>1500</td> </tr>
		<tr> <td>Дас</td> 			<td>1560</td>		<td>Джелу</td> 			<td>1900</td> </tr>
		<tr> <td>Аджит</td> 		<td>1560</td>		<td>Бидли</td> 			<td>1760</td> </tr>
		<tr> <td>Дамакон</td> 		<td>1560</td>		<td>Тарк</td> 			<td>1760</td> </tr>
		<tr> <td>Гуннар</td> 		<td>1723</td>		<td></td> 				<td></td> </tr>
	</table>
	</div>
	<p>
		[t]При старте игры или начале новой недели в [s]Таверне[/s] доступны для найма 2 героя со стартовой армией. Все последующие герои, кроме этих двух, покупаемые игроком в течение недели, будут иметь армию, состоящую из 1 существа из первого отряда стартовой армии. Их стартовый запас [s]МР[/s] не всегда соответствует скорости этого существа, т.к. сперва герой генерируется со стартовой армией (и считаются его [s]МР[/s]), а затем эта армия заменяется 1 существом. Т.е. стартовый запас [s]МР[/s] считается по той армии, которая могла бы быть у героя. Предугадать, какая армия была бы у героя, невозможно, поэтому лучше ориентироваться на минимальный возможный запас [s]МР[/s].
	</p>
	`},
	{id: 'ai', text: `
	<h1>Поведение ИИ</h1>
	<p>
		[t]Поведение ИИ в бою и на карте приключений зависит от множества факторов. Большинство таких факторов будет рассмотренно в этой статье.<br><br>
		[t]Изначально существует три модели поведения ИИ, которые присваиваются ему случайным образом (если не были назначены автором в редакторе карт): [s]Воин[/s], [s]Строитель[/s] и [s]Исследователь[/s]. [s]Воин[/s] будет стремиться раньше навязать сражение и захватить города, [s]Строитель[/s] будет сконцентрирован на отстройке городов, а [s]Исследователь[/s] будет стараться задействовать большое количество героев для активного исследования карты и давления. Различия в поведении ИИ могут быть едва заметны на одних картах и разительно отличаться на других.
	</p>
	<h2 id="ai.1">Уровень сложности игры</h2>
	<p>
		[t]Поведение компьютерного игрока в зависимости от выбранного уровня сложности меняется следующим образом:<br><br>
		[t]Сложность [s]80%[/s] ([s]Пешка[/s]) - играет в [s]50%[/s] силы:<br>
		[t]&bull; ИИ-герои не опасаются передвигаться на территории противника, даже вблизи вражеских героев;<br>
		[t]&bull; ИИ-герои недооценивают силы вражеского героя при принятии решения о нападении;<br>
		[t]&bull; ИИ-игрок строит здания в городах один раз в два дня;<br>
		[t]&bull; ИИ-игрок не строит жилища существ уровня выше, чем уже построенный уровень у самого лучшего игрока-человека;<br>
		[t]&bull; ИИ-игрок не строит жилища существ 7 уровня в своих городах;<br>
		[t]&bull; ИИ-герои не присоединяют нейтралов к своей армии;<br>
		[t]&bull; ИИ-игрок не занимается поисками [m]Грааля[/m];<br>
		[t]&bull; ИИ-герои не обмениваются между собой армиями и артефактами;<br>
		[t]&bull; ИИ-герои в бою не используют тактические приемы существ, не ждут и всегда идут в атаку;<br>
		[t]&bull; Большинство нейтралов лояльны к игрокам и могут присоединяться;<br>
		[t]&bull; ИИ-игрок не нанимает новых героев, если на карте в сумме 9 или более героев (включая героев других игроков).<br><br>
		[t]Сложность [s]100%[/s] ([s]Конь[/s]) - играет в [s]75%[/s] силы:<br>
		[t]&bull; ИИ-герои недооценивают силы вражеского героя при принятии решения о нападении;<br>
		[t]&bull; ИИ-герои объединяют армии, составляя наиболее сильные варианты;<br>
		[t]&bull; ИИ-игрок строит здания в городах один раз в два дня;<br>
		[t]&bull; ИИ-игрок более агрессивно развивает города;<br>
		[t]&bull; ИИ-герои начинают поиск [m]Грааля[/m] при открытии не менее половины карты-загадки;<br>
		[t]&bull; ИИ-игрок делает большой акцент на изучение карты;<br>
		[t]&bull; ИИ-герои опасаются передвигаться на территории противника, особенно вблизи вражеских героев;<br>
		[t]&bull; ИИ-игрок не нанимает более 3 героев;<br>
		[t]&bull; ИИ-игрок не нанимает новых героев, если на карте в сумме 12 или более героев (включая героев других игроков).<br><br>
		[t]Сложность [s]130%[/s] ([s]Ладья[/s]) - играет в [s]100%[/s] силы:<br>
		[t]&bull; ИИ-герои всегда точно высчитывают силу вражеского героя, и, если она выше, то не нападают;<br>
		[t]&bull; ИИ-герои опасаются передвигаться на территории противника, особенно вблизи вражеских героев;<br>
		[t]&bull; ИИ-игрок строит здания в городах каждый день;<br>
		[t]&bull; ИИ-игрок очень агрессивно развивает города;<br>
		[t]&bull; ИИ-герои начинают поиск [m]Грааля[/m] при открытии не менее 25% карты-загадки;<br>
		[t]&bull; ИИ-игрок не нанимает более 4 героев;<br>
		[t]&bull; ИИ-игрок во время боя учитывает дальность хода вражеских войск и использует эту информацию в тактическом плане (он не заходит в диапазон хода, если знает, что вражеское существо его атакует и т.д.);<br>
		[t]&bull; ИИ-игрок не нанимает новых героев, если на карте в сумме 15 или более героев (включая героев других игроков).<br><br>
		[t]Сложность [s]160%[/s] ([s]Ферзь[/s]) - играет в [s]100%[/s] силы:<br>
		[t]&bull; ИИ-герои очень осторожны при движении на территории противника, особенно вблизи вражеских героев;<br>
		[t]&bull; ИИ-герои начинают поиск [m]Грааля[/m] при открытии хотя бы одной части карты-загадки;<br>
		[t]&bull; ИИ-игрок не нанимает более 5 героев;<br>
		[t]&bull; ИИ-игрок не нанимает новых героев, если на карте в сумме 18 или более героев (включая героев других игроков).<br><br>
		[t]Сложность [s]200%[/s] ([s]Король[/s]) - играет в [s]100%[/s] силы:<br>
		[t]&bull; ИИ-игрок не нанимает более 6 героев;<br>
		[t]&bull; ИИ-игрок не нанимает новых героев, если на карте в сумме 21 или более героев (включая героев других игроков).<br><br>
	</p>
	<table>
		<tr> <th colspan="2" rowspan="2">Сложность</th> <th colspan="4">Ресурсы игрока</th> </tr>
		<tr> <td>Ртуть, сера, кристаллы и самоцветы</td> <td>Древесина и руда</td> <td>Золото</td> <td>Доход города на старте</td> </tr>
		<tr> <td>1</td> <td>80%</td> <td>по 15</td> <td>по 30</td> <td>30000</td> <td>500</td> </tr>
		<tr> <td>2</td> <td>100%</td> <td>по 10</td> <td>по 20</td> <td>20000</td> <td>500</td> </tr>
		<tr> <td>3</td> <td>130%</td> <td>по 7</td> <td>по 15</td> <td>15000</td> <td>500</td> </tr>
		<tr> <td>4</td> <td>160%</td> <td>по 4</td> <td>по 10</td> <td>10000</td> <td>500</td> </tr>
		<tr> <td>5</td> <td>200%</td> <td>по 0</td> <td>по 0</td> <td>0</td> <td>500</td> </tr>
	</table>
	<table>
		<tr> <th colspan="2" rowspan="2">Сложность</th> <th colspan="4">Ресурсы компьютерных игроков</th> </tr>
		<tr> <td>Ртуть, сера, кристаллы и самоцветы</td> <td>Древесина и руда</td> <td>Золото</td> <td>Доход города на старте</td> </tr>
		<tr> <td>1</td> <td>80%</td> <td>по 2</td> <td>по 5</td> <td>5000</td> <td>375</td> </tr>
		<tr> <td>2</td> <td>100%</td> <td>по 4</td> <td>по 10</td> <td>7500</td> <td>500</td> </tr>
		<tr> <td>3</td> <td>130%</td> <td>по 7</td> <td>по 15</td> <td>10000</td> <td>500</td> </tr>
		<tr> <td>4</td> <td>160%</td> <td>по 7</td> <td>по 15</td> <td>10000</td> <td>625</td> </tr>
		<tr> <td>5</td> <td>200%</td> <td>по 7</td> <td>по 15</td> <td>10000</td> <td>750</td> </tr>
	</table>
	<p>
		[t]Помимо этого компьютерные игроки имеют дополнительный ежедневный бонус по всем ресурсам в течение всего периода игры:
	</p>
	<table>
		<tr> <th colspan="2">Сложность</th> <td>Золото</td> <td>Древесина и руда</td> <td>Ртуть, сера, кристаллы и самоцветы</td> </tr>
		<tr> <td>1</td> <td>80%</td> <td>-25%</td> <td>-</td> <td>-</td> </tr>
		<tr> <td>2</td> <td>100%</td> <td>-</td> <td>-</td> <td>-</td> </tr>
		<tr> <td>3</td> <td>130%</td> <td>-</td> <td>-</td> <td>-</td> </tr>
		<tr> <td>4</td> <td>160%</td> <td>+25%</td> <td>+39%</td> <td>+14%</td> </tr>
		<tr> <td>5</td> <td>200%</td> <td>+50%</td> <td>+53%</td> <td>+28%</td> </tr>
	</table>
	<p>
		[t]Расчет этого бонуса производится следующим образом: ежедневно рассчитывается доход компьютерного игрока по всем видам ресурсов и считается бонус, применительно к величине его недельного дохода (если доход отсутствует, бонус не начисляется). Распределяется бонус равномерно по всей неделе.<br><br>
		[t]Кроме того, в мультиплеерной игре существует функция [s]Помехи[/s]:<br><br>
		[t]&bull; Если помехи нет, то герой начинает игру с количеством ресурсов, соответствующим установленной сложности.<br><br>
		[t]&bull; При средней помехе все стартовые ресурсы игрока и его ежедневный доход всех ресурсов (включая ресурсы [s]Сокровищницы[/s], [s]Хранилища ресурсов[/s], [m]Кристаллических драконов[/m] и т.д.) снижаются на [s]15%[/s] с округлением вниз.<br><br>
		[t]&bull; При большой помехе все стартовые ресурсы игрока и его ежедневный доход всех ресурсов снижаются на [s]30%[/s] с округлением вниз.<br><br>
		[t][s]Интересный факт[/s]: при перемещении по карте приключений герои ИИ не могут подбирать ресурсы и артефакты и заходить в объекты, находящиеся на соседних клетках с нейтральным существом, если они не могут его победить, несмотря на то, что такой ресурс или артефакт можно взять сбоку, а вход в объект не активирует бой с нейтралом.
	</p>
	<h2 id="ai.2">Выбор вторичных навыков</h2>
	<p>
		[t]ИИ выбирает вторичные навыки не случайно, как это делает игрок, а на основе четко прописанного алгоритма, некоторых расчетных значений ([s]Х[/s]) для каждого навыка, которые не являются постоянными и пересчитываются в течение всей игры. Проще говоря, когда компьютерному герою предлагают выбор из повышения имеющегося навыка (левый слот) и нового навыка (правый слот), то ИИ сначала оценивает все 28 вторичных навыков. Затем оценивает предлагаемый новый навык (правый слот), и, если он входит в число (8 минус Количество уже занятых слотов вторичных навыков) наиболее ценных навыков, выбирает его. В противном случае ИИ выбирает повышение имеющегося навыка.<br><br>
		[t]Если герою предлагают выбор из двух новых навыков (все имеющиеся навыки уже Экспертного уровня) или двух повышений имеющихся навыков (не осталось свободных слотов вторичных навыков), то ИИ оценивает оба навыка и выбирает наибольшее из значений ([s]Х[/s]). Если значения обоих навыков равны, то ИИ выбирает навык из левого слота.<br><br>
		[t]Если компьютерный герой посещает [s]Университет[/s], то ИИ оценивает все навыки из доступных и выбирает все, что входят в число (8 минус Количество уже занятых слотов вторичных навыков). Если у игрока не хватает золота на все выбранные, то ИИ берет навыки по очереди, начиная с самого ценного, пока не кончится золото. Если герой не получил все навыки, которые выбрал, то он может вернуться к [s]Университету[/s] позже. В этом случает ценность посещения [s]Университета[/s] будет снижена с учетом оставшихся навыков. ИИ всегда знает какие навыки предлагаются в [s]Университете[/s], даже если он его еще не посещал, и, исходя из этого, рассчитывает ценность его посещения.<br><br>
		[t]Далее приведены те самые расчетные значения ([s]Х[/s]) для каждого навыка:<br><br>
	</p>
	<table class="split">
		<tr> <td style="width: 40%">${!m?'[t]':''}[s]Поиск пути[/s]</td> <td>[s]Х = ((1000 + ArmyPower) * k / 4)[/s]</td> </tr>
	</table>
	<p>
		[t]где [s]k[/s] - коэффициент, зависящий от предлагаемого уровня [s]Поиска пути[/s]:<br>
		[t]&bull; Базовый [s]Поиск пути[/s]: [s]k[/s] = Кол-во клеток на карте со штрафами местности / Общее кол-во клеток на карте;<br>
		[t]&bull; Продвинутый [s]Поиск пути[/s]: В количестве клеток на карте со штрафами не учитываются [s]Камни[/s].<br>
		[t]&bull; Экспертный [s]Поиск пути[/s]: В количестве клеток на карте со штрафами не учитываются [s]Камни[/s], [s]Снег[/s] и [s]Песок[/s].<br>
		[t][s]ArmyPower = HeroPower * CreaturePower[/s] (см. раздел [s]"Дипломатия"[/s]).
	</p>
	<table class="split">
		<tr> <td style="width: 40%">${!m?'[t]':''}[s]Стрельба[/s]</td> <td>[s]Х = ((500 + RangedUnitsPower) * k)[/s]</td> </tr>
	</table>
	<p>
		[t]где [s]k = 16[/s] для Базовой [s]Стрельбы[/s]; [s]k = 7[/s] для Продвинутой [s]Стрельбы[/s]; [s]k = 11[/s] для Экспертной [s]Стрельбы[/s].<br>
		[t][s]RangedUnitsPower[/s] - сумма [s]AI Values[/s] всех стрелковых существ в армии.
	</p>
	<table class="split">
		<tr> <td style="width: 40%">${!m?'[t]':''}[s]Логистика[/s]</td> <td>[s]Х = ((1000 + ArmyPower) * 0,1)[/s]</td> </tr>
		<tr> <td>${!m?'[t]':''}[s]Разведка, Некромантия, Обучаемость[/s]</td> <td>[s]Х = ((1000 + ArmyPower) * 0,05)[/s]</td> </tr>
		<tr> <td>${!m?'[t]':''}[s]Дипломатия[/s]</td> <td>[s]Х = ((1000 + ArmyPower) * 0,01)[/s]</td> </tr>
		<tr> <td>${!m?'[t]':''}[s]Навигация[/s]</td> <td>[s]Х = ((1000 + ArmyPower) * k / 2)[/s]</td> </tr>
	</table>
	<p>
		[t]где [s]k[/s] = Кол-во клеток воды на карте / Общее кол-во клеток на карте.
	</p>
	<table class="split">
		<tr> <td style="width: 40%">${!m?'[t]':''}[s]Лидерство, Удача, Тактика[/s]</td> <td>[s]Х = ((1000 + ArmyPower) * 0,02)[/s]</td> </tr>
		<tr> <td>${!m?'[t]':''}[s]Мудрость[/s]</td> <td>[s]Х = (theStrongestSpellEfficiencyDelta * СМ * 0,5)[/s]</td> </tr>
	</table>
	<p>
		[t]где [s]СМ[/s] - Сила магии героя.<br>
		[t][s]theStrongestSpellEfficiencyDelta[/s] - разница между эффективностью самого сильного заклинания, имеющегося у героя, с прибавкой +1 к [s]СМ[/s] и +1 к длительности и без прибавки. По расчету это могут быть два разных заклинания, а также разница не может быть меньше 10.<br><br>
		[t]Эффективность заклинаний определяется следующим образом:<br><br>
		[t]&bull; ИИ никогда не использует следующий заклинания: [m]Затопить корабль[/m], [m]Видения[/m], [m]Просмотр земли[/m], [m]Просмотр воздуха[/m], [m]Маскировка[/m], [m]Зыбучие пески[/m], [m]Минное поле[/m], [m]Силовое поле[/m], [m]Стена огня[/m] и [m]Устранение преград[/m]. Их эффективность равна 0;<br>
		[t]&bull; Эффективность [m]Жертвы[/m] и [m]Забывчивости[/m] всегда равна 0;<br>
		[t]&bull; Эффективность всех заклинаний 3-5 уровня приравнивается к 0, если на герое [m]Плащ отречения[/m];<br>
		[t]&bull; Эффективность [m]Грома титана[/m] всегда равна 1;<br>
		[t]&bull; Общая формула эффективности остальных заклинаний:<br><br>
		[t][s]ArmyPower * SpellAIValue * k[/s]<br><br>
		[t]где [s]ArmyPower = HeroPower * CreaturePower[/s] ; [s]SpellAIValue[/s] - ценность заклинания (см. раздел "<a href="#5.5">[s]Ценность заклинаний[/s]</a>");<br>
		[t][s]k = 0,009 + 0,001 * sqrt((Запас маны героя / Стоимость использования заклинания))[/s]. Если запаса маны героя не хватает на хотя бы одно применение заклинания, то его эффективность приравнивается к 0;<br><br>
		[t]&bull; Для [m]Воскрешения[/m], [m]Поднятия мертвецов[/m], [m]Гипноза[/m], [m]Вызова элементалей[/m]:<br><br>
		[t][s]k = min (3.9, ScaleFactor (min (13, [Запас маны героя / Стоимость использования заклинания])) * min (0.9, 10 * (СМ + EffectiveMagicSchoolLevel) / ArmyPower))[/s]<br><br>
		[t]где [s]ScaleFactor(N)[/s]:
	</p>
	${!m?'<table><tr> <th>N = 0</th> <th>N = 1</th> <th>N = 2</th> <th>N = 3</th> <th>N = 4</th> <th>N = 5</th> <th>N = 6</th> <th>N = 7</th> <th>N = 8</th> <th>N = 9</th> <th>N = 10</th> <th>N = 11</th> <th>N = 12</th> <th>N = 13</th> </tr><tr> <td>0</td> <td>0.83</td> <td>1.53</td> <td>2.11</td> <td>2.59</td> <td>2.99</td> <td>3.33</td> <td>3.6</td> <td>3.84</td> <td>4.03</td> <td>4.19</td> <td>4.33</td> <td>4.44</td> <td>4.53</td> </tr></table>':''}
	${m?'<table><tr> <th>N = 0</th> <th>N = 1</th> <th>N = 2</th> <th>N = 3</th> <th>N = 4</th> <th>N = 5</th> <th>N = 6</th> </tr><tr> <td>0</td> <td>0.83</td> <td>1.53</td> <td>2.11</td> <td>2.59</td> <td>2.99</td> <td>3.33</td></tr></table><table>	<tr> <th>N = 7</th> <th>N = 8</th> <th>N = 9</th> <th>N = 10</th> <th>N = 11</th> <th>N = 12</th> <th>N = 13</th> </tr><tr> <td>3.6</td> <td>3.84</td> <td>4.03</td> <td>4.19</td> <td>4.33</td> <td>4.44</td> <td>4.53</td> </tr></table>':''}
	<p>
		[t][s]min(а, б, ...)[/s] - минимальное значение из [s]а, б, …[/s].<br><br>
		[t]&bull; Для [m]Волшебной стрелы[/m], [m]Ледяной молнии[/m], [m]Молнии[/m], [m]Взрыва[/m], [m]Кольца холода[/m], [m]Огненного шара[/m] и [m]Метеоритного дождя[/m]:<br><br>
		[t][s]k = min(k1, k2)[/s]<br><br>
		[t][s]k1 = k3 * ScaleFactor(min (13, [Запас маны героя / Стоимость использования заклинания]))[/s];<br>
		[t][s]k3 = 10 * (СМ + EffectiveMagicSchoolLevel) * SpellAIValue * ElementalOrbsMod * SorceryMod / ArmyPower[/s];<br>
		[t][s]k2[/s] определяется по следующей таблице в зависимости от значение [s]k3[/s]:
	</p>
	${!m?'<table><tr> <th>k3 > 4,8</th> <th>4,799 … 1,557</th> <th>1,556 … 0,752</th> <th>0,751 … 0,433</th> <th>0,432 … 0,275</th> <th>0,274 … 0,186</th> <th>0,185 … 0,131</th> <th>0,13 … 0,095</th> <th>0,094 … 0,071</th> <th>0,07 … 0,054</th> <th>0,053 … 0,041</th> <th>0,04 … 0,032</th> <th>0,031 … 0,025</th> <th>k3 &lt; 0,025</th></tr><tr> <td>4</td> <td>0,5 * k3 + 1,6</td> <td>0,987 * k3 + 0,842</td> <td>1,452 * k3 + 0,492</td> <td>1,888 * k3 + 0,303</td> <td>2,291 * k3 + 0,192</td> <td>2,657 * k3 + 0,124</td> <td>2,986 * k3 + 0,081</td> <td>3,277 * k3 + 0,053</td> <td>3,353 * k3 + 0,035</td> <td>3,755 * k3 + 0,023</td> <td>3,947 * k3 + 0,016</td> <td>4,112 * k3 + 0,01</td> <td>4,53 * k3</td> </tr></table>':''}
	${m?'<table><tr> <th>k3 > 4,8</th> <th>4,799 … 1,557</th> <th>1,556 … 0,752</th> <th>0,751 … 0,433</th> <th>0,432 … 0,275</th> <th>0,274 … 0,186</th> <th>0,185 … 0,131</th> </tr><tr> <td>4</td> <td>0,5 * k3 + 1,6</td> <td>0,987 * k3 + 0,842</td> <td>1,452 * k3 + 0,492</td> <td>1,888 * k3 + 0,303</td> <td>2,291 * k3 + 0,192</td> <td>2,657 * k3 + 0,124</td> </tr></table><table><tr> <th>0,13 … 0,095</th> <th>0,094 … 0,071</th> <th>0,07 … 0,054</th> <th>0,053 … 0,041</th> <th>0,04 … 0,032</th> <th>0,031 … 0,025</th> <th>k3 &lt; 0,025</th></tr><tr> <td>2,986 * k3 + 0,081</td> <td>3,277 * k3 + 0,053</td> <td>3,353 * k3 + 0,035</td> <td>3,755 * k3 + 0,023</td> <td>3,947 * k3 + 0,016</td> <td>4,112 * k3 + 0,01</td> <td>4,53 * k3</td> </tr></table>':''}
	<p>
		[t]&bull; Для [m]Цепной молнии[/m] и [m]Инферно[/m] (определения [s]k, k2[/s] и [s]k3[/s] аналогичны):<br><br>
		[t][s]k1 = 0,83 * k3[/s] (т.е. тут [s][Запас маны героя / Стоимость использования заклинания][/s] считается равным 1).<br><br>
		[t]&bull; Для [m]Волны смерти[/m], [m]Упокоения нежити[/m] и [m]Армагеддона[/m] эффективность рассчитывается по формуле (определения [s]k1[/s] и [s]k2[/s] аналогичны):<br><br>
		[t][s]max (0, [ResistantCreaturesPower * min (k1, k2)] - (ArmyPower - ResistantCreaturesPower))[/s]<br><br>
		[t]где [s]max (а, б, ...)[/s] - максимальное значение из [s]а, б, …[/s];<br>
		[t][s]ResistantCreaturesPower[/s] - сумма ([s]DamageResistance * AI Value[/s]) всех существ в армии героя;<br>
		[t][s]DamageResistance = 1[/s] для существ полностью защищенных от заклинания; [s]DamageResistance = 0,2 / 0,4 / 0,2[/s] для [m]Гномов[/m], [m]Боевых гномов[/m] и [m]Кристаллических драконов[/m] соответственно.<br><br>
		[t]&bull; Для остальных заклинаний (в основном это заклинания типа [m]Проклятия[/m] и [m]Благословения[/m]) эффективность рассчитывается по формулам:<br><br>
		[t]Для целевых заклинаний: [s][SpellAIValue * AffectedCreaturesPower * min (7, Длительность * [Запас маны героя / Стоимость использования заклинания]) * 1 / 700][/s]<br><br>
		[t]где [s]AffectedCreaturesPower[/s] - сумма [s]AI Value[/s] всех существ в армии героя, на которых заклинание действует. Для [m]Проклятия[/m] защита не учитывается.<br><br>
		[t]Также рассчитывается Максимальное кол-во отрядов, на которых заклинание подействует:<br><br>
		[t][s]MN = max (1, min (Длительность, [Длительность * [Запас маны героя / Стоимость использования заклинания] * 1 / 7]))[/s]<br><br>
		[t]И, если у героя больше отрядов, чем это значение, то [s]AffectedCreaturesPower[/s] считается как сумма [s]AI Value MN[/s] самых сильных отрядов в армии.<br><br>
		[t]Для массовых заклинаний формула эффективности аналогична, но [s]MN[/s] всегда равно общему количеству отрядов у героя.<br><br>
	</p>
	<table class="split">
		<tr> <td style="width: 40%">${!m?'[t]':''}[s]Мистицизм[/s]</td> <td>[s]Х = (theStrongestSpellEfficiencyDelta2 * 0,1)[/s]</td> </tr>
	</table>
	<p>
		[t]где [s]theStrongestSpellEfficiencyDelta2 = [1 / 3 * ([theStrongestSpellEfficiencyDelta[/s] (с учетом прибавки +30 к Запасу маны героя) [s]] - [theStrongestSpellEfficiencyDelta[/s] (без прибавки) [s]])[/s].
	</p>
	<table class="split">
		<tr> <td style="width: 40%">${!m?'[t]':''}[s]Баллистика[/s]</td> <td>[s]Х = ((1000 + Army_power) * 0,125)[/s]</td> </tr>
		<tr> <td>${!m?'[t]':''}[s]Орлиный глаз[/s]</td> <td>[s]Х = (theStrongestSpellEfficiencyDelta * 0,2)[/s]</td> </tr>
	</table>
	<p>
		[t]Если у героя нет [s]Мудрости[/s], то значение приравнивается к 0.
	</p>
	<table class="split">
		<tr> <td style="width: 40%">${!m?'[t]':''}[s]Поместья[/s]</td> <td>[s]Х = (AIPlayerWealthFactor * k)[/s]</td> </tr>
	</table>
	<p>
		[t]где [s]k[/s] - коэффициент, зависящий от предлагаемого уровня навыка [s]Поместья[/s]:<br>
		[t]&bull; Базовый или Продвинутый: [s]k = 725[/s];<br>
		[t]&bull; Экспертный: [s]k = 1550[/s].<br><br>
		[t]Если компьютерному игроку не на что тратить золото (из строений в городах):<br><br>
		[t][s]AIPlayerWealthFactor = TownsMod[/s]<br><br>
		[t]где [s]TownsMod[/s] - коэффициент, зависящий от количества городов у компьютерного игрока:
	</p>
	<table>
		<tr> <th>0</th> <th>1</th> <th>2</th> <th>3</th> <th>4</th> <th>5</th> <th>6</th> <th>7</th> <th>8</th> <th>>8</th> </tr>
		<tr> <td>0</td> <td>0.1</td> <td>0.15</td> <td>0.2</td> <td>0.25</td> <td>0.3</td> <td>0.35</td> <td>0.4</td> <td>0.45</td> <td>0.5</td> </tr>
	</table>
	<p>
		[t]&bull; Если у компьютерного игрока достаточно золота, чтобы построить / купить то, что он планирует:<br><br>
		[t][s]AIPlayerWealthFactor = k + (1 - k) * TownsMod[/s]<br><br>
		[t]где [s]k = Необходимая сумма золота для постройки / (Текущее кол-во золота + Доход золота в день)[/s]<br><br>
		[t]&bull; Если у компьютерного игрока недостаточно золота, чтобы построить / купить то, что он планирует:<br><br>
		[t][s]AIPlayerWealthFactor = min (1 / TownsMod, k)[/s]<br><br>
		[t]&bull; [s]AIPlayerWealthFactor[/s] пересчитывается каждый раз, когда компьютерный игрок тратит золото.
	</p>
	<table class="split">
		<tr> <td style="width: 40%">${!m?'[t]':''}[s]Магия огня, Магия воды, Магия земли, Магия воздуха[/s]</td> <td>[s]Х = theStrongestSpellEfficiencyDelta3[/s]</td> </tr>
	</table>
	<p>
		[t]theStrongestSpellEfficiencyDelta3 - разница между эффективностью самого сильного заклинания, имеющегося у героя, с учетом полученного навыка и без его учета.
	</p>
	<table class="split">
		<tr> <td style="width: 40%">${!m?'[t]':''}[s]Грамотность[/s]</td> <td>[s]Х = (theStrongestSpellEfficiencyDelta * СМ * 0,2)[/s]</td> </tr>
	</table>
	<p>
		[t]Если у героя нет [s]Мудрости[/s], то значение приравнивается к 0.
	</p>
	<table class="split">
		<tr> <td style="width: 40%">${!m?'[t]':''}[s]Артиллерия[/s]</td> <td>[s]Х = 10 * Атака героя[/s]</td> </tr>
	</table>
	<p>
		[t]Если у героя нет [m]Баллисты[/m], то значение приравнивается к 0.
	</p>
	<table class="split">
		<tr> <td style="width: 40%">${!m?'[t]':''}[s]Нападение, Доспехи[/s]</td> <td>[s]Х = ((1000 + ArmyPower) * 0,07)[/s]</td> </tr>
		<tr> <td>${!m?'[t]':''}[s]Интеллект[/s]</td> <td>[s]Х = (theStrongestSpellEfficiencyDelta2 * Знания_героя * 0,25)[/s]</td> </tr>
		<tr> <td>${!m?'[t]':''}[s]Волшебство[/s]</td> <td>[s]Х = (theStrongestSpellEfficiencyDelta * СМ * 0,05)[/s]</td> </tr>
		<tr> <td>${!m?'[t]':''}[s]Сопротивление[/s]</td> <td>[s]Х = ((1000 + ArmyPower) * 0,025)[/s]</td> </tr>
		<tr> <td>${!m?'[t]':''}[s]Первая помощь[/s]</td> <td>[s]Х = 250[/s]</td> </tr>
	</table>
	<p>
		[t]Если у героя нет [m]Палатки первой помощи[/m], то значение приравнивается к 0.
	</p>
	<h2 id="ai.3">Выбор артефактов</h2>
	<p>
		[t]Кроме выбора вторичных навыков, перед героями ИИ стоит выбор артефактов - какие стоит носить на себе, а какие лучше отправить в рюкзак. Как и со вторичными навыками, компьютерный ИИ пользуется простыми правилами, для оценки артефактов:<br><br>
		[t]&bull; Если у героя ИИ слот артефакта пустой, то подобрав артефакт этого типа, он помещает его в этот слот, не зависимо от его свойств<br>
		[t]&bull; Если у героя ИИ слот артефакта занят артефактом более высокой ценности, чем подбираемый, то новый артефакт помещается в рюкзак<br>
		[t]&bull; Если у героя ИИ слот артефакта занят артефактом более низкой ценности, чем подбираемый, то новый артефакт замещает его, а менее ценный перемещается в рюкзак<br>
		[t]&bull; Если у героя ИИ слот артефакта занят артефактом такой же ценности, чем подбираемый, то новый артефакт помещается в рюкзак<br><br>
		[t]Герои ИИ очень странно взаимодействуют со сборными артефактами:<br><br>
		[t]&bull; Если у героя свободны все слоты, которые занимает и блокирует сборный артефакт, то он его экипирует<br>
		[t]&bull; Если у героя занят только тот слот, который занимает сборный артефакт, а слоты, которые он блокирует свободны, он его экипирует (для отдельного слота сборные артефакты имеют нивысшую ценность)<br>
		[t]&bull; Если у героя уже есть все части сборного артефакта, он не станет его собирать<br>
		[t]&bull; Если хотя бы один слот, который блокирует сборный артефакт, занят, то герой ИИ не станет экипировывать сборный артефакт<br>
		[t]&bull; Если у героя есть все кроме одной части сборного артефакта экипированы, а недостающая часть при получении сразу попадает в свободный слот, то герой соберет артефакт<br>
		[t]&bull; Если у героя экипирован сборный артефакт, а к нему попадает более ценный сборный артефакт в тот же слот, который можно экипировать не заменяя никаких элементов экипировки, кроме уже надетого сборного артефакта, герой ИИ заменит его<br><br>
		[t]Кроме того, компьютерный ИИ не может провести оценку эффективности артефактов в разных условиях. Так имея в рюкзаке [m]Сапоги левитации[/m] и [m]Сандалии святых[/m], герой никогда не наденет [m]Сапоги левитации[/m], даже если окажется заперт на клочке земли окруженном водой.<br><br>
		[t]Существует одна ошибка - герой ИИ не использует артефакты, полученные из [s]Утопий драконов[/s] или полученные после победы над другим героем, если у него занят этот слот другим артефактом, даже меньшей ценности. Такие артефакты просто помещаются в рюкзак.<br><br>
		[t]На странице <a href="artifact-page${!m?'':'-m'}.html">[m]Артефактов[/m]</a> указаны значения ценности артефактов. Чем выше это значение, тем предмет предпочтительнее для компьютерного игрока.<br><br>
		[t]Все артефакты для слота "[s]Разное[/s]" имеют ценность 1. Это обусловлено тем, что к выбору таких артефактов компьютерный ИИ подходит иначе. Их ценность может изменяться в зависимости от потребности в том или ином действии. Так, например, [m]Неистощимая телега древесины[/m] может в определенной ситуации стать ценнее, чем [m]Книга магии земли[/m]. Подход к выбору артефакта зависит от неисчислимого количества факторов, начиная от опасности нападения со стороны врага и заканчивая необходимостью выполнить задание в хижине провидца.<br><br>
		[t]Несмотря на такой разумный подход, ряд артефактов практически не представляет ценности для ИИ, в их число входят [m]Брелок маны[/m], [m]Талисман маны[/m] и [m]Мистическая сфера маны[/m]. При одном свободном слоте под все эти три артефакта, компьютер наденет тот, что первый попадет в его сумку и не станет его заменять, хотя [m]Мистическая сфера маны[/m] имеет очевидное преимущество перед двумя другими артефактами.
	</p>
	<h2 id="ai.4">Решение о нападении</h2>
	<p>
		[t]Перемещаясь по карте приключений герои под управлением ИИ принимают решения о нападении и ненападении основываясь на превосходстве над героем противника или нейтральным существом. Кроме очевидных преимуществ по характеристикам, артефактам, заклинаниям (которые ИИ всегда видит у игрока) ИИ сравнивает также показатель [s]Ценности[/s] существ ([s]AI Value[/s]). Параметр [s]Ценность[/s] измеряется в единицах и определяет условную ценность существа. Чем он выше, тем существо ценнее. Значения [s]Ценности[/s] можно увидеть, перейдя на страницу <a href="mobs-page${!m?'':'-m'}.html">[m]Существ[/m]</a> и кликнув по нужному юниту.<br><br>
		[t]При нападении героев ИИ на нейтральных существ параметр [s]Ценности[/s] становится первостепенным фактором и тут вступает в силу класс героя ИИ (они подробно разобраны в статье "[s]Классы героев[/s]"), а точнее его параметр агрессии. Если Агрессия ≥ Суммарная ценность нейтральной армии / Суммарная ценность армии героя, то герой атакует нейтральную армию на карте приключений.<br><br>
		[t]Ниже приведены показатели агрессии для разных классов:
	</p>
	<table>
		<tr> <td>Рыцарь</td> <td>1.0</td> <td rowspan="10" style="background: black; width: 0.5%; border: none"></td> <td>Лорд</td> <td>1.0</td> </tr>
		<tr> <td>Священник</td> <td>0.8</td> <td>Чернокнижник</td> <td>1.0</td> </tr>
		<tr> <td>Рэйнджер</td> <td>1.0</td> <td>Варвар</td> <td>1.1</td> </tr>
		<tr> <td>Друид</td> <td>0.8</td> <td>Боевой маг</td> <td>1.1</td> </tr>
		<tr> <td>Алхимик</td> <td>1.0</td> <td>Хозяин зверей</td> <td>0.9</td> </tr>
		<tr> <td>Маг</td> <td>1.0</td> <td>Ведьма</td> <td>1.0</td> </tr>
		<tr> <td>Одержимый</td> <td>1.2</td> <td>Путешественник</td> <td>0.9</td> </tr>
		<tr> <td>Еретик</td> <td>1.1</td> <td>Элементалист</td> <td>1.0</td> </tr>
		<tr> <td>Рыцарь смерти</td> <td>1.2</td> <td>Капитан</td> <td>1.0</td> </tr>
		<tr> <td>Некромант</td> <td>1.0</td> <td>Навигатор</td> <td>1.0</td> </tr>
	</table>
	<p>
		[t][s]Ценность[/s] также влияет на то, каких существ герой ИИ будет набирать себе в армию, в том случае, если у него есть доступ к внешним жилищам других замков или захваченные "неродные" замки. Несмотря на это, существуют и исключения: в каждом типе города есть по одному виду существ, которые ИИ никогда не берет в армию, но скупает и оставляет в городе. Таким образом, в любой армии героя ИИ может быть до 6 видов существ из его родного города. ИИ не берет в армию следующих существ: [m]Алебардщиков[/m], [m]Чертей[/m], [m]Хобгоблинов[/m], [m]Дендроидов-солдатов[/m], [m]Зомби[/m], [m]Гноллов-мародеров[/m], [m]Гремлинов-мастеров[/m], [m]Адских троглодитов[/m], [m]Элементалей магмы[/m], [m]Головорезов[/m] (несмотря на то, что их [s]Ценность[/s] выше некоторых других существ этих замков).<br><br>
		[t]Также существует маленькая хитрость связанная с поведением ИИ. Если на пути к герою-человеку  у героя ИИ находится нейтральное существо или страж задания, через который ИИ не может пройти, то герой-человека станет для него "невидимым" и он не будет на него реагировать.
	</p>
	<h2 id="ai.5">Ценность заклинаний</h2>
	<p>
		[t]Наверняка многие из вас замечали, что компьютерный ИИ довольно стандартно использует те или иные заклинания. Некоторые он и вовсе пытается избегать, а другие использует очень часто или наоборот. В ресурсах игры каждое заклинание в игре имеет особый параметр [s]AI Values[/s] - ценность использования этого заклинания для ИИ. Однако, как показывают тесты, [s]AI Values[/s] не является безусловным фактором для выбора. ИИ для каждого из имеющихся у него заклинаний проводит целую процедуру "[s]взвешивания[/s]". Возможно, [s]AI Values[/s] заклинаний отражают некий усредненный массив данных результатов "[s]взвешивания[/s]" различных заклинаний, то есть отражают представления ИИ об их ценности. Но используются эти значения не для выбора заклинания в какой-то момент игры, а в других целях, например, для сопоставления силы своего героя с героем противника, выбора цели для движения по карте, свиток с каким заклинанием предпочтительнее взять и т.д., но эта информация не точна на 100%.<br><br>
		[t]Для разных заклинаний алгоритм "[s]взвешивания[/s]" очень отличается, хотя можно выделить несколько наиболее часто используемых, которые применяются по сути для нескольких заклинаний, а не для одного (с небольшими отличиями). Например, для "[s]взвешивания[/s]" [m]Ослепления[/m] наибольшее значение имеет сила отрядов противника, которые в свой ближайший ход смогут ударить дружественный отряд. При этом продолжительность [m]Ослепления[/m] практически не учитывается (надо сказать, что алгоритмы "[s]взвешивания[/s]" не всегда работают идеально). Интересно, что иногда в алгоритмах взвешивания учитывается примерное соотношение силы двух армий в бою (не отрядов, а армий суммарно). С помощью этого соотношения ИИ примерно прикидывает продолжительность битвы (равные армии = высокая продолжительность боя).<br><br>
		[t]Алгоритмы, используемых ИИ в битве:<br><br>
		[t]&bull; Перед каждой битвой с участием ИИ, алгоритм вычисляет соотношение сил армий, причем, чем ближе оно к 1, тем большее число сопоставляет компьютер. То есть он рассматривает эту величину приблизительно как ожидаемую продолжительность битвы (ее решающей фазы).<br><br>
		[t]&bull; Алгоритм создает и обновляет набор битов (1 набор на всю армию - армию противника ИИ), отражающих возможность каждого отряда "дотянуться" до противника.<br><br>
		[t]Далее приведена таблица [s]AI Values[/s] для всех заклинаний ИИ. Особенности применения ИИ данных параметров требуют тестирования и доработки.
	</p>
	<div class="minimized">&#9660;&nbsp;Таблица: Ценность заклинаний
	<table>
		<tr> <th rowspan="2">Заклинания</th> <th colspan="3">Уровень${!m?' развития':''} Магии стихии</th> </tr>
		<tr> <th>Нет / Базов${!m?'ый':'.'}</th> <th>Продв${!m?'инутый':'.'}</th> <th>Эксперт${!m?'ный':'.'}</th> </tr>
		<tr> <td colspan="4" style="font-style: italic">Походные заклинания</td> </tr>
		<tr> <td>Городской портал</td> 			<td>5</td> <td>70</td> <td>70</td> </tr>
		<tr> <td>Полет, Дверь измерений</td> 	<td>30</td> <td>40</td> <td>50</td> </tr>
		<tr> <td>Хождение по воде</td> 			<td>15</td> <td>20</td> <td>25</td> </tr>
		<tr> <td>Вызвать корабль</td> 			<td>10</td> <td>20</td> <td>20</td> </tr>
		<tr> <td>Затопить корабль, Видения, Просмотр земли, Маскировка, Просмотр воздуха</td> <td>1</td> <td>1</td> <td>1</td> </tr>
		<tr> <td colspan="4" style="font-style: italic">Боевые заклинания</td> </tr>
		<tr> <td>Вызов элементалей</td> 		<td>50</td> <td>100</td> <td>150</td> </tr>
		<tr> <td>Воскрешение</td> 				<td>50</td> <td>60</td> <td>120</td> </tr>
		<tr> <td>Поднять мертвецов</td> 		<td>60</td> <td>60</td> <td>120</td> </tr>
		<tr> <td>Армагеддон</td> 				<td>100</td> <td>100</td> <td>100</td> </tr>
		<tr> <td>Гипноз</td> 					<td>25</td> <td>50</td> <td>100</td> </tr>
		<tr> <td>Взрыв, Цепная молния, Гром титана</td> <td>75</td> <td>75</td> <td>75</td> </tr>
		<tr> <td>Берсерк</td> 					<td>60</td> <td>60</td> <td>60</td> </tr>
		<tr> <td>Воздушный щит</td> 			<td>20</td> <td>50</td> <td>50</td> </tr>
		<tr> <td>Ослепление</td> 				<td>50</td> <td>50</td> <td>50</td> </tr>
		<tr> <td>Клон</td> 						<td>20</td> <td>40</td> <td>50</td> </tr>
		<tr> <td>Упокоить нежить</td> 			<td>40</td> <td>40</td> <td>40</td> </tr>
		<tr> <td>Метеоритный дождь</td> 		<td>37</td> <td>37</td> <td>37</td> </tr>
		<tr> <td>Бешенство</td> 				<td>10</td> <td>20</td> <td>30</td> </tr>
		<tr> <td>Контрудар</td> 				<td>20</td> <td>30</td> <td>30</td> </tr>
		<tr> <td>Молния</td> 					<td>25</td> <td>25</td> <td>25</td> </tr>
		<tr> <td>Волшебное зеркало</td> 		<td>10</td> <td>15</td> <td>20</td> </tr>
		<tr> <td>Ледяная молния, Инферно, Волна смерти</td> <td>20</td> <td>20</td> <td>20</td> </tr>
		<tr> <td>Щит</td> 						<td>10</td> <td>20</td> <td>20</td> </tr>
		<tr> <td>Антимагия</td> 				<td>12</td> <td>18</td> <td>24</td> </tr>
		<tr> <td>Телепорт</td> 					<td>20</td> <td>20</td> <td>20</td> </tr>
		<tr> <td>Молитва</td> 					<td>8</td> <td>16</td> <td>16</td> </tr>
		<tr> <td>Огненный шар</td> 				<td>15</td> <td>15</td> <td>15</td> </tr>
		<tr> <td>Огненный щит</td> 				<td>10</td> <td>12</td> <td>15</td> </tr>
		<tr> <td>Жажда крови, Точность, Слабость, Каменная кожа, Разрушающий луч</td> <td>7</td> <td>15</td> <td>15</td> </tr>
		<tr> <td>Медлительность</td> 			<td>5</td> <td>15</td> <td>15</td> </tr>
		<tr> <td>Кольцо холода</td> 			<td>12</td> <td>12</td> <td>12</td> </tr>
		<tr> <td>Благословение, Проклятие</td> 	<td>10</td> <td>11</td> <td>11</td> </tr>
		<tr> <td>Волшебнная стрела</td> 		<td>10</td> <td>10</td> <td>10</td> </tr>
		<tr> <td>Ускорение</td> 				<td>5</td> <td>10</td> <td>10</td> </tr>
		<tr> <td>Защита от стихий (воздух, огонь, вода, земля)</td> <td>2</td> <td>4</td> <td>4</td> </tr>
		<tr> <td>Лечение</td> 					<td>4</td> <td>4</td> <td>4</td> </tr>
		<tr> <td>Снятие заклинаний</td> 		<td>3</td> <td>3</td> <td>3</td> </tr>
		<tr> <td>Радость, Печаль, Удача, Неудача</td> <td>1</td> <td>2</td> <td>2</td> </tr>
		<tr> <td>Зыбучие пески, Минное поле, Силовое поле, Стена огня, Землетрясение, Жертва, Палач, Забывчивость, Устранение преград</td> <td>1</td> <td>1</td> <td>1</td> </tr>
	</table>
	</div>
	<p>
		[t]Герой ИИ, анализируя заклинания своего оппонента, может отказаться от использования той или иной магии в силу ее бесполезности. Например, если у игрока в арсенале нет ни одного атакующего заклинания (наносящего урон), то компьютерный ИИ не станет использовать заклинания [m]Волшебное зеркало[/m] и [m]Антимагия[/m], аналогично дело обстоит с заклинаниями [m]Защита от огня[/m], [m]воды[/m], [m]воздуха[/m] и [m]земли[/m]; Если у игрока нет заклинаний соответствующих стихий, то герой ИИ не станет использовать эти заклинания.<br><br>
		[t]Компьютерный игрок не использует заклинание [m]Гипноз[/m], если в армии игрока остался один отряд существ, а следующие заклинания ИИ не использует вовсе: [m]Затопить корабль[/m], [m]Видения[/m], [m]Просмотр земли[/m] и [m]воздуха[/m], [m]Маскировка[/m], [m]Зыбучие пески[/m], [m]Минное[/m] и [m]Силовое поле[/m], [m]Стена огня[/m] и [m]Устранение преград[/m].
	</p>
	<h2 id="ai.6">Расстановка отрядов в армии ИИ</h2>
	<p>
		[t]Герои под управлением ИИ распределяют свои войска в соответствии с определенными принципами:<br><br>
		[t]&bull; ИИ разделяет все свои войска на 2 категории: стрелки и отряды ближнего боя.<br>
		[t]&bull; В первую очередь расставляются именно стрелковые отряды. В порядке приоритета они помещаются в слоты 1-3-5-7-2-4-6. Например, если в армии героя ИИ из стрелков имеются только [m]Арбалетчики[/m], [m]Монахи[/m] и [m]Фанатики[/m], то он поместит их в слоты 1, 3 и 5.<br>
		[t]&bull; Порядок расстановки стрелков зависит от их [s]Скорости[/s], т.е. самых быстрых он ставит в слот 1, и далее по порядку, указанному выше. Если несколько стрелковых отрядов имеют одинаковую [s]Скорость[/s], то он расположит их случайно между соответствующими слотами.<br>
		[t]&bull; Во вторую очередь расставляются отряды ближнего боя. Все они помещаются в свободные слоты начиная с левого (верхнего на поле боя) к правому (нижнему на поле боя) в порядке уменьшения их [s]Скорости[/s].<br>
		[t]&bull; Если несколько отрядов ближнего боя имеют одинаковую [s]Скорость[/s], то ИИ расположит их по id - индивидуальному порядковому номеру существа, т.е. сперва будут войска [s]Замка[/s], [s]Оплота[/s], [s]Башни[/s] и т.д., а в конце нейтралы ([s]Драконы[/s]). Внутри одного города id считается от существ 1 уровня к 7 уровню, причем неулучшенные войска идут вперед улучшенных.<br>
		[t]&bull; При осаде города появляется особенность - отряды ближнего боя с одинаковой [s]Скоростью[/s] ИИ располагает в обратном порядке значения id.<br>
		[t]&bull; Если в армии героя ИИ меньше 7 видов существ, то порядок приоритета слотов меняется и стрелков он помещает следующим образом:
	</p>
	<table>
		<tr> <td>Кол-во отрядов</td> <td>Порядок слотов, в которые помещаются стрелки</td> </tr>
		<tr> <td>6</td> <td>1-3-5-6-2-4</td> </tr>
		<tr> <td>5</td> <td>1-3-4-5-2</td> </tr>
		<tr> <td>4</td> <td>1-2-3-4</td> </tr>
		<tr> <td>3</td> <td>1-2-3</td> </tr>
		<tr> <td>2</td> <td>1-2</td> </tr>
		<tr> <td>1</td> <td>1</td> </tr>
	</table>
	<h2 id="ai.7">Поведение ИИ в бою</h2>
	<p>
		[t]В разделе приведены общие наблюдения за поведением существ, управляемых компьютером (ИИ).<br><br>
		[t]&bull; Если существо ИИ имеет большую [s]Скорость[/s], чем существа игрока, то он:<br><br>
		[t]а) Войдет этим существом в зону досягаемости существ игрока, атаковав какую-нибудь цель.<br>
		[t]б) Будет Ждать, если атаковать некого.<br><br>
		[t]&bull; При наличии хотя бы одного отряда ИИ в зоне досягаемости существ игрока, другие отряды ИИ смело будут идти в сторону игрока без ожидания, даже если ни до кого не достают.<br><br>
		[t]&bull; Существа ИИ всегда идут к ближайшему отряду (считается по количеству ходов, а не клеток, причем по текущей скорости, с учетом наложенных заклинаний) - на этом основаны действия ИИ при использовании заклинаний: если ИИ видит, что он может использовать [m]Ускорение[/m] на свой отряд и он достанет до вражеского существа, чтобы атаковать его, ИИ будет колдовать, иначе он может, например, использовать [m]Волшебную стрелу[/m] или [m]Каменную кожу[/m]. Таким образом можно вынуждать ИИ использовать определенные заклинания.<br><br>
		[t]&bull; При нескольких вражеских отрядах в зоне досягаемости, ИИ выбирает цель исходя из следующих приоритетов:<br><br>
		[t]а) Сила ответного удара (расчет ведется по текущему количеству существ в потенциальном атакуемом отряде, а не от того, сколько должно остаться после удара): ИИ старается выбрать минимальное значение.<br>
		[t]б) Учитывает свое текущее положение в битве (выигрышное или проигрышное положение): Если ИИ считает, что сможет выиграть, то атакует отряды, расположенные ниже. При проигрышном положении ИИ начинает с верхних.<br>
		[t]в) ИИ старается использовать способности и возможности своих существ, например блокировать стреляющих бойцов или использовать дыхание [s]Драконов[/s], наложить заклинание при ударе ([m]Слабость[/m] у [m]Ядовитых змиев[/m]).<br><br>
		[t]Это были основные принципы поведения ИИ в бою, но существуют и другие, менее значимые:<br><br>
		[t]&bull; Если вражеских отрядов, которых его существо сможет атаковать за минимальное количество ходов, несколько, то работает множество сложных факторов: соотношение сил армий, зоны досягаемости другими своими отрядами, соотношение силы ответного удара к показателю [s]AI Value[/s], влияние уже снятого ответного удара, заклинания и т.д. Это неполный список факторов.<br><br>
		[t]&bull; [m]Стена огня[/m]. Нейтралы ее прекрасно видят и легко обходят, если есть такая возможность. Иногда нейтралы могут сменить приоритетную цель атаки, если к первой цели мешает подойти [m]Стена огня[/m].<br><br>
		[t]&bull; Например, если отряд игрока достает до какого-нибудь отряда ИИ, то подставиться под него ИИ не считает неправильным (т. к. он в любом случае ударит какой-нибудь отряд).<br><br>
		[t]&bull; Если какой-то отряд игрока ни до кого не доходит в этот раунд, то ИИ будет минусовать урон от этого отряда из ценности удара ИИ по тем существам игрока, при ударе по которым он подставится под этот отряд игрока. При этом из выражения (Кол-во существ * [s]Fight Value[/s]) (отряда игрока, по которому планируется удар) напрямую вычитается ценность урона (от другого отряда игрока, под который ИИ может подставиться, ударив первый отряд), т.е., ценность тех существ, которые умирают от этого урона (их количество может быть дробным). А ценность 1 существа - уже есть [s]Fight Value[/s]. При этом дается плюс к ценности, если верхнее существо в отряде с небольшим количеством здоровья и оно убивается.<br><br>
		[t]Ценность убийства существа основывается на его [s]Fight Value[/s] - параметре, привязанном к каждому существу в игре и использующемуся для расчета боевых действий ИИ. (В целом параметр [s]Fight Value[/s] (Боевая ценность существ) определяет силу существа в числовом значении. Точное значение боевой ценности существ прописаны в таблице ниже. Плюс идет учет ряда динамических факторов - усиливающие отряд заклинания и прочее. Ответный удар считается от оставшегося после удара отряда исходя из среднего урона.
	</p>
	<div class="minimized">&#9660;&nbsp;Таблица: Боевая ценность существ
	${!m? separateTables.battleValue : separateTables.battleValueM}
	</div>
	<p>
		[t](Правила поведения героев ИИ распространяются и на поведение нейтральных существ в битве)<br><br>
		[t]Герои ИИ умеют сбегать с поля боя и откупаться как и герой-человек, однако делают это не всегда. Как правило герой сбежит, если поймет, что в ближайший ход понесет поражение или большие потери, однако бывают случаи, когда герой не сбегает вовсе или сбегает и ИИ не выкупает его в [s]Таверне[/s].<br><br>
		[t]ИИ не считает угрозой призванных [s]Элементалей[/s] и не будет выходить из-за стен города, даже если они остались одни.<br><br>
		[t]Также особый интерес представляет выбор целей для стрелковых башен под управлнием ИИ (до тех пор, пока у героя под управлением игрока нет навыка [s]Артиллерии[/s], стрелковые башни также управляются компьютерным ИИ).<br><br>
		[t]У стрелковых башен есть особый приоритет целей. Ниже приведен список всех существ, где 1 - наивысший приоритет.
	</p>
	<div class="minimized">&#9660;&nbsp;Таблица: Приоритеты стрелковых башен
	<table ${!m?'class="compress"':''}>
		${!m? separateTables.towersPriority : separateTables.towersPriorityM}
	</table>
	</div>
	<p>
		[t]Указанные в таблице приоритеты справедливы в том случае, когда Ваши существа смогут дойти до вражеских за одинаковое количество ходов (не клеток, а именно ходов). При этом ров и стены учитываются, кроме клетки ворот, которая является единственным путем, даже если ворота закрыты.<br><br>
		[t]Далее некоторые нюансы расчета приоритета:<br><br>
		[t]&bull; Не учитывается тип существа (стрелок или воин ближнего боя), но учитывается способность летать. Если одному существу хватит меньшего количества ходов, чем другим, то его приоритет возрастает примерно на [s]12,5 пунктов[/s].<br>
		[t]&bull; Также при выборе цели не имеет значения количество существ в отрядах.<br>
		[t]&bull; Если несколько существ имеют одинаковый приоритет, то башни начинают "отстрел" снизу вверх.<br>
		[t]&bull; Также приоритет выстрела смещается на существо с неполным здоровьем, которое может добить выстрел.<br><br>
		[t]Технически [s]Стрелковые башни[/s] под управлением компьютера выбирают цель своей атаки по классу вражеских отрядов, который присваивается всем вражеским отрядам в зависимости от их возмножности нанести ущерб обороняющимся:<br><br>
		[t]&bull; [s]Класс А[/s] - вражеский отряд сможет атаковать в ближайший свой ход. Сюда включаются и стрелки, способные стрелять.<br>
		[t]&bull; [s]Класс Б[/s] - вражеский отряд сможет атаковать через ход.<br>
		[t]&bull; [s]Класс В[/s] - вражеский отряд сможет атаковать через 2 хода. И так далее.<br><br>
		[t]При расчетах ИИ считает, что [s]Стрелковые башни[/s] наносят 1 урон (это баг), поэтому башни предпочтут атаковать, например, отряд из 1 существа, чем из 10. На выбор цели влияют 2 фактора, рассчитываемые отдельно для каждого класса вражеских отрядов:<br><br>
		[t]Потеря силы войска:<br>
		[t]&bull; Для существ [s]класса А[/s]: Приоритет = [s]1 * (AI Value / Зд.) * 100%[/s], где 1 - урон стрелковой башни (баг); [s]AI Value[/s] - суммарная ценность целевого отряда; [s]Зд.[/s] - суммарное здоровье целевого отряда.<br>
		[t]&bull; Для существ [s]класса Б[/s]: Приоритет = [s]1 * (AI Value / Зд.) * 50%[/s], где [s]50% = 100% / 2[/s].<br>
		[t]&bull; Для существ [s]класса В[/s]: Приоритет = [s]1 * (AI Value / Зд.) * 33%[/s], где [s]33% = 100% / 3[/s]. И так далее со снижением знаменателя [s]100% / n[/s].<br><br>
		[t]Потеря численности войска:<br>
		[t]&bull; Для существ [s]класса А[/s]: Приоритет = [s]1 / Зд. * 100%[/s], где 1 - урон стрелковой башни (баг); [s]Зд.[/s] - суммарное здоровье целевого отряда.<br>
		[t]&bull; Для существ [s]класса Б[/s]: Приоритет = [s]1 / Зд. * 50%[/s], где [s]50% = 100% / 2[/s].<br>
		[t]&bull; Для существ [s]класса В[/s]: Приоритет = [s]1 / Зд. * 33%[/s], где [s]33% = 100% / 3[/s]. И так далее со снижением знаменателя [s]100% / n[/s].<br><br>
		[t]После расчетов ИИ выбирает цель с наибольшим приоритетом. Если у нескольких отрядов приоритеты одинаковые, то будет выбран тот отряд, который находился в позиции правее к окну героя.<br><br>
		[t]Таким образом, если в армии имеются незадействованные слоты, то можно применить одну уловку, позволяющую если не избежать, то по крайней мере существенно снизить потери стрелковых отрядов. Для этого необходимо выставить до начала сражения в крайние правые слоты (на поле боя они будут нижними) всего по одному стрелку. В первом раунде боя потеряем только 3 существа, в силу того, что [s]Стрелковые башни[/s] начинают атаку стрелков снизу вверх. Также сохранить стрелковые отряды помогает выдвижение вперед (предположительно на дистанцию менее 10 клеток от центральной [s]Стрелковой башни[/s]) крупного пехотного отряда существ 1 уровня, например [m]Кентавров[/m]. Также отвлечение срабатывает при выдвижении летающих отрядов.<br><br>
		[t]Также при обороне города, ИИ считает свои [s]Стелковые башни[/s] стрелковыми отрядами (что логично) и постарается не выходить за стены, если у Вас нет особых стрелковых и летающих отрядов.<br><br>
		[t]Иногда существа под управлением ИИ неадекватно оценивают ситауцию. Так например дракон в [s]Черной башне[/s] может ударить не ударный стак из 100 [m]Скелетов[/m], а одного отдельно стоящего [m]Скелета[/m]. Подобный баг приоритетов встречается не только в случае с [s]Черной башней[/s] и не только со [m]Скелетами[/m], но никакой точной закономерности в подобных "ошибках" пока не выявлено.
	</p>
	<h2 id="ai.8">Движение по полю боя</h2>
	<p>
		[t]Движение существ по полю боя под управлением ИИ обусловлено рядом алгоритмов. Часть из них рассмотрена в статье "<a href="#5.7">[s]Поведение ИИ в бою[/s]</a>". Здесь мы рассмотрим случай, когда ИИ принимает решение атаковать существо и вопрос состоит только в том, с какого гекса нанести атаку. В расчет не принимаются условия "блока" стрелков и опасности ударов со стороны других существ.<br><br>
		[t]Первое, чем руководствуется ИИ - количество клеток, которое ему нужно пройти до цели. Если существо-цель находится в радиусе атаки ИИ, он предпочтет атаковать его, переместившись на минимальное количество гексов. Однако, что происходит, когда ИИ может ударить с разных сторон пройдя одинаковое количество гексов? Здесь в ИИ заложена схема, определяющая приоритет гексов, с которых можно нанести атаку. Чем выше показатель, тем выше приоритет.<br><br>
		[t]В случае двухгексовых юнитов, которые являются целью атаки, приоритет клеток зависит от стороны нападающего (кто навязал бой, а кто обороняется - это влияет на разворот существ на поле боя)${!m?'':'; (верхний рисунок)'}.
	</p>
	<div class="${!m?'block-img':'picture'}"><img class="img-${!m?'two-thirds':'full-screen'}" data-src="images/storypictures/priority.png" alt="Приоритеты атаки"></div>
	<div class="${!m?'block-img':'picture'}"><img class="img-${!m?'two-thirds':'full-screen'}" data-src="images/storypictures/movement.png" alt="Передвижение ИИ"></div>
	<p>
		[t]Также встает вопрос о том, по какому маршруту пойдет существо под управлением ИИ. Это очень полезно учитывать при использовании таких заклинаний как [m]Минное поле[/m] или [m]Стена огня[/m]${!m?'':'; (нижний рисунок)'}.<br><br>
		[t]&bull; Когда ближайшая клетка для атаки одна и находится на прямой линии (не нужно совершать поворотов), ИИ идет по прямой.<br>
		[t]&bull; Если существо идет вниз-влево, то оно старается сначала идти по диагонали, остаток по горизонтали.<br>
		[t]&bull; Если существо идет вверх-влево, то оно идет сперва по прямой, остаток по диагонали.<br>
		[t]&bull; Если существо идет вниз-вправо, то оно сначало идет по горизонтали, и остаток по прямой вниз.<br>
		[t]&bull; Если существо идет вверх-вправо, то оно сначало идет по прямой вверх, и остаток по горизонтали.<br>
		[t]&bull; Если двигаться нужно вверх или вниз, то существо сначала продвинется вверх-направо / вниз-направо, а остаток вверх-налево / вниз-налево.
	</p>
	`},
	{id: 'growth', text: `
	<h1>Прирост существ</h1>
	<h2 id="growth.1">Базовый прирост существ в городах</h2>
	<p>
		<img class="story-img img-in-text-l" data-src="images/artifacts/statueoflegion.jpg" alt="Прирост существ" height="100">
		[t]Параметр базовый прирост [s]G(bas)[/s] обозначает количество существ которое приходит в город в начале каждой недели (при построенном генераторе существа) без учета дополнительных строений, артефактов, внешних жилищ и [s]Храма Грааля[/s]. Прирост существ не изменяется при постройке улучшенной версии строения для покупки существа; фактически улучшенная версия постройки позволяет покупать то же количество существ, но улучшенных.<br><br>
		[t]На прирост существ в городе влияют:<br><br>
		[t]1.1 Дополнительные строения в городе:<br><br>
		[t]&bull; [s]Цитадель[/s] ([s]+50%[/s] к базовому приросту (округление вниз))<br>
		[t]&bull; [s]Замок[/s] ([s]+50%[/s] к базовому приросту)<br><br>
		[t]1.2 Особые строения:<br><br>
		[t][s]Замок[/s]<br>
		[t]&bull; Бастион грифонов (+3 к приросту [m]Грифонов[/m])<br>
		[t][s]Оплот[/s]<br>
		[t]&bull; Гильдия горняков (+4 к приросту [m]Гномов[/m])<br>
		[t]&bull; Побеги дендроидов (+2 к приросту [m]Дендроидов[/m])<br>
		[t][s]Башня[/s]<br>
		[t]&bull; Крылья ваятеля (+4 к приросту [m]Каменных горгулий[/m])<br>
		[t][s]Некрополис[/s]<br>
		[t]&bull; Разрытые могилы (+6 к приросту [m]Скелетов[/m])<br>
		[t][s]Темница[/s]<br>
		[t]&bull; Грибные кольца (+7 к приросту [m]Троглодитов[/m])<br>
		[t][s]Инферно[/s]<br>
		[t]&bull; Инкубатор (+8 к приросту [m]Бесов[/m])<br>
		[t]&bull; Клетки (+3 к приросту [m]Адских гончих[/m])<br>
		[t][s]Крепость[/s]<br>
		[t]&bull; Квартира капитана (+6 к приросту [m]Гноллов[/m])<br>
		[t][s]Цитадель[/s]<br>
		[t]&bull; Столовая (+8 к приросту [m]Гоблинов[/m])<br>
		[t][s]Сопряжение[/s]<br>
		[t]&bull; Сад жизни (+10 к приросту [m]Пикси[/m])<br>
		[t]&bull; Погребальная урна (+1 к приросту [m]Огненных птиц[/m])<br>
		[t][s]Причал[/s]<br>
		[t]&bull; Кабак (+4 к приросту [m]Матросов[/m])<br>
		[t]&bull; Насест (+3 к приросту [m]Духов океана[/m])<br><br>
		[t]2. Захваченные внешние жилища (во всех городах увеличивают прирост существ того же типа на 1)<br><br>
		[t]3.1 Артефакты легиона (Герой с указанными ниже артефактами должен находиться в замке (можно находиться как внутри замка, так и на позиции героя-гостя) на конец 7 дня недели, чтобы бонус артефактов подействовал. Одинаковые артефакты не дают дополнительного эффекта в одном замке)<br><br>
		[t]&bull; [m]Ноги легиона[/m] (Увеличивают прирост существ 2 уровня на 5)<br>
		[t]&bull; [m]Поясница легиона[/m] (Увеличивают прирост существ 3 уровня на 4)<br>
		[t]&bull; [m]Туловище легиона[/m] (Увеличивают прирост существ 4 уровня на 3)<br>
		[t]&bull; [m]Руки легиона[/m] (Увеличивают прирост существ 5 уровня на 2)<br>
		[t]&bull; [m]Голова легиона[/m] (Увеличивают прирост существ 6 уровня на 1)<br><br>
		[t]3.2 [m]Статуя Легиона[/m] (Повышает прирост всех существ на [s]50%[/s], с учетом базового прироста и дополнительного прироста от наличия [s]Цитадели[/s] или [s]Замка[/s], во всех городах игрока. Округление вниз. Герой с артефактом не обязан быть в городе на конец седьмого дня недели. Однако находясь в городе прирост будет повышен, благодаря действию составляющих [m]Статуи легиона[/m])<br><br>
		[t]4. [m]Грааль[/m] ([s]Храм Грааля[/s] повышает текущий прирост всех существ, с учетом всех дополнительных приростов, на [s]50%[/s] в городе, где он установлен)<br><br>
		[t]Формула расчета суммарного прироста [s]G(sum)[/s] выглядит следующим образом:<br><br>
		[t][s]G(sum) = {G(bas) * B * S + L + A + O} * Gr[/s], где [s]B = 1.5[/s], если в городе построена [s]Цитадель[/s] (округление вниз) или [s]= 2[/s], если в городе построен [s]Замок[/s];<br><br>
		[t][s]S = 1[/s] без [m]Статуи легиона[/m] или [s]= 1.5[/s], если у героя экипирована [m]Статуя легиона[/m];<br>
		[t][s]L = 0[/s], если у героя(ев) в замке нет частей легиона, [s]= 5[/s], если есть [m]Ноги легиона[/m] (при расчете прироста существ 2 уровня), [s]= 4[/s], если есть [m]Поясница легиона[/m] (при расчете прироста существ 3 уровня), [s]= 3[/s], если есть [m]Туловище легиона[/m] (при расчете прироста существ 4 уровня), [s]= 2[/s], если есть [m]Руки легиона[/m] (при расчете прироста существ 5 уровня), [s]= 1[/s], если есть [m]Голова легиона[/m] (при расчете прироста существ 1 уровня);<br>
		[t][s]A[/s] = приросту существ от дополнительных строений в городе;<br>
		[t][s]O[/s] = количеству захваченных внешних жилищ рассчитываемого существа;<br>
		[t][s]Gr = 1[/s], если в городе нет [s]Храма Грааля[/s] и [s]= 1.5[/s], если [s]Храм Грааля[/s] построен в городе, где ведется расчет.<br><br>
		[t]5. Неделя [s]Чумы[/s]: Каждую первую неделю месяца в игре может с вероятностью [s]10%[/s] наступить неделя [s]Чумы[/s]. В начале такой недели ни в одном городе и внешнем жилище не появляются новые существа для покупки, более того, количество накопленных в этих местах существ сокращается вдвое. При чем, если в жилище было накоплено 5 существ, то после наступления недели [s]Чумы[/s] в нем остентся 2, то есть округление происходит в меньшую сторону.<br><br>
		[t](В игре при зажатии [s]ЛКМ[/s] на иконке существа в нижней левой части экрана внутри города можно увидеть расчет прироста в числовом значении для отдельно взятого существа)
	</p>
	<h2 id="growth.2">Недели и месяцы существ</h2>
	<p>
		[t]Каждая неделя и месяц кроме первых знаменуются определенным "[s]существом[/s]". Если в настройках карты или шаблона включены недели и месяцы [s]существ / чумы[/s], с вероятностью [s]75%[/s] (c вероятностью [s]100%[/s] если они выключены) новой неделе будет присвоено название одного из следующих неигровых существ (эти недели никак не влияют на игровой процесс): [s]Муравьед (Aardvark)[/s], [s]Барсук (Babger)[/s], [s]Кондор (Condor)[/s], [s]Собака (Dog)[/s], [s]Орел (Eagle)[/s], [s]Суслик (Gopher)[/s], [s]Дикобраз (Hedgehog)[/s], [s]Ящерица (Lizard)[/s], [s]Мангуст (Mongoose)[/s], [s]Кролик (Rabbit)[/s], [s]Крыса (Rat)[/s], [s]Ворон (Raven)[/s], [s]Белка (Squirrel)[/s], [s]Черепаха (Tortoise)[/s], [s]Ласка (Weasel)[/s].<br><br>
		[t]С вероятностью [s]25%[/s] неделя примет название городского существа. В случае, если настала неделя городского существа (этим существом может быть любое существо из любого города в игре, однако, чем выше его уровень, тем ниже вероятность выпадения - чаще всего неделям присваиваются названия существ самых низких уровней), в каждом из отстроенных жилищ соответствующих этому существу прирост увеличивается на 5 единиц. Если неделе присвоилось название улучшенного существа, а в городе не отстроено улучшенное жилище, то прироста не произойдет; И наоборот, если неделе присвоено название неулучшенного существа, а в замке отстроен улучшенный генератор существ, дополнительного прироста не будет.<br><br>
		[t]Отдельно стоит упомянуть [s]Инферно[/s], ведь в случае установки [m]Грааля[/m] ([s]Бог огня[/s]) все "[s]Недели существ[/s]" отныне становятся "[s]Неделями Беса[/s]". Дополнительный прирост [m]Бесов[/m] и [m]Чертей[/m] составляет 15 единиц, не важно улучшен [s]Котел бесов[/s] в городе или нет. Также не имеет значения, кто из игроков возведет это строение - действие распространяется на всех участников игры (в том числе и на компьютерных игроков). Помимо "[s]Недели Беса[/s]" все "[s]Месяцы существ[/s]" отныне становятся "[s]Месяцами Беса[/s]" (дополнительный прирост также составляет 15 единиц в неделю).<br><br>
		[t]Каждый новый месяц также получает название существа, однако эффект отличается от недели существа. С вероятностью [s]50%[/s] новому месяцу будет присвоено одного из следующих неигровых существ: [s]Муравей (Ant)[/s], [s]Паук (Spider)[/s], [s]Бабочка (Butterfly)[/s], [s]Саранча (Locust)[/s], [s]Кузнечик (Grasshopper)[/s], [s]Шершень (Hornet)[/s], [s]Шмель (Bubmlebee)[/s], [s]Жук (Beetle)[/s], [s]Божья коровка (Ladybug)[/s], или [s]Земляной червь (Earthworm)[/s]. С вероятностью [s]10%[/s] месяц станет месяцем [s]Чумы[/s] и с вероятностью [s]40%[/s] месяцем городского существа (вероятность выпадения каждого из существ одинаковая): [m]Грифон[/m], [m]Пегас[/m], [m]Привидение[/m], [m]Гарпия[/m], [m]Ящер[/m], [m]Змий[/m], [m]Гог[/m], [m]Кентавр[/m], [m]Наездник на волке[/m], [m]Троглодит[/m], [m]Гремлин[/m], [m]Хобгоблин[/m], [m]Фея[/m], [m]Матрос[/m] или [m]Дух океана[/m].<br><br>
		[t]В случае, если наступает месяц городского существа, происходят следующие изменения:<br><br>
		[t]&bull; В городских жилищах происходит удвоение соответствующих невыкупленных существ (сначала расчитывается недельный прирост и удваивается уже итоговое количество). Работает тот же принцип, что и с неделями существ: прирост различает улучшенные и неулучшенные генераторы существ в городе.<br>
		[t]&bull; На каждой свободной клетке карты, не являющейся преградой, объектом или водой, с шансом [s]0,5%[/s] появляется соответствующий отряд существ. Количество появляющихся отрядов не ограничено и теоретически на карте может не появиться ни одного существа, как и наоборот, существа могут появиться на всех клетках карты сразу. При создании пользовательской карты важно учитывать, что при включении недель и месяцев [s]существ / чумы[/s], существа могут появиться не в самых подходящих местах и нарушить задуманное автором прохождение. Например, существует единственная точка для высадки с корабля на сушу и именно на этой точке может появиться существо и высадка станет невозможной.<br><br>
		[t]Агрессивность появляющихся отрядов случайна и равновероятна, а количество существ определяется случайно в определенных рамках, но оно всегда четное:
	</p>
	<table ${!m?'class="compress"':''}>
		<tr> <th rowspan="2">Существо</th> <th colspan="2">Кол-во существ в появившемся отряде</th> </tr>
		<tr> <th>Минимум</th> <th>Максимум</th> </tr>
		<tr> <td>Грифон</td> <td>24</td> <td>50</td> </tr>
		<tr> <td>Пегас</td> <td>20</td> <td>40</td> </tr>
		<tr> <td>Призрак</td> <td>24</td> <td>50</td> </tr>
		<tr> <td>Гарпия</td> <td>32</td> <td>60</td> </tr>
		<tr> <td>Ящер</td> <td>32</td> <td>60</td> </tr>
		<tr> <td>Змий</td> <td>24</td> <td>50</td> </tr>
		<tr> <td>Гог</td> <td>32</td> <td>60</td> </tr>
		<tr> <td>Кентавр</td> <td>40</td> <td>100</td> </tr>
		<tr> <td>Наездник на волке</td> <td>32</td> <td>60</td> </tr>
		<tr> <td>Троглодит</td> <td>40</td> <td>100</td> </tr>
		<tr> <td>Гремлин</td> <td>40</td> <td>100</td> </tr>
		<tr> <td>Хобгоблин</td> <td>40</td> <td>60</td> </tr>
		<tr> <td>Фея</td> <td>40</td> <td>60</td> </tr>
		<tr> <td>Матрос</td> <td>32</td> <td>60</td> </tr>
		<tr> <td>Дух океана</td> <td>20</td> <td>40</td> </tr>
		<tr> <td>Бес (Бог огня)</td> <td>40</td> <td>100</td> </tr>
	</table>
	<p>
		[t]Наступление [s]Месяца Беса[/s] возможно только после установки [m]Грааля[/m] в [s]Инферно[/s].
	</p>
	`},
	{id: 'status', text: `
	<h1>Статус юнита</h1>
	<p>
		[t]Параметр статус отражает тип существа. Всего можно выделить 6 статусов существ: [s]живой[/s], [s]нежить[/s], [s]элементаль[/s], [s]голем[/s], [s]горгулья[/s] и [s]боевая машина[/s]. Каждый тип существ имеет свои уникальные особенности, которые позволяют выделить их в группы:<br><br>
		[t]&bull; [s]Нежить[/s]:  всегда имеет нейтральную мораль; защищена от заклинаний [m]Проклятие[/m], [m]Благословление[/m], [m]Печаль[/m], [m]Радость[/m], [m]Слепота[/m], [m]Волна смерти[/m], [m]Гипноз[/m], [m]Забывчивость[/m], [m]Берсерк[/m], [m]Бешенство[/m], [m]Жертва[/m], [m]Воскрешение[/m], а также невосприимчива к таким эффектам как [s]Болезнь[/s], [s]Облако смерти[/s], [s]Старость[/s], [s]Поднятие демонов[/s], [s]Смертельный взгляд[/s], [s]Яд[/s], [s]Вампиризм[/s] и [s]Страх[/s]; восприимчива к заклинаниям [m]Упокоить нежить[/m] и [m]Оживление мертвецов[/m].<br><br>
		[t]&bull; [s]Элементали[/s]: всегда имеют нейтральную мораль; защищены от заклинаний [m]Слепота[/m], [m]Гипноз[/m], [m]Забывчивость[/m], [m]Печаль[/m], [m]Радость[/m], [m]Берсерк[/m], [m]Бешенство[/m], [m]Жертва[/m], [m]Воскрешение[/m], [m]Оживление мертвецов[/m], [m]Упокоить нежить[/m], а также невосприимчивы к таким эффектам как [s]Болезнь[/s], [s]Облако смерти[/s], [s]Старость[/s], [s]Поднятие демонов[/s], [s]Смертельный взгляд[/s], [s]Яд[/s], [s]Вампиризм[/s] и [s]Страх[/s].<br><br>
		[t]&bull; [s]Големы[/s]: всегда имеют нейтральную мораль; защищены от заклинаний [m]Слепота[/m], [m]Гипноз[/m], [m]Забывчивость[/m] (хоть и не могут стрелять), [m]Печаль[/m], [m]Радость[/m], [m]Берсерк[/m],  [m]Бешенство[/m], [m]Жертва[/m], [m]Воскрешение[/m], [m]Оживление мертвецов[/m], [m]Упокоить нежить[/m], а также невосприимчивы к таким эффектам как [s]Болезнь[/s], [s]Облако смерти[/s], [s]Старость[/s], [s]Поднятие демонов[/s], [s]Смертельный взгляд[/s], [s]Яд[/s], [s]Вампиризм[/s] и [s]Страх[/s].<br><br>
		[t]&bull; [s]Горгульи[/s]: защищены от заклинаний [m]Жертва[/m], [m]Воскрешение[/m], [m]Оживление мертвецов[/m], [m]Упокоить нежить[/m], а также невосприимчивы к таким эффектам как [s]Болезнь[/s], [s]Облако смерти[/s], [s]Старость[/s], [s]Поднятие демонов[/s], [s]Смертельный взгляд[/s], [s]Яд[/s], [s]Вампиризм[/s] и [s]Страх[/s].<br><br>
		[t]&bull; [s]Боевые машины[/s]: всегда имеют нейтральную мораль; не отвечают на атаки вражеских существ; параметры зависят от навыков героя (подробнее см. в статье <a href="#15">[s]"Боевые машины"[/s]</a>); защищены от заклинаний [m]Ускорение[/m], [m]Медлительность[/m], [m]Проклятие[/m], [m]Благословление[/m], [m]Палач[/m] (не относится к [m]Баллисте[/m] и [m]Пушке[/m]), [m]Удача[/m] (не относится к [m]Баллисте[/m] и [m]Пушке[/m]), [m]Слепота[/m], [m]Волна смерти[/m], [m]Гипноз[/m], [m]Забывчивость[/m], [m]Печаль[/m], [m]Радость[/m], [m]Клон[/m], [m]Телепорт[/m], [m]Контрудар[/m], [m]Берсерк[/m], [m]Бешенство[/m], [m]Жертва[/m], [m]Воскрешение[/m], [m]Взрыв[/m], [m]Упокоить нежить[/m], [m]Оживление мертвецов[/m], невосприимчивы к таким эффектам как [s]Болезнь[/s], [s]Облако смерти[/s], [s]Старость[/s], [s]Паралич[/s], [s]Окаменение[/s], [s]Поднятие демонов[/s], [s]Смертельный взгляд[/s], [s]Яд[/s], [s]Вампиризм[/s] и [s]Страх[/s].<br><br>
		[t]&bull; [s]Живые[/s]: защищены от заклинаний [m]Упокоить нежить[/m] и [m]Оживление мертвецов[/m]; восприимчивы ко всем остальным заклинаниям.
	</p>
	`},
	{id: 'land', text: `
	<h1>Родная земля</h1>
	<p${!m?' style="min-height: 410px"':''}>
		<img class="story-img img-in-text-r${!m?'':' img-half-screen'}" data-src="images/storypictures/lands.png" alt="Земли"${!m?' height="400" style="box-shadow: none"':''}>
		[t]Параметр Родная земля определяет, какой тип земли является родным для существа — на каком типе земли это существо будет получать бонус. Нейтральные существа (существа без города) не имеют родной земли — ни на одной из типов поверхности они не будут получать бонус родной земли. За существами разных городов закреплена своя земля:<br><br>
		[t][s]Замок[/s] — трава<br>
		[t][s]Оплот[/s] — трава<br>
		[t][s]Башня[/s] — снег<br>
		[t][s]Крепость[/s] — болото<br>
		[t][s]Цитадель[/s] — камни<br>
		[t][s]Инферно[/s] — лава<br>
		[t][s]Некрополис[/s] — грязь<br>
		[t][s]Темница[/s] — подземелье<br>
		[t][s]Сопряжение[/s] — высокогорье<br>
		[t][s]Причал[/s] — болото<br>
		[t][s]Фабрика[/s] — пустоши<br><br>
		[t]На родной земле существа получают +1 к [s]Атаке[/s], [s]Защите[/s] и [s]Скорости[/s]. Кроме того на родной земле существо видит месторасположение вражеских [m]Мин[/m] и [m]Зыбучих песков[/m] (пока существо видит [m]Зыбучие пески[/m] оно обходит их как если бы они являлись непроходимым препятствием; исключением являются ситуации, когда конечная точка маршрута находится в [m]Зыбучих песках[/m], тогда существо наступает в него и останавливается), которые на другой земле скрыты для него до тех пор, пока он на них не наступит ([m]Мины[/m] и [m]Зыбучие пески[/m] остаются видимыми в бою даже в том случае, если существо, находящееся на родной земле, погибло).
	</p$>
	`},
	{id: 'ctrstrike', text: `
	<h1>Контратака</h1>
	<p>
		<img class="story-${!m?'png-':''}img img-in-text-l" data-src="images/spells/counterstrike.png" alt="Контрудар" height="100">
		[t]В большинстве случаев существа при получении удара в ближнем бою (на прожиг дракона отвечает только существо стоящее впритык к дракону) наносят ответный удар — контратаку (ответку) (не более одного раза за раунд). Сила контратаки расчитывается по обычной формуле расчета урона. Однако есть несколько исключений:<br><br>
		[t]&bull; [s]Боевые машины[/s] не наносят ответный удар.<br><br>
		[t]&bull; [m]Грифоны[/m] способны отвечать на две атаки за один раунд. [m]Королевские грифоны[/m] и [m]Фанграмы[/m] отвечают на неограниченное число атак, т. е. сколько бы атак им не нанесли, они проведут контрудар на каждую из них.<br><br>
		[t]&bull; [m]Крестоносцы[/m] и [m]Налетчики[/m] атакуют дважды: первый раз при атаке и второй после получения ответного удара. Однако, если у противника снята ответка, то эти существа сразу наносят два удара.<br><br>
		[t]Ряд существ способен бить без «ответки», т. е. на их удары враги не отвечают. К таким существам относятся: [m]Наги[/m], [m]Королевы наг[/m], [m]Церберы[/m], [m]Дьяволы[/m], [m]Архидьяволы[/m], [m]Вампиры[/m], [m]Лорды вампиров[/m], [m]Гарпии-ведьмы[/m], [m]Гидры[/m], [m]Гидры хаоса[/m], [m]Феи[/m], [m]Психические элементали[/m], [m]Элементали магии[/m], [m]Корсары[/m] и [m]Морские волки[/m].<br><br>
		[t]Некоторые существа способны наложить на врага контролирующее (парализующее заклинание), которое лишит его возможности ходить и соответственно наносить ответный удар на атаку этого существа. К таким существам относятся: [m]Единороги[/m] (ослепление), [m]Боевые единороги[/m] (ослепление), [m]Медузы[/m] (окаменение), [m]Медузы-Королевы[/m] (окаменение), [m]Скорпикоры[/m] (паралич), [m]Василиски[/m] (окаменение), [m]Великие василиски[/m] (окаменение), [m]Фангармы[/m] (гипноз). Однако при снятии эффекта контроля новой атакой, существа наносят контрудар (об особенностях эффектов контроля см. статьи о <a href="#14">[s]Способностях[/s]</a> каждого из вышеперечисленных существ).<br><br>
		[t]Если после нанесения первой атаки [m]Крестоносец[/m] или [m]Налетчик[/m] получает ответную атаку от [m]Единорогов[/m], [m]Медуз[/m], [m]Василисков[/m] или [m]Скорпикор[/m] с эффектом контроля, то вторая атака не проводится.<br><br>
		[t]Заклинания [m]Ослепление[/m] и [m]Контрудар[/m] тоже влияют на работу контратаки (подробнее см. статью <a href="#16">[s]"Механика заклинаний"[/s]</a>)<br><br>
		[t]Так как большая часть существ может за один раунд ответить только на одну атаку, часто используется прием «снятия ответки». Для этого нужно сначала нанести существу урон более живучим существом (которое не погибнет от контратаки) или единичкой (подробнее см. статью [s]"Единички"[/s]) а уже потом атаковать это же существо другими бойцами. Таким образом наше живучее существо или единичка безболезненно впитает урон от ответной атаки, а другие существа смогут безопасно его атаковать.<br><br>
		[t]Частой ошибкой при «снятии ответки» является то, что игрок забывает о том, что этот прием работает только на один раунд: снимают ответку в конце раунда а на следующий раунд забывают о том, что существо может нанести ответный удар вновь.
	</p>
	`},
	{id: 'hatred', text: `
	<h1>Ненависть</h1>
	<p${!m?' style="min-height: 277px"':''}>
		${!m?'<img class="story-img img-in-text-r" data-src="images/storypictures/hatered.jpg" alt="Ненависть" width="400">':''}
		[t]Есть ряд существ, которые наносят [s]150%[/s] урона (рассчитывается от базового урона без учета дополнительных модификаторов) своим «врагам». Ниже приведены эти враждующие существа.<br><br>
		[t]&bull; [m]Ангел[/m] ([m]Архангел[/m]) — [m]Дьявол[/m] ([m]Архидьявол[/m]);<br>
		[t]&bull; [m]Джинн[/m] ([m]Верховный джинн[/m]) — [m]Ифрит[/m] ([m]Ифрит-Султан[/m]);<br>
		[t]&bull; [m]Титан[/m] — [m]Черный дракон[/m].
	</p>
	${m?'<div class="picture"><img data-src="images/storypictures/hatered.jpg" alt="Ненависть" height="175"></div>':''}
	`},
	{id: 'neutralize', text: `
	<h1>Нейтрализация заклинаний</h1>
	<p${!m?' style="min-height: 260px"':''}>
		${!m?'<img class="story-img img-in-text-r" data-src="images/storypictures/reflection.jpg" alt="Нейтрализация" height="250">':''}
		[t][m]Гномы[/m] и [m]Боевые гномы[/m] имеют шанс нейтрализовать действие вражеского заклинания ([s]20%[/s] и [s]40%[/s] соответственно), а [m]Единороги[/m] и [m]Боевые единороги[/m] увеличивают шанс нейтрализации у рядом стоящих существ на [s]20%[/s] (от базового, т. е. рассчитывается шанс нейтрализации без ауры и к этому значению прибавляется [s]20%[/s]) . Кроме того, на шанс нейтрализовать действие вражеского заклинания влияют:<br><br>
		[t]&bull; Артефакты: [m]Колье нейтрализации[/m] ([s]5%[/s]), [m]Одеяние равновесия[/m] ([s]10%[/s]), [m]Сапоги противодействия[/m] ([s]15%[/s]);<br><br>
		[t]&bull; Вторичный навык [s]Сопротивление[/s] ([s]5%-10%-20%[/s]);<br><br>
		[t]&bull; [m]Торгрим[/m] (специализация [s]Сопротивление[/s]. Подробнее см. страницу <a href="heroes-page.html">[s]"Герои"[/s]</a>).<br><br>
		[t]Шанс нейтрализации из разных источников суммируется (кроме ауры [m]Единорогов[/m]), за счет чего можно добиться полной неуязвимости к действию вражеских заклинаний. Однако артефакт [m]Сфера уязвимости[/m] полностью нивелирует этот бонус.
	</p>
	${m?'<div class="picture"><img data-src="images/storypictures/reflection.jpg" alt="Нейтрализация" height="175"></div>':''}
	`},
	{id: 'absorption', text: `
	<h1>Поглощение урона от магии</h1>
	<p>
		[t]Все [s]Големы[/s] поглощают часть урона от магии. Каменные — [s]50%[/s], Железные — [s]75%[/s], Стальные — [s]80%[/s], Золотые — [s]85%[/s], Алмазные — [s]95%[/s].  Так для примера заклинание [m]Метеоритный дождь[/m] (с [s]Силой магии = 4[/s]) нанесет [m]Алмазному голему[/m] не 200 урона, как другим существам, а только 10. (Поглощение работает только на заклинания наносящие урон, т. е. урон от заклинаний будет снижен на соответствующее значение, однако все другие эффекты никак не будут ослаблены).
	</p>
	`},
	{id: 'firebreath', text: `
	<h1>Огненное дыхание и Разворот перед атакой</h1>
	<p${!m?' style="min-height: 260px"':''}>
		${!m?'<img class="story-img img-in-text-r" data-src="images/storypictures/breath.jpg" alt="Драконье дыхание" height="250">':''}
		[t]В целом разворот существ на поле боя не очень важен для большинства существ. Он никак не влияет на наносимый урон, не влияет на приоритет атаки и маршрут движения, однако все меняется, когда речь идет о драконах, а точнее о существах, имеющих [s]Огненное дыхание[/s].
		${!m?'<br><br>':'</p><div class="picture"><img data-src="images/storypictures/breath.jpg" alt="Драконье дыхание" height="175"></div><p>'}
		[t][s]Огненное дыхание[/s] - это способность наносить урон сразу по двум гексам (в простонародье - "[s]прожиг[/s]"): по гексу, на который приходится атака и по следующему за ним по направлению атаки. Этой способностью обладают все [m]Драконы[/m] (кроме [m]Кристальных[/m], [m]Сказочных[/m], [m]Костяных[/m] и [m]Призрачных[/m]) а также [m]Огненные птицы[/m] и [m]Фениксы[/m].<br><br>
		[t]Почему же в их случае важно знать о развороте перед атакой? Давайте разберемся.<br><br>
		[t]Сам по себе разворот представляет собой визуальный разворот существа головой направо (если изначально находится на обороняющейся стороне и смотрит налево) или налево (если изначально находится на атакующей стороне и смотрит направо) и атаку, после чего существо разворачивается в свое изначальное положение. Важно, что разворот меняет и направление атаки, в случае драконов "[s]Огненное дыхание[/s]" идет из гекса, где находится их голова.<br><br>
		[t]Одногексовые существа имеют два типа атаки: "основная" и "с разворота". Двухгексовые существа имеют также "дополнительную" атаку. Если существо не может нанести ни "основную", ни "дополнительную" атаку, то оно бьет "с разворота".
	</p>
	${!m?'<p style="min-height: 260px">':''}
		${!m?'<img class="story-png-img img-in-text-l" data-src="images/storypictures/attacktypes_1.png" alt="Типы атак" height="250">':''}
		${m?'<div class="picture"><img data-src="images/storypictures/attacktypes_1.png" alt="Типы атак" height="250"></div><p>':''}
		[t]На иллюстрации${!m?'':' выше'} наглядно продемонстрированы все виды атак для дракона, который атакует одногексовое существо:<br><br>
		[t]&bull; Атаки спереди ([s]1[/s]), сверху-слева ([s]2[/s]) и снизу-слева ([s]3[/s]) являются основными, и дыхание наносит урон существу на клетке за целью по направлению удара: [s]А, Б[/s] и [s]В[/s] соответственно.<br><br>
		[t]&bull; Атаки сзади ([s]4[/s]), сверху-справа ([s]5[/s]) и снизу-справа ([s]6[/s]) являются атаками с разворота, и дыхание наносит урон существу на клетке за целью по направлению удара: [s]Г, Д[/s] и [s]Е[/s] соответственно.<br><br>
		[t]&bull; Атаки сверху ([s]7[/s]) и снизу ([s]8[/s]) являются дополнительными атаками, и дыхание наносит урон существа на клетке [s]Д[/s] или [s]Е[/s] соответственно.<br><br>
		[t]&bull; Если наш дракон будет изначально находиться не "лицом" к цели ([s]желтый[/s]), то он развернется перед перемещением, и атаки [s]4, 5[/s] и [s]6[/s] будут для него основными, атаки [s]1, 2[/s] и [s]3[/s] будут произведены с разворота, а атаки [s]7[/s] и [s]8[/s] будут дополнительными и дыхание нанесет урон по клеткам [s]Б[/s] и [s]В[/s] соответственно.
	</p>
	${!m?'<p style="min-height: 260px">':''}
		${!m?'<img class="story-png-img img-in-text-l" data-src="images/storypictures/attacktypes_2.png" alt="Типы атак" height="250">':''}
		${m?'<div class="picture"><img data-src="images/storypictures/attacktypes_2.png" alt="Типы атак" height="250"></div><p>':''}
		[t]На этой иллюстрации показаны виды атак дракона по двухгексовому существу.<br><br>
		[t]&bull; Атаки спереди ([s]1[/s]), сверху-слева ([s]2[/s]) и снизу-слева ([s]3[/s]) являются основными, аналогично атакам по одногексовому существу. Дыхание при атаке спереди ([s]1[/s]) не срабатывает, т.к. на клетке [s]А[/s] находится задняя часть этого же существа. Дыхание от атак [s]2[/s] и [s]3[/s] наносит урон по клеткам [s]Б[/s] и [s]В[/s] соответственно.<br><br>
		[t]&bull; Атаки сзади ([s]4[/s]), сверху-справа ([s]5[/s]) и снизу-справа ([s]6[/s]) являются атаками с разворота, аналогично атакам по одногексовому существу. Дыхание при атаке сзади ([s]4[/s]) не срабатывает, т.к. на клетке [s]Г[/s] находится задняя часть (атакуемое существо разворачивается при получении удара) этого же существа. Дыхание от атак [s]5[/s] и [s]6[/s] наносит урон по клеткам [s]Б[/s] и [s]В[/s] соответственно.<br><br>
		[t]&bull; При атаке сверху ([s]7[/s]) или снизу ([s]8[/s]) по передней части происходит выбор между основной атакой по клетке [s]А[/s] и дополнительной атакой по клетке [s]Г[/s]. Согласно приоритетам, основная атака имеет преимущество, и в действительности дракон атакует клетку [s]А[/s], а дыхание наносит урон по клетке [s]Д[/s] или [s]Е[/s] соответственно.<br><br>
		[t]&bull; При атаке сверху ([s]9[/s]) или снизу ([s]10[/s]) по задней части происходит выбор между дополнительной атакой по клетке [s]А[/s] и атакой с разворота по клетке [s]Г[/s]. Согласно приоритетам, дополнительная атака имеет преимущество, и в действительности дракон атакует клетку [s]А[/s], а дыхание наносит урон по клетке [s]Б[/s] или [s]В[/s] соответственно.<br><br>
		[t]&bull; При атаке сверху-справа ([s]11[/s]) или снизу-справа ([s]13[/s]) по передней части происходит выбор между дополнительной атакой по клетке [s]А[/s] и атакой с разворота по клетке [s]Г[/s]. Согласно приоритетам, дополнительная атака имеет преимущество, и в действительности дракон атакует клетку [s]А[/s], а дыхание наносит урон по клетке [s]Б[/s] или [s]В[/s] соответственно.<br><br>
		[t]&bull; При атаке сверху-слева ([s]12[/s]) или снизу-слева ([s]14[/s]) по задней части происходит выбор между основной атакой по клетке [s]А[/s] и дополнительной атакой по клетке [s]Г[/s]. Согласно приоритетам, основная атака имеет преимущество, и в действительности дракон атакует клетку [s]А[/s], а дыхание наносит урон по клетке [s]Д[/s] или [s]Е[/s] соответственно.<br><br>
		[t]&bull; Если наш дракон будет изначально находиться не "лицом" к цели ([s]желтый[/s]), то он развернется перед перемещением, и атаки [s]4, 5[/s] и [s]6[/s] будут для него основными, атаки [s]1, 2[/s] и [s]3[/s] будут произведены с разворота, атаки [s]7, 8, 9[/s] и [s]10[/s] будут произведены по клетке [s]Г[/s] с дыханием по клеткам [s]Б, В, Ж[/s] или [s]З[/s] соответственно, атаки [s]11, 12, 13[/s] и [s]14[/s] будут произведены по клетке [s]Г[/s] с дыханием по клеткам [s]Ж[/s] или [s]З[/s] соответственно.
	</p>
	${!m?'<p style="min-height: 260px">':''}
		${!m?'<img class="story-png-img img-in-text-r" data-src="images/storypictures/hitback_1.png" alt="Ответная атака" height="250">':''}
		${m?'<div class="picture"><img data-src="images/storypictures/hitback_1.png" alt="Ответная атака" height="250"></div><p>':''}
		[t]Также двухгексовые существа имеют особые правила ответных атак:<br><br>
		[t][s]Если существо смотрит налево:[/s]<br>
		[t]&bull; Ответ основной атакой:<br><br>
		[t]1. При получении удара по направлению [s]1[/s], дракон ответит в направлении [s]А[/s].<br>
		[t]2. При получении удара по направлению [s]2, 7[/s] или [s]12[/s], дракон ответит в направлении [s]Б[/s].<br>
		[t]3. При получении удара по направлению [s]3, 8[/s] или [s]14[/s], дракон ответит в направлении [s]В[/s].<br><br>
		[t]&bull; Ответ атакой с разворота:<br><br>
		[t]4. При получении удара по направлению [s]4[/s], дракон ответит в направлении [s]Г[/s].<br>
		[t]5. При получении удара по направлению [s]5[/s], дракон ответит в направлении [s]Д[/s].<br>
		[t]6. При получении удара по направлению [s]6[/s], дракон ответит в направлении [s]Е[/s].<br><br>
		[t]&bull; Ответ дополнительной атакой:<br><br>
		[t]7. При получении удара по направлению [s]9[/s] или [s]11[/s], дракон ответит в направлении [s]Ж[/s].<br>
		[t]8. При получении удара по направлению [s]10[/s] или [s]13[/s], дракон ответит в направлении [s]3[/s].
	</p>
	${!m?'<p style="min-height: 260px">':''}
		${!m?'<img class="story-png-img img-in-text-r" data-src="images/storypictures/hitback_2.png" alt="Ответная атака" height="250">':''}
		${m?'<div class="picture"><img data-src="images/storypictures/hitback_2.png" alt="Ответная атака" height="250"></div><p>':''}
		[t][s]Если существо смотрит направо:[/s]<br>
		[t]&bull; Ответ атакой с разворота:<br><br>
		[t]1. При получении удара по направлению [s]1[/s], дракон ответит в направлении [s]А[/s].<br>
		[t]2. При получении удара по направлению [s]2[/s], дракон ответит в направлении [s]Б[/s].<br>
		[t]3. При получении удара по направлению [s]3[/s], дракон ответит в направлении [s]В[/s].<br><br>
		[t]&bull; Ответ основной атакой:<br><br>
		[t]4. При получении удара по направлению [s]4[/s], дракон ответит в направлении [s]Г[/s].<br>
		[t]5. При получении удара по направлению [s]5, 9[/s] или [s]11[/s], дракон ответит в направлении [s]Д[/s].<br>
		[t]6. При получении удара по направлению [s]6, 10[/s] или [s]13[/s], дракон ответит в направлении [s]Е[/s].<br><br>
		[t]&bull; Ответ дополнительной атакой:<br><br>
		[t]7. При получении удара по направлению [s]7[/s] или [s]12[/s], дракон ответит в направлении [s]Ж[/s].<br>
		[t]8. При получении удара по направлению [s]8[/s] или [s]14[/s], дракон ответит в направлении [s]З[/s].
	</p>
	<div class="${!m?'block-img':'picture slider'}"><img class="img-${!m?'full':'double'}-screen" data-src="images/storypictures/direction.png" alt="Направления атаки"></div>
	<p>
		[t]На левой части изображения показаны существа противника ([s]красные и бордовые гексы[/s]) и направления атак, по которым урон будет нанесен обоим существам. (В случае обороны изображение нужно отзеркалить по горизонтали.)<br><br>
		[t]Обратите внимание, что в некоторых случаях "дополнительные" атаки не "прожигают" (вертикальные клинки в некоторых случаях отсутствуют - об этом далее)<br><br>
		[t]На правой части изображения показаны направления атак при которых можно заставить дракона нанести урон своему существу при нанесении ответного удара. ([s]Красные гексы[/s] - вражеский дракон, [s]бордовые гексы[/s] - вражеские отряды, которые можно прожечь при ответном ударе; [s]белые клинки[/s] - направления атаки вашего двухгексового существа, при которой удастся использовать вражеский прожиг против его же существ; [s]желтые клинки[/s] - направления атаки Вашего одногексового существа.)<br><br>
		[t]На схеме существует только две ситуации (позиции без клинков), при которых невозможно заставить вражеский отряд прожечь своего же [s]Огненным дыханием[/s].<br><br>
		[t]Стоит учитывать, что при расстановке и существ и атаках компьютерный ИИ всегда учитывает вероятность прожига и очень не любит, когда его существ бьют свои же. Поэтому такое удается очень редко и как правило тогда, когда ИИ не жалко нанести по себе урон. Но это очень редкие случаи и без особой выгоды ИИ не станет подставляться под прожиг нашего дракона или под прожиг своих войск ответным ударом. Отчасти на этом принципе основана техника захвата [s]Утопий драконов[/s], когда драконы бояться прожечь друг друга и не могут одновременно атаковать одно существо.
	${!m?'</p><p style="min-height: 260px"><img class="story-png-img img-in-text-r" data-src="images/storypictures/fakeburn.png" alt="Фейк-прожиг" height="250">':'<br><br>'}
		[t]А дальше творится магия. Техника, о которой пойдет речь, называется "[s]Фейк-прожигом[/s]".<br><br>
		[t]Ее суть заключается в том, что ИИ не знает о том, что дополнительная атака в некоторых ситуациях не активирует прожиг. Это можно заметить на вышеобозначенных схемах, где существам нельзя нанести урон прожигом, если бить их дополнительной атакой. Таким образом, если правильно расставить свои войска, то дракон, используя "дополнительную" атаку, попробует прожечь наши войска, но нанесет урон только одному существу.<br><br>
		[t]Наиболее показателен пример битвы сотни [m]Копейщиков[/m] против одного дракона: Если сформировать один ударный стак [m]Копейщиков[/m] (должен находиться в самом правом слоте), а все остальные слоты войска занять "единичками" тех же [m]Копейщиков[/m], с помощью [s]Фэйк прожига[/s] можно значительно сократить потери.<br><br>
		[t]Если просто снимать "ответки" единичками и бить ударным стеком, мы избежим урона от "ответки", но каждый новый раунд дракон будет бить по нашему ударному стаку [m]Копейщиков[/m], тем самым его разуплотняя. ИИ понимает, что получит большое количество урона от ударного стака, но убивать единички ему крайне невыгодно.<br><br>
		[t]А что, если дать ему прожечь свой ударный стак через единичку? Дракон не получает урон от ответки и наносит урон и единичке, и ударному стеку - отлично! Вот и ИИ рассчитывает так же. Наша же задача поставить наших [m]Копейщиков[/m] так, чтобы дракон совершил дополнительную атаку, думая, что сможет нас прожечь, а по факту убьет лишь единичку, оставив наш ударный стак в целости и сохранности. Повторять до тех пор, пока дракон не умрет.<br><br>
		[t]Важно, чтобы дракон не совершил атаку "с разворота" или "основную" атаку. В таком случае он не промахнется.<br><br>
		[t]${!m?'Справа изображение, на котором':'На изображении ниже'} показан пример расстановки, при которой дракон совершит "[s]Фэйк-прожиг[/s]".
	</p>
	${m?'<div class="picture"><img data-src="images/storypictures/fakeburn.png" alt="Фейк-прожиг" height="300"></div>':''}
	`},
	{id: 'mob_skills', text: `
	<h1>Способности юнитов</h1>
	<p>
		[t]В этом разделе подробно описаны особенности некоторых существ, с которыми связаны игровые механики. Основная информация о способностях существ представлена на соответствующей <a href="mobs-page${!m?'':'-m'}.html">[s]странице[/s]</a> в кратком виде.
	</p>
	<h2 id="mob_skills.1">Кавалерийский разбег</h2>
	${!m?'<div class="block-img"><img class="img-two-thirds" data-src="images/storypictures/cavalry.png" alt="Кавалерийский разбег"></div>':''}
	<p>
		[t]Существа [m]Кавалерист[/m] и [m]Чемпион[/m] обладают способностью кавалерийского разбега, который увеличивает урон пропорционально пройденному до цели расстоянию ([s]5%[/s] за каждый гекс до цели). Несмотря на простоту описания, в механике этой способности есть несколько нюансов.<br><br>
		[t]&bull; К этой способности невосприимчивы [m]Копейщики[/m] и [m]Алебардщики[/m].<br><br>
		[t]&bull; Бонус урона [s]5%[/s] за каждую пройденную клетку рассчитывается только от базового урона, который наносят кавалеристы. Т.е. эти [s]5%[/s] не учитывают другие модификаторы урона, такие как навык [s]Нападения[/s] или показатель [s]Атаки[/s], и прибавляются к финальному значению урона.<br><br>
		[t]&bull; Отсчет клеток идет не по количеству реально пройденных гексов перед атакой, а по минимальному расстоянию между головой коня (передний гекс существа) перед атакой и головой коня после совершения атаки.<br><br>
		[t]${!m?'Справа':'Ниже'} приведены иллюстрации (серыми цифрами показано расстояние для расчета бонуса; желтыми буквами [s]А[/s] показаны точки возможного положения существ врага, в которых бонус кавалерийского разбега останется таким же; желтыми гексами и цифрой рядом с ними показано фактическое расстояние, которое придется преодолеть [m]Кавалеристу[/m] или [m]Чемпиону[/m], чтобы нанести удар):
	</p>
	${m?'<div class="picture"><img class="img-full-screen" data-src="images/storypictures/cavalry.png" alt="Кавалерийский разбег"></div>':''}
	<h2 id="mob_skills.2">Архангелы: Воскрешение</h2>
	${m?'<div class="picture"><img data-src="images/storypictures/resurrect.jpg" alt="Воскрешение" height="175"></div>':''}
	<p${!m?' style="min-height: 260px"':''}>
		${!m?'<img class="story-img img-in-text-r" data-src="images/storypictures/resurrect.jpg" alt="Воскрешение" height="250">':''}
		[t][m]Архангелы[/m] обладают способностью воскрешать союзных существ один раз за бой ценой потери хода. Сила воскрешения [s](в HP) = N * 100[/s], где [s]N[/s] = количество [m]Архангелов[/m] в отряде. Не подействует на цель, если силы не хватит на воскрешение хотя бы одного существа. Целью воскрешения может быть только погибшее существо, но не раненое.
	</p>
	<h2 id="mob_skills.3">Дендроиды и Дендроиды-солдаты: Корни</h2>
	${m?'<div class="picture"><img data-src="images/storypictures/roots.jpg" alt="Корни" height="175"></div>':''}
	<p${!m?' style="min-height: 260px"':''}>
		${!m?'<img class="story-img img-in-text-r" data-src="images/storypictures/roots.jpg" alt="Корни" height="250">':''}
		[t][m]Дендроиды[/m] и [m]Дендроиды-солдаты[/m] при ударе опутывают противника корнями. Пока дендроид жив и остается на месте удара, опутанное существо не может сдвинуться с места. Эффект можно нейтрализовать заклинаниями [m]Телепорт[/m] и [m]Снятие заклинаний[/m].
	</p>
	<h2 id="mob_skills.4">Способности: Ослепление, Окаменение и Паралич</h2>
	${m?'<div class="picture"><img data-src="images/storypictures/petrification.jpg" alt="Окаменение" height="175"></div>':''}
	<p${!m?' style="min-height: 260px"':''}>
		${!m?'<img class="story-img img-in-text-r" data-src="images/storypictures/petrification.jpg" alt="Окаменение" height="250">':''}
		[t][s]Единороги и Боевые единороги.[/s]<br><br>
		[t][m]Единороги[/m] и [m]Боевые единороги[/m] при ударе с шансом [s]20%[/s] ослепляют цель на 3 раунда. Действие ослепления, наложенного [m]Единорогами[/m], аналогично действию заклинания [m]Ослепление[/m] базового уровня [s]Магии огня[/s] (подробнее см. статью <a href="#16">[s]"Механика заклинаний"[/s]</a>)<br><br>
		[t][s]Медузы и Медузы-королевы.[/s]<br><br>
		[t][m]Медузы[/m] и [m]Медузы-королевы[/m] с [s]20%[/s] шансом, атакуя в ближнем бою, превращают противника в камень на 3 раунда. Цель пропускает свои очередные ходы и получает только [s]50%[/s] урона от атак вражеских существ, но сразу после получения любого вида урона окаменение исчезает.<br><br>
		[t][s]Скорпикоры.[/s]<br><br>
		[t][m]Скорпикоры[/m] при ударе с шансом [s]20%[/s] парализуют цель на 3 раунда. Цель пропускает свои очередные ходы пока действует паралич или пока не получит урон. Если парализованная цель подвергается атаке в ближнем бою, на которую может сделать "ответку", то ответный удар будет лишь с [s]25%[/s] силой.<br><br>
		[t][s]Василиски и Великие василиски.[/s]<br><br>
		[t]Способность [m]Василисков[/m] работает абсолютно также, как у [m]Медуз[/m] и [m]Медуз-королев[/m].<br><br>
		[t]Так как [s]Ослепление[/s] и [s]Окаменение[/s] эквивалентны заклинаниям 3 уровня, то все драконы к ним невосприимчивы. [s]Паралич[/s] эквивалентен заклинаниям 4 уровня, поэтому он не действует на [m]Черных[/m] и [m]Золотых драконов[/m].
	</p>
	<h2 id="mob_skills.5">Верховные джинны: Заклинания</h2>
	${m?'<div class="picture"><img data-src="images/storypictures/cast.jpg" alt="Колдовство" height="175"></div>':''}
	<p${!m?' style="min-height: 260px"':''}>
		${!m?'<img class="story-img img-in-text-r" data-src="images/storypictures/cast.jpg" alt="Колдовство" height="250">':''}
		[t][m]Верховные джинны[/m] 3 раза за бой способны наложить заклинание на дружественную цель вместо очередного хода. Все заклинания накладываются на продвинутом уровне магии (исключение составляют бои на Магических равнинах, Огненных равнинах, Прозрачных прудах, Волшебных облаках и Скалистых землях, где соответствующие заклинания применяются на экспертном уровне) и действуют 6 раундов за исключением [m]Бешенства[/m] (до следующего хода существа, на котором наложено заклинание). Специализации и навыки героев не влияют на эффективность заклинаний, накладываемых [m]Джиннами[/m].<br><br>
		[t][m]Верховные джинны[/m] могут наложить заклинания: [m]Антимагия[/m], [m]Бешенство[/m], [m]Благословение[/m], [m]Воздушный щит[/m], [m]Жажда крови[/m], [m]Защита от воды[/m], [m]Защита от воздуха[/m], [m]Защита от земли[/m], [m]Защита от огня[/m], [m]Каменная кожа[/m], [m]Контрудар[/m], [m]Лечение[/m], [m]Волшебное зеркало[/m], [m]Молитва[/m], [m]Огненный щит[/m], [m]Палач[/m], [m]Радость[/m], [m]Точность[/m], [m]Удача[/m], [m]Ускорение[/m] и [m]Щит[/m]. [m]Джинны[/m] не накладывают одно и то же заклинание на одну цель дважды или если оно уже наложено героем.<br>
		[t](Некоторые существа невосприимчивы к определенным заклинаниям [m]Джиннов[/m])
	</p>
	<h2 id="mob_skills.6">Черти: Кража маны</h2>
	${m?'<div class="picture"><img data-src="images/storypictures/exhaustion.jpg" alt="Кража маны" height="175"></div>':''}
	<p${!m?' style="min-height: 260px"':''}>
		${!m?'<img class="story-img img-in-text-r" data-src="images/storypictures/exhaustion.jpg" alt="Кража маны" height="250">':''}
		[t]После использования заклинания вражеским героем, [m]Черти[/m] переводят [s]20%[/s] от потраченной им маны своему герою. Количество отрядов и количество существ не влияют на объем украденной маны. При использовании заклинаний, которые стоят меньше 5 ед. маны, черти не используют способность.<br><br>
		[t]Украденная мана может добавляться к запасу героя сверх максимально возможного количества.
	</p>
	<h2 id="mob_skills.7">Властители пропасти: Демонология</h2>
	${m?'<div class="picture"><img data-src="images/storypictures/demonology.jpg" alt="Демонология" height="175"></div>':''}
	<p${!m?' style="min-height: 260px"':''}>
		${!m?'<img class="story-img img-in-text-r" data-src="images/storypictures/demonology.jpg" alt="Демонология" height="250">':''}
		[t]Одним из эффективных приемов пополнения своих войск является способность [m]Адских отродий[/m] поднимать [m]Демонов[/m] из своих павших в бою существ.<br><br>
		[t]Поднятие демонов действует только на трупы живых существ, т.е. на [s]нежити[/s], [s]горгульях[/s], [s]элементалях[/s], [s]големах[/s] и [s]боевых машинах[/s] способность не работает. Также способность действует на существ с защитой от магии, но не работает на [m]Проклятой земле[/m], в [m]Гарнизоне антимагии[/m] и при наличии [m]Сферы запрещения[/m].<br><br>
		[t]Принцип расчета количества возрождаемых [m]Демонов[/m] таков:<br><br>
		[t]&bull; За каждые 50 ед. здоровья отряда [m]Властители пропасти[/m] могут поднять одного [m]Демона[/m];<br><br>
		[t]&bull; Количество [m]Демонов[/m], поднятых из уничтоженного отряда, не может превышать количество существ, первоначально составлявших этот уничтоженный отряд;<br><br>
		[t]&bull; Суммарное здоровье призванных [m]Демонов[/m] не может превысить количество здоровья уничтоженного отряда.<br><br>
		[t][s]Основные принципы демонологии:[/s]<br><br>
		[t]Каждый отряд [m]Адских отродий[/m] способен провести процедуру призыва [m]Демонов[/m] только 1 раз за бой, однако клонирование отряда [m]Адских отродий[/m] с помощью соответствующего заклинания дает возможность повторно использовать умение независимо от того, возрождались в этом бою [m]Демоны[/m] или нет.<br><br>
		[t]Все оставшиеся в живых призванные [m]Демоны[/m] остаются в армии героя после завершения боя.<br><br>
		[t]Наличие артефактов, повышающих здоровье существ, идет в расчет числа призванных [m]Демонов[/m].<br><br>
		[t]У погибшего отряда учитывается снижение здоровья от [s]Яда[/s], однако способность [m]Призрачных драконов[/m] [s]Старость[/s] не влияет на возрождение.
	</p>
	<h2 id="mob_skills.8">Могучие горгоны: Смертельный взгляд</h2>
	${m?'<div class="picture"><img data-src="images/storypictures/deathgaze.jpg" alt="Смертельный взгляд" height="175"></div>':''}
	<p${!m?' style="min-height: 260px"':''}>
		${!m?'<img class="story-img img-in-text-r" data-src="images/storypictures/deathgaze.jpg" alt="Смертельный взгляд" height="250">':''}
		[t]Каждая [m]Могучая горгона[/m] в атакующем отряде имеет [s]10%[/s] шанс поразить цель Смертельным взглядом, который мгновенно убивает нескольких существ. Смертельный взгляд не действует на [s]нежить[/s], [s]элементалей[/s], [s]горгулий[/s], [s]големов[/s] и [s]боевые машины[/s]. Количество существ, которое может быть убито Смертельным взглядом зависит от количества [m]Могучих горгон[/m] в атакующем отряде и лежит в диапазоне от [s]1[/s] до [s]N/10[/s] (округление вверх), где [s]N[/s] – количество [m]Могучих горгон[/m].<br><br>
		[t]Например, 31 [m]Могучая горгона[/m] может дополнительно уничтожить 1-4 существ в атакуемом отряде, однако следует учитывать, что шанс срабатывания рассчитывается для каждой горгоны отдельно. Иными словами 10 горгон с [s]10%[/s] шансом Смертельного взгляда вместе не будут иметь [s]100%[/s] гарантии успеха.<br><br>
		[t]Вероятность хотя бы одного успешного срабатывания можно рассчитать по формуле:<br><br>
		[t][s]1 - (1 - p) ^ N[/s]<br><br>
		[t]где [s]р[/s] - шанс срабатывания Смертельного взгляда, в долях [s](р = 10% = 0,1)[/s]; [s]N[/s] - количество [m]Могучих горгон[/m] в атакующем отряде.<br><br>
		[t]Таблица ниже демонстрирует некоторые пункты расчета вероятности.
	</p>
	<table${!m?' class="compress"':''}>
		<tr> <th rowspan="2">Количество Горгон</th> <th colspan="4">Количество существ, которое может убить отряд Горгон</th> </tr>
		<tr> <th>1</th> <th>2</th> <th>3</th> <th>4</th> </tr>
		<tr> <td>1</td> <td>10%</td> <td>-</td> <td>-</td> <td>-</td> </tr>
		<tr> <td>2</td> <td>19%</td> <td>-</td> <td>-</td> <td>-</td> </tr>
		<tr> <td>5</td> <td>41%</td> <td>-</td> <td>-</td> <td>-</td> </tr>
		<tr> <td>10</td> <td>65%</td> <td>-</td> <td>-</td> <td>-</td> </tr>
		<tr> <td>11</td> <td>69%</td> <td>30%</td> <td>-</td> <td>-</td> </tr>
		<tr> <td>15</td> <td>79%</td> <td>45%</td> <td>-</td> <td>-</td> </tr>
		<tr> <td>20</td> <td>88%</td> <td>61%</td> <td>-</td> <td>-</td> </tr>
		<tr> <td>21</td> <td>89%</td> <td>63%</td> <td>35%</td> <td>-</td> </tr>
		<tr> <td>25</td> <td>93%</td> <td>73%</td> <td>46%</td> <td>-</td> </tr>
		<tr> <td>30</td> <td>96%</td> <td>81%</td> <td>59%</td> <td>-</td> </tr>
		<tr> <td>31</td> <td>96%</td> <td>83%</td> <td>61%</td> <td>38%</td> </tr>
		<tr> <td>40</td> <td>99%</td> <td>92%</td> <td>78%</td> <td>58%</td> </tr>
		<tr> <td colspan="5">(Расчет можно продолжать дальше)</td> </tr>
	</table>
	<p>
		[t]Для примера, если у Вас есть 5 горгон и вы их разделили на 5 отрядов по 1 горгоне, то вероятность однократного срабатывания Смертельного взгляда будет такая же, как если бы все пять находились в одном отряде.<br><br>
		[t]Для отряда из 1000 и более [m]Могучих горгон[/m] можно использовать следующую формулу:<br><br>
		[t][s]0,0984 * N - 2,1909[/s]<br><br>
		[t]Иногда имеет смысл делить горгон на отряды. К примеру, в отряде есть 2 горгоны, которые суммарно обладают шансом [s]19%[/s] на то, чтобы использовать умение и убить дополнительно 1 существо противника. На первый взгляд, если их разделить, то шансы не изменятся, все те же [s]19%[/s]. Однако, есть один нюанс: шанс уничтожить 1 существо будет равняться [s]18%[/s] и еще [s]1%[/s] на то чтобы уничтожить сразу 2 существа. Вместе у горгон нет шанса уничтожить сразу два существа, а по отдельности - есть. Не смотря на это, не стоит делить слишком маленькие отряды горгон, поскольку противнику будет гораздо проще уничтожить один или несколько отрядов и свести на нет попытки использовать Смертельный взгляд.<br><br>
		[t]Главной целью для [m]Могучих горгон[/m] следует выбирать отряды 7-го уровня или других самых крепких существ противника, так как Смертельный взгляд подействует на любых живых существ независимо от их защиты, количества здоровья или сопротивления заклинаниям.
	</p>
	<h2 id="mob_skills.9">Яд и Старость</h2>
	${m?'<div class="picture"><img data-src="images/storypictures/potion.jpg" alt="Отравление" height="175"></div>':''}
	<p${!m?' style="min-height: 330px"':''}>
		${!m?'<img class="story-img img-in-text-r" data-src="images/storypictures/potion.jpg" alt="Отравление" height="250">':''}
		[t][m]Виверны-монархи[/m], [m]Морские змеи[/m] и [m]Аспиды[/m] при атаке с [s]30%[/s] шансом накладывают на противника [s]отравление[/s]. Под этим эффектом каждый раунд, включая момент наложения, [s]Здоровье[/s] цели будет снижаться на [s]10%[/s], но оно не может снизиться более, чем на [s]50%[/s] (округление вверх). Если верхнее существо имеет более [s]10% Здоровья[/s], то полученный ранее урон вычтется из сниженного [s]Здоровья[/s]; если [s]10%[/s] или меньше, то текущее [s]Здоровье[/s] снизтся до [s]1[/s]. Способность действует только на живых существ. [s]Яд[/s] эквивалентен заклинаниям 3 уровня и снимается заклинанием [m]Лечение[/m], но не может быть нейтрализован [m]Снятием заклинаний[/m] или [m]Антимагией[/m]. После воскрешения отряда, на который был наложен [s]Яд[/s], эффект пропадает, но сниженное [s]Здоровье[/s] так и остается сниженным.<br><br>
		[t]Пока активен сам эффект [s]Яда[/s], он виден на панели бафов и дебафов существа, однако по завершении трех раундов после наложения, [s]Здоровье[/s] существа остается сниженным, что можно увидеть только в его карточке характеристик, так как нет отдельного дефаба, отражающего сниженное [s]Здоровье[/s]. Этот эффект сниженного [s]Здоровья[/s] от [s]Яда[/s] также снимается заклинанием [m]Лечение[/m].<br><br>
		${!m?'<img class="story-img img-in-text-l" data-src="images/storypictures/senility.jpg" alt="Старость" height="250">':''}
		${m?'</p><div class="picture"><img data-src="images/storypictures/senility.jpg" alt="Старость" height="175"></div><p>':''}
		[t][m]Призрачный дракон[/m] при ударе с [s]20%[/s] шансом накладывает на цель [s]Старость[/s] на 3 раунда. Способность сопоставима с заклинанием 5 уровня и действует только на живых существ.<br><br>
		[t]При этом максимальное и текущее [s]Здоровье[/s] цели снижается на [s]50%[/s]. Если верхнее существо в целевом отряде имеет не полное [s]Здоровье[/s], но больше половины, то полученный ранее урон вычтется из сниженного [s]Здоровья[/s]; если половину [s]Здоровья[/s] или меньше, то текущее [s]Здоровье[/s] снизтся до [s]1[/s].<br><br>
		[t]Интересен эффект после окончание действия [s]Яда[/s] и [s]Старости[/s]. В случае, если существо имело более половины [s]Здоровья[/s] при получении [s]Старости[/s] (или более [s]10%[/s] в случае [s]Яда[/s]), то весь нанесенный урон во время ее действия сохранится в том же объеме. Т.е. если существо имеет [s]1000 ед. Здоровья[/s], [m]Призрачный дракон[/m] накладывает на существо [s]Старость[/s] и за время ее действия [s]Здоровье[/s] существа удалось снизить до [s]200 ед.[/s] (т.е. нанести [s]300 ед.[/s] урона), то по окончании [s]Старости[/s] существо будет иметь [s]700 ед. Здоровья[/s]. Однако, если существо имело половину или меньше [s]Здоровья[/s] ([s]10%[/s] и менее в случае [s]Яда[/s]), и получив эффект, доживет до его окончания или снятия, то к имеющемуся [s]Здоровью[/s] существа прибавится половина от полного [s]Здоровья[/s] существа (или [s]10%[/s] от полного [s]Здоровья[/s]) вне зависимости от других факторов. Если [s]Здоровье[/s] существа снижено с помощью [s]Яда[/s], то при спадании эффекта [s]Старости[/s] полное [s]Здоровье[/s] будет считаться с учетом [s]Яда[/s], т.е. существо восстановит [s]25%[/s] от максимального [s]Здоровья[/s].<br><br>
		[t]Пример: если у существа осталось [s]450 ед. Здоровья[/s] из [s]1000 ед.[/s] и на него была наложена [s]Старость[/s], то после снижения [s]Здоровья[/s] до [s]1[/s], по окончании действия [s]Старости[/s] у существа станет [s]501 ед. Здоровья[/s]. Таким образом существо вылечится на [s]61 ед. Здоровья[/s] отсносительно момента до наложения [s]Старости[/s].
	</p>
	<h2 id="mob_skills.10">Фениксы: Перерождение</h2>
	${m?'<div class="picture"><img data-src="images/storypictures/phoenix.jpg" alt="Феникс" height="175"></div>':''}
	<p${!m?' style="min-height: 260px"':''}>
		${!m?'<img class="story-img img-in-text-r" data-src="images/storypictures/phoenix.jpg" alt="Феникс" height="250">':''}
		[t]Убитые [m]Фениксы[/m] могут восстать из пепла. После гибели отряда, воскрешаются [s]N / 5 + Х[/s] [m]Фениксов[/m]<br><br>
		[t]где [s]N[/s] - начальное количество существ в убитом отряде;<br>
		[t][s]Х[/s] - остаток от деления [s](N / 5)[/s], он показывает количество [m]Фениксов[/m], имеющих 20% шанс возродиться.<br><br>
		[t]Если [m]Феникс[/m] был убит и восстал из пепла, то он теряет ход в этом раунде, если до этого не успел сходить. Также воскресший [m]Феникс[/m] теряет все наложенные до этого эффекты заклинаний и способностей, кроме [m]Разрушающего луча[/m] и сниженного здоровья от [s]Яда[/s].<br><br>
		[t]Способность срабатывает лишь раз за бой, т.е. если [m]Феникс[/m], восставший из пепла, будет вновь убит и затем воскрешен при помощи заклинания [m]Воскрешение[/m], то он потеряет возможность снова использовать способность в этом бою. Если на [m]Феникса[/m] используется заклинание [m]Жертва[/m], то отряд погибает без возможности воскрешения и его труп пропадает.<br><br>
		[t]Пример: В убитом отряде было 19 [m]Фениксов[/m]. По формуле расчета [s]19 / 5 = [3][/s] из них воскреснут точно. С [s]20%[/s] шансом воскреснут [s]19 - 15 = [4][/s] [m]Феникса[/m]. При особом везении могут воскреснуть даже 7 единиц.
	</p>
	<h2 id="mob_skills.11">Морские волки: Точный выстрел</h2>
	${m?'<div class="picture"><img data-src="images/storypictures/preciseshot.jpg" alt="Точный выстрел" height="175"></div>':''}
	<p${!m?' style="min-height: 260px"':''}>
		${!m?'<img class="story-img img-in-text-r" data-src="images/storypictures/preciseshot.jpg" alt="Точный выстрел" height="250">':''}
		[t]При выстреле, каждый из стреляющих [m]Морских волков[/m] дополнительно к прямому урону имеет [s]Х%[/s] шанс мгновенно убить одно существо в целевом отряде. Количество убитых существ не может превысить [s]N * Х / 100[/s] с округлением вверх, где [s]Х[/s] при выстреле без штрафа за расстояние [s]= 3[/s], со штрафом [s]= 2[/s]. [s]N[/s] - количество [m]Морских волков[/m] в отряде. При наличии штрафа за стрельбу через крепостные стены способность не работает.
	</p>
	<h2 id="mob_skills.12">Аспиды: Месть</h2>
	<p>
		[t]Способность Месть добавляет к урону [m]Аспида[/m] некоторое количество процентов. Чем меньше здоровья осталось у [m]Аспида[/m] на момент удара (относительно изначального количества здоровья отряда), тем больше будет прибавка.<br><br>
		[t][s]Старость[/s] и [s]Яд[/s] могут повлиять на рассчитываемое здоровье отряда в начале боя.<br><br>
		[t]Далее приведена формула расчета прибавки урона:<br><br>
		[t]Процент урона [s]= &#8730; ((N * HP) / (HPnow + HP) - 1) * 100%[/s]<br><br>
		[t]где [s]N[/s] - Количество [m]Аспидов[/m] в начале боя;<br>
		[t][s]HP[/s] - Здоровье одного [m]Аспида[/m];<br>
		[t][s]HPnow[/s] - Суммарное здоровье в настоящее время;
	</p>
	<h2 id="mob_skills.13">Фангармы: Гипноз</h2>
	${m?'<div class="picture"><img data-src="images/storypictures/hypnosis.jpg" alt="Гипноз" height="175"></div>':''}
	<p${!m?' style="min-height: 260px"':''}>
		${!m?'<img class="story-img img-in-text-r" data-src="images/storypictures/hypnosis.jpg" alt="Гипноз" height="250">':''}
		[t][m]Фангармы[/m] обладают способностью гипнотизировать врага при атаке на 3 хода (продвинутый уровень заклинания [m]Гипноз[/m]), при этом, если [m]Гипноз[/m] получилось наложить, враг не наносит ответный удар.<br><br>
		[t]Сила [m]Гипноза[/m] (количество здоровья, которое может иметь отряд врага, который получится загипнотизировать) рассчитывается по формуле: [s]N * 25 + 20[/s], где [s]N[/s] - количество [m]Фангармов[/m] в отряде.
	</p>
	<h2 id="mob_skills.14">Чародеи: Заклинания</h2>
	<p>
		[t]Каждые 3 раунда, начиная с первого, [m]Чародей[/m] перед началом своего хода на 3 раунда применяет заклинания на экспертном уровне магии. Все [m]Чародеи[/m] в армии применяют одно заклинание одновременно и могут сколдовать: [m]Слабость[/m] (шанс 4 / 84), [m]Медлительность[/m] (шанс 10 / 84), [m]Ускорение[/m] (шанс 15 / 84), [m]Каменная кожа[/m] (шанс 15 / 84), [m]Благословение[/m] (шанс 15 / 84), [m]Воздушный щит[/m] (шанс 10 / 84, если есть вражеские стрелки), [m]Жажда крови[/m] (шанс 5 / 84), [m]Лечение[/m] (шанс 10 / 84, если есть раненые существа).<br><br>
		[t]Если [m]Чародей[/m] загипнотизирован, то он использует случайную магию, как только к нему впервые перейдет ход под управлением нового владельца, даже если он уже применял случайную магию под управлением изначального владельца.<br><br>
		[t]С заклинаниями [m]Чародеев[/m] связан такой баг: Если после наложения заклинания [m]Чародеями[/m], герой наложит аналогичное заклинание сам, то оно будет действовать на [s]Экспертном[/s] уровне магии независимо от прокачки и наличия данной школы магии у героя, но длиться заклинание будет количество раундов равное [s]Силе магии[/s] героя.
	</p>
	<h2 id="mob_skills.15">Сказочные драконы: Заклинания</h2>
	<p>
		[t]На ряду с атаками ближнего боя [m]Сказочный дракон[/m] также имеет возможность 5 раз за бой применить случайное заклинание: [m]Волшебная стрела[/m] ([s]Магия земли[/s], [s]10%[/s]), [m]Метеоритный дождь[/m] ([s]15%[/s]), [m]Ледяная молния[/m] ([s]11%[/s]), [m]Кольцо холода[/m] ([s]13%[/s]), [m]Огненный шар[/m] ([s]14%[/s]), [m]Инферно[/m] ([s]14%[/s]), [m]Молния[/m] ([s]11%[/s]) и [m]Цепная молния[/m] ([s]12%[/s]). Все заклинания действуют на [s]Продвинутом[/s] уровне магии, однако их урон расчитывается по особым формулам, где [s]N[/s] - количество драконов в отряде, а дополнительное значение в скобках - бонус к урона в бою на [m]Магических равнинах[/m] (дополнительный урон от [m]Магических равнин[/m] не зависит от количества драконов в отряде):<br><br>
		[t][m]Магическая стрела[/m] = [s]20 + 50 * N (+10)[/s]<br>
		[t][m]Метеоритный дождь[/m] =  [s]50 + 125 * N (+50)[/s]<br>
		[t][m]Ледяная стрела[/m] = [s]20 + 100 * N (+30)[/s]<br>
		[t][m]Кольцо холода[/m] = [s]30 + 50 * N (+30)[/s]<br>
		[t][m]Огненный шар[/m] = [s]30 + 50 * N (+30)[/s]<br>
		[t][m]Инферно[/m] = [s]40 + 50 * N (+40)[/s]<br>
		[t][m]Удар молнии[/m] = [s]20 + 125 * N (+30)[/s]<br>
		[t][m]Цепная молния[/m] = [s]50 + 200 * N (+50)[/s]<br><br>
		[t]На силу этих заклинаний действует также специализация героя, например, [m]Сказочный дракон[/m] под руководством [m]Солмира[/m] нанесет больший урон [m]Цепной молнией[/m], чем под руководством кого-либо другого с прочими равными параметрами. На урон также влияют навык [s]Волшебства[/s] героя и наличие [m]Сфер магии[/m] (важно, что специализация, навык [s]Волшебства[/s] и [m]Сферы[/m] увеличивают финальный урон и дают прибавку к урону от [m]Магических равнин[/m]).<br><br>
		[t]Если [m]Сказочному дракону[/m] приказать [s]Ждать[/s], то он поменяет колдуемое заклинание.<br><br>
		[t]Отдельного внимания заслуживает баг при атаке в рукопашную. Все стрелки в игре имеют возможность переключаться между дальней атакой и атакой врукопашную (по умолчанию клавиша [s]Alt[/s]). Такие существа как [m]Магоги[/m] и [m]Личи[/m] также имеют возможность для выбора области атаки при нажатии клавиши [s]G[/s], однако со [m]Сказочными драконами[/m] дела обстоят иначе:<br><br>
		[t]Если у дракона выпало заклинание, которое применяется на цель, нажатие [s]Alt[/s] позволяет, не применяя заклинание, атаковать в ближнем бою, а клавиша [s]G[/s] подсвечивает цели, на которые можно применить активное заклинание. Если же у дракона выпало заклинание, применяемое на площадь, нажатие клавиши [s]Alt[/s] не даст эффекта, а клавиша [s]G[/s] позволит выбрать зону для использования заклинания.<br><br>
		[t]Подобные переключения могут вызвать странный эффект - при обычном наведении курсора на вражескую цель массовые заклинания не будут использоваться и будет предложено провести атаку ближнего боя (преодолеть этот баг позволяет нажатие клавиши [s]G[/s] и выбор зоны заклинания вручную).<br><br>
		[t]Интересно еще то, что все заклинания, действующие по площади, можно применить на союзных существ (при наведении на союзное существо курсор преобразуется как и при наведении на существо врага).
	</p>
	<h2 id="mob_skills.16">Ржавые драконы: Кислотное дыхание</h2>
	${m?'<div class="picture"><img data-src="images/storypictures/acid.jpg" alt="Кислотное дыхание" height="175"></div>':''}
	<p${!m?' style="min-height: 260px"':''}>
		${!m?'<img class="story-img img-in-text-r" data-src="images/storypictures/acid.jpg" alt="Кислотное дыхание" height="250">':''}
		[t]При атаке [m]Ржавые драконы[/m] снижают защиту цели (только первой цели атаки; не распространяется на существо за основной целью) на 3 до конца боя и этот эффект суммируется ([s]Защита[/s] существа не может быть ниже 0). Кроме того, этот эффект нельзя снять заклинаниями и он не пропадает у существа при воскрешении после смерти.<br><br>
		[t]Кроме того, с шансом [s]20%[/s] драконы наносят [s]25 * N[/s] урона, где [s]N[/s] - количество [m]Ржавых драконов[/m] в атакующем отряде.
	</p>
	`},
	{id: 'combat_veh', text: `
	<h1>Боевые машины</h1>
	<p>
		[t]На полях сражений героев сопровождают [s]боевые машины[/s]; [m]Катапульта[/m] всегда появляется у героя в случае осады вражеского замка, в то время как остальные [s]боевые машины[/s] нужно приобретать в специальных строениях, доступных в городах, или в [s]Фабрике военной техники[/s] / [s]Пушечном дворе[/s]. Все [s]боевые машины[/s] располагаются в соответсвующих ячейках артефактов игрока, а на поле боя располагаются на своих фиксированных местах и могут взаимодействовать с окружением, но с некоторыми особенностями и ограничениями.
	</p>
	<h2 id="combat_veh.1">Катапульта</h2>
	<p style="min-height: 150px">
		<img class="story-img img-in-text-l" data-src="images/mobs/catapult.jpg" alt="Катапульта" height="140">
		[t][m]Катапульта[/m] всегда присутствует у героя, а в случае разрушения ее во время боя, восстанавливается после его завершения.<br><br>
		[t]Без навыка [s]Баллистики[/s] [m]Катапульта[/m] ведет огонь по стенам замка автоматически и случайно выбирает участок, в который будет совершен выстрел, с вероятностью [s]55%[/s] он придется на фрагмент [s]стены[/s], [s]28%[/s] что он придется на [s]ворота[/s] замка, [s]11%[/s] что [m]Катапульта[/m] попадет в [s]верхнюю[/s] или [s]нижнюю башню[/s] и [s]6%[/s], что попадет в [s]центральную башню[/s]. Если какие либо укрепления отсутствуют (уничтожены или не отстроены), то шансы попадания повышаются пропорционально.<br><br>
		[t]Все городские укрепления имеют 2 единицы прочности. Участки [s]стен[/s] имеют 3 ед. прочности при наличии [s]Замка[/s] в городе. [m]Катапульта[/m] же своим выстрелом может нанести от 0 до 2 единиц урона с разной вероятностью: с [s]10%[/s] шансом [m]Катапульта[/m] не нанесет урон, с шансом [s]60%[/s] нанесет 1 урона и с шансом [s]30%[/s] нанесет 2 урона.<br><br>
		[t]С навыком [s]Баллистики[/s] у игрока появляется возможность управлять стрельбой [m]Катапульты[/m] а шансы высокого урона и точность стрельбы повышаются. Кроме того, начиная с продвинутого уровня [s]Баллистики[/s], [m]Катапульта[/m] будет делать по два выстрела за ход (игрок выбирает цель один раз, но точность и урон расчитывается для каждого выстрела отдельно). На базовом и продвинутом уровнях [m]Катапульта[/m] наносит урон 1 и 2 с равной вероятностью, а вероятность не нанести урон исключается. на экспертном уровне [s]Баллистики[/s] [m]Катапульта[/m] всегда наносит 2 урона.<br><br>
		[t]Ход [m]Катапульты[/m] всегда идет после [s]стрелковых башен[/s] и перед ходами существ, а когда все фортификационные сооружения разрушены, [m]Катапульта[/m] просто пропускает ходы.<br><br>
		[t]Шанс попаданию по разным частям ([s]стены[/s], [s]ворота[/s], [s]боковые башни[/s] и [s]центральная башня[/s] соответственно):<br><br>
		[t]С базовой и продвинутой [s]Баллистикой[/s]: [s]53,5%[/s]; [s]27%[/s]; [s]13%[/s]; [s]6,5%[/s]<br><br>
		[t]С экспертной [s]Баллистикой[/s]: [s]52%[/s]; [s]27,5%[/s]; [s]14%[/s]; [s]6,5%[/s]<br><br>
		[t]Если [m]Катапульта[/m] целится в определенный участок, но промахивается, то снаряд бьет в случайную часть укреплений.<br><br>
		[t]Максимальное число выстрелов, достаточных для полного уничтожения всех укреплений города равно 24. Минимальное - 12 (при экспертной [s]Баллистике[/s]).
	</p>
	<h2 id="combat_veh.2">Баллиста</h2>
	<p style="min-height: 150px">
		<img class="story-img img-in-text-l" data-src="images/mobs/ballist.jpg" alt="Баллиста" height="140">
		[t][m]Баллиста[/m] в отличии от [m]Катапульты[/m] может быть окончательно уничтожена в бою. Ряд героев ([m]Кристиан[/m], [m]Торосар[/m], [m]Пир[/m], [m]Арлаш[/m], [m]Гурниссон[/m], [m]Гервульф[/m] и [m]Ранлу[/m]) на старте игры имеют в своем распоряжении [m]Баллисту[/m].<br><br>
		[t][m]Баллиста[/m] выполняет роль неподвижного стрелка; на нее действует бонус от всех модификаторов урона стрельбы, она имеет [s]штраф дальности[/s] стрельбы и даже подвержена [s]Удаче[/s], однако не может быть заблокирована вражескими юнитами.<br><br>
		[t]Урон [m]Баллисты[/m] расчитывается по следующей формуле: [s]2...3 * (Атака героя + 1)[/s], где [s]2...3[/s] - случайное значение в диапазоне.<br><br>
		[t]Без навыка [s]Артиллерии[/s] [m]Баллиста[/m] автоматически в конце каждого раунда делает 1 выстрел по случайной цели.<br><br>
		[t]Базовая [s]Артиллерия[/s] дает герою возможность управления [m]Баллистой[/m] и [s]50%[/s] шанс нанести выстрелом двойной урон.<br><br>
		[t]Продвинутая [s]Артиллерия[/s] дает [s]75%[/s] шанс нанести выстрелом двойной урон.<br><br>
		[t]Экспертная [s]Артиллерия[/s] позволяет [m]Баллисте[/m] гарантировано наносить выстрелом двойной урон.<br><br>
		[t][m]Баллиста[/m] не участвует при захвате сокровищниц, где отрядам героя приходится занимать круговую оборону. [m]Баллиста[/m] также не участвует при защите города (если отстроен [s]Форт[/s]), но, вместо этого, навык [s]Артиллерии[/s] позволяет игроку управлять огнем [s]Стрелковых башен[/s].
	</p>
	<h2 id="combat_veh.3">Пушка</h2>
	<p style="min-height: 150px">
		<img class="story-img img-in-text-l" data-src="images/mobs/cannon.jpg" alt="Пушка" height="140">
		[t][m]Пушка[/m] занимает ту же ячейку, что и [m]Баллиста[/m] и обладает схожими особенностями, однако, в отличии от второй, способна атаковать укрепления замка.<br><br>
		[t]Герой [m]Джереми[/m] владеет [m]Пушкой[/m] с самого начала игры.<br><br>
		[t]Базовый урон [m]Пушки[/m] рассчитывается по следующей формуле: [s]4…7 * (Атака героя + 1)[/s], где [s]4…7[/s] - случайное значение в диапазоне.<br><br>
		[t]Без навыка [s]Артиллерии[/s] [m]Пушка[/m] автоматически в конце каждого раунда делает 1 выстрел по случайной цели.<br><br>
		[t]Базовая [s]Артиллерия[/s] дает герою возможность управления [m]Пушкой[/m], исключаются варианты нанесения 0 единиц урона по укреплениям, повышаются шансы попадания по выбранной цели и вероятности нанесения большего урона (аналогично действию Базовой [s]Баллистики[/s]).<br><br>
		[t]Продвинутая [s]Артиллерия[/s] дает [m]Пушке[/m] двойной урон по существам, повышаются шансы попадания по укреплениям и вероятность нанесения большего урона (аналогично действию Продвинутой [s]Баллистики[/s]).<br><br>
		[t]Экспертная [s]Артиллерия[/s] дает [m]Пушке[/m] тройной урон по существам, повышаются шансы попадания по укреплениям и вероятность нанесения большего урона (аналогично действию Экспертной [s]Баллистики[/s]).<br><br>
		[t]Если у игрока уже есть [m]Пушка[/m], то он не сможет купить [m]Баллисту[/m], пока не избавится от [m]Пушки[/m] и наоборот.<br><br>
		[t]Из-за того, что [m]Баллиста[/m] и [m]Пушка[/m] без навыка [s]Артиллерии[/s] ведут стрельбу автоматически, они не могут не стрелять, пока у них есть снаряды, чем могут сильно испортить задуманную тактику боя, выведя из контроля опасного противника, находящегося, например, под действием таких эффектов, как [s]Паралич[/s], [s]Окаменение[/s], [m]Ослепление[/m] и т.п.<br><br>
		[t]Отряды нейтралов или героев ИИ считают [m]Катапульту[/m], [m]Баллисту[/m] и [m]Пушку[/m] стрелковыми отрядами, но они не знают, что их нельзя перекрыть, встав вплотную. В результате это влияет на некоторые моменты поведения отрядов в битве.
	</p>
	<h2 id="combat_veh.4">Палатка первой помощи</h2>
	<p style="min-height: 150px">
		<img class="story-img img-in-text-l" data-src="images/mobs/firstaidtent.jpg" alt="Палатка первой помощи" height="140">
		[t][m]Палатка первой помощи[/m], как и [m]Баллиста[/m] может быть окончательно разрушена. Герои [m]Рион[/m], [m]Джем[/m] и [m]Вердиш[/m] имеют ее уже на старте игры.<br><br>
		[t]Без навыка [s]Первой помощи[/s] палатка автоматически в конце каждого раунда восстанавливает  здоровье случайного дружественного существа на [s]1...25[/s] единиц, но не выше максимума и без воскрешения умерших существ.<br><br>
		[t]Базовая [s]Первая помощь[/s] дает герою возможность управления палаткой и увеличивает ее эффективность до [s]1...50[/s] единиц здоровья.<br><br>
		[t]Продвинутая [s]Первая помощь[/s] увеличивает эффективность [m]Палатки первой помощи[/m] до [s]1...75[/s] единиц здоровья.<br><br>
		[t]Экспертная [s]Первая помощь[/s] увеличивает эффективность палатки до [s]1…100[/s] единиц здоровья.<br><br>
		[t][m]Палатка первой помощи[/m] не участвует при захвате сокровищниц, где отрядам героя приходится занимать круговую оборону.
	</p>
	<h2 id="combat_veh.5">Подвода с боеприпасами</h2>
	<p style="min-height: 150px">
		<img class="story-img img-in-text-l" data-src="images/mobs/ammocart.jpg" alt="Подвода с боеприпасами" height="140">
		[t][m]Подвода с боеприпасами[/m] обеспечивает союзных стрелков, а также [m]Баллисту[/m] и [m]Пушку[/m] бесконечным запасом снарядов. Подвода может быть уничтожена, и после разрушения количество выстрелов стрелков становится равным их базовому значению.<br><br>
		[t][m]Подвода с боеприпасами[/m] не участвует при захвате сокровищниц, где отрядам героя приходится занимать круговую оборону, но боезапас стреляющих существ героя остается бесконечным. Кроме того, подвода не имеет своего хода.
	</p>
	`},
	{id: 'spells', text: `
	<h1>Механика заклинаний</h1>
	<p>
		[t]В данном разделе собрана подробная информация о некоторых заклинаниях в игре. Здесь описаны особенности и тонкости заклинаний, о которых нельзя прочесть в самой игре, а также хитрости и неочевидные возможности их применения. Краткую информацию по всей остальной магии Вы можете увидеть на соответствующей <a href="spells-page${!m?'':'-m'}.html">[s]странице[/s]</a>.
	</p>
	<h2 id="spells.1">Адаптивные заклинания</h2>
	<p>
		<img class="story-${!m?'png-':''}img img-in-text-l" data-src="images/storypictures/visions-arrow.png" alt="Видения / Волшебная стрела" height="130">
		[t]В игре присутствуют два заклинания, которые относятся ко всем школам магии одновременно - [m]Волшебная стрела[/m] и [m]Видения[/m]. Это означает, что заклинания примут за основу ту стихию, навык которой имеет более высокий уровень ([s]Базовый[/s], [s]Продвинутый[/s] или [s]Экспертный уровень[/s] прокачки [s]Магии огня, воды, воздуха[/s] или [s]земли[/s]). Если у героя нет ни одного из перечисленных навыков, то [m]Волшебная стрела[/m] и [m]Видения[/m] будут воздушной стихии по умолчанию.<br><br>
		[t]Так как [m]Волшебная стрела[/m] относится ко всем школам магии, то ее урон будет снижаться любым защитным заклинанием на цели: [m]Защита от огня[/m], [m]Защита от воды[/m], [m]Защита от земли[/m] или [m]Защита от воздуха[/m]. Однако, если на цель наложено несколько таких заклинаний, то снижать урон будет только одно из них согласно приоритету: от [m]Земли[/m] - от [m]Воздуха[/m] - от [m]Огня[/m] - от [m]Воды[/m]. Например, если на цели [s]Базовая[/s] [m]Защита от земли[/m] и [s]Экспертная[/s] [m]Защита от огня[/m], то работать будет [m]Защита от земли[/m], хоть она и менее эффективна.<br><br>
		[t]Наличие [m]Сфер магии[/m], которые усиливают урон от заклинаний тех или иных стихий, не меняют приоритет выбора стихии [m]Волшебной стрелы[/m]. Это значит, что если герой имеет [s]Экспертную Магию огня[/s] и [s]Продвинутую Магию воды[/s], при этом на нем экипирован артефакт [m]Сфера проливного дождя[/m] (увеличивает урон заклинаний воды на [s]50%[/s]), [m]Волшебная стрела[/m] будет огненной стихии, несмотря на то, что со стихией воды она наносила бы больший урон.
	</p>
	<h2 id="spells.2">Стена огня</h2>
	<p>
		<img class="story-${!m?'png-':''}img img-in-text-l" data-src="images/spells/firewall.png" alt="Стена огня" height="100">
		[t][m]Стена огня[/m] - ситуативное, но чрезвычайно сильное заклинание, однако для его рационального использования необходимо понимать принципы движения существ по полю боя.<br><br>
		[t]Первое, о чем стоит помнить - [m]Стена огня[/m] наносит урон как вражеским, так и союзным существам, поэтому, пытаясь заманить врага в ловушку, стоит заранее оценить пути отступления.<br><br>
		[t]Герои под управлением ИИ не используют [m]Стену огня[/m], однако и герои ИИ, и нейтральные существа видят [m]Стену[/m] и будут на нее реагировать, пытаясь обойти. Например, если [s]скорость[/s] вражеского существа выше, чем [s]скорость[/s] существа игрока и нанести урон вражеское существо сможет лишь получив урон от [m]Стены[/m], велика вероятность, что вражеское существо использует [s]ожидание[/s] или [s]защиту[/s], а атакует в следующем раунде как только [m]Стена огня[/m] пропадет. Бывают случаи, когда несмотря на преимущество в скорости и опасность получения урона от заклинания, вражеское существо атакует. Как правило это происходит в том случае, если ИИ считает потери от урона [m]Стены[/m] несущественными, или существо, которое они атакуют последнее и не способно нанести сильного ответного удара.<br><br>
		[t]В случаях, когда у вражеского существа есть альтернативные цели или оно не доходит до своей цели за один ход, с высокой вероятностью ИИ изменит приоритет атаки или подойдет в точку, из которой сможет безболезненно нанести урон в следующем раунде.<br><br>
		[t]Несмотря на это существует несколько способов обмануть существ под управлением ИИ и заманить их в [m]Стену огня[/m]. В случаях, когда [s]скорость[/s] вражеских существ выше и они пытаются выждать, пока [m]Стена огня[/m] исчезнет можно применить хитрость - использовать заклинание с зазором в [s]один гекс[/s] от вашего существа, т.е. между [m]Стеной огня[/m] и союзным существом будут пустые гексы (такая [m]Стена огня[/m] называется [s]открытой[/s]. Когда [m]Стена[/m] стоит вплотную - [s]закрытой[/s]). В таком случае вражеское существо пойдет в атаку. Особенно часто это применяется против [s]двухгексовых летающих[/s] юнитов. Они, как правило, обладают достаточно высокой [s]скоростью[/s] и вопреки всему лезут в [m]Стену[/m]. Более того, если вначале применить [s]закрытую[/s] [m]Стену[/m] а в следующем раунде поставить [s]открытую[/s], вражеские существа также проигнорируют опасность получения урона. Главное не забыть о том, что [m]Стена огня[/m] работает всего два раунда вне зависимости от параметров персонажа.<br><br>
		[t]Самым сложным приемом является заманивание существа на [m]Стену огня[/m] в открытом поле, когда союзное сужество не способно выдержать удара врага, а одной [m]Стены огня[/m] недостаточно, чтобы убить вражеское существо. Для применения этого приема необходимо знать о том, по какой траектории движется существо (подробнее см. в статье <a href="mechanics-page${!m?'':'-m'}-2.html#ai.8">[s]"Движение по полю боя"[/s]</a>). Один из способов заманить вражеское существо в [m]Стену огня[/m] - встать на таком расстоянии от врага, чтобы он смог дойти до союзного существа за два полных хода и поставить [m]Стену огня[/m] на последнюю клетку первого хода (рисунок ниже). ИИ посчитает, что сможет дойти до своей цели только в том случае, если сходит на максимальное количество клеток (маршрут до цели строится по определенным законам, таким образом можно точно узнать, куда встанет существо врага) и сделает шаг в [m]Стену огня[/m]. Если же он встанет перед ней, то ему придется потратить один дополнительный ход, чтобы сблизиться с целью. Эта механика безотказно работает при движении по прямой линии и по диагонали, когда же речь заходит о движении с изменением направления, ИИ может отказаться от идеи зайти в [m]Стену[/m] ради выигрыша хода. В таких случаях иногда возникает возможность занять сразу несколько потенциальных клеток остановки противника, что увеличивает его шанс попадания в [m]Стену[/m]. Но в тех случаях, когда у Вас нет возможности загрузиться и переиграть битву, лучше пользоваться [m]Стеной[/m] на прямых траекториях.
	</p>
	<div class="${!m?'block-img':'picture'}"><img class="img-${!m?'half':'full'}-screen" data-src="images/storypictures/firewall.png" alt="Стена огня"></div>
	<p>
		[t]Также, выстраивая тактику боя, основанную на [m]Стене огня[/m], не стоит забывать о [s]морали[/s] и о количестве [s]урона[/s], который нанесет заклинание. Будет неприятно, если ваша "[s]единичка[/s]" спрятанная за [m]Стеной огня[/m] получит урон от врага, у которого осталось [s]5 ед. здоровья[/s] после получения урона от заклинания. Не стоит также забывать о [s]сопротивлении к магическому урону[/s] у [s]Големов[/s].<br><br>
		[t]Отдельного внимания заслуживает применение [m]Стены огня[/m] к [s]стрелкам[/s]. При обычных условиях стрелкам вообще незачем ходить, однако можно вынудить их сделать это. Если поставить приоритетную для атаки цель неподалеку, а стрелка заблокировать неприоритетным существом, стрелок (если не побоится ответного удара) пойдет бить приоритетную цель. Как раз тут можно применить [m]Стену огня[/m], поставив ее на пути следования вражеского стрелка.<br><br>
		[t]Таким образом, умение правильно расчитывать траектории движения вражеских существ и правильное обращение со [m]Стеной огня[/m] разительно увеличивает боевой потенциал этого заклинания. Практически без армии, с относительно невысокими показателями [s]Силы магии[/s] и запасом [s]маны[/s] можно с легкостью пробивать сильную охрану, [m]Ульи ядовитых змиев[/m], [m]Консерватории грифонов[/m] и т.д. (подробнее см. в статье [s]"Взятие объектов на ранней стадии игры"[/s])
	</p>
	<h2 id="spells.3">Берсерк</h2>
	<p>
		<img class="story-${!m?'png-':''}img img-in-text-l" data-src="images/spells/berserk.png" alt="Берсерк" height="100">
		[t][m]Берсерк[/m] заставляет существ, попавших под действие заклинания, атаковать ближайших юнитов, не разбирая свои они или чужие, что позволяет обратить всю силу врага против него самого. Кроме того, что существо противника (или союзное существо) под его действием атакует окружающих существ, оно становится неуправляемым для владельца. Эффект заклинания исчезает сразу после удара заколдованного существа, поэтому [m]Берсерк[/m] необходимо постоянно обновлять на цели.<br><br>
		[t]В эффектах заклинаний не указана продолжительность наложенного [m]Берсерка[/m], однако фактически его продолжительность равняется 255 раундам. И это достаточно важно, так как заклинание можно использовать как эффект контроля, то есть если наложить на существо противника [m]Берсерк[/m] и не дать ему нанести атаку, то он 255 раундов будет бегать по полю битвы и пытаться нанести удар. Особенно полезно это бывает, когда у противника осталось одно существо (жалательно не очень быстрое или замедленное заклинанием [m]Медлительность[/m]), а игроку необходимо воскресить своих падших существ или нанести вражескому существу большое количество урона (в некоторых случаях для этих целей подойдет [m]Ослепление[/m]).<br><br>
		[t][m]Берсерк[/m] снимает действие заклинания [m]Гипноз[/m] (ровно как и наоборот) и делает существо вражеским с точки зрения блокирования стрелков, т.е. если рядом со стрелком врага будет находиться его существо под эффектом [m]Берсерка[/m], то стрелок не может стрелять.<br><br>
		[t]На картинке ниже показана область действия заклинания на [s]Базовом[/s], [s]Продвинутом[/s] и [s]Экспертном[/s] уровнях [s]Магии огня[/s] соответственно.
	</p>
	<div class="${!m?'block-img':'picture'}"><img class="img-${!m?'half':'full'}-screen" data-src="images/storypictures/berserk.png" alt="Область действия Берсерка"></div>
	<h2 id="spells.4">Огненный щит</h2>
	<p>
		<img class="story-${!m?'png-':''}img img-in-text-l" data-src="images/spells/fireshield.png" alt="Огненный щит" height="100">
		[t]Если на существо наложено заклинание [m]Огненный щит[/m], то при получении им урона в ближнем бою щит наносит атакующему от [s]20[/s] до [s]30%[/s] от полученного урона. Урон, от которого берется [s]%[/s] не может быть выше оставшегося здоровья у атакуемого существа.<br><br>
		[t]Урон от [m]Огненного щита[/m] рассчитывается одинаково как для существа, на которое заклинание наложено героем, так и для [m]Султанов-ифритов[/m], у которых [m]Огненный щит[/m] является врожденной способностью. Если на [m]Султанов-ифритов[/m] дополнительно наложено заклинание [m]Огненный щит[/m] (например, через [m]Сферу уязвимости[/m]), то используется модификатор - процент от урона, соответствующий заклинанию ([s]20%[/s], [s]25%[/s] или [s]30%[/s], в зависимости от уровня вторичного навыка [s]Магия огня[/s]), иначе - всегда [s]20%[/s].<br><br>
		[t]Процент от урона для [m]Огненного щита[/m] берется с учетом всех бонусов к атаке, но без учета штрафов, то есть урон от заклинания будет рассчитываться исходя из следующих аспектов:<br><br>
		[t]&bull; Модификатора урона (если [s]Атака[/s] превышает [s]Защиту[/s]) - [s]MD1[/s];<br>
		[t]&bull; Модификатора нападения - [s]Мнап[/s];	<br>
		[t]&bull; Модификатора специализаций по [s]Нападению[/s] и [s]Благословению[/s] - [s]Мспец[/s];<br>
		[t]&bull; Модификатора удачи - [s]Муд[/s];<br>
		[t]&bull; Прочих модификаторов атаки - [s]Мат[/s];<br><br>
		[t]Таким образом, если остаток здоровья у атакуемого больше наносимого урона, то формула расчета урона [m]Огненного щита[/m] выглядит так:<br><br>
		[t][s]0,2…0,3 * Dбаз * (1 + MD1 + Mнап + Mспец + Mуд + Mат)[/s]<br><br>
		[t]где &bull; [s]Dбаз[/s] - базовый получаемый урон = Кол-во существ в отряде * Урон одного существа;<br>
		[t]&bull; [s]MD1[/s] - модификатор урона = 0,05 * (Атака - Защита). Если атака меньше защиты, то модификатор равен 0;<br>
		[t]&bull; [s]Мнап[/s] - модификатор навыка [s]Нападения[/s] у героя = 0,1…0,3;<br><br>
		[t]&bull; Модификатор специализации:
	</p>
	<table class="split">
		<tr> <td>${!m?'[t]':''}Для специализации по [s]Нападению:[/s]</td> 				<td style="width: 70%">[s]Мспец[/s] = 0,05 * Уровень героя * [s]Мнап[/s];</td> </tr>
		<tr> <td>${!m?'[t]':''}Для специализации по [s]Благословению:[/s]</td> 			<td>[s]Мспец[/s] = 0,03 * Уровень героя / Уровень цели;</td> </tr>
	</table>
	<p>
		[t]&bull; Модификатор удачи:<br>
		[t][s]Муд[/s] = 1 при срабатывании [s]Удачи[/s];<br><br>
		[t]&bull; Прочие модификаторы урона:
	</p>
	<table class="split">
		<tr> <td>${!m?'[t]':''}Модификатор [s]Кавалерийского бонуса[/s]</td> 				<td style="width: ${!m?'70':'50'}%">[s]Мат[/s] = 0,05 * Кол-во клеток;</td> </tr>
		<tr> <td>${!m?'[t]':''}Модификатор [s]Смертельного удара[/s]</td> 					<td>[s]Мат[/s] = 1;</td> </tr>
		<tr> <td>${!m?'[t]':''}Модификатор [s]Двойного урона[/s] боевых машин</td> 			<td>[s]Мат[/s] = 1;</td> </tr>
		<tr> <td>${!m?'[t]':''}Модификатор [s]Тройного урона[/s] [m]Пушки[/m]</td> 	<td>[s]Мат[/s] = 2;</td> </tr>
		<tr> <td>${!m?'[t]':''}Модификатор [s]Ненависти[/s]</td> 							<td>[s]Мат [/s] = 0,5;</td> </tr>
		<tr> <td>${!m?'[t]':''}Модификатор [s]Ненависти у элементалей[/s]</td> 				<td>[s]Мат[/s] = 1;</td> </tr>
		<tr> <td>${!m?'[t]':''}Модификатор [s]Мести[/s] [m]Аспидов[/m]</td> 			<td>[s]Мат[/s] = &#8730; ((Кол-во [m]Аспидов[/m] в начале боя * Здоровье одного [m]Аспида[/m]) / (Суммарное здоровье в данный момент + Здоровье одного [m]Аспида[/m]) - 1) * 100% с округлением вниз.</td> </tr>
	</table>
	<p>
		[t]Если наносимый урон больше, чем остаток здоровья у существа с [m]Огненным щитом[/m] (т.е. цель атаки погибает), то [s]%[/s] берется от полученного урона, равного остатку здоровья.<br><br>
		[t][m]Огненный щит[/m] не срабатывает, если его урон по расчету равен 0. Например, если наносимый [m]Султану-ифриту[/m] урон составляет менее 5 ед., то [m]Огненный щит[/m] не срабатывает, т.к. [s]20% * 4 ед. урона = 0,8[/s], а с округлением получится 0.<br><br>
		[t]После получения расчетного урона, он обрабатывается модификатором урон от магии, это значит, что на урон от [m]Огненного щита[/m] будут влиять:<br><br>
		[t]&bull; Наличие у героя [m]Сферы бушующего огня[/m];<br>
		[t]&bull; Навык [s]Волшебство[/s];<br>
		[t]&bull; Специализация по [s]Волшебству[/s];<br>
		[t]&bull; Игнорирование части урона [s]Големами[/s];<br>
		[t]&bull; Наличие наложенного заклинания [m]Защита от огня[/m].<br><br>
		[t]При этом все, что влияет на шанс наложения заклинания: сопротивления, иммунитеты, Проклятая земля, Антимагический гарнизон, запрещающие колдовать артефакты - на получение урона от [m]Огненного щита[/m] не влияют. Единственное исключение: заклинание не действует на существ с иммунитетом к огню ([m]Ифритов[/m], [m]Элементалей огня[/m] и улучшенных вариантов этих существ).<br><br>
		[t]Интересный факт, что [m]Огненный щит[/m], наложенный героем, снимается сразу после удара [m]Ядовитых змиев[/m] за счет их способности, однако, даже будучи снятым, он все равно нанесет урон змиям прежде, чем исчезнуть.
	</p>
	<h2 id="spells.5">Телепорт</h2>
	<p>
		<img class="story-${!m?'png-':''}img img-in-text-l" data-src="images/spells/teleport.png" alt="Телепорт" height="100">
		[t][m]Телепорт[/m] - весьма полезное заклинание, позволяющее телепортировать свой отряд в любую точку поля боя. Однако у столь простого заклинания имеется подводный камень. Речь идет о [s]крепостных стенах[/s] при осаде города, которые мешают герою телепортировать существ прямо в тыл врага.<br><br>
		[t]Возможности [m]Телепорта[/m] зависят от уровня развития [s]Магии воды[/s] и подробно описаны на странице <a href="spells-page.html">[m]Заклинаний[/m]</a>.<br><br>
		[t]Заклинание имеет интересную особенность: При телепортации на [m]Мину[/m], [m]Зыбучий песок[/m], [m]Стену огня[/m] или городской [s]ров[/s], существо не получит никакого вреда и сможет продолжать свой ход. Однако, если существо пропустит ход или будет ждать, то оно активирует эффект этих объектов.<br><br>
		[t]При использовании [m]Телепорта[/m] в открытом поле или при наличии [s]Экспертной Магии воды[/s], вопросов не возникает, куда нажали - туда и переместили цель, а вот механика, ограничивающая телепортацию через [s]ров[/s] или крепостную [s]стену[/s] не так проста, как кажется на первый взгляд.<br><br>
		[t]Если существо находится справа от городских [s]стен[/s], то и переместить его при помощи [m]Телепорта[/m] получится только на клетки справа от [s]стен[/s], если нет [s]Экспертной Магии воды[/s].<br><br>
		[t]На [s]Продвинутом[/s] уровне [m]Телепорт[/m] позволяет переместить существо прямо на клетку [s]рва[/s]. Исключением является клетка [s]рва[/s] перед [s]воротами[/s]. Попасть на нее можно только, если [s]ворота[/s] сломаны или открыты. Далее, с клетки [s]рва[/s] существо уже нельзя телепортировать ни назад, ни вперед за [s]стены[/s], но можно телепортироваться при помощи заклинания по некоторым клеткам этого [s]рва[/s].
	</p>
	<table class="${!m?'compress':''} left-align">
		${!m? separateTables.wallTeleport : separateTables.wallTeleportM}
	</table>
	<p>
		[t]Тут работает та же механика, описанная в разделе <a href="#2.3">[s]"Стрельба через крепостные стены"[/s]</a>. Фортификационные [s]укрепления[/s] и [s]ров[/s] на поле боя занимают определенные гексы. Гексагональное поле боя в расчетах преобразуется в обычное клеточное и выглядит следующим образом:
	</p>
	<div class="${!m?'block-img':'picture slider'}"><img class="img-${!m?'full':'triple'}-screen" data-src="images/storypictures/battlefield_1.jpg" alt="Траектория стрельбы"></div>
	<p>
		[t]На схемах отмечены крепостные [s]стены[/s] и случаи расстановки существ атакующего (слева от [s]стен[/s]) и клетки справа от [s]стен[/s], когда возможно телепортировать отряд за крепостную [s]стену[/s], имея только [s]Продвинутую Магию воды[/s]. На [s]рис.3[/s] видно, как линии телепортации проходят между фрагментами крепостных [s]стен[/s] и именно поэтому [m]Телепорт[/m] за [s]стены[/s] возможен.<br><br>
		[t]Именно из-за фрагментов [s]стен[/s], мешающих телепортации внутри [s]рва[/s], в таблице выше приведены не все клетки. Так например, с клетки [s]1[/s] нельзя телепортировать существо на клетки [s]8-11[/s], так как на пути к цели стоит [s]стена[/s].<br><br>
		[t]Полный список комбинаций существо-клетка за [s]стеной[/s], на которую можно телепортироваться без [s]Экспертной Магии воды[/s], можно посмотреть в таблице из раздела <a href="#2.3">[s]"Стрельба через крепостные стены"[/s]</a>. Там же можно найти все возможные пути телепортации за городские [s]стены[/s] при наличии [s]проломов[/s] или открытых [s]ворот[/s].<br><br>
		[t]Стоит уделить внимание также двум видам городских [s]рвов[/s]:<br><br>
		[t]&bull; [s]Ров Крепости[/s] имеет двойную ширину и его никак не преодолеть без [s]Экспертной Магии воды[/s]. На [s]Продвинутом[/s] уровне доступны к телепортации только клетки левого края [s]рва[/s], а оттуда можно телепортироваться только по этому же краю [s]рва[/s]. Если принудительно встать на правый край [s]рва[/s], начинают работать все вышеописанные особенности.<br>
		[t]&bull; [s]Ров Башни[/s] не является [s]рвом[/s] в принципе. [s]Мины[/s] возле [s]стен[/s] никак не влияют на возможности передвижения и [m]Телепорта[/m]. Так что даже с [s]Базовой Магией воды[/s] можно телепортировать существ за [s]стены[/s] города, используя вышеописанные правила, по которым линия телепортации может проходить между фрагментами [s]стен[/s]. [s]Мина[/s] не активируется, если существо на нее телепортируется, но взрывается, если это существо пропустит ход или будет ждать.
	</p>
	<h2 id="spells.6">Клон</h2>
	<p>
		<img class="story-${!m?'png-':''}img img-in-text-l" data-src="images/spells/clone.png" alt="Клон" height="100">
		[t]Одним из наиболее эффективных, в тактическом смысле, заклинаний среди доступных герою во время боя является заклинание [m]Клон[/m]. При достаточном запасе маны, герой имеет возможность практически удвоить ударную силу своей армии и избежать огромного количества потерь в своих рядах. Однако, для эффективного использования этого заклинания требуется глубокое знание особенностей его применения и взаимодействия с другими заклинаниями.<br><br>
		[t]Клонированию подлежит любое существо (в том числе магически призванные [m]Элементали[/m] и поднятые [m]Демоны[/m]) любое количество раз за бой, за исключением случаев, когда заклинание не действует, если его целью является:<br><br>
		[t]&bull; Сам [m]Клон[/m];<br>
		[t]&bull; Существо, уже имеющее [m]Клон[/m] на момент сотворения заклинания;<br>
		[t]&bull; Существо, невосприимчивое к заклинаниям 4 уровня (при наличии у героя [m]Сферы уязвимости[/m] клонирование возможно);<br>
		[t]&bull; Существо, на которое наложено заклинание [m]Антимагия[/m] выше [s]Базового уровня[/s].<br><br>
		[t]Магические и тактические особенности [m]Клона[/m]:<br><br>
		[t]&bull; [m]Клон[/m] не наследует никакие заклинания, наложенные на клонируемое существо;<br>
		[t]&bull; [m]Клон[/m] наследует все магические способности существа, но есть исключения: у [m]Клона Султана-ифрита[/m] не действует [m]Огненный щит[/m], так как [m]Клон[/m] фактически имеет нулевое здоровье, а следовательно [m]Огненному щиту[/m] нечего отражать; [m]Клон[/m] не обладает [s]Вампиризмом[/s] по той же причине - [m]Клон[/m] по сути не обладает здоровьем. Способность [m]Фениксов Возрождение[/m] не работает на их [m]Клоне[/m];<br>
		[t]&bull; Против [m]Клона[/m] нельзя применить [m]Снятие заклинаний[/m]. Этим заклинанием можно снять все эффекты с [m]Клона[/m], но он при этом не исчезнет;<br>
		[t]&bull; [m]Клон[/m] невосприимчив к заклинаниям [m]Антимагия[/m], [m]Жертва[/m] и, как говорилось ранее, [m]Клон[/m];<br>
		[t]&bull; [m]Клон[/m] имеет полный стандартный запас магических и тактических навыков существа, даже если оригинал уже израсходовал его до сотворения заклинания (например: [m]Клон[/m] стрелка имеет полный боезапас, [m]Клон[/m] мага имеет возможность колдовать заклинания, [m]Клон Архангела[/m] может вновь воскрешать падших существ и т.д.);<br>
		[t]&bull; За уничтожение [m]Клона[/m] противник не получает дополнительного опыта.<br><br>
		[t][m]Клон[/m] может быть уничтожен в следующих случаях:<br><br>
		[t]&bull; При получении любого урона, будь то обычная атака или атакующее заклинание;<br>
		[t]&bull; При уничтожении клонированного существа (оригинала);<br>
		[t]&bull; По истечении [s]N[/s] раундов после сотворения заклинания, где [s]N[/s] - параметр [s]Силы магии[/s] героя.<br><br>
		[t]Нужно иметь ввиду, что в игре существует ограничение на количество объектов, которые могут принимать участие в бою, причем выведенные из боя объекты (погибшие существа), а также призванные [m]Демоны[/m] и [m]Элементали[/m] также учитываются. Когда счетчик объектов достигает своего максимума (это 20 объектов для каждой из сторон) - никакого другого объекта на поле боя появиться не может - нельзя поднять [m]Демонов[/m], призвать [m]Элементалей[/m] или сотворить [m]Клон[/m]. [s]Боевые машины[/s] также являются объектами и подлежат учету.<br><br>
		[t]Из этого получаем вывод: если думаете, что битва сведется к массовому призыву [m]Элементалей[/m] (такое случается, особенно когда бой затягивается, армии почти не осталось, но есть приличный запас маны), учтите, что каждый призванный слот [m]Демонов[/m] и каждый изначально занятый слот отнимает у вас один отряд [m]Элементалей[/m]. Это может послужить причиной не тащить в бой ненужную [m]Палатку первой помощи[/m] или [m]Подводу с боеприпасами[/m].<br><br>
		[t]Существует маленькая хитрость, которую можно использовать при осаде замка, когда у Вас нет стреляющих и летающих юнитов: Если упереться в [s]Cтену[/s] замка существом, которое хотите закинуть в тыл врага, и окружить себя существами (встав на нужные гексы), [m]Клон[/m] появится за [s]Стеной[/s].<br><br>
		[t]На схеме ниже показаны гексы, в которые будет призван [m]Клон[/m] относительно клонируемого существа. Изначально [m]Клон[/m] призывается на гекс с наименьшим возможным номером, если тот свободен. На левом изображении - схема для одногексовых существ, на правом - для двухгексовых. Если все указанные гексы заняты, то [m]Клон[/m] не призывается и в логе боя будет выведено соответствующее сообщение.
	</p>
	<div class="${!m?'block-img':'picture slider'}"><img class="img-${!m?'full':'double'}-screen" data-src="images/storypictures/clone.png" alt="Места для клона"></div>
	<h2 id="spells.7">Маскировка</h2>
	<p>
		<img class="story-${!m?'png-':''}img img-in-text-l" data-src="images/spells/disguise.png" alt="Маскировка" height="100">
		[t]Заклинание [m]Маскировка[/m] является очень ситуативным. Его суть заключается в том, чтобы скрыть от глаз Вашего оппонента реальный размер армии героя. Оно полностью бесполезно против ИИ и имеет невысокую ценность в турнирных играх с реальными игроками.<br><br>
		[t]На [s]Экспертном[/s] уровне [s]Магии воздуха[/s] заклинание покажет противнику, что в Вашей армии все существа 7 уровня из родного замка. Стоит обратить внимание, что при наличии нескольких стартовых городов, сильнейшее существо для отображения противнику при маскировке выбирается по порядку: [s]Замок[/s] - [s]Сопряжение[/s] - [s]Темница[/s] - [s]Причал[/s] - [s]Башня[/s] - [s]Цитадель[/s] - [s]Оплот[/s] - [s]Некрополис[/s] - [s]Инферно[/s] - [s]Крепость[/s], где [s]Замок[/s] - наивысший приоритет. Если стартовых городов нет, то выбирается по родному городу для класса героя.<br><br>
		[t]Также стоит учитывать, что при игре на последнем по цвету игроке (порядок ходов у игроков следующий: [s]красный[/s], [s]синий[/s], [s]коричневый[/s], [s]зеленый[/s], [s]оранжевый[/s], [s]фиолетовый[/s], [s]бирюзовый[/s], [s]розовый[/s]) [m]Маскировка[/m] не будет работать, так как действует она до конца дня, а послнедний игрок своим ходом этот день завершает. Таким образом на следующий день заклинание уже не будет работать.<br><br>
		[t]Так почему же в турнирных играх маскировка не очень полезна даже на [s]красном[/s] цвете (цвете, который ходит не последним)? Любой продвинутый игрок умеет пользоваться [s]Таверной[/s], а точнее информацией, которую она предоставляет. При наличии нескольких [s]Таверн[/s] оппонент с легкостью сможет просмотреть силу вашей армии, характеристики (если не снимать артефакты) и другие показатели вашего героя. И даже при использованной [m]Маскировке[/m] [s]Таверна[/s] будет отображать действительные показатели. Кроме того, реальный размер армии в некоторых случаях можно проверить второстепенным персонажем.<br><br>
		[t]Иногда встречаются ситуации, когда можно использовать [m]Маскировку[/m] на второстепенном персонаже или спрятать расстановку своей амрии, но в большинстве случаев заклинание нивелируется использованием [s]Таверн[/s], хорошей разведкой и знанием шаблонов.
	</p>
	<h2 id="spells.8">Гипноз</h2>
	<p>
		<img class="story-${!m?'png-':''}img img-in-text-l" data-src="images/spells/hypnotize.png" alt="Гипноз" height="100">
		[t]В этой главе описаны особенности действия заклинания [m]Гипноз[/m]. Само по себе заклинание дает контроль над существом противника, если его здоровье не превышает допустимый порог. Если же здоровье цели выше, то заклинание использовать не удастся. Загипнотизированное существо может не только передвигаться по полю боя, но и атаковать союзные отряды, получая при этом ответные удары.<br><br>
		[t]Свое существо, загипнотизированное противником, нельзя атаковать, однако противник может атаковать Вашего загипнотизированного юнита и тот будет отвечать на атаки. Противник сможет, например, воскрешать своих существ, применив заклинание на Ваших [m]Архангелов[/m], но не сможет ими блокировать ваших стрелков или открыть ворота города при осаде. На загипнотизированного не действуют никакие массовые заклинания, кроме [m]Снятие заклинаний[/m]. [m]Гипноз[/m] снимает эффект [m]Берсерка[/m] при наложении.<br><br>
		[t]При расчетах урона загипнотизированного существа учитываются навыки [s]Нападение[/s], [s]Сопротивление[/s], [s]Стрельба[/s] и [s]Доспехи[/s] того героя, который контролирует его, а не основного владельца. Также учитываются бонусы [s]Удачи[/s] и [s]Боевого духа[/s], отмена штрафов стрельбы от [m]Золотого лука[/m] и [m]Лука снайпера[/m], артефактов, дающих защиту от заклинаний и усиливающих эффект навыков [s]Сопротивление[/s] и [s]Стрельба[/s] у контролирующего героя.<br><br>
		[t]Здоровье отряда для расчета возможности применения [m]Гипноза[/m] считается по максимальному запасу здоровья существа, т.е. слабый герой не сможет, например, взять под контроль 1 [m]Кристаллического дракона[/m], даже если у того осталась [s]1 ед.[/s] здоровья.<br><br>
		[t]На Ваше загипнотизированное существо можно применять заклинания [m]Воскрешение[/m] и [m]Жертва[/m], но нельзя принести в [m]Жертву[/m] само существо. На вражеское существо, загипнотизированное Вами, нельзя использовать [m]Телепорт[/m], Ваше же существо, под [m]Гипнозом[/m] врага, Вы сможете телепортировать.<br><br>
		[t]Заклинания [m]Гипноз[/m] и [m]Берсерк[/m] заменяют друг друга, то есть если на существо наложен [m]Берсерк[/m], то [m]Гипноз[/m] снимет его действие и наоборот.<br><br>
		[t]Если телепортировать существо так далеко, что им некого будет атаковать, то ИИ перестанет его использовать, в т.ч. он не будет перемещаться им (эдакая альтернатива снятию [m]Гипноза[/m]).<br><br>
		[t]Компьютерный игрок не использует заклинание [m]Гипноз[/m], когда в армии оппонента остался один отряд существ.<br><br>
		[t]Если загипнотизированное существо атакует врага с атакой по площади (например [m]Цербер[/m], [m]Гидра[/m], [m]Психический[/m] или [m]Магический элементаль[/m]), то ответный удар такого существа нанесет 0 урона, это является багом игры.
	</p>
	<h2 id="spells.9">Цепная молния</h2>
	<p>
		<img class="story-${!m?'png-':''}img img-in-text-l" data-src="images/spells/chainlightning.png" alt="Цепная молния" height="100">
		[t][m]Цепная молния[/m] - крайне эффективное заклинание для поражения нескольких целей. Однако его применение сильно ограничено в условиях битвы, когда на поле боя вперемешку расположены и ваши, и вражеские существа. В этом разделе будет описано, как молния выбирает цели (имеется ввиду какие цели она будет выбирать по цепочке после первой).<br><br>
		[t]На выбор следующей цели [m]Цепной молнией[/m] влияет:<br><br>
		[t]&bull; Расстояние до цели;<br>
		[t]&bull; Расположение относительно цели;<br>
		[t]&bull; Принадлежность к сражающейся стороне;<br>
		[t]&bull; Размер существа (одногексовое или двухгексовое).<br><br>
		[t][s]Расстояние до цели.[/s]<br><br>
		[t]Тут все просто. Если у двух существ разное расстояние до основной цели. То второй удар [m]Цепной молнии[/m] попадет в того, кто находится ближе. Аналогично выбирается третья, четвертая и пятая цели.<br><br>
		[t][s]Расположение относительно цели, размер существа и принадлежность.[/s]<br><br>
		[t]Если 2 или более существ одной стороны (свои или вражеские) находятся на одном расстоянии от основной цели, то второй удар [m]Цепной молнии[/m] попадет в существо с более высоким приоритетом (1 - наивысший приоритет), согласно схеме:<br><br>
	</p>
	${!m? separateTables.chainPriority : separateTables.chainPriorityM}
	${m?'<div class="picture"><img class="img-full-screen" data-src="images/storypictures/chain_priority_5.png" alt="Приоритет молнии"></div>':''}
	<p>
		${!m?'<img class="story-png-img img-in-text-r" data-src="images/storypictures/chain_priority_5.png" alt="Приоритет молнии" height="250">':''}
		[t]Порядок определения приоритета (На схема ${!m?'справа':'выше'} изображены приоритеты выбора цели [m]Цепной молнией[/m], если расстояние больше 1 гекса):<br><br>
		[t]1) Первым делом приоритет определяется по расстоянию до существа.<br>
		[t]2) Затем приоритет определяется по размеру существа. Если существа разного размера находятся на одном расстоянии от основной цели, то второй удар [m]Цепной молнии[/m] попадет в одногексовое существо, независимо от его приоритета по расположению и принадлежности.<br>
		[t]3) Если существа одного размера находятся на одном расстоянии от основной цели, то определяется приоритет по расположению. Тут есть 2 исключения:<br>
		[t]&bull; Одногексовые существа: Если дружественное существо находится в позиции [s]5[/s], а вражеское - в позиции [s]4[/s], то второй удар [m]Цепной молнии[/m] попадет в дружественное существо, несмотря на более низкий приоритет.<br>
		[t]&bull; Двухгексовые существа: Если дружественное существо находится в позиции [s]2[/s], а вражеское - в позиции [s]1[/s], то второй удар [m]Цепной молнии[/m] попадет в дружественное существо, несмотря на более низкий приоритет.<br>
		[t]4) Если существа одного размера и с одинаковым приоритетом по расположению, но разной принадлежности находятся на одном расстоянии от основной цели, то второй удар [m]Цепной молнии[/m] попадет в дружественное существо.<br><br>
		[t]Данные приоритеты справедливы при выборе цели третьего удара [m]Цепной молнии[/m] и последующих.<br><br>
		[t]Навык [s]Сопротивление[/s], соответствующие артефакты, а также способности [m]Гномов[/m], [m]Кристаллических драконов[/m] или аура [m]Единорогов[/m] дает шанс блокировать эффект заклинания по существу.<br><br>
		[t]При переходе от одной цели к другой, сопротивление проверяется каждый раз. Таким образом, если взять, например, строй существ с номерами по порядку [s]1, 2, 3, 4, 5, 6, 7, 8[/s] и колдовать на [s]№1[/s], то:<br><br>
		[t]&bull; Если сопротивления нет или оно не сработало, урон получат отряды [s]1, 2, 3, 4, 5[/s] (при [s]Экспертном уровне Магии воздуха[/s]).<br>
		[t]&bull; При срабатывании сопротивления на первом отряде, цепь сразу прервется и заклинание полностью нейтрализуется.<br>
		[t]&bull; При срабатывании сопротивления только на втором отряде, цепь продолжит свой путь, и урон получат отряды [s]1, 3, 4, 5, 6[/s].<br>
		[t]&bull; При срабатывании сопротивления на отрядах [s]2, 3, 4, 5[/s], цепь продолжит свой путь, и урон получат отряды [s]1, 6, 7, 8[/s]. То есть заклинание прервется, не поразив пятую цель, так как ее просто нет.
	</p>
	<h2 id="spells.10">Полет</h2>
	<p ${!m?'':'style="min-height: 110px"'}>
		${m?'<img class="story-img img-in-text-l" data-src="images/spells/fly.png" alt="Полет" height="100">':''}
		[t]Заклинание [m]Полет[/m] позволяет герою в течение хода перемещаться через воду, препятствия и объекты, игнорируя штрафы местности (бонусы при этом продолжают действовать), однако оно имеет собственную систему штрафов, зависящих от уровня развития [s]Магии воздуха[/s] у героя. На каждый шаг [s]"в полете"[/s] герой тратит больше очков передвижения ([s]MP[/s]):
	</p>
	<table ${!m?'class="compress"':''}>
		<tr> <th>Уровень навыка Магия воздуха</th> <th>Штраф передвижения</th> </tr>
		<tr> <td>Нет</td> <td>140%</td> </tr>
		<tr> <td>Базовый</td> <td>140%</td> </tr>
		<tr> <td>Продвинутый</td> <td>120%</td> </tr>
		<tr> <td>Экспертный</td> <td>100% (без штрафа)</td> </tr>
	</table>
	<p ${!m?'style="min-height: 410px"':''}>
		${!m?'<img class="story-img img-in-text-r" data-src="images/storypictures/fly_border.jpg" alt="Граница объектов" height="400">':''}
		${!m?'<img class="story-png-img img-in-text-l" data-src="images/spells/fly.png" alt="Полет" height="100">':''}
		[t]Эти штрафы действуют только при [m]Полете[/m] над [s]водой[/s], [s]препятствиями[/s] или [s]землей[/s] со штрафом для данного героя, который больше, чем сам штраф [m]Полета[/m]. Например, при [m]Полете[/m] через [s]Камни[/s] (штраф [s]125%[/s]) без [s]Магии воздуха[/s] (штраф [s]140%[/s]) герой будет тратить [s]125 МР[/s] при движении по горизонтали, но при [s]Продвинутой Магии воздуха[/s] - [s]120 МР[/s], а не [s]125[/s], т.е. берется меньший из штрафов.<br><br>
		[t]Если у героя [s]Экспертный Поиск пути[/s], а следовательно штрафы местности на него не действуют, он будет летать через [s]Болото[/s] с обычной скоростью, даже если у него нет [s]Экспертной Магии воздуха[/s].<br><br>
		[t]Отдельно стоит отметить то, что непроходимые клетки [s]объектов[/s] на карте также считаются препятствиями и при [m]Полете[/m] через [s]объекты[/s] штраф будет действовать. Исключением являются клетки входа в [s]объект[/s], включая клетки прохода через [s]Гарнизон[/s] или [s]Пограничные ворота[/s], даже если на эту клетку герой не встает при посещении (например [s]Таверна[/s]) - при [m]Полете[/m] через них штраф не действует.<br><br>
		[t]Однако имеется один нюанс - клетки входа в [s]объекты[/s] имеют преграду вдоль верхней своей части. Спокойно перелететь через такую клетку (и эту преграду) можно только снизу вверх, но не сверху вниз (изображение ${!m?'справа':'ниже'}). Некоторые [s]объекты[/s] состоят только из клеток входа, и пролетать через них сверху вниз становится проблемой. Это ограничение не относится к подбираемым [s]объектам[/s], [s]Гарнизонам[/s] и [s]объектам[/s], которые можно посещать сверху. Также, Чтобы посетить [s]объект[/s] (кроме свободно проходимого, как, например, свой [s]Гарнизон[/s]) в [m]Полете[/m], необходимо сначала приземлиться на свободную клетку рядом с ним и сразиться с охраной.<br><br>
		${!m?'<br><br>':'</p><div class="picture"><img class="img-full-screen" data-src="images/storypictures/fly_border.jpg" alt="Граница объектов"></div><p>'}
		[t]Если в процессе использования [m]Полета[/m] герой улучшил [s]Магию воздуха[/s], то повторное колдовство [m]Полета[/m] с целью снижения штрафа, не даст эффекта.<br><br>
		[t]Артефакт [m]Крылья ангела[/m] дает герою эффект постоянно наложенного [s]Экспертного[/s] заклинания [m]Полет[/m].
	</p>
	<table ${!m?'class="compress"':''}>
		<tr> <th rowspan="2">Ландшафт</th> <th rowspan="2">Клетка карты</th> <th colspan="3">Затраты МР на 1 шаг в Полете (по прямой / по диагонали)</th> </tr>
		<tr> <th>Нет / Баз. Магия воздуха</th> <th>Продв. Магия воздуха</th> <th>Эксп. Магия воздуха</th> </tr>
		<tr> <td rowspan="2">Без штрафа</td> <td>Препятств${!m?'ие':'.'}</td> <td>140 / 197</td> <td>120 / 169</td> <td>100 / 141</td> </tr>
		<tr> <td>Земля</td> <td>100 / 141</td> <td>100 / 141</td> <td>100 / 141</td> </tr>
		<tr> <td rowspan="2">Камни / Пустоши</td> <td>Препятств${!m?'ие':'.'}</td> <td>140 / 197</td> <td>120 / 169</td> <td>100 / 141</td> </tr>
		<tr> <td>Земля</td> <td>125 / 176</td> <td>120 / 169</td> <td>100 / 141</td> </tr>
		<tr> <td rowspan="2">Песок / Снег</td> <td>Препятств${!m?'ие':'.'}</td> <td>140 / 197</td> <td>120 / 169</td> <td>100 / 141</td> </tr>
		<tr> <td>Земля</td> <td>140 / 197</td> <td>120 / 169</td> <td>100 / 141</td> </tr>
		<tr> <td rowspan="2">Болото</td> <td>Препятств${!m?'ие':'.'}</td> <td>140 / 197</td> <td>120 / 169</td> <td>100 / 141</td> </tr>
		<tr> <td>Земля</td> <td>140 / 197</td> <td>120 / 169</td> <td>100 / 141</td> </tr>
	</table>
	<h2 id="spells.11">Антимагия</h2>
	<p>
		<img class="story-${!m?'png-':''}img img-in-text-l" data-src="images/spells/antimagic.png" alt="Антимагия" height="100">
		[t][m]Антимагия[/m] защищает выбранный дружественный отряд от всех заклинаний 1-3 уровня с [s]Базовой[/s], 1-4 уровня с [s]Продвинутой[/s] и 1-5 уровня с [s]Экспертной Магией земли[/s]. При этом она не защищает от действия [m]Огненного щита[/m], [s]Окаменения[/s] [m]Медуз[/m] и [m]Василисков[/m], [s]Паралича[/s] [m]Скорпикор[/m], [s]Корней[/s] [m]Дендроидов[/m], [s]Болезни[/s] [m]Зомби[/m], [s]Смертельного взгляда[/s] [m]Могучих горгон[/m], [m]Слабости[/m] от [m]Ядовитых змиев[/m] (так как они при атаке снимают сам эффект [m]Антимагии[/m]), [s]Старости[/s] [m]Призрачных драконов[/m], [s]Смертельного удара[/s] [m]Рыцарей смерти[/m]; [s]Яда[/s] [m]Виверн-монархов[/m], [m]Морских змей[/m] и [m]Аспидов[/m].<br><br>
		[t]При наложении заклинание снимает с цели все негативные эффекты кроме [s]Окаменения[/s] [m]Медуз[/m] и [m]Василисков[/m], [s]Паралича[/s] [m]Скорпикор[/m], [s]Корней[/s] [m]Дендроидов[/m], [s]Болезни[/s] [m]Зомби[/m] [s]Старости[/s] [m]Призрачных драконов[/m]; [s]Яда[/s] [m]Виверн-монархов[/m], [m]Морских змей[/m] и [m]Аспидов[/m].<br><br>
		[t][m]Антимагия[/m] может быть снята заклинанием [m]Сниятие заклинаний[/m] и тем же эффектом у [m]Ядовитых змиев[/m] при атаке.
	</p>
	<h2 id="spells.12">Силовое поле</h2>
	<p ${!m?'style="min-height: 260px"':''}>
		<img class="story-${!m?'png-':''}img img-in-text-l" data-src="images/spells/forcefield.png" alt="Силовое поле" height="100">
		${!m?'<img class="story-png-img img-in-text-r" data-src="images/storypictures/forcefields.png" alt="Гексы силового поля" height="250">':''}
		[t][m]Силовое поле[/m] считается крайне сильным заклинанием, особенно при игре против ИИ и на пользовательских картах. Оно зачастую может помочь выиграть бой, в котором нет ни малейшего шанса на победу из-за перевеса в кол-ве войск. При игре против человека заклинание не так эффеткивно но все равно находит свое применение.<br><br>
		[t]Для правильного использования [m]Силового[/m] поля важно знать несколько принципов его работы:<br><br>
		[t]&bull; ИИ не использует [m]Силовое поле[/m] в принципе.<br>
		[t]&bull; Действие [m]Силового поля[/m] может быть прекращено [m]Снятием заклинаний[/m] [s]Экспертной[/s] ступени, а также заклинанием [m]Убрать преграду[/m].<br>
		[t]&bull; Летающие и телепортирующиеся существа могут беспрепятственно проходить сквозь [m]Силовое поле[/m], но не могут остановиться на нем.<br>
		[t]&bull; [m]Силовое поле[/m] нельзя установить на гексы вдоль [s]Стен[/s] замка обороняющегося и на гексы [s]Ворот[/s]. Т.е. где бы игрок не поставил [m]Силовое поле[/m], [s]Ворота[/s] продолжат открываться и закрываться как и обычно (однако можно поставить [m]Силовое поле[/m] за воротами так, чтобы существа в прицнипе не могли подойти к [s]Воротам[/s]). На гексах, где пробиты [s]Стены[/s], можно поставить [m]Силовое поле[/m], но только в том случае, если все гексы [m]Силового поля[/m] помещаются в брешь. Вражеское существо может стать преградой для установки [m]Силового поля[/m] в определенном месте.<br><br>
		[t]Важно знать, что в отличии от [m]Стены огня Силовое поле[/m] не меняет своего положения в зависимости от позиции (нападающий / обороняющийся). На изображении ${!m?'справа':'ниже'} схематично показаны гексы, которые занимает [m]Силовое поле[/m] на [s]Базовом[/s] уровне слева и на [s]Продвинутом[/s] / [s]Экспертном[/s] справа.<br><br>
		[t]Чтобы в большинстве случаев эффективно использовать [m]Силовое поле[/m] необходимо иметь преимущество по [s]Скорости[/s]. Иначе на последнем раунде действия заклинания противник применит [s]Ожидание[/s] и сходит после того, как поле исчезнет, а игрок в свою очередь не успеет поставить новое. Имея преимущество по [s]Скорости[/s] игрок может обновлять [m]Силовое поле[/m] каждый раз когда оно прекращает свое действие и противник не сможет вмешаться в этот процесс. Именно поэтому против оппонента-человека заклинание не так эффективно, так как протвиник имеет множество средств для "обхода" [m]Силового поля[/m].<br><br>
		[t]При условии, что существа врага двухгексовые и имеют [s]Скорость[/s] ниже, чем наши существа, а мы имеем стрелков и [m]Подводу с боеприпасами[/m], оборону в углу карты можно держать до тех пор, пока не закончится мана на установку [m]Силового поля[/m] для защиты стрелков и [m]Подводы[/m] от существ врага.
	</p>
	${m?'<div class="picture"><img data-src="images/storypictures/forcefields.png" alt="Гексы силового поля" height="175"></div>':''}

	<h2 id="spells.13">Заклинания, устанавливаемые на землю</h2>
	<p>
		[t]Заклинания, требующие установки на поле боя: [m]Стена огня[/m], [m]Минное поле[/m], [m]Зыбучие пески[/m] и [m]Силовое поле[/m].<br><br>
		[t]Все перечисленные выше заклинания имеют общую особенность - они устанавливаются на поле битвы и существуют на нем определенное время, однако не любая клетка поля боя подходит для их установки.<br><br>
		[t][s]Мины[/s] от заклинания [m]Минное поле[/m] и [s]Пески[/s] от заклинания [m]Зыбучие пески[/m] появляются на поле боя случайным образом и игрок не может контролировать их расположение, [m]Стена огня[/m] и [m]Силовое поле[/m] устанавливаются игроком в указанную зону.<br><br>
		[t]Никакое из этих заклинаний не может появиться или быть расположено на непроходимых элементах ландшафта, на месте установки другого заклинания (например, нельзя установить [m]Стену огня[/m] на [m]Зыбучих песках[/m] и т.п.) и на живых отрядах существ. В случае [m]Силового поля[/m] и [m]Стены огня[/m], вне зависимости от уровня заклинания, необходимо, чтобы все клетки, которые занимает заклинание, не противоречили необходимым для установки условиям.<br><br>
		[t][m]Мины[/m] и [m]Пески[/m] также не могут появиться на трупах существ (надо учитывать, что при использовании [m]Жертвы[/m] или при убийстве призванных существ, труп на земле не остается). [m]Силовое поле[/m] же напротив можно использовать для того, чтобы погибшее существо нельзя было воскресить. Это аналогично тактике, когда существом встают на труп, блокируя его воскрешение. [m]Стена огня[/m] никак не препятствует воскрешению и более того, при воскрешении существа на [m]Стене[/m], оно не получит урон в момент начала его хода.<br><br>
		[t]Кроме того существуют особые элементы ландшафта (изображение ниже), рядом с которыми невозможно появление и установка всех вышеперечисленных заклинаний. При попытке установки [m]Стены огня[/m] или [m]Силового поля[/m] на такие клетки игра выдает сообщение о том, что заклинание не может поместиться в данной области, хотя фактически клетка доступна для перемещения существ по ней. [m]Пески[/m] и [m]Мины[/m] просто не появляются на этой клетке. Непонятно с чем именно связано существование таких клеток, так как они больше никак не влияют на игровой процесс.
	</p>
		<div class="${!m?'block-img':'picture slider'}"><img class="img-${!m?'full':'double'}-screen" data-src="images/storypictures/blocked_hexes.png" alt="Заблокированные клетки"></div>
	<p>
		[t]Особого внимания заслуживает работа этих заклинаний при осаде замка: Наличие или отсутсвие [s]рва[/s] в замке никак не влияет на установку этих заклинаний за исключением [s]рва[/s] [m]Башни[/m], который состоит из [m]Мин[/m], так как следуя вышеописанному правилу, невозможно установить одно из заклинаний на другом, а [m]Мины[/m] являются таковым. Если же взорвать мины или деактивировать их [m]Снятием заклинаний[/m], на их месте можно будет установить все заклинания.<br><br>
		[t]В проломах [s]стен[/s] также можно установить заклинания, исключение составляет клетка [s]ворот[/s]: даже при разрушенных [s]воротах[/s] на их месте невозможно установить ни одно из заклинаний. Также интересно, что [m]Силовое поле[/m], установленное перед [s]воротами[/s] замка (на клетке куда опускаются [s]ворота[/s]), не блокирует проход существ через [s]Силовое поле[/s], как и не блокирует опускание [s]ворот[/s] при входе и выходе из замка. Это правило справедливо и для вражеских, и для союзных существ при целых и разбитых [s]воротах[/s]. Когда целью является блокирование войск, лучше подпирать [s]ворота[/s] существом / трупом, либо ставить [m]Силовое поле[/m] внутри замка так, чтобы подход к самим [s]воротам[/s] был закрыт.
	</p>

	`},
	{id: 'specialize', text: `
	<h1>Специализация героев по заклинаниям</h1>
	<p>
		[t]Общей особенностью всех героев, имеющих специализацию по заклинаниям, является наличие этого заклинания в [s]Книге заклинаний[/s] в качестве стартового. Даже если у них нет [s]Книги[/s] (по замыслу автора карты), то при ее покупке стартовое заклинание все равно появится, даже если это заклинание запрещено на карте.<br><br>
		[t]У героев, приведенных в таблице ниже, эффективность соответствующих заклинаний усилена тем или иным образом. В формулах расчета будут следующие обозначения: [s]N[/s] - уровень героя; [s]n[/s] - уровень цели заклинания; [s]СМ[/s] - сила магии героя. Значение [s]N / n[/s] округляется вниз, а итоговые - округляются вверх. Уровни [s]Боевых машин[/s]: [m]Пушка[/m] - 6 ур.; [m]Баллиста[/m] - 5 ур.; [m]Палатка первой помощи[/m], [m]Подвода с боеприпасами[/m] и [m]Катапульта[/m] - 1 ур.
	</p>
	${!m?'':'<div class="table-slider">'}
	<table>
		<tr> <th>Специализация</th> 	<th>Герой</th> 							<th ${!m?'':'style="min-width: 350px"'}>Описание</th> </tr>
		<tr> <td>Благословение</td> 	<td>Адель</td> 							<td class="left">Специализация увеличивает урон существа, на которого наложено <mark>Благословение</mark>, на <strong>3%</strong> за каждый уровень героя, кратный уровню этого существа. Формула расчета урона цели для экспертного уровня <strong>Магии воды</strong>:<br>- Если атака нападающего превышает защиту атакуемого:<br><mark class="tab"></mark><strong>Урон цели = (Dmax + 1) * (1 + (Атака - Защита) * 0,05 + [N / n] * 0,03).</strong><br>- Если защита атакуемого превышает атаку нападающего:<br><mark class="tab"></mark><strong>Урон цели = (Dmax + 1) * (1 + (Атака - Защита) * 0,025) * (1 + [N / n] * 0,03)</strong></td> </tr>
		<tr> <td>Воздушный щит</td> 	<td>Даргем</td> 						<td class="left">Специализация увеличивает эффективность <mark>Воздушного щита</mark> на <strong>3%</strong> за каждый уровень героя, кратный уровню целевого существа. Формула расчета эффекта <mark>Воздушного щита</mark> для экспертного уровня <strong>Магии воздуха</strong>:<br><mark class="tab"></mark><strong>Снижение урона = 50% * (1 + [N / n] * 0,03)</strong><br>Максимальная эффективность специализации достигается при достижении <strong>100%</strong>-ного снижения урона (не ниже 1).</td> </tr>
		<tr> <td>Волна смерти</td> 		<td>Септиенна</td> 						<td class="left">Специализация увеличивает урон <mark>Волны смерти</mark> на <strong>3%</strong> за каждый уровень героя, кратный уровню целевого существа. Расчет производится для каждого существа, на которого подействовала <mark>Волна смерти</mark>. Формула расчета урона заклинания для экспертного уровня <strong>Магии земли</strong>:<br><mark class="tab"></mark><strong>Урон = (СМ * 5 + 30) * (1 + [N / n] * 0,03)</strong></td> </tr>
		<tr> <td>Воскрешение</td> 		<td>Аламар, Джеддит</td> 				<td class="left">Специализация усиливает эффект <mark>Воскрешения</mark> на <strong>3%</strong> за каждый уровень героя, кратный уровню воскрешаемого существа. Формула расчета силы <mark>Воскрешения</mark> (в единицах здоровья) для экспертного уровня <strong>Магии земли</strong>:<br><mark class="tab"></mark><strong>Ед.здоровья = (СМ * 50 + 160) * (1 + [N / n] * 0,03)</strong></td> </tr>
		<tr> <td>Гипноз</td> 			<td>Астрал</td> 						<td class="left">Специализация усиливает эффект <mark>Гипноза</mark> на <strong>3%</strong> за каждый уровень героя, кратный уровню целевого существа. Сила заклинания определяет максимальное количество здоровья целевого отряда, на который он сможет подействовать. Формула расчета силы <mark>Гипноза</mark> (максимальное количество здоровья) для экспертного уровня <strong>Магии воздуха</strong>:<br><mark class="tab"></mark><strong>Ед.здоровья = (СМ * 25 + 50) * (1 + [N / n] * 0,03)</strong></td> </tr>
		<tr> <td>Жажда крови</td> 		<td>Аш, Интей</td> 						<td class="left">Специализация усиливает эффект <mark>Жажды крови</mark> на 1...3 единицы, в зависимости от уровня целевого существа. Зависимость силы <mark>Жажды крови</mark> от уровня цели для экспертного уровня <strong>Магии огня</strong>:<br>- Существа 1 и 2 уровня - <strong>Атака +9</strong> (в том числе эффект специализации <strong>+3</strong>);<br>- Существа 3 и 4 уровня - <strong>Атака +8</strong> (в том числе эффект специализации <strong>+2</strong>);<br>- Существа 5 и 6 уровня - <strong>Атака +7</strong> (в том числе эффект специализации <strong>+1</strong>);<br>- Существа 7 уровня - <strong>Атака +6</strong> (нет эффекта специализации).</td> </tr>
		<tr> <td>Забывчивость</td> 		<td>Зилар</td> 							<td class="left">Увеличивает длительность заклинания <mark>Забывчивость</mark> вдвое.</td> </tr>
		<tr> <td>Инферно</td> 			<td>Ксирон</td> 						<td class="left">Специализация увеличивает урон <mark>Инферно</mark> на <strong>3%</strong> за каждый уровень героя, кратный уровню целевого существа. Расчет производится для каждого существа, на которого подействовало <mark>Инферно</mark>. Формула расчета урона заклинания для экспертного уровня <strong>Магии огня</strong>:<br><mark class="tab"></mark><strong>Урон = (СМ * 10 + 80) * (1 + [N / n] * 0,03)</strong></td> </tr>
		<tr> <td>Каменная кожа</td> 	<td>Кси, Дарксторн, Мерист, Лабета</td> <td class="left">Специализация усиливает эффект <mark>Каменной кожи</mark> на 1...3 единицы, в зависимости от уровня целевого существа. Зависимость силы <mark>Каменной кожи</mark> от уровня цели для экспертного уровня <strong>Магии земли</strong>:<br>- Существа 1 и 2 уровня - <strong>Защита +9</strong> (в том числе эффект специализации <strong>+3</strong>);<br>- Существа 3 и 4 уровня - <strong>Защита +8</strong> (в том числе эффект специализации <strong>+2</strong>);<br>- Существа 5 и 6 уровня - <strong>Защита +7</strong> (в том числе эффект специализации <strong>+1</strong>);<br>- Существа 7 уровня - <strong>Защита +6</strong> (нет эффекта специализации).</td> </tr>
		<tr> <td>Клон</td> 				<td>Эоваций</td> 						<td class="left">Первое колдовство заклинания <mark>Клон</mark> за битву создает 2 копии целевого отряда. Если может быть вызван только один <mark>Клон</mark>, то вызывается один и способность считается сработавшей.</td> </tr>
		<tr> <td>Кольцо холода</td> 	<td>Аделаида</td> 						<td class="left">Специализация увеличивает урон <mark>Кольца холода</mark> на <strong>3%</strong> за каждый уровень героя, кратный уровню целевого существа. Расчет производится для каждого существа, на которого подействовало <mark>Кольцо холода</mark>. Формула расчета урона заклинания для экспертного уровня <strong>Магии воды</strong>:<br><mark class="tab"></mark><strong>Урон = (СМ * 10 + 60) * (1 + [N / n] * 0,03)</strong></td> </tr>
		<tr> <td>Ледяная молния</td>	<td>Алагар</td> 						<td class="left">Специализация увеличивает урон <mark>Ледяной молнии</mark> на <strong>3%</strong> за каждый уровень героя, кратный уровню целевого существа. Формула расчета урона <mark>Ледяной молнии</mark> для экспертного уровня <strong>Магии воды</strong>:<br><mark class="tab"></mark><strong>Урон = (СМ * 20 + 50) * (1 + [N / n] * 0,03)</strong><br>При расчете урона <mark>Ледяной молнии Алагара</mark> следует учесть, что он изначально имеет вторичный навык <strong>Волшебство</strong>. Поэтому, в зависимости от уровня его развития, фактический урон <mark>Ледяной молнии</mark> будет увеличен на <strong>5...15%</strong>.</td> </tr>
		<tr> <td>Лечение</td> 			<td>Уланд, Астра</td> 					<td class="left">Специализация усиливает эффект <mark>Лечения</mark> на <strong>3%</strong> за каждый уровень героя, кратный уровню излечиваемого существа. Формула расчета силы <mark>Лечения</mark> (в единицах здоровья) для экспертного уровня <strong>Магии воды</strong>:<br><mark class="tab"></mark><strong>Ед.здоровья = (СМ * 5 + 30) * (1 + [N / n] * 0,03)</strong></td> </tr>
		<tr> <td>Волшебная стрела</td> 	<td>Циель</td> 							<td class="left">Специализация увеличивает итоговый урон <mark>Волшебной стрелы</mark> на <strong>50%</strong>.</td> </tr>
		<tr> <td>Метеоритный дождь</td> <td>Эйслин, Димер</td> 					<td class="left">Специализация увеличивает урон <mark>Метеоритного дождя</mark> на <strong>3%</strong> за каждый уровень героя, кратный уровню целевого существа. Расчет производится для каждого существа, на которого подействовал <mark>Метеоритный дождь</mark>. Формула расчета урона заклинания для экспертного уровня <strong>Магии земли</strong>:<br><mark class="tab"></mark><strong>Урон = (СМ * 25 + 100) * (1 + [N / n] * 0,03)</strong></td> </tr>
		<tr> <td>Молитва</td> 			<td>Лойнис</td> 						<td class="left">Специализация усиливает эффект <mark>Молитвы</mark> на 1...3 единицы, в зависимости от уровня целевого существа. Зависимость силы <mark>Молитвы</mark> от уровня цели для экспертного уровня <strong>Магии воды</strong>:<br>- Существа 1 и 2 уровня - <strong>Атака</strong>, <strong>Защита</strong> и <strong>Скорость +7</strong> (в том числе эффект специализации <strong>+3</strong>);<br>- Существа 3 и 4 уровня - <strong>Атака</strong>, <strong>Защита</strong> и <strong>Скорость +6</strong> (в том числе эффект специализации <strong>+2</strong>);<br>- Существа 5 и 6 уровня - <strong>Атака</strong>, <strong>Защита</strong> и <strong>Скорость +5</strong> (в том числе эффект специализации <strong>+1</strong>);<br>- Существа 7 уровня - <strong>Атака</strong>, <strong>Защита</strong> и <strong>Скорость +4</strong> (нет эффекта специализации).</td> </tr>
		<tr> <td>Огненный шар</td> 		<td>Ксарфакс, Манфред</td> 				<td class="left">Специализация увеличивает урон <mark>Огненного шара</mark> на <strong>3%</strong> за каждый уровень героя, кратный уровню целевого существа. Расчет производится для каждого существа, на которого подействовал <mark>Огненный шар</mark>. Формула расчета урона заклинания для экспертного уровня <strong>Магии огня</strong>:<br><mark class="tab"></mark><strong>Урон = (СМ * 10 + 60) * (1 + [N / n] * 0,03)</strong></td> </tr>
		<tr> <td>Поднять мертвецов</td> <td>Тант</td> 							<td class="left">Специализация усиливает эффект <mark>Поднятия мертвецов</mark> на <strong>3%</strong> за каждый уровень героя, кратный уровню оживляемого существа. Формула расчета силы <mark>Поднятия мертвецов</mark> (в единицах здоровья) для экспертного уровня <strong>Магии земли</strong>:<br><mark class="tab"></mark><strong>Ед.здоровья = (СМ * 50 + 160) * (1 + [N / n] * 0,03)</strong></td> </tr>
		<tr> <td>Палач</td> 			<td>Короний</td> 						<td class="left">Специализация усиливает эффект <mark>Палача</mark> на 1…4 единицы, в зависимости от уровня целевого существа. Зависимость силы <mark>Палача</mark> от уровня цели для экспертного уровня <strong>Магии огня</strong>:- Существа 1 уровня - <strong>Атака +12</strong> (в том числе эффект специализации <strong>+4</strong>);<br>- Существа 2 уровня - <strong>Атака +11</strong> (в том числе эффект специализации <strong>+3</strong>);<br>- Существа 3 уровня - <strong>Атака +10</strong> (в том числе эффект специализации <strong>+2</strong>);<br>- Существа 4 уровня - <strong>Атака +9</strong> (в том числе эффект специализации <strong>+1</strong>);<br>- Существа 5, 6 и 7 уровня - <strong>Атака +8</strong> (нет эффекта специализации).</td> </tr>
		<tr> <td>Разрушающий луч</td> 	<td>Анаин</td> 							<td class="left">Специализация усиливает эффект <mark>Разрушающего луча</mark> на 2 единицы.</td> </tr>
		<tr> <td>Слабость</td> 			<td>Катберт, Олема, Мирланда</td> 		<td class="left">Специализация усиливает эффект <mark>Слабости</mark> на 1...3 единицы, в зависимости от уровня целевого существа. Зависимость силы <mark>Слабости</mark> от уровня цели для экспертного уровня <strong>Магии воды</strong>:<br>- Существа 1 и 2 уровня - <strong>Атака -9</strong> (в том числе эффект специализации <strong>-3</strong>);<br>- Существа 3 и 4 уровня - <strong>Атака -8</strong> (в том числе эффект специализации <strong>-2</strong>);<br>- Существа 5 и 6 уровня - <strong>Атака -7</strong> (в том числе эффект специализации <strong>-1</strong>);<br>- Существа 7 уровня - <strong>Атака -6</strong> (нет эффекта специализации).</td> </tr>
		<tr> <td>Стена огня</td> 		<td>Луна</td> 							<td class="left">Специализация увеличивает итоговый урон <mark>Стены огня</mark> на <strong>100%</strong>.</td> </tr>
		<tr> <td>Точность</td> 			<td>Зубин</td> 							<td class="left">Специализация усиливает эффект <mark>Точности</mark> на 1...3 единицы, в зависимости от уровня целевого существа. Зависимость силы <mark>Точности</mark> от уровня цели для экспертного уровня <strong>Магии воздуха</strong>:<br>- Существа 1 и 2 уровня - <strong>Атака +9</strong> (в том числе эффект специализации <strong>+3</strong>);<br>- Существа 3 и 4 уровня - <strong>Атака +8</strong> (в том числе эффект специализации <strong>+2</strong>);<br>- Существа 5 и 6 уровня - <strong>Атака +7</strong> (в том числе эффект специализации <strong>+1</strong>);<br>- Существа 7 уровня (<mark>Титан</mark>) - <strong>Атака +6</strong> (нет эффекта специализации).</td> </tr>
		<tr> <td>Удача</td> 			<td>Мелодиа, Дейрмиф</td> 				<td class="left">Специализация усиливает эффект <mark>Удачи</mark> до максимума - <strong>+3</strong> к <strong>Удаче</strong> целевого существа, не зависимо от уровня развития <strong>Магии воздуха</strong>. Максимальная <strong>Удача</strong> существа не может быть больше <strong>+3</strong> единиц (шанс <strong>12,5%</strong>).</td> </tr>
		<tr> <td>Ускорение</td> 		<td>Кира, Терек, Брисса</td> 			<td class="left">Специализация усиливает эффект <mark>Ускорения</mark> на 1...3 единицы, в зависимости от уровня целевого существа. Зависимость силы <mark>Ускорения</mark> от уровня цели для экспертного уровня <strong>Магии воздуха</strong>:<br>- Существа 1 и 2 уровня - <strong>Скорость +8</strong> (в том числе эффект специализации <strong>+3</strong>);<br>- Существа 3 и 4 уровня - <strong>Скорость +7</strong> (в том числе эффект специализации <strong>+2</strong>);<br>- Существа 5 и 6 уровня - <strong>Скорость +6</strong> (в том числе эффект специализации <strong>+1</strong>);<br>- Существа 7 уровня - <strong>Скорость +5</strong> (нет эффекта специализации).</td> </tr>
		<tr> <td>Цепная молния</td> 	<td>Солмир</td> 						<td class="left">Специализация увеличивает урон <mark>Цепной молнии</mark> на <strong>3%</strong> за каждый уровень героя, кратный уровню целевого существа. Расчет производится для каждого существа, на которого подействовала <mark>Цепная молния</mark>, причем сначала производится расчет базового урона для каждой цели, а затем только он модифицируется по указанной ниже формуле. Формула расчета урона заклинания для экспертного уровня <strong>Магии воздуха</strong>:<br><mark class="tab"></mark><strong>Урон = (СМ * 40 + 100) * (1 + [N / n] * 0,03)</strong></td> </tr>
	</table>
	${!m?'':'</div>'}
	`},

	{id: 'secondary', text: `
	<h1>Вторичные навыки</h1>
	<p>
		[t]Вторичные навыки представляют собой изучаемые и улучшаемые способности героя, которые так или иначе влияют на игровой процесс и на возможности персонажа, как на поле боя, так и на карте приключений. Всего в игре существует [s]29 Вторичных навыков[/s] (внизу приведена таблица с полным описанием каждого из них).<br><br>
		[t]Каждый герой (не считая случаев, если он был настроен специальным образом автором карты) изначально владеет двумя Вторичными навыками [s]Базового[/s] уровня, либо одним, но [s]Продвинутого[/s] (для не настроенных заранее персонажей стартовый набор Вторичных навыков фиксирован; его можно посмотреть на странице <a href="heroes-page${!m?'':'-m'}.html">[s]Героев[/s]</a> для каждого в отдельности).<br><br>
		[t]Максимально герой может владеть восемью навыками, исключение составляет тот случай, когда на карте доступно менее 8 Вторичных навыков (минимальное количество Вторичных навыков, которое можно установить в настройках карты - четыре), и каждый навык имеет три ступени: [s]Базовая[/s], [s]Продвинутая[/s] и [s]Экспертная[/s]. Ступени навыка влияют на его эффективность и функционал, и с изменением уровня навыка меняется его иконка.<br><br>
		[t]Кроме навыков, имеющихся на старте игры, герой может обучиться им, получая [s]Опыт[/s] и уровни соответственно, либо из объектов, содержащих Вторичные навыки. К таким объектам относятся: [m]События[/m], [m]Ящики пандоры[/m], [m]Ученые[/m], задания в [m]Хижинах провидца[/m], [m]Хижины ведьмы[/m] и [m]Университеты[/m] ([m]Университет[/m] также может быть построен в [m]Сопряжении[/m]). Здесь же стоит упомянуть [m]Лачугу отшельника[/m], которая позволяет улучшать случайный из изученных Вторичных навыков с [s]Базового[/s] уровня до [s]Продвинутого[/s].<br><br>
		[t]При генерации случайной карты автоматически заблокирован навык [s]Сопротивление[/s] и, в случае отсутствия на карте воды, [s]Навигация[/s].<br><br>
		[t]Получение навыка в объектах происходит по строгим принципам работы самих объектов (подробнее на странице <a href="objects-page${!m?'':'-m'}.html">[s]Игровых объектов[/s]</a>), в случае же получения Вторичного навыка с повышением уровня персонажа все сложнее:<br><br>
		[t]При получении каждого нового уровня герою предлагается выбор: улучшение имеющегося Вторичного навыка на одну ступень или новый Вторичный навык [s]Базового[/s] уровня. Если не [s]Экспертных[/s] навыков у героя нет, то предлагается выбор из двух новых навыков. Когда у героя не осталось свободных слотов под Вторичные навыки, то предлагается выбор из двух улучшений уже имеющихся. Если же у героя не осталось свободных слотов и все его навыки [s]Экспертного[/s] уровня, то на этом прокачка Вторичных навыков героя прекращается.<br><br>
		[t]Сложность состоит в том, что вероятность получения нового навыка не случайна и напрямую зависит от [s]класса[/s] героя. Вероятность улучшения имеющегося навыка такая же, как и вероятность его получения как если бы он выбирался из ряда неизученных.<br><br>
		[t]Ниже приведена таблица вероятности получения Вторичных навыков для героя каждого класса (фактически в таблице указаны не совсем проценты, т.к. их сумма не равна [s]100[/s]. Приведенные числа следует интерпретировать, как доли от суммы процентов. Например [s]Волшебство[/s] для [s]Священников[/s] - [s]5%[/s] - это [s]5 / 112[/s], по факту [s]4,462%[/s]). Если в поле стоит прочерк, значит класс не может выучить данный Вторичный навык путем повышения уровня:
	</p>
		${!m?'':'<div class="table-slider">'}
		<table ${!m?'class="compress"':''}>
			<tr> <th>Вторичный навык / Класс героя</th> <th class="vertical">Рыцарь</th> <th class="vertical">Священник</th> <th class="vertical">Рэйнджер</th> <th class="vertical">Друид</th> <th class="vertical">Алхимик</th> <th class="vertical">Маг</th> <th class="vertical">Демон</th> <th class="vertical">Еретик</th> <th class="vertical">Рыцарь смерти</th> <th class="vertical">Некромант</th> <th class="vertical">Лорд</th> <th class="vertical">Чернокнижник</th> <th class="vertical">Варвар</th> <th class="vertical">Боевой маг</th> <th class="vertical">Хозяин зверей</th> <th class="vertical">Ведьма</th> <th class="vertical">Путешественник</th> <th class="vertical">Элементалист</th> <th class="vertical">Капитан</th> <th class="vertical">Навигатор</th> </tr>
			<tr> <td>Артиллерия</td> <td>5%</td> <td>2%</td> <td>6%</td> <td>1%</td> <td>4%</td> <td>1%</td> <td>5%</td> <td>4%</td> <td>5%</td> <td>3%</td> <td>8%</td> <td>1%</td> <td>8%</td> <td>4%</td> <td>8%</td> <td>1%</td> <td>8%</td> <td>1%</td> <td>5%</td> <td>1%</td> </tr>
			<tr> <td>Баллистика</td> <td>8%</td> <td>4%</td> <td>4%</td> <td>4%</td> <td>6%</td> <td>4%</td> <td>7%</td> <td>6%</td> <td>7%</td> <td>5%</td> <td>7%</td> <td>6%</td> <td>8%</td> <td>6%</td> <td>7%</td> <td>8%</td> <td>8%</td> <td>4%</td> <td>5%</td> <td>2%</td> </tr>
			<tr> <td>Волшебство</td> <td>1%</td> <td>5%</td> <td>2%</td> <td>6%</td> <td>3%</td> <td>8%</td> <td>3%</td> <td>6%</td> <td>4%</td> <td>6%</td> <td>2%</td> <td>10%</td> <td>1%</td> <td>6%</td> <td>1%</td> <td>8%</td> <td>1%</td> <td>8%</td> <td>2%</td> <td>6%</td> </tr>
			<tr> <td>Грамотность</td> <td>1%</td> <td>6%</td> <td>1%</td> <td>8%</td> <td>3%</td> <td>9%</td> <td>2%</td> <td>5%</td> <td>2%</td> <td>6%</td> <td>1%</td> <td>8%</td> <td>1%</td> <td>4%</td> <td>1%</td> <td>7%</td> <td>1%</td> <td>8%</td> <td>1%</td> <td>5%</td> </tr>
			<tr> <td>Дипломатия</td> <td>4%</td> <td>7%</td> <td>4%</td> <td>4%</td> <td>3%</td> <td>4%</td> <td>4%</td> <td>3%</td> <td>2%</td> <td>4%</td> <td>3%</td> <td>4%</td> <td>1%</td> <td>3%</td> <td>1%</td> <td>2%</td> <td>2%</td> <td>4%</td> <td>5%</td> <td>2%</td> </tr>
			<tr> <td>Доспехи</td> <td>5%</td> <td>3%</td> <td>8%</td> <td>3%</td> <td>8%</td> <td>1%</td> <td>7%</td> <td>4%</td> <td>5%</td> <td>2%</td> <td>6%</td> <td>1%</td> <td>6%</td> <td>4%</td> <td>10%</td> <td>4%</td> <td>5%</td> <td>1%</td> <td>2%</td> <td>1%</td> </tr>
			<tr> <td>Орлиный глаз</td> <td>2%</td> <td>6%</td> <td>2%</td> <td>7%</td> <td>3%</td> <td>8%</td> <td>3%</td> <td>4%</td> <td>4%</td> <td>7%</td> <td>2%</td> <td>8%</td> <td>2%</td> <td>5%</td> <td>1%</td> <td>10%</td> <td>2%</td> <td>8%</td> <td>4%</td> <td>2%</td> </tr>
			<tr> <td>Поместья</td> <td>6%</td> <td>3%</td> <td>2%</td> <td>3%</td> <td>4%</td> <td>5%</td> <td>3%</td> <td>2%</td> <td>-</td> <td>3%</td> <td>4%</td> <td>5%</td> <td>2%</td> <td>1%</td> <td>1%</td> <td>1%</td> <td>3%</td> <td>3%</td> <td>4%</td> <td>2%</td> </tr>
			<tr> <td>Интеллект</td> <td>1%</td> <td>6%</td> <td>2%</td> <td>7%</td> <td>4%</td> <td>10%</td> <td>2%</td> <td>6%</td> <td>5%</td> <td>6%</td> <td>1%</td> <td>8%</td> <td>1%</td> <td>5%</td> <td>1%</td> <td>7%</td> <td>1%</td> <td>8%</td> <td>3%</td> <td>8%</td> </tr>
			<tr> <td>Лидерство</td> <td>10%</td> <td>2%</td> <td>6%</td> <td>2%</td> <td>3%</td> <td>4%</td> <td>3%</td> <td>2%</td> <td>-</td> <td>-</td> <td>8%</td> <td>3%</td> <td>5%</td> <td>4%</td> <td>5%</td> <td>1%</td> <td>3%</td> <td>3%</td> <td>6%</td> <td>2%</td> </tr>
			<tr> <td>Логистика</td> <td>5%</td> <td>4%</td> <td>5%</td> <td>5%</td> <td>6%</td> <td>2%</td> <td>10%</td> <td>3%</td> <td>5%</td> <td>4%</td> <td>8%</td> <td>2%</td> <td>7%</td> <td>9%</td> <td>8%</td> <td>3%</td> <td>8%</td> <td>2%</td> <td>6%</td> <td>3%</td> </tr>
			<tr> <td>Магия воды</td> <td>4%</td> <td>4%</td> <td>3%</td> <td>4%</td> <td>2%</td> <td>3%</td> <td>1%</td> <td>2%</td> <td>3%</td> <td>3%</td> <td>-</td> <td>2%</td> <td>-</td> <td>3%</td> <td>2%</td> <td>3%</td> <td>2%</td> <td>6%</td> <td>2%</td> <td>9%</td> </tr>
			<tr> <td>Магия воздуха</td> <td>3%</td> <td>4%</td> <td>1%</td> <td>2%</td> <td>4%</td> <td>6%</td> <td>2%</td> <td>3%</td> <td>2%</td> <td>3%</td> <td>1%</td> <td>2%</td> <td>3%</td> <td>3%</td> <td>1%</td> <td>3%</td> <td>2%</td> <td>6%</td> <td>3%</td> <td>6%</td> </tr>
			<tr> <td>Магия земли</td> <td>2%</td> <td>3%</td> <td>3%</td> <td>4%</td> <td>3%</td> <td>3%</td> <td>3%</td> <td>4%</td> <td>4%</td> <td>8%</td> <td>3%</td> <td>5%</td> <td>3%</td> <td>3%</td> <td>3%</td> <td>3%</td> <td>3%</td> <td>6%</td> <td>4%</td> <td>5%</td> </tr>
			<tr> <td>Магия огня</td> <td>1%</td> <td>2%</td> <td>-</td> <td>1%</td> <td>1%</td> <td>2%</td> <td>4%</td> <td>5%</td> <td>1%</td> <td>2%</td> <td>2%</td> <td>5%</td> <td>2%</td> <td>3%</td> <td>-</td> <td>3%</td> <td>3%</td> <td>6%</td> <td>2%</td> <td>2%</td> </tr>
			<tr> <td>Мистицизм</td> <td>2%</td> <td>4%</td> <td>3%</td> <td>6%</td> <td>4%</td> <td>8%</td> <td>2%</td> <td>10%</td> <td>4%</td> <td>6%</td> <td>3%</td> <td>8%</td> <td>3%</td> <td>4%</td> <td>2%</td> <td>8%</td> <td>3%</td> <td>8%</td> <td>1%</td> <td>3%</td> </tr>
			<tr> <td>Мудрость</td> <td>3%</td> <td>7%</td> <td>3%</td> <td>8%</td> <td>6%</td> <td>10%</td> <td>4%</td> <td>8%</td> <td>6%</td> <td>8%</td> <td>3%</td> <td>10%</td> <td>2%</td> <td>6%</td> <td>2%</td> <td>8%</td> <td>2%</td> <td>8%</td> <td>1%</td> <td>8%</td> </tr>
			<tr> <td>Навигация</td> <td>8%</td> <td>5%</td> <td>3%</td> <td>2%</td> <td>3%</td> <td>1%</td> <td>4%</td> <td>2%</td> <td>8%</td> <td>5%</td> <td>4%</td> <td>4%</td> <td>2%</td> <td>-</td> <td>8%</td> <td>6%</td> <td>5%</td> <td>4%</td> <td>6%</td> <td>6%</td> </tr>
			<tr> <td>Нападение</td> <td>7%</td> <td>4%</td> <td>5%</td> <td>1%</td> <td>6%</td> <td>1%</td> <td>8%</td> <td>4%</td> <td>7%</td> <td>3%</td> <td>8%</td> <td>1%</td> <td>10%</td> <td>8%</td> <td>5%</td> <td>2%</td> <td>9%</td> <td>1%</td> <td>9%</td> <td>4%</td> </tr>
			<tr> <td>Обучаемость</td> <td>4%</td> <td>4%</td> <td>4%</td> <td>4%</td> <td>10%</td> <td>4%</td> <td>4%</td> <td>4%</td> <td>4%</td> <td>4%</td> <td>4%</td> <td>4%</td> <td>4%</td> <td>4%</td> <td>4%</td> <td>4%</td> <td>8%</td> <td>4%</td> <td>2%</td> <td>4%</td> </tr>
			<tr> <td>Первая помощь</td> <td>2%</td> <td>10%</td> <td>3%</td> <td>7%</td> <td>2%</td> <td>7%</td> <td>2%</td> <td>5%</td> <td>-</td> <td>-</td> <td>1%</td> <td>6%</td> <td>1%</td> <td>4%</td> <td>6%</td> <td>8%</td> <td>1%</td> <td>4%</td> <td>2%</td> <td>4%</td> </tr>
			<tr> <td>Поиск пути</td> <td>4%</td> <td>2%</td> <td>7%</td> <td>5%</td> <td>4%</td> <td>2%</td> <td>4%</td> <td>4%</td> <td>4%</td> <td>6%</td> <td>5%</td> <td>2%</td> <td>8%</td> <td>4%</td> <td>8%</td> <td>2%</td> <td>6%</td> <td>2%</td> <td>8%</td> <td>6%</td> </tr>
			<tr> <td>Разведка</td> <td>4%</td> <td>3%</td> <td>7%</td> <td>2%</td> <td>4%</td> <td>2%</td> <td>5%</td> <td>3%</td> <td>4%</td> <td>2%</td> <td>5%</td> <td>2%</td> <td>8%</td> <td>4%</td> <td>7%</td> <td>2%</td> <td>6%</td> <td>2%</td> <td>4%</td> <td>2%</td> </tr>
			<tr> <td>Сопротивление</td> <td>5%</td> <td>2%</td> <td>9%</td> <td>1%</td> <td>5%</td> <td>-</td> <td>6%</td> <td>3%</td> <td>5%</td> <td>1%</td> <td>6%</td> <td>-</td> <td>6%</td> <td>4%</td> <td>5%</td> <td>-</td> <td>2%</td> <td>-</td> <td>3%</td> <td>5%</td> </tr>
			<tr> <td>Помехи</td> <td>5%</td> <td>-</td> <td>9%</td> <td>-</td> <td>5%</td> <td>-</td> <td>6%</td> <td>-</td> <td>5%</td> <td>-</td> <td>6%</td> <td>-</td> <td>6%</td> <td>1%</td> <td>5%</td> <td>-</td> <td>2%</td> <td>-</td> <td>3%</td> <td>1%</td> </tr>
			<tr> <td>Стрельба</td> <td>5%</td> <td>3%</td> <td>8%</td> <td>5%</td> <td>5%</td> <td>2%</td> <td>6%</td> <td>4%</td> <td>5%</td> <td>2%</td> <td>6%</td> <td>2%</td> <td>7%</td> <td>4%</td> <td>7%</td> <td>3%</td> <td>8%</td> <td>2%</td> <td>9%</td> <td>6%</td> </tr>
			<tr> <td>Тактика</td> <td>7%</td> <td>2%</td> <td>5%</td> <td>1%</td> <td>4%</td> <td>1%</td> <td>6%</td> <td>4%</td> <td>5%</td> <td>2%</td> <td>10%</td> <td>1%</td> <td>8%</td> <td>5%</td> <td>6%</td> <td>1%</td> <td>8%</td> <td>1%</td> <td>6%</td> <td>4%</td> </tr>
			<tr> <td>Удача</td> <td>3%</td> <td>5%</td> <td>6%</td> <td>9%</td> <td>2%</td> <td>4%</td> <td>2%</td> <td>2%</td> <td>1%</td> <td>1%</td> <td>1%</td> <td>2%</td> <td>3%</td> <td>2%</td> <td>2%</td> <td>4%</td> <td>2%</td> <td>2%</td> <td>7%</td> <td>4%</td> </tr>
			<tr> <td>Некромантия</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>10%</td> <td>10%</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> </tr>
		</table>
		${!m?'':'</div>'}
	<p>
		[t]Кроме того, существуют "обязательные предложения" навыков:<br><br>
		[t]&bull; Если герою-воину еще не предлагали [s]Магию стихии[/s], то ему предложат одну из них на [s]4[/s], [s]8[/s], [s]12[/s] и т.д. уровнях. Если ему предложили одну из стихий, в соответствии с вероятностью, на другом уровне, то счетчик сбрасывается. Например, если герою предложили [s]Магию огня[/s] на 2 уровне, то повторно любую из [s]Магий стихий[/s] предложат на [s]6[/s], [s]10[/s], [s]14[/s] и т.д. уровнях, то есть каждые 4 уровня;<br>
		[t]&bull; Если герою-воину еще не предлагали [s]Мудрость[/s], то ему предложат ее на [s]6[/s], [s]12[/s], [s]18[/s] и т.д. уровнях. Если предложили на другом уровне, то счетчик сбрасывается, как и в предыдущем случае;<br>
		[t]&bull; Если герою-магу еще не предлагали [s]Магию стихии[/s], то ему предложат одну из них на [s]3[/s], [s]6[/s], [s]9[/s] и т.д. уровнях. Если предложили на другом уровне, то счетчик сбрасывается;<br>
		[t]&bull; Если герою-магу еще не предлагали [s]Мудрость[/s], то ему предложат ее на [s]3[/s], [s]6[/s], [s]9[/s] и т.д. уровнях. Если предложили на другом уровне, то счетчик сбрасывается;<br>
		[t]&bull; Обязательные предложения справедливы и для [s]Продвинутых[/s] / [s]Экспертных[/s] уровней навыков.<br><br>
		[t]Если совпадает так, что на одном и том же уровне должны появиться обязательные предложения и [s]Магии стихии[/s], и [s]Мудрости[/s], то в первую очередь появится [s]Мудрость[/s], т.е. она имеет более высокий приоритет. Однако это не отменяет вероятности появиться [s]Магии стихии[/s] благодаря вероятности из таблицы и не распространяется на случай, когда благодаря вероятности из таблицы одновременно предлагаются и [s]Мудрость[/s], и [s]Магия стихии[/s].<br><br>
		[t]Ниже представлено описание всех Вторичных навыков на каждой ступени их развития:
	</p>
		${!m?'':'<div class="table-slider">'}
		<table>
			<tr> <th colspan="2" rowspan="2">Вторичный навык</th> <th colspan="4">Уровень</th></tr>
			<tr> <th>Без навыка</th> <th>Базовый</th> <th>Продвинутый</th> <th>Экспертный</th> </tr>
			<tr>
				<td>Артиллерия</td>
				<td ${!m?'style="min-width: 243px"':''} class="td-picture"><img height="75" data-src="images/secondary/artillery${!m?'.png':'-m.jpg'}" alt="Иконка навыков"></td>
				<td>[m]Баллиста[/m], [m]Пушка[/m] и [s]Стрелковые башни[/s] стреляют автоматически</td>
				<td>Контроль над [m]Баллистой[/m], [m]Пушкой[/m] и [s]Стрелковыми башнями[/s]. [s]50%[/s] шанс двойного урона [m]Баллисты[/m]. Увеличенный шанс попадания и урон по укреплениям из [m]Пушки[/m]</td>
				<td>То же, но [s]75%[/s] шанс двойного урона [m]Баллисты[/m], двойной выстрел [m]Баллисты[/m] и двойной урон [m]Пушки[/m]</td>
				<td>То же, но двойной урон [m]Баллисты[/m], тройной урон [m]Пушки[/m], максимальный шанс попадания и урон по укреплениям из [m]Пушки[/m]</td>
			</tr>
			<tr>
				<td>Баллистика</td>
				<td class="td-picture"><img height="75" data-src="images/secondary/ballistic${!m?'.png':'-m.jpg'}" alt="Иконка навыков"></td>
				<td>[m]Катапульта[/m] стреляет автоматически</td>
				<td>Контроль над [m]Катапультой[/m]. Увеличенный шанс попадания и урон по укреплениям</td>
				<td>То же и [m]Катапульта[/m] делает двойной выстрел</td>
				<td>То же, но максимальный шанс попадания и урон по укреплениям</td>
			</tr>
			<tr>
				<td>Волшебство</td>
				<td class="td-picture"><img height="75" data-src="images/secondary/sorcery${!m?'.png':'-m.jpg'}" alt="Иконка навыков"></td>
				<td>Базовый урон ударных заклинаний</td>
				<td>[s]+5%[/s] к урону ударных заклинаний, включая [m]Минное поле[/m], [m]Стену огня[/m] и урон мин при обороне [m]Башни[/m] (Округление вниз)</td>
				<td>То же, но [s]+10%[/s] к урону (Округление вниз)</td>
				<td>То же, но [s]+15%[/s] к урону (Округление вниз)</td>
			</tr>
			<tr>
				<td rowspan="2">Грамотность</td>
				<td rowspan="2" class="td-picture"><img height="75" data-src="images/secondary/scholar${!m?'.png':'-m.jpg'}" alt="Иконка навыков"></td>
				<td rowspan="2">Герои не могут обучать друг друга заклинаниям при встрече</td>
				<td>При встрече героя, владеющего [s]Грамотностью[/s], с любым другим героем, они изучают заклинания [s]1-2[/s] уровней друг у друга, которых еще не знают</td>
				<td>То же, но изучаются заклинания [s]1-3[/s] уровней</td>
				<td>То же, но изучаются заклинания [s]1-4[/s] уровней</td>
			</tr>
			<tr> <td class="left-align-cell" colspan="3">[s]Внимание![/s] Герои не могут обучать друг друга заклинаниям, которые дают им артефакты или [m]Свитки с заклинаниями[/m]. Для изучения заклинания от другого героя при помощи [s]Грамотности[/s] необходимо иметь соответствующий уровень [s]Мудрости[/s]</td> </tr>
			<tr>
				<td>Дипломатия</td>
				<td class="td-picture"><img height="75" data-src="images/secondary/diplomacy${!m?'.png':'-m.jpg'}" alt="Иконка навыков"></td>
				<td>Базовая цена при откупе с поля боя. [m]Библиотека просвещения[/m] требует 10 уровень героя</td>
				<td>[s]10%[/s] шанс присоединения нейтральных существ к герою. [s]-20%[/s] цены при откупе с поля боя. [m]Библиотека просвещения[/m] требует 8 уровень героя</td>
				<td>То же, но [s]20%[/s] шанс присоединения, [s]-40%[/s] цены при откупе. [m]Библиотека[/m] требует 6 уровень</td>
				<td>То же, но [s]30%[/s] шанс присоединения, [s]-60%[/s] цены при откупе. [m]Библиотека[/m] требует 4 уровень</td>
			</tr>
			<tr>
				<td>Доспехи</td>
				<td class="td-picture"><img height="75" data-src="images/secondary/armor${!m?'.png':'-m.jpg'}" alt="Иконка навыков"></td>
				<td>Существа получают базовый урон</td>
				<td>[s]-5%[/s] получаемого существами урона от атак</td>
				<td>[s]-10%[/s] получаемого существами урона от атак</td>
				<td>[s]-15%[/s] получаемого существами урона от атак</td>
			</tr>
			<tr>
				<td rowspan="2">Орлиный глаз</td>
				<td rowspan="2" class="td-picture"><img height="75" data-src="images/secondary/eagleeye${!m?'.png':'-m.jpg'}" alt="Иконка навыков"></td>
				<td rowspan="2">Герой не может изучать вражеские заклинания после боя</td>
				<td>После победы [s]40%[/s] шанс изучить заклинание [s]1-2[/s] уровня, использованное противником в бою</td>
				<td>То же, но [s]50%[/s] шанс изучить заклинание [s]1-3[/s] уровня</td>
				<td>То же, но [s]60%[/s] шанс изучить заклинание [s]1-4[/s] уровня</td>
			</tr>
			<tr> <td class="left-align-cell" colspan="3">Для изучения заклинания от другого героя при помощи [s]Орлиного глаза[/s] необходимо иметь соответствующий уровень [s]Мудрости[/s]. Битвы между компьютерными героями проходят в режиме Быстрой битвы без магии и навыка [s]Орлиный глаз[/s], поэтому они не изучают заклинания друг друга</td> </tr>
			<tr>
				<td>Поместья</td>
				<td class="td-picture"><img height="75" data-src="images/secondary/estates${!m?'.png':'-m.jpg'}" alt="Иконка навыков"></td>
				<td>Герой не приносит дополнительный доход</td>
				<td>[s]+250 золота[/s] в день к доходу игрока</td>
				<td>[s]+500 золота[/s] в день к доходу игрока</td>
				<td>[s]+1000 золота[/s] в день к доходу игрока</td>
			</tr>
			<tr>
				<td>Интеллект</td>
				<td class="td-picture"><img height="75" data-src="images/secondary/intelligence${!m?'.png':'-m.jpg'}" alt="Иконка навыков"></td>
				<td>Максимальный запас [s]Маны[/s] героя зависит только от его Первичного навыка [s]Знания[/s]</td>
				<td>[s]+20%[/s] к максимальному запасу [s]Маны[/s] героя (Округление вниз)<br></td>
				<td>[s]+35%[/s] к максимальному запасу [s]Маны[/s] героя (Округление вниз)</td>
				<td>[s]+50%[/s] к максимальному запасу [s]Маны[/s] героя</td>
			</tr>
			<tr>
				<td>Лидерство</td>
				<td class="td-picture"><img height="75" data-src="images/secondary/leadership${!m?'.png':'-m.jpg'}" alt="Иконка навыков"></td>
				<td>-</td>
				<td>[s]+1[/s] к [s]Боевому духу[/s] героя</td>
				<td>[s]+2[/s] к [s]Боевому духу[/s] героя</td>
				<td>[s]+3[/s] к [s]Боевому духу[/s] героя</td>
			</tr>
			<tr>
				<td>Логистика</td>
				<td class="td-picture"><img height="75" data-src="images/secondary/logistic${!m?'.png':'-m.jpg'}" alt="Иконка навыков"></td>
				<td>Максимальный запас хода героя зависит только от его существ</td>
				<td>[s]+5%[/s] к максимальному запасу хода героя по суше</td>
				<td>[s]+10%[/s] к максимальному запасу хода героя по суше</td>
				<td>[s]+20%[/s] к максимальному запасу хода героя по суше</td>
			</tr>
			<tr>
				<td>Магия Воды</td>
				<td class="td-picture"><img height="75" data-src="images/secondary/magicofwater${!m?'.png':'-m.jpg'}" alt="Иконка навыков"></td>
				<td>Базовая стоимость заклинаний и стандартный эффект</td>
				<td>Стоимость заклинаний [s]Воды[/s] снижается на [s]1…5 ед.[/s], в зависимости от их уровня</td>
				<td>То же + продвинутый эффект заклинаний [s]Воды[/s] и стоимость [m]Телепорта[/m] снижается до [s]6[/s] ед. маны</td>
				<td>То же + экспертный эффект заклинаний [s]Воды[/s] и стоимость [m]Телепорта[/m] снижается до [s]3[/s] ед. маны</td>
			</tr>
			<tr>
				<td>Магия Воздуха</td>
				<td class="td-picture"><img height="75" data-src="images/secondary/magicofair${!m?'.png':'-m.jpg'}" alt="Иконка навыков"></td>
				<td>Базовая стоимость заклинаний и стандартный эффект</td>
				<td>Стоимость заклинаний [s]Воздуха[/s] снижается на [s]1…5 ед.[/s], в зависимости от их уровня</td>
				<td>То же + продвинутый эффект заклинаний [s]Воздуха[/s]</td>
				<td>То же + экспертный эффект заклинаний [s]Воздуха[/s]</td>
			</tr>
			<tr>
				<td>Магия Земли</td>
				<td class="td-picture"><img height="75" data-src="images/secondary/magicofearth${!m?'.png':'-m.jpg'}" alt="Иконка навыков"></td>
				<td>Базовая стоимость заклинаний и стандартный эффект</td>
				<td>Стоимость заклинаний [s]Земли[/s] снижается на [s]1…5 ед.[/s], в зависимости от их уровня</td>
				<td>То же + продвинутый эффект заклинаний [s]Земли[/s]</td>
				<td>То же + экспертный эффект заклинаний [s]Земли[/s]</td>
			</tr>
			<tr>
				<td>Магия Огня</td>
				<td class="td-picture"><img height="75" data-src="images/secondary/magicoffire${!m?'.png':'-m.jpg'}" alt="Иконка навыков"></td>
				<td>Базовая стоимость заклинаний и стандартный эффект</td>
				<td>Стоимость заклинаний [s]Огня[/s] снижается на [s]1…5 ед.[/s], в зависимости от их уровня</td>
				<td>То же + продвинутый эффект заклинаний [s]Огня[/s]</td>
				<td>То же + экспертный эффект заклинаний [s]Огня[/s]</td>
			</tr>
			<tr>
				<td>Мистицизм</td>
				<td class="td-picture"><img height="75" data-src="images/secondary/mysticism${!m?'.png':'-m.jpg'}" alt="Иконка навыков"></td>
				<td>Герой восстанавливает по [s]1 ед. Маны[/s] в день</td>
				<td>Герой восстанавливает по [s]5 ед. Маны[/s] в день</td>
				<td>Герой восстанавливает по [s]10 ед. Маны[/s] в день</td>
				<td>Герой восстанавливает по [s]15 ед. Маны[/s] в день</td>
			</tr>
			<tr>
				<td>Мудрость</td>
				<td class="td-picture"><img height="75" data-src="images/secondary/wisdom${!m?'.png':'-m.jpg'}" alt="Иконка навыков"></td>
				<td>Герой может изучать заклинания [s]1-2[/s] уровней</td>
				<td>Герой может изучать заклинания [s]1-3[/s] уровней</td>
				<td>Герой может изучать заклинания [s]1-4[/s] уровней</td>
				<td>Герой может изучать заклинания [s]1-5[/s] уровней</td>
			</tr>
			<tr>
				<td rowspan="2">Навигация</td>
				<td rowspan="2" class="td-picture"><img height="75" data-src="images/secondary/navigation${!m?'.png':'-m.jpg'}" alt="Иконка навыков"></td>
				<td rowspan="2">Максимальный запас хода героя на воде равен [s]1500 ед.[/s]</td>
				<td>Максимальный запас хода героя на воде равен [s]2250 ед.[/s]</td>
				<td>Максимальный запас хода героя на воде равен [s]3000 ед.[/s]</td>
				<td>Максимальный запас хода героя на воде равен [s]3750 ед.[/s]</td>
			</tr>
			<tr>
				<td colspan="3">Навык не может попасться на случайной карте без воды.</td>
			</tr>
			<tr>
				<td>Нападение</td>
				<td class="td-picture"><img height="75" data-src="images/secondary/offense${!m?'.png':'-m.jpg'}" alt="Иконка навыков"></td>
				<td>Существа наносят базовый урон в ближнем бою</td>
				<td>[s]+10%[/s] к урону существ героя в ближнем бою</td>
				<td>[s]+20%[/s] к урону существ героя в ближнем бою</td>
				<td>[s]+30%[/s] к урону существ героя в ближнем бою</td>
			</tr>
			<tr>
				<td>Обучаемость</td>
				<td class="td-picture"><img height="75" data-src="images/secondary/learning${!m?'.png':'-m.jpg'}" alt="Иконка навыков"></td>
				<td>Стандартное количество получаемого героем [s]Опыта[/s]</td>
				<td>[s]+5%[/s] к [s]Опыту[/s], получаемому героем (Округление вниз)</td>
				<td>[s]+10%[/s] к [s]Опыту[/s], получаемому героем (Округление вниз)</td>
				<td>[s]+15%[/s] к [s]Опыту[/s], получаемому героем (Округление вниз)</td>
			</tr>
			<tr>
				<td>Первая помощь</td>
				<td class="td-picture"><img height="75" data-src="images/secondary/firstaid${!m?'.png':'-m.jpg'}" alt="Иконка навыков"></td>
				<td>[m]Палаткой первой помощи[/m] нельзя управлять и она лечит от [s]1[/s] до [s]25 ед. Здоровья[/s]</td>
				<td>Контроль над [m]Палаткой первой помощи[/m]. Сила лечения повышается до [s]1…50 ед. Здоровья[/s]</td>
				<td>То же, но сила лечения [s]1…75 ед. Здоровья[/s]</td>
				<td>То же, но сила лечения [s]1…100 ед. Здоровья[/s]</td>
			</tr>
			<tr>
				<td>Поиск Пути</td>
				<td class="td-picture"><img height="75" data-src="images/secondary/pathfinding${!m?'.png':'-m.jpg'}" alt="Иконка навыков"></td>
				<td>Герой имеет штрафы при движении по [s]Камням[/s], [s]Песку[/s], [s]Снегу[/s], [s]Болоту[/s] и [s]Пустошам[/s]</td>
				<td>Герой не имеет штрафа при движении по [s]Камням[/s] и [s]Пустошам[/s]. [s]-25%[/s] штрафа при движении по [s]Песку[/s], [s]Снегу[/s] и [s]Болоту[/s]</td>
				<td>Герой не имеет штрафа при движении по [s]Камням[/s], [s]Пустошам[/s], [s]Песку[/s] и [s]Снегу[/s]. [s]-50%[/s] штрафа при движении по [s]Болоту[/s]</td>
				<td>Герой передвигается по всем типам почвы без штрафов</td>
			</tr>
			<tr>
				<td>Разведка</td>
				<td class="td-picture"><img height="75" data-src="images/secondary/scouting${!m?'.png':'-m.jpg'}" alt="Иконка навыков"></td>
				<td>Герой открывает [s]Терру инкогнито[/s] вокруг себя в радиусе [s]5 клеток[/s] (диаметр [s]11 клеток[/s])</td>
				<td>Герой открывает [s]Терру инкогнито[/s] вокруг себя в радиусе [s]6 клеток[/s] (диаметр [s]13 клеток[/s])</td>
				<td>То же, но в радиусе [s]8 клеток[/s] (диаметр [s]17 клеток[/s])</td>
				<td>То же, но в радиусе [s]10 клеток[/s] (диаметр [s]21 клеток[/s])</td>
			</tr>
			<tr>
				<td rowspan="2">Сопротивление</td>
				<td rowspan="2" class="td-picture"><img height="75" data-src="images/secondary/resistance${!m?'.png':'-m.jpg'}" alt="Иконка навыков"></td>
				<td rowspan="2">Существа героя, кроме [m]Гномов[/m], [m]Боевых гномов[/m] и [m]Кристальных драконов[/m], не имеют сопротивлений</td>
				<td>Существа героя получают [s]5%[/s] шанс блокировать магический эффект, являясь его целью. Суммируется с врожденными сопротивлениями существ</td>
				<td>То же, но шанс блокирования [s]10%[/s]</td>
				<td>То же, но шанс блокирования [s]20%[/s]</td>
			</tr>
			<tr> <td class="left-align-cell" colspan="3">[s]Сопротивление[/s] может блокировать любое накладываемое или ударное заклинание героя, кроме [m]Снятия заклинаний[/m], включая заклинания своего героя, действующие по площади и отраженные [m]Волшебным зеркалом[/m]. Если существо является не основной целью заклинания, действующего по площади, то [s]Сопротивление[/s] может блокировать только его эффект по этому существу (для каждого существа вероятность определяется отдельно). Не блокируется урон от [m]Огненного щита[/m], [m]Минного поля[/m], [m]Стены огня[/m] и эффект [m]Зыбучих песков[/m]. [s]Сопротивление[/s] может блокировать заклинания, колдуемые существами, а также [s]Яд[/s], [s]Болезнь[/s], [s]Окаменение[/s], [s]Паралич[/s] и [s]Старость[/s], но оно не блокирует физические способности, например [s]Оплетение[/s], [s]Смертельный удар[/s], [s]Смертельный взгляд[/s], [s]Страх[/s], [s]Кислотное дыхание[/s], [m]Снятие заклинаний[/m] от [m]Змиев[/m] или [m]Ядовитых змиев[/m]</td> </tr>
			<tr>
				<td>Помехи</td>
				<td class="td-picture"><img height="75" data-src="images/secondary/interference${!m?'.png':'-m.jpg'}" alt="Иконка навыков"></td>
				<td>-</td>
				<td>[s]Сила магии[/s] вражеского героя в бою снижается на [s]10%[/s], но не ниже [s]1[/s]</td>
				<td>[s]Сила магии[/s] вражеского героя в бою снижается на [s]20%[/s], но не ниже [s]1[/s]</td>
				<td>[s]Сила магии[/s] вражеского героя в бою снижается на [s]30%[/s], но не ниже [s]1[/s]</td>
			</tr>
			<tr>
				<td>Стрельба</td>
				<td class="td-picture"><img height="75" data-src="images/secondary/archery${!m?'.png':'-m.jpg'}" alt="Иконка навыков"></td>
				<td>Существа наносят базовый урон в дальнем бою</td>
				<td>[s]+10%[/s] к урону существ героя при стрельбе. Действует также на [m]Баллисту[/m], [m]Пушку[/m] и [s]Стрелковые башни[/s]</td>
				<td>То же, но [s]+25%[/s] к наносимому урону</td>
				<td>То же, но [s]+50%[/s] к наносимому урону</td>
			</tr>
			<tr>
				<td rowspan="4">Тактика</td>
				<td rowspan="4" class="td-picture"><img height="75" data-src="images/secondary/tactic${!m?'.png':'-m.jpg'}" alt="Иконка навыков"></td>
				<td rowspan="4">Тактическая фаза отсутствует</td>
				<td>Перед началом боя можно расставить существ героя в пределах [s]3[/s] ближайших [s]рядов[/s] гексов</td>
				<td>То же, но в области [s]5 рядов[/s]</td>
				<td>То же, но в области [s]7 рядов[/s]</td>
			</tr>
			<tr> <td class="left-align-cell" colspan="3">Во время тактической расстановки можно [s]Сдаться[/s] или [s]Сбежать[/s] с поля боя. Герои ИИ этим не пользуются. [s]Тактика[/s] – единственный навык, который можно отключить кнопкой в окне героя</td> </tr>
			<tr> <td class="left-align-cell" colspan="3">Если вторичный навык [s]Тактика[/s] имеется как у нападающего, так и у защищающегося героя, то тактические бонусы сокращаются:<br>&bull; [s]Базовая Тактика[/s] у вашего героя:<br>Если противник имеет навык [s]Тактики[/s], то игрок не сможет расставить существ перед боем;<br>&bull; [s]Продвинутая Тактика[/s] у вашего героя:<br>Если противник имеет [s]Базовую Тактику[/s], то игрок сможет расставить существ в области 3 рядов (как при [s]Базовой Тактике[/s]);<br>Если противник имеет [s]Продвинутую[/s] или [s]Экспертную Тактику[/s], то игрок не сможет расставить существ перед боем;<br>&bull; [s]Экспертная Тактика[/s] у вашего героя:<br>Если противник имеет [s]Базовую Тактику[/s], то игрок сможет расставить существ в области 5 рядов (как при [s]Продвинутой Тактике[/s]).<br>Если противник имеет [s]Продвинутую Тактику[/s], то игрок сможет расставить существ в области 3 рядов (как при [s]Базовой Тактике[/s]).<br>Если противник имеет [s]Экспертную Тактику[/s], то игрок не сможет расставить существ перед боем.</td> </tr>
			<tr> <td class="left-align-cell" colspan="3">[s]Это интересно![/s] Если у Вас в армии только 1 стрелковый отряд, то, даже имея [s]Экспертную Тактику[/s], невозможно поставить этот отряд так, чтобы у него не было штрафа за расстояние при стрельбе по любому вражескому отряду в начальной расстановке. Поставив стрелка на самый правый центральный гекс штраф будет по обоим угловым гексам противника (слот [s]1[/s] и [s]7[/s] его армии), если те существа не двухгексовые.</td> </tr>
			<tr>
				<td>Удача</td>
				<td class="td-picture"><img height="75" data-src="images/secondary/fortune${!m?'.png':'-m.jpg'}" alt="Иконка навыков"></td>
				<td>-</td>
				<td>[s]+1[/s] к [s]Удаче[/s] героя</td>
				<td>[s]+2[/s] к [s]Удаче[/s] героя</td>
				<td>[s]+3[/s] к [s]Удаче[/s] героя</td>
			</tr>
			<tr>
				<td rowspan="3">Некромантия</td>
				<td rowspan="3" class="td-picture"><img height="75" data-src="images/secondary/necromancy${!m?'.png':'-m.jpg'}" alt="Иконка навыков"></td>
				<td rowspan="3">-</td>
				<td>После победы в бою герой воскрешает [s]5%[/s] убитых вражеских существ в виде [m]Скелетов[/m], которые присоединяются к его армии</td>
				<td>То же, но [s]10%[/s] убитых в виде [m]Скелетов[/m]</td>
				<td>То же, но [s]15%[/s] убитых в виде [m]Скелетов[/m]</td>
			</tr>
			<tr> <td class="left-align-cell" colspan="3">Навык [s]Некромантии[/s] не работает у героев ИИ в боях против нейтральных существ или против других героев ИИ. После любого такого боя он поднимает лишь [s]1[/s] [m]Скелета[/m] вместо соответствующего процента от числа убитых (баг).</td> </tr>
			<tr> <td class="left-align-cell" colspan="3">[s]Внимание![/s] Если в армии героя нет [m]Скелетов[/m] или [m]Скелетов-воинов[/m], а также нет свободного места, то [s]Некромантия[/s] не работает. Если в армии героя нет [m]Скелетов[/m], но есть [m]Скелеты-воины[/m] и нет свободного места, то герой будет воскрешать [s]2 / 3 * N%[/s] убитых существ в виде [m]Скелетов-воинов[/m], где [s]N[/s] - процент воскрешения в зависимости от уровня развития [s]Некромантии[/s]. И наконец если в армии есть [m]Скелеты[/m] и [m]Скелеты-воины[/m], то добавляться будут только [m]Скелеты[/m].</td> </tr>
		</table>
		${!m?'':'</div>'}
	<p>
		[t]Как вышеописанная информация может помочь на практике? В отличии от [s]Первичных навыков[/s], имеющих накопительный характер, Вторичные навыки сильнее влияют на игровой процесс и, ввиду ограниченности слотов для них, требуют к себе большего внимания. Изначально выстраивая тактику игры за определенный город или конкретного героя, можно определиться какие навыки Вам нужны в первую очередь, а каких стоит избегать. Вряд ли игроку захочется, чтобы его самый сильный персонаж, которым он проводит сложные бои, владел такими навыками как [s]Поместья[/s]. Сам по себе навык является весьма полезным, но на его месте может быть [s]Нападение[/s], дающее большой прирост к урону, или одна из школ [s]Магии[/s].<br><br>
		[t]Несмотря на то, что выпадение того или иного навыка - это лишь вероятность (за исключением "обязательных предложений"), прокачать героя с идеальным набором возможно. Для этого следует по возможности брать потенциально желаемый навык как только он появляется в предлагаемых при получении нового уровня, и наоборот, улучшать уже имеющийся навык в случае, если новый предлагаемый Вам не нужен. В случае, когда предлагается два новых навыка и оба Вам не по душе, выберите тот, что менее бесполезен. Также не стоит забывать об "обязательных предложениях". С ними можно всегда ждать появления одной из школ [s]Магии[/s] и [s]Мудрости[/s] на определенных уровнях.<br><br>
		[t]Несмотря на все вышесказанное, на некоторых игровых шаблонах игра может быть окончена задолго до того, как герой полностью овладеет всеми навыками и в данном случае нужно учитывать, успеете ли Вы прокачать нужный Вам к конкретному моменту игры навык до определенного уровня. Так, набрав полный набор из восьми "идеальных" навыков [s]Базового[/s] уровня, герой будет одинаково плох во всем. Таким образом, чтобы умело прокачивать персонажа нужно оценивать, какие навыки находятся в приоритете, чем можно пожертвовать и где можно рискнуть получением нежелаемого навыка или пропуском нужного.<br><br>
		[t]Ценность же каждого навыка очень относительна и ситуативна. На эту тему существует множество статей, разборов и видео, но если обобщить, можно прийти к следующему выводу: не столь важно насколько силен навык сам по себе, сколько то, сможете ли Вы его эффективно применить на конкретной карте и конкретном шаблоне. Скажем [s]Навигация[/s] может сильно сыграть Вам на руку, если карта по большей части состоит из воды, в то же время этот навык будет абсолютно бесполезен, если на карте одни лужи или вода отсутствует вовсе, и т.д.
	</p>
	`},

	{id: 'grail', text: `
	<h1>Грааль</h1>
	<h2 id="grail.1">Раскопки Грааля</h2>
	<p>
		<img class="story-img img-in-text-l" data-src="images/artifacts/grail.jpg" alt="Грааль" height="100">
		[t][m]Грааль[/m] представляет из себя уникальный артефакт, закопанный на одной из клеток карты приключений, его местоположение можно обнаружить только с помощью [s]карты загадки[/s], элементы которой открываются при посещении [m]Обелисков[/m].<br><br>
		[t][m]Грааль[/m] не может быть экипирован персонажем. Когда герой с [m]Граалем[/m] в рюкзаке приходит в город и кликает по [m]Управе[/m] / [m]Префектуре[/m] / [m]Муниципалитету[/m] / [m]Капитолию[/m], ему предлагают возвести [s]Храм Грааля[/s] в данном городе ([s]Храм Грааля[/s] можно возвести не только в своем городе, но и в городе союзника). Если игрок подтверждает действие, то в городе появляется [s]Храм Грааля[/s] без затрат ресурсов, а [m]Грааль[/m] из рюкзака героя при этом исчезает. Важно учитывать, что при возведении [s]Храма Грааля[/s] в этот день в городе нельзя будет больше возвести построек, однако, можно совершить два этих действия в обратном порядке.<br><br>
		[t]Если герой, имеющий выкопанный [m]Грааль[/m] в рюкзаке, проиграет бой, сдастся или сбежит с поля боя, то [m]Грааль[/m] у него не сохранится при повторном найме в [m]Таверне[/m], он попросту пропадет. Однако [m]Грааль[/m] не пропадет, если героя уволить собственноручно и затем нанять снова. Также, если герой имеет в рюкзаке 2 [m]Грааля[/m] (такого не может быть в стандартном сценарии без читов и багов), то при поражении в битве, капитуляции или побеге с поля боя, пропадет только один из них.<br><br>
		[t]Чтобы отыскать [m]Грааль[/m], необходимо посетить как минимум один [m]Обелиск[/m], который откроет часть [s]карты загадки[/s]. Каждая [s]карта загадки[/s] имеет [s]48 частей[/s], а в сценарии может быть не более 48 [m]Обелисков[/m]. Каждый [m]Обелиск[/m] в свою очередь открывает одну или несколько (если [m]Обелисков[/m] на карте менее 48) частей [s]карты загадки[/s] в определенной последовательности. Последовательность открытия [s]карты загадки[/s] можно увидеть на странице <a href="towns-page${!m?'':'-m'}.html">[s]Городов[/s]</a>. В большинстве случаев крестик расположения [m]Грааля[/m] находится под [s]46-48[/s] частями [s]карты загадки[/s].<br><br>
		[t]Для каждого игрока [s]карта загадки[/s] определяется в соответствии со стартовым городом (каждый замок имеет свою [s]карту загадку[/s]), однако, если стартовых городов несколько, то тип [s]карты загадки[/s] определяется случайно и не меняется при рестарте сценария.<br><br>
		[t]Если стартового города нет, то тип карты загадки определяется по стартовому герою. Если же стартовых героев несколько, то тип определяется по первому герою в списке. Очередность героев (колонка под мини-картой) определяется следующей последовательностью:<br><br>
		[t]Герои [m]Замка[/m], [m]Оплота[/m], [m]Башни[/m], [m]Инферно[/m], [m]Некрополиса[/m], [m]Темницы[/m], [m]Крепости[/m], [m]Цитадели[/m], [m]Сопряжения[/m], [m]Причала[/m] (причем герои-воины имеют больший приоритет, чем герои-маги одного и того же города).<br><br>
		[t]Фактически, чтобы откопать [m]Грааль[/m], нет необходимости посещать [m]Обелиски[/m], можно просто вслепую вскапывать карту приключений, однако, не имея никакой информации о местоположении [m]Грааля[/m], отыскать его на карте приключений практически невозможно. И напротив, имея достаточно информации на не полностью открытой [s]карте загадки[/s], можно отыскать [m]Грааль[/m], не посещая оставшихся [m]Обелисков[/m] (в некоторых случаях крестик, который показывает местоположение [m]Грааля[/m], может показаться еще до полного открытия [s]карты загадки[/s]). [s]Карта загадки[/s] своя для каждого игрока, но счетчик посещенных [m]Обелисков[/m] у союзников один. Т.е. посещение союзником [m]Обелиска[/m] открывает и часть [s]карты загадки[/s] игрока. Т.к. расположение кусочков паззла у разных городов отличается, то один [m]Обелиск[/m] открывает разные части карты у разных игроков.<br><br>
		[t][s]Карта загадки[/s] имеет размер [s]19 х 17[/s] клеток с центром по координатам [s]10:9[/s]. [m]Грааль[/m] случайным образом может быть закопан в радиусе [s]2[/s] клеток от центра [s]карты загадки[/s], включая диагонали, т.е. в квадрате [s]5 х 5[/s] клеток. Сама [s]карта загадки[/s] копирует часть карты приключений, где находится [m]Грааль[/m] и закрывает ее пазлом, но многие объекты, которые фактически есть на карте приключений, на [s]карте загадки[/s] не отображаются. К таким объектам относятся:<br><br>
		[t]&bull; Все объекты, доступные для посещения героем, а также подбираемые предметы, такие как ресурсы или артефакты;<br>
		[t]&bull; Города, герои и нейтральные существа;<br>
		[t]&bull; "[s]Кратеры[/s]" и "[s]Каньоны[/s]" (в виде трещин на любом ландшафте);<br>
		[t]&bull; "[s]Ямы[/s]" (как после выкапывания [m]Грааля[/m]);<br>
		[t]&bull; Декоративные "[s]Озера[/s]" и "[s]Замерзшие озера[/s]", кроме озер на камнях и в подземелье (не считая самого крупного);<br>
		[t]&bull; "[s]Пласт породы[/s]" ("[s]Овраг[/s]", на любом ландшафте);<br>
		[t]&bull; Некоторые "[s]Кустарники[/s]" и "[s]Цветы[/s]";<br>
		[t]&bull; Все животные;<br>
		[t]&bull; Дороги, мосты, заборы, реки и дельты рек;<br>
		[t]&bull; "[s]Песчаные дюны[/s]" и снежные "[s]Холмы[/s]";<br>
		[t]&bull; "[s]Челюсти[/s]" и "[s]Кости[/s]";<br>
		[t]&bull; "[s]Песчаная яма[/s]";<br>
		[t]&bull; "[s]Брошенные лодки[/s]";<br>
		[t]&bull; "[s]Бочки[/s]", "[s]Ящики[/s]" и "[s]Мешки[/s]";<br>
		[t]&bull; Болотные бревна ("[s]Мертвая растительность[/s]");<br>
		[t]&bull; "[s]Плотоядный цветок[/s]";<br>
		[t]&bull; "[s]Озера лавы[/s]" и "[s]Потоки лавы[/s]";<br>
		[t]&bull; "[s]Лужи[/s]" и "[s]Водопады[/s]";<br>
		[t]&bull; "[s]Водоросли[/s]" и маленькие "[s]Рифы[/s]";<br>
		[t]&bull; "[s]Португальский кораблик[/s]" и "[s]Развалины[/s]" на воде.
	</p>
	<div class="${!m?'block-img':'picture slider'}"><img class="img-${!m?'full':'triple'}-screen" data-src="images/storypictures/mosaic.jpg" alt="Карта загадки"></div>
	<p>
		[t]Важно учитывать, что [m]Грааль[/m] не может быть закопан на краю карты (ближе, чем в [s]9[/s] клетках от границ карты). Также его нельзя установить на этих клетках в редакторе карт.<br><br>
		[t]Для определения местоположения [m]Грааля[/m] на карте приключений нужно найти уникальный объект или комбинацию таких объектов на [s]карте загадки[/s], сверившись с которой, можно будет понять где находится [m]Грааль[/m].<br><br>
		[t]Чтобы заполучить [m]Грааль[/m], нужно встать на точку его местонахождения и провести раскопки. Перед началом раскопок необходимо убедиться, что герой имеет хотя бы один свободный слот в рюкзаке. В противном случае игра выдаст предупреждение о том, что герой находится над [m]Граалем[/m], но не может его откопать, ход при этом потрачен не будет.<br><br>
		[t]Механика раскопок предусматривает, что герой может проводить раскопки только с полным запасом [s]очков передвижения[/s]. Подразумевается, что герой должен встать на точку, где находится [m]Грааль[/m] и переждать день, чтобы восстановить [s]очки передвижения[/s], прежде чем копать. Однако фактически игра проверяет лишь то, равны текущие [s]очки передвижения[/s] максимальному запасу героя или нет. Если эти значения равны, то герой может провести раскопки. Вышеописанную механику можно использовать для ускоренного откапывания [m]Грааля[/m]: если герой сделал один шаг в сторону, он потерял некоторое количество [s]очков передвижения[/s], но если дать этому герою существо с более низкой [s]Скоростью[/s], максимальный запас [s]очков передвижения[/s] пересчитается, после чего будет равен или выше текущего запаса. Таким образом после хода можно вновь прировнять [s]очки передвижения[/s] к максимальному запасу и провести несколько раскопок в один день (такой способ чаще всего запрещен в турнирных играх и считается багом).
	</p>
	<h2 id="grail.2">Храм Грааля</h2>
	<p>
		[t]Все бонусы [s]Храма Грааля[/s] действуют только для того игрока, которому принадлежит город. Исключение составляет игра с союзниками. На союзников распространяются эффекты [s]Храма Грааля[/s] в [m]Башне[/m], [m]Сопряжении[/m], [m]Темнице[/m], [m]Цитадели[/m], [m]Крепости[/m] и [m]Причале[/m]. Не распространяются эффекты [s]Храма Грааля[/s] [m]Замка[/m], [m]Оплота[/m] и [m]Некрополиса[/m]. Ниже приведен список всех уникальных бонусов от [s]Храмов Грааля[/s] для каждого города:<br><br>
		[t][m]Замок[/m] ([m]Колосс[/m]) - Повышает на [s]2 ед. Боевой дух[/s] всех дружественных героев;<br><br>
		[t][m]Оплот[/m] ([m]Хранитель Духа[/m]) - Повышает на [s]2 ед. Удачу[/s] всех дружественных героев;<br><br>
		[t][m]Башня[/m] ([m]Небесный Корабль[/m]) - Открывает всю карту приключений, а также добавляет [s]150 ед. маны[/s] защищающему город герою при осаде. Дополнительная мана не сохраняется в случае победы;<br><br>
		[t][m]Инферно[/m] ([m]Огненное божество[/m]) - После появления этого [s]Храма Грааля[/s] каждая неделя становится [s]неделей Беса[/s] (недельный прирост [m]Бесов[/m] и [m]Чертей[/m] увеличивается на [s]15 ед.[/s]);<br><br>
		[t][m]Некрополис[/m] ([m]Темница Душ[/m]) - На [s]20%[/s] увеличивает эффективность навыка [s]Некромантия[/s] у всех дружественных героев, обладающих таким навыком;<br><br>
		[t][m]Темница[/m] ([m]Хранитель Земли[/m]) - Повышает на [s]12 ед. Силу магии[/s] любого защищающего город героя при осаде;<br><br>
		[t][m]Цитадель[/m] ([m]Памятник Богам Войны[/m]) - Повышает на [s]20 ед. Атаку[/s] любого защищающего город героя при осаде;<br><br>
		[t][m]Крепость[/m] ([m]Плотоядное Растение[/m]) - Повышает на [s]10 ед. Атаку[/s] и [s]Защиту[/s] любого защищающего город героя при осаде;<br><br>
		[t][m]Сопряжение[/m] ([m]Радуга[/m]) - В [m]Гильдии магов[/m] герои могут изучить все существующие заклинания в соответствии с уровнем имеющейся [m]Гильдии магов[/m], кроме запрещенных на карте и для [m]Сопряжения[/m], если они не отмечены, как обязательные.<br><br>
		[t][m]Причал[/m] ([m]Путеводная Звезда[/m]) - Делает любую землю для всех дружественных и вражеских существ [m]Причала[/m] родной (они передвигаются по любой земле без штрафов, в любом бою получают [s]+1[/s] к [s]Атаке[/s], [s]Защите[/s] и [s]Скорости[/s], игнорируют [m]Мины[/m] и видят [m]Зыбучие пески[/m]). Осада [m]Причала[/m] остается на [s]болотной[/s] почве.<br><br>
		[t]За нахождение [m]Грааля[/m] игрок получает дополнительные очки при победе в игре. Интересно то, что при расчете очков за победу не имеет значение установлен [m]Грааль[/m] в каком-либо городе или нет - достаточно просто его выкопать и оставить в рюкзаке, чтобы очки зачислились.
	</p>
	`},
	{id: 'fortification', text: `
	<h1>Фортификационные укрепления города и их штурм</h1>
	<p>
		[t]По мере возведения новых построек в городе, он обретает фортификационные укрепления, в частности после постройки [m]Форта[/m] в городе появляются [s]стены[/s]; После возведения [m]Цитадели[/m] вдоль [s]стен[/s] появляется [s]ров[/s] ([s]мины[/s]) и одна центральная [s]стрелковая башня[/s]; После постройки [m]Замка[/m] к центральной башне добавляются еще две дополнительные [s]стрелковые башни[/s] по бокам стен.<br><br>
		[t]Все эти элементы укреплений позволяют получить серьезное преимущество при обороне от противника, а при понимании всех нюансов работы фортификационных укреплений они могут стать и средством истощения противника при осаде замка.
	</p>
	<div class="${!m?'block-img':'picture slider'}"><img class="img-${!m?'full':'double'}-screen" data-src="images/storypictures/fortifications.png" alt="Фортификация"></div>
	<h2 id="fortification.1">Городские стены</h2>
	<p>
		[t][s]Стена[/s] замка делится на фрагменты, каждый из которых имеет свой запас [s]Здоровья[/s]:<br><br>
		[t]Верхняя [s]башня[/s] - [s]2 ед.[/s];<br>
		[t]Верхняя [s]стена[/s] - [s]2 ед.[/s] ([s]3 ед.[/s] при наличии [m]Замка[/m]);<br>
		[t]Средняя верхняя [s]стена[/s] - [s]2 ед.[/s] ([s]3 ед.[/s]  при наличии [m]Замка[/m]);<br>
		[t][s]Ворота[/s] - [s]2 ед.[/s];<br>
		[t]Средняя нижняя [s]стена[/s] - [s]2 ед.[/s] ([s]3 ед.[/s] при наличии [m]Замка[/m]);<br>
		[t]Нижняя [s]стена[/s] - [s]2 ед.[/s] ([s]3 ед.[/s] при наличии [m]Замка[/m]);<br>
		[t]Нижняя [s]башня[/s] - [s]2 ед.[/s];<br>
		[t]Центральная [s]башня[/s] - [s]2 ед.[/s]<br><br>
		[t]Подробнее рассмотреть клетки, на которых располагается каждый элемент [s]стены[/s], можно в статье о [s]Стрельбе[/s] в разделе <a href="mechanics-page${!m?'':'-m'}.html#archery.3">[s]"Стрельба через крепостные стены"[/s]</a>. Визуально [s]башни[/s] присутствуют на [s]стенах[/s] всегда, однако, пока на них нет стрелков, они неуязвимы для урона и выполняют исключительно декоративную функцию.<br><br>
		[t]Урон элементам фортификаций могут наносить [m]Катапульта[/m], [m]Пушка[/m], заклинание [m]Землетрясение[/m], [m]Циклопы[/m] и [m]Короли циклопов[/m] (части, соединяющие элементы фортификаций не могут быть разрушены).<br><br>
		[t]Кроме ораничения для прохода пеших существ ближнего боя, стены также создают штраф стрельбы, о котором подробнее рассказано в разделе <a href="mechanics-page${!m?'':'-m'}.html#archery.3">[s]"Стрельба через крепостные стены"[/s]</a>. Также [s]стены[/s] создают ограничения для использования заклинания [m]Телепорт[/m].<br><br>
		[t][s]Ворота[/s] замка свободно открываются для союзных существ и закрываются сразу, как только существо покинет клетку [s]ворот[/s] и клетку [s]рва[/s] перед ними. Однако, если существо врага (или труп любого существа) окажется на ближайшей к [s]воротам[/s], или второй клетке от [s]ворот[/s], то они не смогут открыться. Также, если существо врага встанет на клетку перед [s]воротами[/s] или на открытые [s]ворота[/s] (или на этой клетке при открытых [s]воротах[/s] погибнет любое существо), то они также не смогут закрыться. Интересно, что при осаде замка использование заклинания [m]Гипноз[/m] не дает возможности открывать [s]ворота[/s] загипнотизированным существом.<br><br>
		[t]В некоторых случаях, особенно, когда у защищающегося игрока нет [s]стрелковых башен[/s] и стрелков в армии, [s]стены[/s] замка могут превратиться в смертельную клетку, так как осаждающий герой, имея стрелков и подперев [s]ворота[/s], сможет безнаказанно расстреливать существ обороняющегося.
	</p>
	<h2 id="fortification.2">Стрелковые башни</h2>
	<p>
		[t]После постройки в городе [m]Цитадели[/m] на центральной [s]башне[/s] замка появляется стрелок, а при остройке [m]Замка[/m] стрелки появляются также на верхней и нижней [s]башнях[/s].<br><br>
		[t]Урон, наносимый центральной [s]башней[/s], в 2 раза больше, чем от одной из боковых. Величина урона зависит от количества [s]"структур"[/s] (зданий), имеющихся в данный момент в городе. Однако, не все сооружения в городе подпадают под определение [s]"структуры"[/s], а именно:<br><br>
		[t]&bull; Все улучшения жилищ существ, [m]Префектуры[/m] и [m]Гильдии магов[/m] не считаются [s]"структурами"[/s], так как основное здание уже построено.<br>
		[t]&bull; Дополнительные строения, увеличивающие прирост (типа [m]Бастиона грифонов[/m]) также не является [s]"структурами"[/s]. Эти улучшения даже не отражаются на внешнем виде города (их невозможно выделить мышкой и увидеть название в строке информации).<br>
		[t]&bull; [m]Цитадель[/m] или [m]Замок[/m] не являются [s]"структурами"[/s], так как являются улучшениями [m]Форта[/m] и сами по себе дают городу [s]стрелковые башни[/s].<br>
		[t]&bull; В некоторых городах имеются и другие улучшения основных строений, которые [s]"структурами"[/s] не являются:
	</p>
	${!m? separateTables.structures : separateTables.structuresM}
	<p>
		[t]Формула расчета базового урона, наносимого центральной [s]башней[/s] конкретного города имеет следующий вид:<br><br>
		[t][s]Урон = D + d * N[/s]<br><br>
		[t]Где [s]D[/s] - базовый урон центральной [s]башни[/s] от [s]10[/s] до [s]20[/s] единиц.<br>
		[t][s]d[/s] - дополнительный урон, который приобретает [s]стрелковая башня[/s] при постройке очередной [s]"структуры"[/s] от [s]2[/s] до [s]4[/s] единицы.<br>
		[t][s]N[/s] - количество [s]"структур"[/s], построенных в городе.<br><br>
		[t]Для боковой [s]башни D[/s] от [s]6[/s] до [s]12[/s] ед., а значение [s]N[/s] заменяется на ([s]N / 2[/s]) с округлением вниз.<br><br>
		[t]Кроме того, [s]стрелковые башни[/s] имеют параметр [s]Атаки[/s], равный [s]10[/s]. При расчете урона учитывается [s]Атака[/s] защищающегося героя и его навык [s]Стрельбы[/s] согласно общим правилам расчета урона стрелков. Интересный факт: [s]стрелковые башни[/s] игнорируют [s]Броню[/s] цели.
	</p>
	<table ${!m?'class="compress"':''}>
		<tr> <th>Город</th> <th>Количество структур</th> <th>Максимальный урон центральной башни</th> </tr>
		<tr> <td>Замок</td> <td>17</td> <td>44-88</td> </tr>
		<tr> <td>Оплот</td> <td>16</td> <td>42-84</td> </tr>
		<tr> <td>Башня</td> <td>18</td> <td>46-92</td> </tr>
		<tr> <td>Инферно</td> <td>17</td> <td>44-88</td> </tr>
		<tr> <td>Некрополис</td> <td>18</td> <td>46-92</td> </tr>
		<tr> <td>Темница</td> <td>18</td> <td>46-92</td> </tr>
		<tr> <td>Цитадель</td> <td>18</td> <td>46-92</td> </tr>
		<tr> <td>Крепость</td> <td>18</td> <td>46-92</td> </tr>
		<tr> <td>Сопряжение</td> <td>18</td> <td>46-92</td> </tr>
		<tr> <td>Причал</td> <td>18</td> <td>46-92</td> </tr>
	</table>
	<p>
		[t][s]Стрелковые башни[/s] под управлением компьютера (в том числе и у Игрока-человека без навыка [s]Артиллерия[/s]) выбирают цель своей атаки по классу вражеских отрядов, который присваивается всем вражеским отрядам в зависимости от их возможности нанести ущерб обороняющимся:<br><br>
		[t][s]Класс А[/s] - вражеский отряд сможет атаковать в ближайший свой ход. Сюда включаются и стрелки, способные стрелять.<br>
		[t][s]Класс Б[/s] - вражеский отряд сможет атаковать через один ход.<br>
		[t][s]Класс В[/s] - вражеский отряд сможет атаковать через два хода. И так далее.<br><br>
		[t]При расчетах ИИ считает, что [s]стрелковые башни[/s] наносят [s]1[/s] ед. урона (баг). Именно поэтому башни предпочтут атаковать, например, отряд из 1 существа, чем из 10. На выбор цели влияют 2 фактора, рассчитываемые отдельно для каждого класса вражеских отрядов:<br><br>
		[t][s]Потеря силы войска:[/s]<br>
		[t]&bull; Для существ [s]класса А[/s]: Приоритет = [s]1 * (AI Value / Зд.) * 100%[/s], где [s]1[/s] - урон [s]стрелковой башни[/s] (баг); [s]AI Value[/s] - суммарная ценность целевого отряда; [s]Зд.[/s] - суммарное [s]Здоровье[/s] целевого отряда.<br>
		[t]&bull; Для существ [s]класса Б[/s]: Приоритет = [s]1 * (AI Value / Зд.) * 50%[/s].<br>
		[t]&bull; Для существ [s]класса В[/s]: Приоритет = [s]1 * (AI Value / Зд.) * 33%[/s]. И так далее со снижением знаменателя [s]100% / n[/s].<br><br>
		[t][s]Потеря численности войска:[/s]<br>
		[t]&bull; Для существ [s]класса А[/s]: Приоритет = [s]1 / Зд. * 100%[/s], где [s]1[/s] - урон [s]стрелковой башни[/s] (баг); [s]Зд.[/s] - суммарное [s]Здоровье[/s] целевого отряда.<br>
		[t]&bull; Для существ [s]класса Б[/s]: Приоритет = [s]1 / Зд. * 50%[/s].<br>
		[t]&bull; Для существ [s]класса В[/s]: Приоритет = [s]1 / Зд. * 33%[/s]. И так далее со снижением знаменателя [s]100% / n[/s].<br><br>
		[t]После расчетов ИИ выбирает цель с наибольшим приоритетом. Если у нескольких отрядов приоритеты одинаковые, то будет выбран тот отряд, который находился в самой правой позиции окна героя.<br><br>
		[t]Эта информация важна по большей части при осаде замка. Если не вдаваться в формулы, то есть несколько простых способов снизить ущерб, который нанесут [s]башни[/s] армии игрока:<br><br>
		[t]&bull; Отделить единички стрелков в самые правые слоты армии (тогда первые выстрелы [s]башен[/s] придутся по ним)<br>
		[t]&bull; Как можно скорее выдвинуть ближе к [s]башням[/s] отряд слабых существ, например, первого уровня (тогда [s]башни[/s] с высокой вероятностью выберут именно их в качестве цели), что позволит избежать урона по стрелкам или другим важным существам игрока.
	</p>
	<h2 id="fortification.3">Ров и его аналоги</h2>
	<p>
		[t]Последним, но не менее важным элементом фортификаций является [s]ров[/s] и его аналогии. [s]Ров[/s] и его альтернативы появляются в замке при постройке [m]Цитадели[/m] и пролегает вдоль [s]стен[/s] города. Исключением является [s]Башня[/s]: Вместо рва она получает [s]мины[/s] вдоль [s]стен[/s] замка (все клетки кроме той, что перед [s]воротами[/s]). [s]Ров Крепости[/s] имеет двойную ширину, что усложняет задачу по подпиранию [s]ворот[/s] замка.<br><br>
		[t]Все [s]рвы[/s] кроме [s]мин Башни[/s] имеют схожие свойства:<br><br>
		[t]&bull; Если пеший отряд попадает в [s]ров[/s], его движение в этом раунде заканчивается (подобно попаданию в [m]Зыбучие пески[/m]). Также существо теряет возможность атаковать, если наступило на клетку [s]рва[/s]. На летающих существ этот эффект не влияет. Двухгексовые существа получают эффект [s]рва[/s], находясь любой своей частью в нем. Пешее перемещение по клеткам [s]рва[/s] возможно только на расстояние в [s]1 клетку[/s]. [s]Ров[/s] одинаково действует как на осаждающих город существ, так и на обороняющихся.<br><br>
		[t]&bull; Существо, находящееся во [s]рве[/s], теряет [s]3[/s] ед. [s]Защиты[/s].<br><br>
		[t]&bull; Если ход существа (и пешего, и летающего) заканчивается на клетке [s]рва[/s], то ему наносится урон в конце хода. Урон также наносится, если существо во [s]рву[/s] [s]Ждет[/s], [s]Защищается[/s] или атакует с места, но не наносится, если использует колдовство (например, [s]Воскрешение[/s] [m]Архангелами[/m], и колдовство [m]Сказочных драконов[/m] или [m]Чародеев[/m]).<br><br>
		[t]Однако эффект [s]рва[/s] не срабатывает если:<br><br>
		[t]&bull; Существо попало на него при помощи [m]Телепорта[/m], в таком случае не сработают и [s]мины Башни[/s].<br>
		[t]&bull; Существо пропускает ход, находясь во [s]рву[/s], из-за срабатывания эффекта [s]Страха[/s] или низкого [s]Боевого духа[/s].<br>
		[t]&bull; Существо пропускает ход, находясь во [s]рву[/s], из-за [s]Слепоты[/s], [s]Окаменения[/s] или [s]Паралича[/s].<br><br>
		[t][s]Рвы[/s] разных городов наносят разный урон:
	</p>
	<table ${!m?'class="compress"':''}>
		<tr> <th>Город</th> <th>Тип рва</th> <th width="50%">Эффект</th> </tr>
		<tr> <td>Замок</td> <td>Ров</td> <td>Наносит 70 ед. урона</td> </tr>
		<tr> <td>Оплот</td> <td>Живая изгородь</td> <td>Наносит 70 ед. урона</td> </tr>
		<tr> <td>Башня</td> <td>Минное поле</td> <td>Мины не реагируют на обороняющихся существ. Противник, подорвавшийся на мине, не прерывает ход и не теряет Защиту. Подробности ниже</td> </tr>
		<tr> <td>Инферно</td> <td>Лава</td> <td>Наносит 90 ед. урона</td> </tr>
		<tr> <td>Некрополис</td> <td>Груды костей</td> <td>Наносит 70 ед. урона</td> </tr>
		<tr> <td>Темница</td> <td>Кипящее масло</td> <td>Наносит 90 ед. урона</td> </tr>
		<tr> <td>Цитадель</td> <td>Стена шипов</td> <td>Наносит 70 ед. урона</td> </tr>
		<tr> <td>Крепость</td> <td>Кипящая смола</td> <td>Наносит 90 ед. урона</td> </tr>
		<tr> <td>Сопряжение</td> <td>Ров</td> <td>Наносит 70 ед. урона</td> </tr>
		<tr> <td>Причал</td> <td>Канава</td> <td>Наносит 70 ед. урона</td> </tr>
	</table>
	<p>
		[t][s]Мины[/s], которые появляются в [s]Башне[/s], имеют схожие особенности с [s]минами[/s] от заклинания [m]Минное поле[/m].<br><br>
		[t]Если существо попадает на [s]мину[/s], то она взрывается и наносит урон. Величина урона каждой из [s]мин[/s] рассчитывается по формуле ([s]10 * СМ + A[/s]), где [s]СМ[/s] - [s]Сила Магии[/s] героя, а [s]A = 25[/s] если у героя нет [s]Магии огня[/s] выше [s]Базового[/s] уровня. При наличии [s]Продвинутой Магии огня А = 50[/s], при [s]Экспертной А = 100[/s]. После срабатывания [s]мина[/s] исчезает. Если в замке отсутствует герой, [s]мина[/s] наносит фиксированно [s]150[/s] единиц урона.<br><br>
		[t]На урон [s]мин[/s] влияет заклинание [m]Защита от огня[/m] и наличие [m]Сферы бушующего огня[/m], а [m]Големы[/m] получают уменьшенный урон за счет врожденного сопротивления.<br><br>
		[t][s]Мины[/s] могут быть уничтожены [m]Снятием заклинаний[/m] [s]Экспертного[/s] уровня. Также [s]мины[/s] не активируются при наличии у любого из героев [m]Плаща отречения[/m]. [m]Сфера запрещения[/m] не обезвреживает [s]мины[/s].<br><br>
		[t][s]Мины[/s] имеют огненную природу и не активируются существами под заклинанием [m]Защита от огня[/m] или с врожденным сопротивлением к этой стихии, кроме случая, когда у одного из героев имеется [m]Сфера уязвимости[/m] - она снимает иммунитет со всех существ.<br><br>
		[t]Интересно, что в отличии от [s]мин[/s], появляющихся при применении заклинания [m]Минное поле[/m], [s]мины Башни[/s] не видны атакующему герою вне зависимости от состава его армии.<br><br>
		[t]Ниже приведены несколько интересных багов связанных с осадой замка:<br><br>
		[t]&bull; Если зажать свое двухгексовое существо во [s]рве[/s] в самом низу [s]стены[/s] и плотно окружить его своими существами, при использовании заклинания [m]Клон[/m] на это существо, двойник переместится за [s]стену[/s], так как клетки за [s]стеной[/s] окажутся блажайшими и наиболее приоритетными для появления [m]Клона[/m].<br><br>
		[t]&bull; Если ИИ при обороне замка имеет стрелков и считает, что его стрелки сильнее стрелков нападающей армии, он не будет выходить за пределы [s]стен[/s] до тех пор, пока [s]стены[/s] замка остаются целыми, что в целом логично, однако, когда у стрелков под упралвением ИИ кончаются снаряды, он не изменяет своего поведения и просто уходит в защиту.<br><br>
		[t]&bull; Аналогично ИИ ведет себя при наличии у его героя заклинания [m]Взрыв[/m]. Пока [s]стены[/s] целы, существа не будут выходить за них, даже если у героя закончится [s]мана[/s]. Интересно также отметить, что ИИ крайне неохотно применяет заклинание [m]Взрыв[/m] к призванным [s]элементалям[/s]. Для работы этого бага необходимо, чтобы враг считал свою армию сильнее нападающих, в ином случае поведение ИИ меняется на более "адекватное".
	</p>
	`},
];
