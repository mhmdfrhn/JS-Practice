const arr = [
  { name: "farhan", umur: 22 },
  { name: "gustavo", umur: 22 },
];
const testFunc = (obj) => obj.name === "farhan";

const arrFind = arr.find((prop) => testFunc(prop));
console.log(arrFind);
