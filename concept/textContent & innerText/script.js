const container=document.querySelector("#container");
// const output=document.querySelector("#output");
const showTextContent=document.querySelector("#showTextContent");
const showInnerText=document.querySelector("#showInnerText");

const output=document.createElement("p");
document.body.appendChild(output);

showTextContent.addEventListener("click",()=>{
    output.textContent="textContent:"+container.textContent;
});//it shows both text hidden and visible

showInnerText.addEventListener("click",()=>{
    output.textContent="innerText:"+container.innerText;
});//it show text that is only visible from user