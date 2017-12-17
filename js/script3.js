let str = prompt('Enter any word', '');

function isPalindrome(word) {
    word.toLowerCase();
    const full = word.length;
    const half = Math.floor(full / 2);
    for (let i = 0; i < half; i++) {
        if (word[i] !== word[full - i - 1]) {
            return false;
        }
    }
    return true;
}

isPalindrome(str) ?
    console.log('The word is a polindrome') :
    console.log('The word is not a polindrome');
