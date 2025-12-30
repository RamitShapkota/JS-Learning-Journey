// console.log("hello dikshya k chha tmro khabar")
console.log(document.body.style.backgroundColor="RED")
console.log(document.body.childNodes)
console.log(document.body.childNodes[0])
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes[2])
console.log(document.body.childNodes[1].childNodes[0])
console.log(document.body.childNodes[1].childNodes[1])

// // First and last child is always text
console.log(document.body.childNodes[1].firstChild)
console.log(document.body.childNodes[1].lastChild)

// // but we dont need text child then you can direactly map to box inside the container usint first and lastelementchild
console.log(document.body.lastElementChild)
console.log(document.body.firstElementChild.childNodes[2])
console.log(document.body.lastElementChild.lastElementChild)
console.log(document.body.firstElementChild.firstElementChild.style.backgroundColor="white")
console.log(document.body.firstElementChild.lastElementChild.style.backgroundColor="blue")
console.log(document.body.firstElementChild.childNodes[3].style.backgroundColor="green")
console.log(document.body.firstElementChild.childNodes[5].style.backgroundColor="lightblue")
console.log(document.body.firstElementChild.childNodes[7].style.backgroundColor="yellow")

// here child gives only element of the container insted of all node

console.log(document.body.firstElementChild.children[2])
console.log(document.body.firstElementChild.children[3].nextElementSibling)
console.log(document.body.firstElementChild.children[2].previousElementSibling)

// It gives the parent element of the any child
console.log(document.body.firstElementChild.children[2].parentElement)

//  For Table

console.log(document.body.children[1].style.backgroundColor="white")
console.log(document.body.children[1].style.backgroundColor="white")
console.log(document.body.children[1].rows[1].style.backgroundColor="gray")
console.log(document.body.children[1].rows[0].style.backgroundColor="orange")
console.log(document.body.children[1].style.border="2px solid black")
console.log(document.body.children[1].style.padding="100px")
console.log(document.body.children[1].caption.style.color="white")
console.log(document.body.children[1].caption.style.fontSize="40px")


