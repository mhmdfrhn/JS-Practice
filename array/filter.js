const words = [
  "spray",
  "limit",
  "exuberant",
  "destruction",
  "elite",
  "present",
];

const modifiedWords = words.filter((word, index, arr) => {
  arr[index] += " Extra";
  return word.length < 6;
});

console.log(modifiedWords);
