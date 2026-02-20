let n=15
let result=[];
for(let num=2; num<=n; num++){
    let isPrime=true;
    for(let i=2; i<num; i++){
        if(num%i===0){
            isPrime=false;
            break
        }
    }
    if(isPrime){
        result.push(num)
    }
}
console.log('result===',result)