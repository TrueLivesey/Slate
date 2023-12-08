export function showMore() {
  const showMore = document.getElementById('js-show-more');
  const cardsLength = document.querySelectorAll('.gallery__picture').length;
  let items = null;
  let count = null;
  let widnowSize = window.screen.width;

  // Отслеживаем изменение ширины экрана браузера
  window.addEventListener('resize', () => {
    widnowSize = window.screen.width;
  });

  // Условие на ширину экрана. На мобильных устройствах будет прибавляться по
  // 2 новых фото. Если ширина больше 549, то по 3
  if (widnowSize > 549) {
    items = 7;
    count = 3;
  } else {
    items = 4;
    count = 2;
  }

  // Обработчик кнопки
  showMore.addEventListener('click', () => {
    items += count;
    let cardsArray = [];
    let visibleItems = null;

    if (widnowSize <= 549) {
      const firstCard = document.getElementById('gallery-1');
      const SecondCard = document.getElementById('gallery-8');
      const ThirdCard = document.getElementById('gallery-9');
      const FourthCard = document.getElementById('gallery-10');
      const otherCards = Array.from(document.querySelector('.gallery__content').children).slice(1, 7);

      // Так как на дизайн-макете восьмое, девятое и десятое фото становятся
      // вторым, третьем и четвёртым соответственно, то приходится вручную
      // их добавлять в массив видимых фото, чтобы сохранить порядок. Поиск
      // по всему контенту в галерее, как это сделано для ширины экрана > 549,
      // очевидно дал бы ложный результат (неверный порядок элементов)
      cardsArray.push(firstCard, SecondCard, ThirdCard, FourthCard);

      // Добавляем остальные фото из оставшихся в общий массив всех фото
      otherCards.forEach((otherCard) => {
        cardsArray.push(otherCard);
      });

      // Потенциально видимые элементы берем из общего массива, учитывая, что
      // items = 6 (items += count, где count = 2)
      visibleItems = cardsArray.slice(0, items);
    } else {
      cardsArray = Array.from(document.querySelector('.gallery__content').children);
      visibleItems = cardsArray.slice(0, items);
    }

    // Проходим по массиву будущих видимых фото
    visibleItems.forEach((e) => {
      // Удаляем класс is-hidden, если он присутствует
      if (e.classList.contains('is-hidden')) {
        e.classList.remove('is-hidden');
      }

      // Добавляем фото на страницу
      e.style.display = 'block';
    });

    // Скрываем со страницы кнопку
    if (visibleItems.length === cardsLength) {
      showMore.classList.add('is-hidden');
    }
  });
}
