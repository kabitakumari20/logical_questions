// const original = { 
//   name: "Manvi", 
//   address: { city: "Delhi" } 
// };

// shallowCopy.address.city = "Mumbai";

// console.log(original.address.city); // 👉 "Mumbai"


const original = { 
  name: "Manvi", 
  address: { city: "Delhi" } 
};

const deepCopy = structuredClone(original); // modern and safe method

deepCopy.address.city = "Mumbai";

console.log(original.address.city); // 👉 "Delhi"
