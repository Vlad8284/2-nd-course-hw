

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





let monthNumber = Number(prompt('Введите номер месяца'));



switch (monthNumber) {

    case 1:
    case 2:
    case 12:

        console.log('Зима');

        break;

    case 3:
    case 4:
    case 5:

        console.log('Весна');

        break;

    case 6:
    case 7:
    case 8:

        console.log('Лето');

        break;

    case 9:
    case 10:
    case 11:

        console.log('Осень');

        break;
    default:
        console.log('номер месяца больше 13');
        break;
}

for (let i = 0; i <= 2; i++) { console.log("Привет!"); }

let i = 1;

while (i <= 4) {
    console.log(i);
    i = i + 1;
}

do {
    console.log(i);
    i = i + 1;
} while (i <= 4)

for (i = 1; i <= 5; i++) {
    console.log(i);
}

let k = 7;

while (k <= 21) {
    console.log(k);
    k = k + 1;
}

do {
    console.log(k);
    k = k + 1;
} while (k <= 21)

for (k = 7; k <= 22; k++) {
    console.log(k);
}




