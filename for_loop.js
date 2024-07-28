
let sum = [3, 7, 1, "error" ,4 ,5];
let sum2 = [1, 2, 3, 4, 5];
const digit = [1, 2, 3, 4, 5];
const digit1 = [1, 2, 3, 4, 5];
let third = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

window.onload = function() {
    printNumbers();
    printNumberReverse();
    printEveryThirdElement();
    isPrime();
};


function sumArray(arr){
    let total = 0;
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] == "error"){
            continue;
        }
    total += arr[index];

        //if(arr[index] == "error"){
            //console.error("verdammt da war ein Fehler");
            //break;
        }
        return total;
    }
console.error(sumArray(sum));
    



function sumArray1(arr1) {
    let sum1 = 0;
    for (let index = 0; index < arr1.length; index++) {
    sum1 += arr1[index];
    }
return sum1;
}

console.log(sumArray1(sum2));


let numbers = [1, 2, 3, 4, 5];

let sum3 = numbers.reduce((accumulator, current) => accumulator + current);

console.log(sum3)


function getSum(total, num){
    return total + Math.round(num);
}
 let numb = [ 15.2, 2.3, 1.1, 4.4];
 let sum4 = numb.reduce(getSum, 0);

console.log(sum4);



function printNumbers(){
    for (let i = 0; i < 3; i++) {  //display the sequence up to the second digit, in the array the sequence always starts at 0
    console.log(digit[i]);          // In the console, the sequence is displayed as follows: 1, 2, 3
}
}

function printNumberReverse(){
    for (let i = 4; i >= 0; i--) {  //display beginn the sequence up to the
    console.log(digit1[i]);
}
}

function printEveryThirdElement(){
    for (let i = 0; i < third.length; i += 3){
        console.log(third[i]);
    }
}



function isPrime(number){
   if(number <= 1){
    return false;
   }

   for (let index = 2; index < number; index++) {
    if (number % index === 0) {
        return false;
    } 
    }

    return true;
}

let number = 7;
if(isPrime(number)){
    console.log(number + " is a prime number");
}else{
    console.log(number + " is not a prime number");
}


