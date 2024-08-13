const passwordInput = document.getElementById("password");
const requirements = document.querySelectorAll(".requirement-list li");

passwordInput.addEventListener("input", validatePassword);

function validatePassword() {
    const password = passwordInput.value;

    // Check each requirement
    requirements.forEach((req) => {
        const className = req.classList[0];
        const isValid = validateRequirement(className, password);
        req.classList.toggle("valid", isValid);
        req.classList.toggle("invalid", !isValid);
    });
}

function validateRequirement(className, password) {
    switch (className) {
        case "length":
            return password.length >= 8;
        case "number":
            return /\d/.test(password);
        case "lowercase":
            return /[a-z]/.test(password);
        case "special":
            return /[!$]/.test(password);
        case "uppercase":
            return /[A-Z]/.test(password);
        default:
            return false;
    }
}