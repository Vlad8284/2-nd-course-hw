

let password = 'Hello Friend';
let enterThePassword = String(prompt('Введите пароль'));

if (password === enterThePassword) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

let c = 20;

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Не верно');
}

(c > 0 && c < 10) ? console.log('Верно') : console.log('Не верно');

let d = 250;
let e = 50;

(d > 100 || e > 100) ? console.log('Верно') : console.log('Не верно');

let a = '2';
let b = '3';
alert(+a + +b);





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
