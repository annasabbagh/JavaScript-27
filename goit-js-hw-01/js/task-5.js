'use strict';
let credits;
const deliveryCountry = prompt('Введите название Вашей страны');

if (deliveryCountry === null) {
  alert('Покупка отменена пользователем');
} else {
  switch (deliveryCountry.toLowerCase()) {
    case 'китай':
      credits = 100;
      break;

    case 'чили':
      credits = 250;
      break;

    case 'австралия':
      credits = 170;
      break;

    case 'индия':
      credits = 80;
      break;

    case 'ямайка':
      credits = 120;
      break;

    default:
      alert('В вашей стране доставка не доступна');
  }
  if (credits) {
    alert(`Доставка в ${deliveryCountry} будет стоить ${credits} кредитов`);
  }
}
