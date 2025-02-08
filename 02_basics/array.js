const Arr=[1,2,3,4,5];
console.log(Arr[0]);

Arr.push(7);
Arr.push(9);
console.log(Arr);

console.log(Arr.includes(9));
console.log(Arr.indexOf(3));

// slice, splice

console.log("A ", Arr);

const myn1 = Arr.slice(1, 3)

console.log(myn1);
console.log("B ", Arr);//do not change original array


const myn2 = Arr.splice(1, 3)
console.log("C ", Arr);// chnages original array
console.log(myn2);

