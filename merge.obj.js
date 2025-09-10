let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
// 👉 Merge obj1 and obj2 into a new object (obj2 values overwrite)
let obj3={...obj1, ...obj2}
console.log('obj3===',obj3)