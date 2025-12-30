function RandomColor(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    // let b=Math.ceil(Math.random()*256);

    return `rgb(${r},${g},${b})`;
}

setInterval(() => {
    document.querySelectorAll(".box").forEach((element) => {
    element.style.backgroundColor=RandomColor();
    element.style.color=RandomColor();
});
}, 1);
