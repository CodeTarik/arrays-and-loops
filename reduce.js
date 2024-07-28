let numara = [150, 25 ,15];

function myReduce(total, numero){
return Math.abs(total - numero);

}
let sum5 = numara.reduce(myReduce, 0);


console.log(sum5);