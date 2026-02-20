// let arr=[11,4,7,8,2];
// let min=arr[0];
// let max=arr[0];
// for(let i of arr){
//     if(i<min){
//         min=i
//     }if(i>max){
//         max=i
//     }
// }
// console.log(min)
// console.log(max)

let num=12345;
let reversed=0
while(num>0){
     let digit = num % 10;          // get last digit
  reversed = reversed * 10 + digit; // build reversed number
  num = Math.floor(num / 10);    // remove last digit
    
}
console.log(reversed)


