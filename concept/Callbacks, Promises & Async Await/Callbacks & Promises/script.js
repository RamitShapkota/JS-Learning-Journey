//Asychronous nature of java script
console.log("ramit is don")
console.log("ramit is good man")

setTimeout(() => {
    console.log("i am inside setimeout")
}, 0);

setTimeout(() => {
    console.log("i am inside setimeout 1")
}, 0);

console.log("the end")

// callback function

const fn=()=>{
    console.log("i am another call back function")
}
const callback = (arg,fn) => {
    console.log(arg)
    fn();
}
const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = () => callback("i am call back function",fn);//call callback function
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)



// if we write callback funcion inside the other colback fucntion many time tenn this is called pyramid of doom or call back hell

// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",(arg,fn)=>{
//     fn("firstarg",()=>{

//     })
// })