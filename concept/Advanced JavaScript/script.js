async function sleep() {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            resolve(45)
        }, 1000);
    })
}


// async function main() {
//     let a=await sleep();
//     console.log(a);
//     let b=await sleep();
//     console.log(b);

// }
// main()


// but in some case we dont want to use async function then we use IIFE

//IIFE->immediately invoked function expression

(async function main() {
    let a = await sleep();
    console.log(a);
    let b = await sleep();
    console.log(b);
})()


// Destructuring
//1. Array Destructuring

let num=[1,2,3,4,5,6,7];
let [a,b,...rest]=num; //a=1,b=2,rest=3,4,5,6,7
console.log(a,b,rest);

//2.Object Destructuring

let obj={
    a1:4,
    b1:5,
    c:3
}

let {a1,b1} = obj //a1=4,b1=5
console.log(a1,b1); 

// Sprade Operator ...

function sum(a,b,c){
    return a+b+c;
}

let arr=[1,2,3,4,5,6,7,8]
console.log(sum(arr[0],arr[1],arr[2]));
// to do this we can use sprade operator
console.log(sum(...arr));  //it sprade the value of aarya and sum


// Hoisting  -->it only applicable for var data type

console.log(d); //it doesnot show error it show undifine
var d=6;
 
// function also hoisted but not possible with functon that use const and let data type
hello("ramit")//it return ramit even it call before function defination
  function hello(a){
 console.log(a);
}




