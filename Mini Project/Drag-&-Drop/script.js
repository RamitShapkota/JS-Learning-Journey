let lists = document.getElementsByClassName("list");
let rightBox = document.querySelector("#right");
let leftBox = document.querySelector("#left");

for(let list of lists){
    list.addEventListener("dragstart", (e)=>{
        let selected = e.target;
        // e.dataTransfer.setData("dragged",e.target.id)
        // e.target.style.opacity = "0.5"

        rightBox.addEventListener("dragover", (e)=>{
            e.preventDefault();
            rightBox.style.background = "#1a1a3a";
        });

        /*rightBox.addEventListener("dragleave", (e) => {
          rightBox.style.background = "red"; // Reset color if the user moves away
            });*/
      
        rightBox.addEventListener("drop", (e)=>{
            rightBox.appendChild(selected);
            rightBox.style.background =" #0b0421";
            // e.target.style.opacity = "1"
            selected=null;
        })

        leftBox.addEventListener("dragover", (e)=>{
            e.preventDefault();
            leftBox.style.background = "#1a1a3a";
        })

        leftBox.addEventListener("drop", (e)=>{
            leftBox.appendChild(selected);
            leftBox.style.background =" #0b0421";
            //  e.target.style.opacity = "1"
            selected=null;
        })

         /* leftBox.addEventListener("dragenter", (e) => {
          leftBox.style.background = "yellow"; // You move the item into the box (fires once).
            }); */

    })
}