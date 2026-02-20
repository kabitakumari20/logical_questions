let arr = [1, 2, 3, 4, 5];
let revers = [];

for (let i = arr.length - 1; i >= 0; i--) {
  revers.push(arr[i]);
}

console.log("revers ===", revers); // [5, 4, 3, 2, 1]
