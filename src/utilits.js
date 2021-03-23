// условия галочек на чекбоксах
export const changeFilters = (evn, obj, funcChangeOneCheckOn, funcChangeCheckOn, funcChangeMainCheckOff) => {
  /* eslint-disable */

  // преобразование объкта со значениями чекбоксов в массив
  const arrayAllCheck = Object.entries(obj);
  const idx = Number(evn.target.id);

  // изменение состояния (активный/неактивный) одного чекбокса
  arrayAllCheck.map((elem) => {
    if (Number(elem[0]) === idx) elem[1] = !elem[1];
    return elem;
  });

  // преобразование массива с чекбоксами обратно в объект
  const newObj = Object.fromEntries(arrayAllCheck);
  funcChangeOneCheckOn(newObj);

  // изменение чекбокса "Все" на актвный, если все чекбоксы с пересадками === true
  if (
    arrayAllCheck[1][1] === true &&
    arrayAllCheck[2][1] === true &&
    arrayAllCheck[3][1] === true &&
    arrayAllCheck[4][1] === true
  ) {
    return funcChangeCheckOn();
  }

  // изменение чекбокса "Все" на неакивный, если хотя бы один чекбокс с пересадками === false
  for (let i = 1; i < arrayAllCheck.length; i++) {
    if (arrayAllCheck[i][1] === false) funcChangeMainCheckOff();
  }
  /* eslint-enable */
  return [];
};

// отсортировать билеты по пересадкам
export const sortTickets = (array, arrayVal, funcRenderArrTicket) => {
  const newRendTick = [];
  const idx = [];
  if (array) {
    arrayVal.findIndex((value, index) => {
      if (value) idx.push(Number(index) - 1);
      return '';
    });
    array.map((elem) => {
      if (idx.includes(elem.segments[0].stops.length)) newRendTick.push(elem);
      return elem;
    });
  }
  return funcRenderArrTicket(newRendTick.slice(0, 5));
};

// поставить пробел в цене
export const priceFormatting = (num) => `${String(num).slice(0, -3)} ${String(num).slice(-3)}`;

// показать количество пересадок
export function getNumberTransfers(amount) {
  switch (amount.length) {
    case 0:
      return 'Без пересадок';
    case 1:
      return '1 пересадка';
    case 2:
      return '2 пересадки';
    case 3:
      return '3 пересадки';
    default:
      break;
  }
  return '';
}

// отобразить пересадки
export const showTransfers = (arr) => {
  if (arr.length === 0) return '-';
  if (arr.length > 0) return arr.join(', ');
  return '';
};

// отформатировать время
export const timeFormatting = (time) => {
  const hours = Math.floor(time / 60);
  const min = time % hours;
  const duration = `${hours}ч ${min}м`;
  return duration;
};

export const filterCheapTickets = (items, funcGetCheapTickets) => {
  funcGetCheapTickets(items.sort((prev, next) => prev.price - next.price));
};

export const filterFastTickets = (items, funcGetFastTickets) => {
  funcGetFastTickets(items.sort((prev, next) => prev.segments[0].duration - next.segments[0].duration));
};
