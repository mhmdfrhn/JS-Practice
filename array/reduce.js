const arr = [1, 2, 3, 4, 5];
const intialValue = 0;

// acc: dummy for result value each indexing array
// currVal: index of array element,
// initialValue: if present will start from 0, otherwise will start from 1
const sumAllofArray = arr.reduce((acc, currVal) => acc + currVal, intialValue);

console.log(sumAllofArray);
