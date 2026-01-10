// --- Configuration ---
const scriptURL = "https://script.google.com/macros/s/AKfycbxXAlrigLuKfm3C0GXU95lqS7PrNzBQGeC0ZA7kidm--DuCQPC9gBWGzaYBeNJ93VLb/exec";

// --- Error Message Selectors ---
let nameError = document.querySelector("#name-error");
let phoneError = document.querySelector("#phone-error");
let emailError = document.querySelector("#email-error");
let messageError = document.querySelector("#message-error");
let submitError = document.querySelector("#submit-error");

// --- Validation Functions ---
function validateName() {
    let name = document.querySelector("#contact-name").value.trim();

    if (name.length === 0) {
        nameError.textContent = "Name is required";
        return false;
    }

    if (!name.match(/^[A-Za-z]+\s{1}[A-Za-z]+$/)) {
        nameError.textContent = "Write full name";
        return false;
    }

    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePhone() {
    let phone = document.querySelector("#contact-phone").value.trim();

    if (phone.length === 0) {
        phoneError.textContent = "Phone no is required";
        return false;
    }

    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.textContent = "Phone no. should be 10 digits";
        return false;
    }

    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail() {
    let email = document.querySelector("#contact-email").value.trim();

    if (email.length === 0) {
        emailError.textContent = "Email is required";
        return false;
    }

    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.textContent = "Email Invalid";
        return false;
    }

    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMessage() {
    let message = document.querySelector("#contact-message").value.trim();
    const required = 30;
    const left = required - message.length;

    if (left > 0) {
        messageError.textContent = `${left} more characters required`;
        return false;
    }

    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

// --- Reset Form ---
function resetForm() {
    document.querySelector("#contact-name").value = "";
    document.querySelector("#contact-phone").value = "";
    document.querySelector("#contact-email").value = "";
    document.querySelector("#contact-message").value = "";

    nameError.innerHTML = "";
    phoneError.innerHTML = "";
    emailError.innerHTML = "";
    messageError.innerHTML = "";

    localStorage.removeItem("formData");
}

// --- Form Submit ---
function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = "block";
        submitError.style.color = "red";
        submitError.textContent = "Please fix error to submit";

        setTimeout(() => {
            submitError.style.display = "none";
        }, 3000);

        return false;
    }

    submitError.style.display = "block";
    submitError.style.color = "blue";
    submitError.textContent = "Sending to Google Sheets...";

    saveData();
    return false;
}

// --- Save Data ---
function saveData() {
    let userInfo = {
        name: document.querySelector("#contact-name").value,
        phone: document.querySelector("#contact-phone").value,
        email: document.querySelector("#contact-email").value,
        message: document.querySelector("#contact-message").value
    };

    localStorage.setItem("formData", JSON.stringify(userInfo));

    fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
        .then(() => {
            submitError.style.color = "green";
            submitError.textContent = "Successfully submitted!";

            setTimeout(() => {
                resetForm();
                submitError.style.display = "none";
            }, 2000);
        })
        .catch(() => {
            submitError.style.color = "red";
            submitError.textContent = "Error! Connection failed.";
        });
}
