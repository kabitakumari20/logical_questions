
// var join = function(arr1, arr2) {
//     let arr3=arr1.concat(arr2)
//     console.log('arr3===',arr3)
// };
// join([{"id": 1, "x": 1},
//     {"id": 2, "x": 9}],[{"id": 3, "x": 5}])


var join = function(...arrays) {
    let map = {};

    for (let arr of arrays) {
        for (let obj of arr) {
            if (map[obj.id]) {
                map[obj.id] = { ...map[obj.id], ...obj };
            } else {
                map[obj.id] = { ...obj };
            }
        }
    }
    
    return Object.values(map);
};

console.log(
  join(
    [{ id: 1, x: 1 }, { id: 2, x: 9 }],
    [{ id: 2, x: 5, y: 3 }, { id: 3, x: 7 }],
    [{ id: 1, z: 10 }, { id: 4, x: 99 }]
  )
);
