function validatePassword(password){
    if(password.length<8){
        return "Must be at least 8 characters long.";
    }
    if(!/[A-Z]/.test(password)){
        return "Must include an uppercase letter.";
    }
    if(!/[a-z]/.test(password)){
        return "Must include an lowercase letter";
    }
    if(!/[0-9]/.test(password)){
        return "Must include a number";
    }
    if(!/[!@#$%^&*()-+=:'".,`]/.test(password)){
        return "must include a special symbol"
    }

    return "Password is Strong!"
}

console.log(validatePassword("Ramit123"));
console.log(validatePassword("ramit123"));
console.log(validatePassword("Ramit@123"));
