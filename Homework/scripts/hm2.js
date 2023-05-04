// Задание 1

let password = 'Hello Friend';
let enterThePassword = String(prompt('Введите пароль'));

if (password === 'Hello Friend') {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

// Задание 2

let c = 20;

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Не верно');
}

(c > 0 && c < 10) ? console.log('Верно') : console.log('Не верно');

// Задание 3

let d = 250;
let e = 50;

(d > 100 || e > 100) ? console.log('Верно') : console.log('Не верно');

// Задание 4

let a = '2';
let b = '3';
alert(+a + +b);

// Задание 5

let monthNumber = String(prompt('Введите номер месяца'));

switch (monthNumber) {

    case '1':
    case '2':
    case '12':

        console.log('Зима');

        break;

    case '3':
    case '4':
    case '5':

        console.log('Весна');

        break;

    case '6':
    case '7':
    case '8':

        console.log('Лето');

        break;

    case '9':
    case '10':
    case '11':

        console.log('Осень');

        break;
    default:
        console.log('номер месяца больше 13');
        break;
}
