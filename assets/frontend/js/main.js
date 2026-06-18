const loginForm = document.querySelector("#login-form");
const registerForm = document.querySelector("#register-form");
let dashboardContainer = document.querySelector("#dashboard-container");

if(loginForm){
    loginForm.addEventListener("submit", (event) => {

        event.preventDefault();

        username = document.querySelector("#login-username").value;
        password = document.querySelector("#login-password").value;

        localStorage.setItem("loggedInUser", username);

        window.alert("Login Successful!");
        window.location.href = "dashboard.html";
    })
}

if(registerForm){
    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        username = document.querySelector("#register-username").value;
        password = document.querySelector("#register-password").value;

        window.alert("Registration succesful!");
        window.location.href = "login.html";
    })    

}

if(dashboardContainer){

    let tasks = [];

    const username = localStorage.getItem("loggedInUser");
    document.querySelector("#dashboard-msg").textContent = `Hello, ${username}`;

    const addTasksForm = document.querySelector("#add-tasks-form");
    const taskInput = document.querySelector("#add-tasks-input");
    const logoutBtn = document.querySelector("#logout-btn");

    if(logoutBtn){
        logoutBtn.addEventListener("click", (event) => {
            localStorage.removeItem("loggedInUser");

            window.location.href = 'login.html';
        })
    }

    addTasksForm.addEventListener("submit", (event) => {

        event.preventDefault();
        const currentTask = taskInput.value.trim();

        if(currentTask !== ""){

            const newTaskObject = {
                id : Date.now(),
                text : currentTask,
                isCompleted : false
            }

            tasks.push(newTaskObject);

            console.log(tasks);

            renderTasks();
            taskInput.value = "";
        }
    })


    function renderTasks(){
        const displayTasksContainer = document.querySelector("#display-tasks");

        displayTasksContainer.innerHTML = "";

        tasks.forEach(task => {
            const individualTask = document.createElement("div");
            individualTask.className = "individual-task";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";

            const textSpan = document.createElement("span");
            textSpan.textContent = task.text;

            const removeTask = document.createElement("span");
            removeTask.innerHTML = "X";
            removeTask.style.cursor = "pointer";
            removeTask.style.marginLeft = "15px";

            if (task.isCompleted) {
                checkbox.checked = true;
                textSpan.style.textDecoration = "line-through";
                textSpan.style.opacity = "0.5";
            }

            checkbox.addEventListener("change", () => {
                toggleTask(task.id);
            })

            removeTask.addEventListener("click", () => {
                deleteTask(task.id);
            })

            individualTask.appendChild(checkbox);
            individualTask.appendChild(textSpan);
            individualTask.appendChild(removeTask);

            displayTasksContainer.appendChild(individualTask);
        })
    }

    function toggleTask(id) {
        tasks = tasks.map(task => {
            if(task.id === id){
                return {...task, isCompleted : !task.isCompleted};
            }
            return task;
        })
        renderTasks();
    }

    function deleteTask(id){
        tasks = tasks.filter(task => task.id !== id);
        renderTasks();
    }

}
