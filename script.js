window.onload = function() {
    setTimeout(() => {
        document.querySelector('.login-section').classList.add('active');
        document.querySelector('.image-section').classList.add('active');
    }, 500); 
};


function togglePassword() {
    const passwordInput = document.getElementById("password");
    const toggleButton = document.querySelector(".toggle-password");
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.textContent = "Hide"; 
    } else {
        passwordInput.type = "password";
        toggleButton.textContent = "Show"; 
    }
}


