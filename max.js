let array = [1, 1, 2, 3, 4,80, 3, 5, 6, 7,6,19,30,40];

let max=array[0];
for (let i = 0; i < array.length; i++) {
    if(array[i]>max){
        max=array[i]
    }
    
}
console.log('max===',max);
