let array = [2, 6, 7, 11, 15]
// Output: [0,1]
let target = 9
let targetINdex = []
for (let i = 0; i < array.length; i++) {
    for (let j = 0 + 1; j < array.length; j++) {
        if (array[i] + array[j] == target) {
            targetINdex.push(i, j)
        }
    }

}
console.log('targetINdex----', targetINdex);
