const btnLogin = document.querySelector(".login-signInButton");
const inputUserLogin = document.querySelector(".input-login-email");
const inputPasswordLogin = document.querySelector(".input-login-password")


btnRegister.addEventListener("click", function (e) {
    e.preventDefault();
    if (inputUserLogin.value === "" || inputPasswordLogin.value === "") {
        alert("Email and Password cannot be empty");
    } else {
        const userLocal = JSON.parse(localStorage.getItem("users"));
        let flag = false;
        for (let i = 0; i < userLocal.length; i++) {
            if (userLocal[i].email == inputUserLogin.value &&
                userLocal[i].password == inputPasswordLogin.value
            ) {
                flag = true;
                break;
            } else {
                flag = false;
            }
        }
        if (flag) {
            alert("successfully registered");
            window.location.href = "index.html";
        } else {
            alert(" An account failed to log on");
        }
    }
}
);

