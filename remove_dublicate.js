let nums = [1, 2, 2, 3, 4, 4, 5];
let obj = {};
let result = [];

for (let num of nums) {
  if (!obj[num]) {
    obj[num] = true;   // mark as seen
    result.push(num);  // push only first time
  }
}

console.log("result ---", result); // [1, 2, 3, 4, 5]
