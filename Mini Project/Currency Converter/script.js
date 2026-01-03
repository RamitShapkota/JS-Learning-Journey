
const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"

const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector(".container button")
const formCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".message");

// for(code in countryList)
// {
//     console.log(code,countryList[code]);
// }
for(let select of dropdowns){
    for(currCode in countryList)
    {
        let newOption=document.createElement("option")
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name==="from" && currCode==="USD"){
            newOption.selected=true;
        }else if(select.name==="to" && currCode==="NPR"){
            newOption.selected=true;
        }
         select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}

const updateFlag=(element)=>{
    const currCode=element.value;
    const countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
}

const updateExchangeRate=async()=>{
    let amount=document.querySelector(".amount input");
    let amtVal=amount.value;
    if(amtVal==="" || amtVal<1)
    {
        amtVal=1;
        amount.value="1";
    }
    //create the final dynamic URL
    const URL=`${BASE_URL}/${formCurr.value.toLowerCase()}.json`;
    try{
        let response=await fetch(URL);
        let data=await response.json();

        let rate=data[formCurr.value.toLowerCase()][toCurr.value.toLowerCase()];

        let finalAmount=(amtVal*rate).toFixed(2);
        msg.innerText=`${amtVal}${formCurr.value} = ${finalAmount}${toCurr.value}`
    }catch(error){
        console.log("Fetch error:",error);

    }
};

//this make the button work
btn.addEventListener("click",(evt=>{
    evt.preventDefault();
    updateExchangeRate();
}))

//this makes it woek automatically on load
window.addEventListener("load",()=>{
    updateExchangeRate();
})