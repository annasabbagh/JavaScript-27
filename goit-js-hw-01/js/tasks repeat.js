// Task 1
const name = 'Генератор защитного поля';
let price = 1000;
console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);
price = 2000;
console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// Task 2

const total = 100;
const ordered = 50;
let message;

if (ordered > total) {
  message = 'На складе недостаточно твоаров!';
} else {
  message = 'Заказ оформлен, с вами свяжется менеджер';
}
console.log(message);

// ********************

const total = 100;
const ordered = 50;

const message =
  ordered > total
    ? 'На складе недостаточно твоаров!'
    : 'Заказ оформлен, с вами свяжется менеджер';
console.log(message);

// Task 3
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const userInput = prompt('Введите пожалуйста пароль');

if (userInput === null) {
  message = 'Отменено пользователем!';
} else if (userInput === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);

// ********************
const ADMIN_PASSWORD = 'jqueryismyjam';
const userInput = prompt('Введите пожалуйста пароль');
let message;

switch (userInput) {
  case null:
    message = 'Отменено пользователем!';
    break;

  case ADMIN_PASSWORD:
    message = 'Добро пожаловать!';
    break;

  default:
    message = 'Доступ запрещен, неверный пароль!';
}

alert(message);

// Task 4

// На счету пользователя есть 23580 кредитов, значение хранится в переменной
// credits(создай и присвой).Пользователь решает купить ремонтных дроидов,
// которые стоят по 3000 кредитов за штуку.Цена одного дроида хранится в
// переменной pricePerDroid(создай и присвой).

// При посещении страницы, используя prompt, необходимо спросить количество
// дроидов которые пользователь хочет купить и сохранить в переменную.

// Напиши скрипт который:

// Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение
// 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной
// totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету, выводи в
// консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету и
// вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

const credits = 23580;
const pricePerDroid = 3000;
const droidsOrdered = Number.parseInt(prompt('Укажите количество дроидов'));
let message;
const totalPrice = droidsOrdered * pricePerDroid;
const creditsLeft = credits - totalPrice;

if (droidsOrdered === null) {
  message = 'Отменено пользователем!';
} else if (totalPrice > credits) {
  message = 'Недостаточно средств на счету!';
} else {
  `Вы купили ${droidsOrdered} дроидов, на счету осталось ${creditsLeft} кредитов.`;
}
alert(message);

// Task 5

const country = prompt('Введите страну');
let cost;

if (country === null) {
  alert('Отменено пользователем');
} else {
  const countryNormalized = country.toLowerCase();
  switch (countryNormalized) {
    case 'китай':
      cost = 100;
      break;
    case 'чили':
      cost = 250;
      break;
    case 'австралия':
      cost = 170;
      break;
    case 'индия':
      cost = 80;
      break;
    case 'ямайка':
      cost = 120;
      break;

    default:
      alert('В вашей стране доставка не доступна');
  }
  if (cost) {
    alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
  }
}

// Task 6

// Напиши скрипт который просит посетителя ввести число в prompt до тех пор,
// пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение
// к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число.
// Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет
// кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать
// alert со строкой 'Общая сумма чисел равна [сумма]'.

// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный
// набор символов, не нужно.Если хочешь, в случае некорректного ввода, показывай
// alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат
// prompt плюсовать к общей сумме не нужно, после чего снова пользователю предлагается
// ввести число в prompt.

let input;
let total = 0;
const userInput = prompt('Введите число');

If();
