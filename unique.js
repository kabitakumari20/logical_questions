let array = [1, 1, 2, 3, 4, 3, 5, 6, 7];
let obj = {};
let result = [];

for (let num of array) {
  if (obj[num]) {
    obj[num] = obj[num] + 1;
  } else {
    obj[num] = 1;
  }
}

for (let num in obj) {
  if (obj[num] === 1) {
    result.push(Number(num));
  }
}

console.log(result); // [2, 4, 5, 6, 7]
