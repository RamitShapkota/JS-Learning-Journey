console.log("order received");

//macrotask (cleaning)
// setTimeout(()=>{
//     console.log("Table cleande")
// },0);

Promise.resolve().then(() => {
  console.log("🧹 Table cleaned");
});


//Web API->promise->micrtask
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(()=>{
    console.log("Food served");

});

//Direct promise(Microtask)
Promise.resolve().then(()=>{
    console.log("kitchen notification");
});

//sync
console.log("payment done");