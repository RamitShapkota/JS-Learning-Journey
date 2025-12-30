const themeBtn = document.querySelector("#themeBtn")
const loginBtn = document.querySelector("#loginBtn");
const message = document.querySelector("#message");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const inputs = document.querySelectorAll("input");
const userinfo = document.querySelector("#userinfo");

//1️⃣ classList.toggle() → Dark Mode (Real website feature)
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

//2️⃣ classList.add() → Show error or success message
loginBtn.addEventListener("click", () => {
    // Always show message area
    message.classList.add("show");

    // Remove old states (VERY IMPORTANT IN REAL APPS)
    message.classList.remove("error", "success");


    // ===== VALIDATION CHECK =====
    if (username.value.trim() === "" || password.value.trim() === "") {
        message.textContent = "Username and Password required";
        message.classList.add("error");

        username.value = "";
        password.value = "";

        // Button shake animation
        loginBtn.classList.add("shake");

        setTimeout(() => {
            message.classList.remove("error");
            message.classList.remove("shake");
            message.textContent = "";
        }, 2000)
    }

    else {
        // ✅ SUCCESS STATE
        message.classList.add("success");
        message.textContent = "Login Successful";

        const h2 = document.createElement("h2");
        h2.textContent = "Your information is:"
        message.appendChild(h2);

        const ul = document.createElement("ul");

        const liUser = document.createElement("li");
        liUser.textContent = `Username:${username.value}`;
        ul.appendChild(liUser);


        const lipass = document.createElement("li");
        lipass.textContent = `Password:${password.value}`;
        ul.appendChild(lipass);

        message.appendChild(ul)

        username.value = "";
        password.value = "";
    }
});

// ===== DEBUG / LEARNING (OPTIONAL) =====
console.log("classes count:", message.classList.length);
console.log("classes list:", message.classList.value);
console.log("first class", message.classList[0]);

inputs.forEach(input => {
    input.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            loginBtn.click();
        }
    });
});




