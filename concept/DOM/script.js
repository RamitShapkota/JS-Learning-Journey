// window.alert("hello you enter the my website")
// window.prompt("Enter the number")


const btn = document.querySelector("button");

console.log(btn); // shows HTML
console.dir(btn); // shows properties

console.dir(document.body)
console.log(document.body.childNodes[1])
// console.log(document.body.innerHTML="hii i am ramit")

// document.body.style.background="green";
// document.body.childNodes[1].innerText="This is updated heading"

// let heading=document.getElementById("heading1")
/*let heading=document.querySelector("#heading1")
console.log(heading)
heading.innerText="practice dom manupulation"*/

let heading4=document.getElementsByClassName("heading4")//it returns the HTML collection
console.dir(heading4)
heading4[0].innerText="change the heading4"

/*let button=document.getElementsByTagName("button")[0];
button.addEventListener("click",()=>{
    heading.innerText="you clicked the button!"
});*/

//this code is same as the above code

/*let button=document.querySelector("button");//access by tag
button.addEventListener("click",()=>{
    heading.innerText="ohhh dont hit me"
})*/

/*let button=document.querySelectorAll("button");//it access the all button of the html
for(let i=0;i<=button.length;i++)
{
    button[i].addEventListener("click",()=>{
        heading.innerText="hello i am ramit and clicking button "
    })
}*/


//dark mode and light mode

let dark=document.querySelector("#dark");
dark.addEventListener("click",()=>{
    document.body.style.background="black";
    dark.style.background="white"
    document.body.h1.innerText="dark mode enable"
});

let light=document.querySelector("#light");
light.addEventListener("click",()=>{
    document.body.style.background="white";
    heading.innerText="light mode enable"
    // heading.innerHTML="<h1>PRACTICE DOM MANUPULATION</h1>"
});

//we doesnot use innerHTML tag insted of it we use

 
let headingold=document.querySelector("#heading1")
// headingold.innerHTML="<h4>practice dom manupulation</h4>"   //but it is not safer

/*let headingnew=document.createElement("h4");
headingnew.innerText=headingold.innerText;
headingold.replaceWith(headingnew);*/

let headingnew=document.createElement("h1");
headingnew.innerText="Dom practice after long time ramit";
headingold.replaceWith(headingnew);

const p=document.createElement("p");
p.innerText="This is a new paragraph";
document.body.appendChild(p);



