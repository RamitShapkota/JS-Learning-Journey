const API_KEY="682b7275bf4c8bd59bd8f029";
const BASE_URL=" https://v6.exchangerate-api.com/v6/682b7275bf4c8bd59bd8f029/latest/USD"

const dropdowns=document.querySelectorAll(".dropdown select");

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
