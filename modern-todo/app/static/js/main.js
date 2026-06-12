import { registerAPI, loginAPI } from "./api.js";

document.addEventListener("DOMContentLoaded", (event) => {
    const registerForm = document.querySelector("#registerForm");
    const loginForm = document.querySelector("#loginForm");

    if (registerForm){
        document.addEventListener("submit", async (event) => {
            event.preventDefault();

            const username = document.querySelector("#username").value;
            const password = document.querySelector("#password").value;

            try{
                const data = await registerAPI(username, password);

                if (data.status === "success"){
                    window.alert(data.message);
                    window.location.href = "/login";
                }

                else{
                    window.alert(data.message);
                }
            }

            catch(error){
                console.error(error);
                window.alert("Could not connect to the server, there's some problems");
            }
        })
    }

    if(loginForm){
        document.addEventListener("submit", async (event) => {
            event.preventDefault();

            const username = document.querySelector("#username").value;
            const password = document.querySelector("#password").value;

            try{
                const data = await loginAPI(username, password);

                if (data.status === "success"){
                    window.alert(data.message);
                    window.location.href = "/dashboard";
                }
                else{
                    window.alert(data.message);
                }
            }
            catch(error){
                console.error(error);
                window.alert('Problem signing in!');
            }
        })
    }
})