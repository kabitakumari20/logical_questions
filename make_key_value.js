let str='abbcccdddd'
let obj={};
let result=''
for(let char of str){
    if(obj[char]){
        obj[char]+=1
        if(obj[char]==2){
          result+=char 
        }
         
    }else{
        obj[char]=1
    }
}

console.log(result)
console.log(obj)