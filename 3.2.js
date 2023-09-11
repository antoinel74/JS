let numbers = [1, 2, 3, 4, 5];
let sum = 0;

// Sum function + call

function mysum() {
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}
mysum();

// Average

function myavg() {
  let avg = sum / numbers.length;
  console.log(avg);
}
myavg();

sum = 0;
avg = 0;
numbers = [100, 101, 102];

mysum();
myavg();
