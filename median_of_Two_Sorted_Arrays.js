let nums1 = [1,3]
let nums2 = [2,4]
let array=nums1.concat(nums2)
for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
        if(array[i] > array[j]){
            tem=array[i]
            array[i]=array[j]
            array[j]=tem
        }
        
    }
    
}
let len = array.length;
console.log('len=====',len);

let median;

if (len % 2 === 0) {
    // Even length → average of middle two numbers
    median = (array[len/2 - 1] + array[len/2]) / 2;

    console.log('median=====',median);
    
} else {
    // Odd length → middle number
    median = array[Math.floor(len/2)];
    console.log('median==>>>>>>===',median);
    
}

console.log('Median:', median);

