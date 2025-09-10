let array = [1, 1, 2, 3,5,3, 4, 3, 5, 6, 7];
let obj = {};
let result = [];

for (let num of array) {
  if (!obj[num]) {
    obj[num] = true;   // mark as seen
    result.push(num);  // add only first time
  }
}

console.log(result); // [1, 2, 3, 4, 5, 6, 7]
