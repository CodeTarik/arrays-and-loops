

let fruits = ["Banana", "Strawberry", "Apple", "Kiwi"]



function initArrays(){
    let i = 1;


    fruits.forEach(element => {
        console.log(element)
    });


    while (i < 6) {
        console.log("while " + i)
        i++;
    }

    for (let index = 0; index < fruits.length; index++) {
        console.log(fruits[index]);
        
    }

    //for (let index = 1; index < 6; index++) {
    //console.log("for " + index);
    //}

}
    //let refList = document.getElementsByClassName('red_box');

    //for (let index = 0; index < refList.length; index++) {
        //const singleRef = refList[index];
        //singleRef.style.border = "2px solid blue";
        //singleRef.innerText = index;
    //}




/*function myWhile(){
    let text = "";
    let i = 0;
    while (i < 20) {
        text += "The number is " + i + "\n";
        i++;
    }

    console.log(text);
}

myWhile();*/




