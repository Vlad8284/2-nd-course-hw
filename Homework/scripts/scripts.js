// Задание 1

for (let i = 0; i < 2; i++) {console.log("Привет!");}

// Задание 2

let a = 1;

while (a <= 4) {
    console.log(a);
    a = a + 1;
}
 
let j = 1;

do {
    console.log(j);
    j = j + 1;
} while (j <= 4)


for (l = 1; l <= 5; l++) {
    console.log(l);
}

// Задание 3
 
let k = 7;
while (k <= 21) {
    console.log(k);
    k = k + 1;
}

let h = 7;
do {
    console.log(h);
    h = h + 1;
} while (h <= 21)

for (d = 7; d <= 22; d++) {
    console.log(d);
}

// Задание 4

const obj = {

    Коля: 200,

    Вася: 300,

    Петя: 400,

}

for (const key in obj) {

    console.log(`${key} - зарплата ${obj[key]} долларов`);

}

// Задание 5

let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2;
    num++;
}
console.log(n);
console.log(num);

// Задание 6

for (let aprilDay = 7; aprilDay <= 31; aprilDay += 7) {
    console.log(`Сегодня пятница, ${aprilDay} -е число. Необходимо подготовить отчет.`);
}



