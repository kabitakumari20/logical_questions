let array = [[1,2,3],[2,3],[4,5],[6,5]];
let freq = {};
let result = [];

// count frequency
for (let sub of array) {
  for (let num of sub) {
    if (freq[num]) {
      freq[num] += 1;
    } else {
      freq[num] = 1;
    }
  }
}

// collect numbers that appear only once
for (let num in freq) {
  if (freq[num] === 1) {
    result.push(Number(num));
  }
}

console.log(result); // [1, 4, 6]
