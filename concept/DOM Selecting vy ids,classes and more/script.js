// console.log("Ramit")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor= "red"

// document.getElementById("red").style.backgroundColor="gray"

// It select first box class only not all box
// document.querySelector(".box").style.backgroundColor="brown"

// if you want to select all box then write

console.log(document.querySelectorAll(".box").forEach((e)=>{
    e.style.backgroundColor="brown"
}))


console.log(document.getElementsByTagName("div"))

let e=document.getElementsByTagName("div");
console.log(document.getElementsByTagName("div"))
//Matches method
console.log(e[5].matches("#red"))

//Closest
console.log(e[5].closest("#red"))

//Contains
//it returns true
console.log(document.querySelector(".container").contains(e[2]))
//it returns false
console.log(document.querySelector(".container").contains(document.querySelector("body")))


console.log(document.querySelector("body").contains(document.querySelector(".container")))




