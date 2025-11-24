UI тестування сайту https://hotline.ua

TestСase 1. Пошук(фільтрація) товарів по назві бренда
STR:
1. Відкрити сайт https://hotline.ua
2. Знайти розділ 'Комп'ютери, Мережі' -> click on './/div//a//*[@class='icon-section--categories icon-section--categories--computer']'
3. Знайти підрозділ 'Диски SSD' -> click on './/div[@id='noutbuki-pk']//..//a[@href='/ua/computer/diski-ssd/']'
4. Знайти 'Фільтри' -> click on './/div[contains(@class, '--sort')]//span[@class='list-headers__button-name']'
5. Знайти поле 'Пошук по фільтрам' -> click on '(//div[contains(@class,'--no-selected')])[2]//input'
6. Записати 'ATRIA' -> Enter
ER: Бренд - ATRIA (3)

TestСase 2. Зміна кольорової теми
STR:
1. Відкрити сайт https://hotline.ua
2. Знайти іконку 'Зміна кольрової схеми' -> click on CSS locator 'button.color-switcher.flex.middle-xs.center-xs.hidden-below-xl'
ER: Перевірити CSS locator 'html.dark-mode'


TestСase 3. Пошук товару на головній стоірнці
STR:
1. Відкрити сайт https://hotline.ua
2. Знайти іконку 'Знайти товар, магазин, бренд'('.//div[@role='combobox']')
3. Поставити курсор в поле пошуку ->  -> click on './/div[@role='combobox']'
4. Написати текст 'Смартфон Apple iPhone 15 Pro Max' -> Enter
ER: Перевірити локатор '(//span[@class='selected-filters-group__title']//span[contains(text(),'12')])[3]' --> '12'


TestСase 4. Вибір іншої локації (міста)
STR:
1. Відкрити сайт https://hotline.ua
2. Знайти іконку 'Локація' -> click on './/div[@class='location__city']'
3. Перевірити наявність модального вікна -> './/div[@class='modal__body']'
4. Знайти та вибрати нове місто -> click on '//span[text()='Львів']'
ER: Перевірити локатор './/div[@title='Львів']'


TestСase 5. Перехід із головної на популярні товари (вибір одного)
STR:
1. Відкрити сайт https://hotline.ua
2. Перевести фокус на головній сторінці на область 'Популярні товари' -> './/section[@class='content-block popular-products-section index-page-section']'
3. Знайти довільний товар 'Карта-пазл Janod Карта мира (J04719)' -> click on './/div[@data-id='391']//a[@href='/ua/deti/pazly/']'
ER: Перевірити локатор .//h1[@class='title__main' and normalize-space()="М'який пазл Janod Карта мира (J04719)"]