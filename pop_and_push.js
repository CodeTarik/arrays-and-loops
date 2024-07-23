let fruits = ["apple", "banana", "strawberry", "pineapple", "lime"]


function initArrays(){
fruits.pop();           // removes the last element in an array
document.getElementById("sweet").innerHTML = fruits;
fruits.pop();
fruits.push("apple");
fruits.push("watermelon");
}