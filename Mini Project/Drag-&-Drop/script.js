let lists = document.getElementsByClassName("list");
let rightBox = document.querySelector("#right");
let leftBox = document.querySelector("#left");

for(let list of lists){
    list.addEventListener("dragstart", (e)=>{//fires when the user STARTS dragging an element
        let selected = e.target;
        // e.dataTransfer.setData("dragged",e.target.id)
        // e.target.style.opacity = "0.5"

        rightBox.addEventListener("dragover", (e)=>{//fires when the dragged element is OVER a valid drop area
            e.preventDefault();
            rightBox.style.background = "#1a1a3a";
        });

        /*leftBox.addEventListener("dragleave", (e) => {
          leftBox.style.background = "#0b0421"; // Reset color if the user moves away
            });*/
      
        rightBox.addEventListener("drop", (e)=>{//fires when the element is RELEASED (dropped) on the target
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











// dragstart → fires when the user STARTS dragging an element
// drag      → fires CONTINUOUSLY while the element is being dragged
// dragover  → fires when the dragged element is OVER a valid drop area
// drop      → fires when the element is RELEASED (dropped) on the target
// dragend   → fires when the dragging action FINISHES (after drop or cancel)
