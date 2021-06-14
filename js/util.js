//генератор случайного числа
function randomMinMax (min, max) {
  if (min < 0 || max < 0) {
    // eslint-disable-next-line no-console
    return console.error('Ошибка. Диапазон может быть только положительный, включая ноль.');
  }
  else if (min > max) {
    // eslint-disable-next-line no-console
    return console.error('Ошибка. Первое значение должно быть меньше второго.');
  }
  return Math.floor(Math.random() * (max - min +1)) + min;
}

// проверка длины строки
function measureLength (row, maxLength) {
  return (row.split('').length <= maxLength);
}

export {randomMinMax, measureLength};
