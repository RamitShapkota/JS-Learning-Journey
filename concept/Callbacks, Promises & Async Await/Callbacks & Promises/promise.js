console.log('This is Promises');
 let prom1=new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.5)
    {
        reject("no random number is not supporting you")
    }
    else{
        setTimeout(() => {
            console.log('yes i am done');
            resolve("Ramit")
        },2000);
    }
 })

 //  prom1.then((a) => {
//     console.log(a); 
    
//  }).catch((err)=>{
//     console.log(err)
//  })

 let prom2=new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.5)
    {
        reject("no random number is not supporting you 2")
    }
    else{
        setTimeout(() => {
            console.log('yes i am done 2');
            resolve("Ramit 2")
        },1000);
    }
 })

 //Promise API -there are 6 static methods of promise class

 //1.promise.all(promise)
 
//   let p3=Promise.all([prom1,prom2])

 //2.promise.allSetteled(promise)

//   let p3=Promise.allSettled([prom1,prom2])

 //3.promise.race(promise)

//   let p3=Promise.race([prom1,prom2])

 //4.promise.any(promise)

//   let p3=Promise.any([prom1,prom2])

 //4.promise.resolve(value)

//   let p3=Promise.resolve([prom1,prom2])

 //5.promise.reject(value)

  let p3=Promise.reject([prom1,prom2])


//  p3.then(() => {
//     console.log(); 
    
//  })
 p3.catch((err)=>{
    console.log(err)
 })





// https://cdnjs.com/libraries/prism