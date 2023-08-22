const btnRegister = document.querySelector(".signup-signInbutton");
const inputUserRegister = document.querySelector(".input-signup-email")
const inputPasswordRegister = document.querySelector(".input-signup-password")
const userLocal = JSON.parse(localStorage.getItem("users")) || [];
btnRegister.addEventListener("click", function (e) {
    e.preventDefault();
    if (inputUserRegister.value === "" || inputPasswordRegister.value === "") {
        alert("Email and Password cannot be empty")
    } else {
        const user = {
            email: inputUserRegister.value,
            password: inputPasswordRegister.value,
        };

        const updateUser = [...userLocal, user];
        localStorage.setItem("users", JSON.stringify(updateUser));
        alert("successfully registered");
        window.location.href = "login.html";
    }
});
