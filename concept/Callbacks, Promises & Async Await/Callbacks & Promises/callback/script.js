function getuser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("user fatched");
            resolve({id:1,name:"ramit"});
        },1000)
    })
}

function getorders(user){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("orders fatched");
            resolve(["order1","order2"])
        },2000)
    })
}

//using promise chaining
/*getuser()
.then(user=>getorders(user))
.then(order=>console.log(order))
.catch(err=>console.log(err));*/

//using async await
async function process(){
    try{
        const user=await getuser();
        const orders=await getorders(user);
        console.log(orders);
    }
    catch(err){
        console.log(err);
    }
}

process();