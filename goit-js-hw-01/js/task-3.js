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
