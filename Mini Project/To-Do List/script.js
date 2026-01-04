const inputBox=document.querySelector("#input-box");
const listContainer=document.querySelector("#list-container");

function addTask()
{
    if(inputBox.value==='')
    {
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerText=inputBox.value;

        listContainer.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7"; //(cross icon)
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName ==="LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask();

inputBox.addEventListener("keydown", (e)=>{
    if(e.key==="Enter"){
        e.preventDefault();// Stops the page from refreshing
        addTask();
    }
})