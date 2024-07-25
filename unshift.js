let digit = [2, 3, 4];
let alphabet = ['b', 'c', 'd'];

function addElementToStart(digit, alphabet){
    const add = [digit.unshift(1), alphabet.unshift('A')];
    return add;
}

function initArrays() {
    console.log(addElementToStart(digit, alphabet));
    console.log(digit);
    console.log(alphabet)
}