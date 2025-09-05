// let arr = [
//     [1,2],[3,4],[5,6]
// ];

// for(let i = 0; i<arr.length; i++){
//     for(let j = 0; j<arr[i].length; j++){
//         console.log(arr[i][j])
//     }
// }

let number=[3,45,2,60,34,556,345]
let largest = number[0]
let smallest = number[0]
for(let i=0; i<number.length;i++){
    if(number[i]<largest){
        largest=number[i];
    }else if(number[i]>largest){
        smallest=number[i]
    }
}
console.log(largest)
console.log(smallest)

function findUnqiueColor(N,colors){
    const colorSet = new Set(colors);
    return colorSet.values();
}
let N= 6;
const colors =[3,2,4,1,2,3]
console.log(findUnqiueColor(N,colors))

// function findEvenOdd(a){
   
//     for(let i = 0; i <a.length; i++){
//         if(a[i]%2===0){
//             console.log("even",a[i])
//             evensum4 +=a[i];
//         }else{
//             console.log("odd number",a[i])
//             oddsum4 +=a[i]
//         }
//     }
//     return [evensum4, oddsum4];
//     // console.log("Even numbers:", evensum4);
// }
// let a= [1,2,3,4,5,6];
// let evensum4 =0;
// let oddsum4=0;
// let [evenSum, oddSum] = findEvenOdd(a);
// console.log(findEvenOdd(evensum4))
// console.log(findEvenOdd(oddsum4))
