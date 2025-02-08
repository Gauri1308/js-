// let const var
//var was used before 2015 then let 
//const when we dont want to change the variable 


let score =200;
console.log(score);

score =100;
console.log(score);

const arrayEmpty = new Array(2);

console.log(arrayEmpty); // 2
console.log(arrayEmpty[0]); // undefined; actually, it is an empty slot
console.log(0 in arrayEmpty); // false
console.log(1 in arrayEmpty); // false

console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]


