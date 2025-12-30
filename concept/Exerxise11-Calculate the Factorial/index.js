//using for loop and reduce

// let arr=[1,2,3,4,5,6]
// const red=(a,b)=>{
//     return a*b;
// }
// console.log(arr.reduce(red))

//Another way using reduce

// let a=6;

// function factorial(number){
//     let arr=Array.from(Arrya(number+1).keys())
//     let c=arr.slice(1,).reduce((a,b)=> a*b)
//     return c
// }
//  factorial(a)

//Using for loop\
function factor(number){
    let fact=1;
for (let index = 1; index < num; index++) {
    fact*=index;
}
return fact;
}
factor(6)