// Получаем элемент дисплея калькулятора
const display = document.getElementById('display');

// Функция для добавления цифры на дисплей
function appendNumber(number) {
    display.value += number;
}

// Функция для добавления оператора
function appendOperator(operator) {
    display.value += operator;
}

// Функция для добавления десятичной точки
function appendDecimal() {
    // Разбиваем текущее значение по операторам
    const parts = display.value.split(/[\+\-\*\/]/);
    // Проверяем последнее число на наличие точки
    if (parts.length > 0 && !parts[parts.length - 1].includes('.')) {
        display.value += '.';
    }
}

// Функция полной очистки дисплея (AC)
function allClear() {
    display.value = '';
}

// Функция удаления последнего символа (C)
function clearLast() {
    display.value = display.value.slice(0, -1);
}

// Функция вычисления результата
function calculate() {
  try {
      // Проверяем, есть ли что вычислять
      if (display.value === '') return;
        
      // Заменяем × на * и ÷ на / для корректного вычисления
      let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
      // Вычисляем результат
      const result = eval(expression);
      // Выводим результат, заменяя точку на запятую (для русского формата)
      display.value = result.toString().replace(/\./g, ',');
  } catch (e) {
      display.value = 'Ошибка';
  }
}