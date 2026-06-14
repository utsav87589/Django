const loginForm = document.querySelector("#login-form");
const registerForm = document.querySelector("#register-form");
let dashboardContainer = document.querySelector("#dashboard-container");

if(loginForm){
    loginForm.addEventListener("submit", (event) => {

        event.preventDefault();

        username = document.querySelector("#login-username").value;
        password = document.querySelector("#login-password").value;

        console.log(`${username} :: ${password}`);

        setTimeout(() => {
            window.location.href = "../html/dashboard.html";
        }, 2000);
    })
}

if(registerForm){
    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        username = document.querySelector("#register-username").value;
        password = document.querySelector("#register-password").value;

        console.log(`${username} :: ${password}`);
        window.alert("Registration succesful!");

        setTimeout(() => {
            window.location.href = "../html/login.html";
        }, 3000);
    })
}

if(dashboardContainer){
    
}