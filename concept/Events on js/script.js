let btn = document.getElementById("btn");

// list of all mouse event
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// btn.addEventListener("click", ()=>{
//     // alert("I was click")
//     document.querySelector(".box").innerHTML = "<b>hey ramit you hit me!!</b>please dont hit me yrr"
// })

btn.addEventListener("dblclick", () => {
    // alert("I was click")
    document.querySelector(".box").innerHTML = "<b>hey ramit you hit me!!</b>please dont hit me yrr"
})

btn.addEventListener("contextmenu", () => {
    alert("kam chhaina tero kina right click garchha yrr")
})




document.addEventListener("keydown", (e) => {
    alert("hey bhai hawa bhar ma key na chalana yrr kam chhaina teroo")
    console.log(e, e.key, e.keyCode)
})