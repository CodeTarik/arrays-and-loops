let numbers = [10, 20, 30, 40];
let letters = ['a', 'b', 'c', 'd'];

function removeFirstElement(array1, array2){
   let removeFirstElement = [array1.shift(), array2.shift()];
   return removeFirstElement;  // returns an array with the first elements removed from both arrays.
}

function initArrays(){
    console.log(removeFirstElement(numbers, letters))
    console.log(letters);
    console.log(numbers);
}