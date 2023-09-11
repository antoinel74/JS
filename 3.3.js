// Duplicate a string using the push method

const array1 = [1, 2, 3, 4, 5];
let array2 = [];

function double() {
  for (let i = 0; i < array1.length; i++) {
    array2.push(array1[i]);
  }
  console.log(array2);
}
console.log(array1);
double();

// Duplicate a string using a specific methiod

const array3 = [3, 4, 5, 6];
const array4 = [...array3];

console.log(array3);
console.log(array4);
