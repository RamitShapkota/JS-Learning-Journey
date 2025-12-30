const URL="https://dog.ceo/api/breeds/image/random";
const dogImg=document.querySelector("#dog-img");
const btn=document.querySelector("#btn");

const getFacts=async()=>{
    console.log("getting data...");
    try{
        let response=await fetch(URL);

        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let data=await response.json();//concert data to JSON form to js object
        console.log(data)

        //data.message contains the URL of the image
        dogImg.src=data.message;
    }
    catch(error){
        console.error("Fetch failed",error);
    }
       
    }

    // Fetch one image immediately when the page loads
    getFacts();

    //Fetch a new image when the button is clicked
    btn.addEventListener("click",getFacts)

    btn.addEventListener("keyup",(e)=>{
        if(e.key==="Enter")
        {
            btn.click();
        }
    })