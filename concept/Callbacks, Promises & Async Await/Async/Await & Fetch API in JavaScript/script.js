// async function getDeta(){
//     //simulate getting data from a server
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3000);
//     })
// }

//settle means resolve or reject
//resolve means promise has settled successfully
//reject means promise has not settled successfully


// async function getDeta(){
//    let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')
//    let data=await x.json()
// //    console.log(data)
//    return data
// }

//Example POST method Implementaion
async function getDeta(){
        let x=await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
   let data=await x.json()
   return data
}

async function main(){
console.log('Loding Modules');

console.log('DO something else');

console.log('Load data');

let data= await getDeta()


console.log(data);
    
console.log('process data');
    
console.log('task 2');
}

main();

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));


     
// if i want to run below code after data is comming from getdata

// data.then(()=>{
//     console.log(data);
    
//     console.log('process data');
    
//     console.log('task 2');
// })





// https://jsonplaceholder.typicode.com/
