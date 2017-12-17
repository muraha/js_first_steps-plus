let text = 'перший_український_космонавт';

function Camelize(str) {
    str.toLowerCase;
    let arr = str.split('_');
    for (let i = 1, len = arr.length; i < len; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    str = arr.join('');

    console.log(str);
}
Camelize(text);
