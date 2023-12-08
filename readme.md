# Спринт-проект Slat

https://truelivesey.github.io/Slate/

## Информация о разработке и проекте

- В работе использовались только html, css и js.
- Html код написан с использованием БЭМ и проверен на валидаторе.
- Css-код разделён на 4 файла: шрифты, переменные, медиа-выражения и основной код.
- Js используется только для функции, которая позволяет смотреть больше фотографий в галерее.
- Сайт адаптирован под любые размеры (от экранов с 300px).
- Для оптимизации были сжаты картинки (использовался тег picture с форматом webp, для этого все картинки были обработаны) и шрифты (удалены все лишние символы).
- Была проведена работа по доступности. Проставлены aria-label там, где это необходимо.
- Несколько svg иконок были вынесены в sprite, но большинство использованы в виде кода, чтобы их кастомизировать.
- Все интерактивные элементы стилизированы, в том числе и логотипы компаний.

## Тестирование

Сайт протестирован в браузерах:

- Google Chrome
- Mozilla Firefox
- Opera
- Яндекс.Браузер
- Vivaldi
- Microsoft Edge

**IE не поддерживается**

Данные lighthouse:

1. Perfomance: 97
2. Accessibility: 95
3. Best practice: 100
4. SEO: 90
