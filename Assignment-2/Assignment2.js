let arr=[3,9,7,3];
let arrSplit=Math.ceil(arr.length/2);
let arr1=arr.slice(0,arrSplit);
let arr2=arr.slice(-arrSplit);
console.log(arr1,arr2);
let sum1=0;
for(let i=0;i<arr1.length;i++){
    sum1=sum1+arr1[i];
}
console.log(sum1);
let sum2=0;
for(let i=0;i<arr2.length;i++){
    sum2=sum2+arr2[i];
}
console.log(sum2);
let diff=sum1-sum2;
console.log(diff);