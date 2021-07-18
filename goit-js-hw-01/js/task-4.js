"use strict";
let credits = 23580;
const pricePerDroid = 3000;

const droidsQty = prompt ('Для оформления заказа, укажите количество дроидов');
let totalPrice;
let message;

if (droidsQty === null) {
    console.log ('Отменено пользователем!');
} else {
    if (!Number.isNaN(Number(droidsQty)))  {
        totalPrice = droidsQty * pricePerDroid;

        if (totalPrice >= credits) {
        message = 'Недостаточно средств на счету!';
        } else {
        message = `Вы купили ${droidsQty} дроидов, на счету осталось ${credits - totalPrice} кредитов.`;
        } 
    } else {
        message = 'Пожалуйста, введите цифровое значение';
        }
}

console.log (message);


