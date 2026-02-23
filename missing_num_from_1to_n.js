let arr=[1,2,3,5,7,9];
let misingNum=[];
let max=Math.max(...arr);
for(let i=1; i<=max; i++){
    if(!arr.includes(i)){
        misingNum.push(i)
    }
}
console.log(misingNum)