//Asynchronous nature of js-------------------------


// console.log('hello1');
// console.log('heLLO2');

// setTimeout(() => {
//     console.log('hello i am async');
    
// }, 4000);

// console.log('heLLO3');




// callbacks->a callback is a function passed as an argument to another fucntion----------------------
 
// function sum(a,b){
//   console.log(a+b);
// }

// function calculation(a,b,sumcallback){
//     sumcallback(a,b);
// }

// calculation(2,3,sum);

// we can write as

// calculation(2,3,(a,b) => {
//     console.log(a+b);
// });

//settimeout is also callback function---------

// const hello=() =>{
//     console.log('hello');
// }

// setTimeout(hello,3000) //here hello is also call back function

//callback hell->nesting----------------------------



// function getdata(dataid,getNextData){
//     //2s
//     setTimeout(() => {
//         console.log('data',dataid);
//         if(getNextData)
//         {
//             getNextData();
//         }
//     }, 2000);
// }

//callback hell=====================================

// getdata(1, ()=>{
//     console.log('getting data2...');
//     getdata(2,()=>{
//         console.log('getting data3');
//         getdata(3,()=>{
//             console.log('getting data4');
//             getdata(4)
//         });
//     });
// });


//Promises------------------------------------

// const getpromise= ()=>{
//      return new Promise((resolve,reject) =>{
//     console.log('I am a promise1');
//     // resolve("sucess");
//     reject("something wrong here")
// });
// }

// let promise=getpromise();
// promise.then((res)=>{//run when promise resolve
//     console.log('promise fulfilled',res);
// }).catch((err)=>{//run when promise rejected
//     console.log('promise rejected',err);
// })


// function getdata(dataid){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('data',dataid);
//             resolve("sucess")
//         }, 5000);
//     })
// }


// promise chain ###########################

// function asyncFunction1(){
//     return new Promise((reslove,reject)=>{
//         setTimeout(()=>{
//             console.log('data1');
//             reslove("sucess");
//         },4000)
//     });
// }
// function asyncFunction2(){
//     return new Promise((reslove,reject)=>{
//         setTimeout(()=>{
//             console.log('data2');
//             reslove("sucess");
//         },4000)
//     });
// }

// console.log('fetching data1----------');
// asyncFunction1().then((res)=>{
//     console.log('fetching data2----------');
//     asyncFunction2().then((res)=>{
//     });
// })


// function getdata(dataid){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('data',dataid);
//             resolve("sucess")
//         }, 2000);
//     })
// }

// //this is the exactly promise chain..................
// getdata(1).then((res)=>{
//    return getdata(2);
// }).then((res)=>{
//     return getdata(3);
// }).then((res)=>{
//     c=console.log(res);
    
// })


// Async-Await-->Async function always return the promise


 function getdata(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('data',dataid);
            resolve("sucess")
        }, 2000);
    })
}

//Async-Await

// async function getData() {
//     await getdata(1);
//     await getdata(2);
//     await getdata(3);
//     await getdata(4);
// }
// getData();

//Promise chain

// getdata(1).then((res)=>{
//    return getdata(2);
// }).then((res)=>{
//     return getdata(3);
// }).then((res)=>{
//     c=console.log(res);
    
// })

//call back hell

// getdata(1, ()=>{
//     console.log('getting data2...');
//     getdata(2,()=>{
//         console.log('getting data3');
//         getdata(3,()=>{
//             console.log('getting data4');
//             getdata(4)
//         });
//     });
// });


// IEEE->Immediately invoked function expression(having no function name)

(async function() {
    await getdata(1);
    await getdata(2);
    await getdata(3);
    await getdata(4);
})();//no need to unnessary call it call itself when execute the code


