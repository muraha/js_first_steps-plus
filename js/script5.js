/* under construction*/
alert(`Lets play a game!
Try to guess number`);
let comp = Math.trunc(Math.random() * 100);
console.log(comp);
let me = prompt('What number am I thinking about?', '');
let count = 1;

while (me !== null) {
    if (me > comp) {
        alert('My number is smaller!!');
        me = prompt('Try again, sweety', '');
        count++;
        continue;
    } else if (me < comp) {
        alert('My number is bigger!!');
        me = prompt('Try again', '');
        count++;
        continue;
    } else if (me == comp) {
        alert(`YOU WON!!
after ${count} try. 
Nice job, but you can be better`);
        break;
    } else {
        alert("It's not a number");
        me = prompt('Try again, darling', '');
        count++;
        continue;
    }
}
