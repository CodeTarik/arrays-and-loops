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

    
}