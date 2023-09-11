function rand10() {
  return Math.floor(Math.random() * 10) + 1;
}

let n = rand10();

function multiRand(n) {
  const mrand = [];
  for (var i = 0; i < n; i++) {
    mrand.push(Math.floor(Math.random() * 10) + 1);
  }
  return mrand;
}

// this function generate n random numbers (n is randomized withing the first func)

console.log(multiRand(n));
