const arr = [1, 2, 3, 4, 5];
const valEven = (val) => val % 2 === 0;

// return true value of each element at least 1 of array
console.log(arr.reduce((element) => valEven(element)));
