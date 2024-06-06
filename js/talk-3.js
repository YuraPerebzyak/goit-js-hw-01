function getElementWidth(content, padding, border) {
  // Функція для видалення "px" і перетворення рядка на число
  function parsePx(value) {
    return parseFloat(value.replace('px', ''));
  }

  // Отримання числових значень для контенту, падінгу і бордера
  const contentWidth = parsePx(content);
  const paddingValue = parsePx(padding);
  const borderValue = parsePx(border);

  // Враховуючи, що box-sizing: border-box
  // Загальна ширина елемента = ширина контенту+ падінг + бордер
  const getElementWidth = contentWidth + (paddingValue * 2) + (borderValue * 2);

  return getElementWidth;
}


console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200