// Sorts the array elements in ascending order and returns the value to a string
console.log(["Jan", "Feb", "Mar", "Apr"].sort());
// output: [ 'Apr', 'Feb', 'Jan', 'Mar' ]

console.log([1, 30, 4, 1000, 101, 121].sort());
// output : [ 1, 1000, 101, 121, 30, 4 ]

// using compare callback for specific output
const arr = [1, 30, 4, 1000];

const compareFunc = (a, b) => {
  // explain: compare 2 value to be 3 value result
  // 1. If, is negative then `a` will come before `b`
  // 2. If, positive then `b` will come before `a`
  // 3. If , 0 then there is no position change.
  return a - b; // this case is positive number
};

console.log(arr.sort(compareFunc));
