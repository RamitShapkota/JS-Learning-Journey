//Variable to store the IDs
let priceIntervalID;
let toastTimeoutID;

//--- STEP 1: START THE INTERVAL ---
function startFeed() {
    priceIntervalID = setInterval(() => {
        const priceElement = document.querySelector("#price");
        let currentPrice = parseFloat(priceElement.innerText);
        let change = (Math.random() * 2 - 1).toFixed(2);
        priceElement.innerText = (currentPrice + parseFloat(change)).toFixed(2);
    }, 3000)
}

// --- STEP 2: CLEAR THE INTERVAL ---
function stopFeed() {
    clearInterval(priceIntervalID);//This kills the timer
    document.querySelector("#status-text").innerText = "OFF";
    document.querySelector("#status-text").style.color = "red";
    console.log("Interval Cleared: No more background processing.");
}

// --- STEP 3: SET AND CLEAR TIMEOUT ---
function buyStock() {
    const toast = document.querySelector("#toast");
    const priceElement=document.querySelector("#price");
    // console.log(toast.innerText);

    // toast.className="show";
    toast.classList.remove("hidden");
    toast.classList.add("show");

    // KILL any existing timer before starting a new one
    clearTimeout(toastTimeoutID);

    //We save the timeout ID
    toastTimeoutID = setTimeout(() => {
        // toast.className="hidden";
        const finalPrice=priceElement.innerText;

        toast.classList.add("hidden");
        toast.classList.remove("show");

        const li=document.createElement("li");
        li.innerText=`Bought 1 Kitta at ${finalPrice}` 
        document.querySelector("ul").appendChild(li);
        document.querySelector("ul").className="showList"
    }, 5000);
}

function cancelNotification() {
    // If the user clicks 'Undo', we stop the timeout from hiding the toast
    clearTimeout(toastTimeoutID);
    document.querySelector("#toast").className = "hidden";
    console.log("Timeout cleared:The hiding action was cancelled.")
}


startFeed();