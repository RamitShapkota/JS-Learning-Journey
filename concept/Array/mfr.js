let arr=[1,3,5,7,11,2];


// let newarr=[];
// for (let index = 0; index < arr.length; index++) {
//    newarr.push(arr[index]**2)
// }


// MAP

// let newarr=arr.map((e,index,arr)=>{
//     return e**2
// })
// console.log(newarr)


// Filter
/*console.log(arr.filter((e)=>{
 if(e>7){
    return true
 }
 return false
}))*/


// Reduce method

let arr2=[1,2,3,4,5,6]
const red=(a,b)=>{
    return a*b
}
console.log(arr2.reduce(red))

// ARRAY FROM

// console.log(Array.from("RamitLovesDikshya"))