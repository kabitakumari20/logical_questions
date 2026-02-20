let num=123456 
let original=num
let revers=0
while (num>0){
    let digit=num%10
    revers=revers*10+digit
    num=Math.floor(num/10)
}
console.log(revers)
// = 654321