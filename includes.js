

let names = ["Anna", "Ben", "Clara"]    // case sensitive in JS



function containsElement(array, element){
    return array.includes(element, 2);   

}


function initArrays(){
    console.log(containsElement(names, "Ben"));   //case sensitive in JS
    }
