// ==========================
// USER MANAGEMENT DASHBOARD
// ==========================

// Initial users array (array of objects)

let users = [
    { id: 1, name: "Ramit", role: "admin", active: true },
    { id: 2, name: "hari", role: "user", active: false }
];

// Get DOM element where users will be displayed
const userList = document.querySelector("#userList");

// 1️⃣ Render users to UI using map()
function renderUsers(list) {
    userList.textContent = ""; //clear previous UI

    list.map(user => {
        const li = document.createElement("li");

        li.textContent = `${user.name} (${user.role}) - ${user.active ? "Active" : "Inactive"}`;

        // Create the Toggle button
        const toggleBtn = document.createElement("button");
        toggleBtn.textContent = "Toggle";
        toggleBtn.addEventListener("click", () => toggleUser(user.id));

        //create the remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => removeUser(user.id));

        //append buttons to the list itme
        li.appendChild(toggleBtn);
        li.appendChild(removeBtn);

        //append the list item to your list
        userList.appendChild(li);

    })
}

//initial render
renderUsers(users);

// 3️⃣ Remove user safely
function removeUser(id) {
    users = users.filter(user => user.id !== id); //Immutable removal
    renderUsers(users);
}

//toggle active status safely
function toggleUser(id) {
    users = users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
    );
    renderUsers(users);
}


// 2️⃣ Add new user safely
const addBtn=document.querySelector("#addBtn");
addBtn.addEventListener("click",()=>{
    const name=document.querySelector("#nameInput").value.trim();
    const role=document.querySelector("#roleInput").value;

    if(!name){
        return alert("Name required");
    }

    const newUser={
        id:Date.now(),
        name:name,
        role:role,
        active:true

    };

    users=[...users,newUser]; //Immutable update
    renderUsers(users);
    document.querySelector("#nameInput").value="";
})

// 5️⃣ Permission check using some()
const hasAdmin=users.some(user=>user.role==="admin");
console.log("has admin?",hasAdmin); //true if at least one user is admin

//6️⃣ Validation check using every()
const allActive=users.every(user=>user.active);
console.log("All active?",allActive);//true only if all users active

// 7️⃣ Sort users by name safely
sortBtn=document.querySelector("#sortBtn");
sortBtn.addEventListener("click",()=>{
    users=[...users].sort((a,b)=>a.name.localeCompare(b.name));
    renderUsers(users);
})

// 8️⃣ includes() – check if a user exists
const names=users.map(u=>u.name);
console.log("Does Ramit exist?",names.includes("Ramit"));

// 9️⃣ slice() – get first 2 users
const firstTwoUsers=users.slice(0,2);
console.log("First 2 users:",firstTwoUsers);

// 10️⃣ splice() – not used because it mutates
const oneUser=users.splice(1,1);
console.log("First one user:",oneUser); //avoid in modern js
console.log(users)//give remainig user

// 11️⃣ Real-life async array example

async function loadUsers(){
    const fetchedUsers=await fakeFetchUser();

    const activeUsers=fetchedUsers.filter(u=>u.active);
    console.log("Active users from API:",activeUsers)
}

// Fake API for demonstration
function fakeFetchUser(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve([
                {id:3,name:"sita",role:"user",active:true},
                {id:4,name:"Gita",role:"admin",active:false}
            ]);
        },1000);
    })
}

//call async function
loadUsers();