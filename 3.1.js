let numbers = [1, 2, 3, 4, 5];
let sum = 0;

function mysum() {
for (let i=0; i < numbers.length ; i++) {
    sum += numbers[i];
}
console.log(sum);
}

mysum();

numbers[0] = 100;
numbers[1] = 101;
numbers[2] = 102;
numbers[3] = 0; 
numbers[4] = 0;
sum = 0;

mysum();



