function createCard(title,cName,views,monthsOld,duration,thumbnail){
    let viewStr;
    if(views<1000000){
        viewStr=views/1000 + "K";
    }
    else if(views>1000000){
        viewStr=views/1000000 + "M";
    }
    else{
        viewStr=views;
    }
    let html=` <div class="card">
        <div class="image">
            <img src="${thumbnail}" alt="">
            <div class="capsule">${duration}</div>
        </div>
        <div class="text">
            <h1>${title}</h1>
            <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
        </div>
    </div>`
    document.querySelector(".container").innerHTML= document.querySelector(".container").innerHTML + html
}

createCard("Introduction to Express Js | Sigma Web Dev video #2","codeWithHarry",40000000,4,"32:22","https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?s…AIYBjgBQAE=&rs=AOn4CLBYghRBiZcZs-xVJKq92lAM8h3BOg")
createCard("Introduction to Express Js | Sigma Web Dev video #3","codeWithHarry",400000,10,"32:22","https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?s…AIYBjgBQAE=&rs=AOn4CLBYghRBiZcZs-xVJKq92lAM8h3BOg")