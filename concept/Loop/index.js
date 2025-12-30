let a=1;

// for(let i=0; i<100;i++)
// {
//     console.log(i+a)
// }

// forin loop ->> used for object to access only key or both

let obj={
    name:"ramit",
    role:"programmer",
}

for (const key in obj) {
        const element = obj[key];
        // console.log(key+":"+element)
        console.log(key)
}

// forof loop -->> used for array and iterater

for (const c of "ramit") {
    console.log(c)
}

// While loop

let i=5;
while(i<6){
    console.log(i)
    i++;
}

do {
    let i=10
    console.log(i)
    i++;
} while (i<6);

