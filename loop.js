let myList = [12, "Banana", 1];
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let singleTestVar = "asd";

function containsElement(array, element){
    return array.includes(element);
}

function initArrays(){
    let contentRef = document.getElementById('my_Content');
    contentRef.innerHTML = '';
    for (let indexFruits = 0; indexFruits < fruits.length; indexFruits++) {
        contentRef.innerHTML += `<p>${indexFruits + " " + fruits[indexFruits]}</p>`
    }

    
}function sumArray(arr){
    let sum = 0;

    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];   
    }
    return sum;
}

//console.log(sumArray([3, 7, 1, 4]));
//console.log(sumArray([1, 2, 3, 4, 5])); 


function printNumbers(){
    let num = [1, 2, 3, 4, 5];
    for (let i = 0; i < 3; i++) {
    console.log(num[i]);
    }
     
}

function printNumbersReverse() {
    let num = [1, 2, 3, 4, 5];
    for (let i = num.length - 1; i >= 0; i--) {
    console.log(num[i]);
    }
}

