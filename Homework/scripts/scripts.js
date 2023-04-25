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

const obj = {

    Коля: 200,

    Вася: 300,

    Петя: 400,

}



for (const key in obj) {

    console.log(`${key} - зарплата ${obj[key]} долларов`);

}

let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2;
    num++;
}
console.log(n);
console.log(num);





