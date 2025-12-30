//to insetrt element
let div=document.createElement("div")
div.innerHTML="hii i am ramit <b> ko re ma ramit don </b>"
div.setAttribute("class","created")

// document.querySelector(".container").append(div)

// document.querySelector(".container").before(div)

// document.querySelector(".container").after(div)

// document.querySelector(".container").prepend(div)

// document.querySelector(".box").replaceWith(div)

// to insert html/Text...
let cont=document.querySelector(".container")

// cont.insertAdjacentHTML("beforebegin","hii i am inserted html")

// cont.insertAdjacentHTML("afterbegin","hii i am inserted html")

// cont.insertAdjacentHTML("afterend","hii i am inserted html")

// cont.insertAdjacentHTML("beforeend","hii i am inserted html")

// cont.insertAdjacentText("beforeend","hii i am inserted html")

// to remove the element

// document.querySelector(".box").remove();
// document.querySelector(".box").remove();

// class name and classlist

console.log(document.querySelector(".container").className)

console.log(document.querySelector(".container").classList)

// adding and removing class to element
document.querySelector(".container").classList.add("Ramit")

document.querySelector(".container").classList.add("dikshya")

// remove
document.querySelector(".container").classList.remove("dikshya")

// toggle-if alrady exist then remove and vice versa-color alrady read

//it remove the red color from text
document.querySelector(".container").classList.toggle("red")

//again add the red color to the text
document.querySelector(".container").classList.toggle("red")



