let x = +prompt('enter first number to compare', '');
let y = +prompt('enter second number to compare',
    '');

function min(a, b) {
    if (a < b) {
        console.log('First number is the smallest');
        console.log(a)
    } else if (a === b) {
        console.log('Both numbers are equal');
    } else {
        console.log('Second number is thesmallest');
        console.log(b)
    }
}

function max(a, b) {
    if (a > b) {
        console.log('First number is the biggest');
        console.log(a)
    } else if (a === b) {
        console.log('Both numbers are equal');
    } else {
        console.log('Second number is the biggest');
        console.log(b)
    }
}
max(x, y);
min(x, y)
