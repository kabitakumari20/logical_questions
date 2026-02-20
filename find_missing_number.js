let arr = [1, 2, 4, 5, 6, 8,10];
let max = arr[0];

// find max manually
for (let i = 1; i < arr.length; i++) {
    if (arr[i] >max) {
        max = arr[i];
    }
}

let missing = [];

for (let i = 1; i <= max; i++) {
    let found = false;

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === i) {
            found = true;
            break;
        }
    }

    if (!found) {
        missing.push(i);
    }
}

console.log("Missing number(s):", missing);
