let a = 10;
alert(a);

a = 20;
alert(a);

const iphone = 2007;
alert(iphone);

const javaScript = "Brendan Eich";
alert(javaScript);

let x = 10;
let y = 2;

alert(x + y);
alert(x - y);
alert(x * y);
alert(x / y);

alert(y ** 5);

a = a - 11;
let b = 2;

alert(a % b);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

let i = 1;
i += 5;
i -= 3;
i *= 7;
i /= 3;
++i;
--i;
alert(i);

let age = Number(prompt('Сколько вам лет?'));
alert(age);






const user =
{
    name: 'Миша',
    age: age,
    isAdmin: false
    

}

user ['city of residence'] = 'Владимир';

user.age ['(age = String)'] = true; 
console.log(user.age);
console.log(user['age']);

delete user ['city of residence'];


let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);


const name = prompt('Как, Ваше ИМЯ?');

alert(`Привет, ${name} !`);

let password = 'Hello Friend';
let enterThePassword = String(prompt('Введите пароль'));

if (password === 'Hello Friend') {
    alert ('Пароль введен верно');
} else {
    alert ('Пароль введен неправильно');
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
