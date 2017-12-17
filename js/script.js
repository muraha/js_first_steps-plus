/*
let phrase = prompt('what should be written', '');
let quantity = +prompt('amount', '');
let delay = +prompt('What delay in seconds', '');
let a = 0;

let t = setInterval(function () {
    let resn = '';
    for (let i = 0; i <= a; i++) {
        resn += phrase + " ";
    }
    console.log(resn);

    a++;
    if (a === quantity) {
        clearInterval(t);
    }
}, delay * 1000);
*/

console.log(`/* FIRST TASK
------A-----*/`);

let quantity = +prompt("Input quantity of triangle's lines", "");
let triangle = '';
for (let i = 0; i < quantity; i++) {
    triangle += "* ";
    console.log(triangle)
}


console.log(`/* FIRST TASK
------B-----*/`);

let quantity2 = +prompt("Input quantity of reverse triangle's lines", "");
let triangle2 = '';
for (let i = 0; i < quantity2; i++) {
    triangle2 += "* ";
}
let cut = triangle2.length;
//let cut = -1;
for (let i = quantity2; i > 0; --i) {

    console.log(triangle2.slice(0, cut));
    cut -= 2;
}

console.log(`/* FIRST TASK
------C-----*/`);
let side = +prompt("Input side length of the square", "");
let len = side * side;
let lenStart = len;
let str = "";
while (len--) {
    if (len % side === side - 2 && len > side && len < lenStart - side) {
        for (let i = 0; i < side - 2; i++) {
            str += '  ';
            len--;
        };
        len++;
    } else {
        str += '* ';
        len % side === 0 && (str += "\n");
    }
}
console.log(str);

console.log(`/* FIRST TASK
------D-----*/`);
let a = +prompt("Input side length of the square", "");
let P = a * a;
let P0 = P;
str = "";
while (P--) {
    if (P % a === a - 2 && P > a && P < P0 - a) {
        for (let i = 0; i < a - 2; i++) {
            if ((str.match(/\n/g) || []).length === i + 1) {
                str += '* ';
                P--;
            } else {
                str += '  ';
                P--;
            }
        };
        P++;
    } else {
        str += '* ';
        P % a === 0 && (str += "\n");
    }
}
console.log(str);
