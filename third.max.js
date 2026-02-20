let arr=[1,2,3,47,5,6,3,55,44]
let max=arr[0];
let second=0
let third=0
for(let i=0; i<arr.length; i++){
    if(arr[i]>max){
        third=second
        second=max
        max=arr[i]
    }else if(arr[i]>second && arr[i]!=max){
        third=second
        second=arr[i]
    }else if(arr[i]>third && arr[i]!=second && arr[i]!=max){
        third=arr[i]
    }
}
console.log('mx===',max)
console.log('second===',second)
console.log('third===',third)