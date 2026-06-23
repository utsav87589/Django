const API_BASE_URL = "http://127.0.0.1:5000";

const loginForm = document.querySelector("#login-form");
const registerForm = document.querySelector("#register-form");
const dashboardContainer = document.querySelector("#dashboard-container");

const fetchConfig = (method, bodyData = null) => {
    const config = {
        method: method,
        headers: { "Content-Type": "application/json" },
        credentials: "include"
    };
    if (bodyData) config.body = JSON.stringify(bodyData);
    return config;
};


if (loginForm) {
    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const username = document.querySelector("#login-username").value.trim();
        const password = document.querySelector("#login-password").value;

        try {
            const response = await fetch(`${API_BASE_URL}/login`, fetchConfig("POST", { username, password }));
            const data = await response.json();

            if (response.ok && data.status === "success") {
                localStorage.setItem("loggedInUser", username);
                window.alert(data.message || "Login Successful!");
                window.location.href = "dashboard.html";
            } else {
                window.alert(data.message || "Login failed. Check your credentials.");
            }
        } catch (error) {
            console.error("Login Network Error:", error);
            window.alert("Cannot connect to server. Ensure Flask backend is running.");
        }
    });
}


if (registerForm) {
    registerForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const username = document.querySelector("#register-username").value.trim();
        const password = document.querySelector("#register-password").value;

        console.log("--> Front-end submit listener triggered successfully! <--");

        try {
            const response = await fetch(`${API_BASE_URL}/register`, fetchConfig("POST", { username, password }));
            const data = await response.json();

            if (response.ok && data.status === "success") {
                window.alert(data.message || "Registration successful!");
                window.location.href = "login.html";
            } else {
                window.alert(data.message || "Registration failed.");
            }
        } catch (error) {
            console.error("Register Network Error:", error);
        }
    });
}


if (dashboardContainer) {
    let tasks = [];

    const username = localStorage.getItem("loggedInUser") || "User";
    document.querySelector("#dashboard-msg").textContent = `Hello, ${username}`;

    const addTasksForm = document.querySelector("#add-tasks-form");
    const taskInput = document.querySelector("#add-tasks-input");
    const logoutBtn = document.querySelector("#logout-btn");

    loadTasksFromServer();

    if (logoutBtn) {
        logoutBtn.addEventListener("click", async () => {
            try {
                await fetch(`${API_BASE_URL}/logout`, fetchConfig("POST"));
                localStorage.removeItem("loggedInUser");
                window.location.href = 'login.html';
            } catch (error) {
                console.error("Logout Error:", error);
            }
        });
    }

    async function loadTasksFromServer() {
        try {
            const response = await fetch(`${API_BASE_URL}/dashboard`, fetchConfig("GET"));
            const data = await response.json();

            if (response.ok && data.status === "success") {
                tasks = data.tasks; 
                renderTasks(data.message); // Pass database empty state strings if applicable
            } else {
                window.alert("Session expired. Please log in again.");
                window.location.href = "login.html";
            }
        } catch (error) {
            console.error("Fetch Tasks Error:", error);
        }
    }

    if (addTasksForm && taskInput) {
        addTasksForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            const currentTask = taskInput.value.trim();

            if (currentTask !== "") {
                try {
                    const response = await fetch(`${API_BASE_URL}/add_tasks`, fetchConfig("POST", { task_text: currentTask }));
                    const data = await response.json();

                    if (response.ok && data.status === "success") {
                        taskInput.value = "";
                        await loadTasksFromServer(); // Re-fetch the clean list from database
                    }
                } catch (error) {
                    console.error("Add Task Error:", error);
                }
            }
        });
    }

    function renderTasks(emptyMessage = "") {
        const displayTasksContainer = document.querySelector("#display-tasks");
        if (!displayTasksContainer) return;

        displayTasksContainer.innerHTML = "";

        if (tasks.length === 0) {
            const placeholder = document.createElement("p");
            placeholder.textContent = emptyMessage || "No tasks available.";
            placeholder.style.color = "var(--text-secondary)";
            placeholder.style.fontStyle = "italic";
            displayTasksContainer.appendChild(placeholder);
            return;
        }

        tasks.forEach(task => {
            const individualTask = document.createElement("div");
            individualTask.className = "individual-task";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";

            const textSpan = document.createElement("span");
            textSpan.textContent = task.task; // Maps to database key layout 'task'

            const removeTask = document.createElement("span");
            removeTask.innerHTML = "&times;"; // Elegant math cross symbol '×'
            removeTask.style.cursor = "pointer";
            removeTask.style.marginLeft = "15px";

            if (task.is_completed) {
                checkbox.checked = true;
                textSpan.style.textDecoration = "line-through";
                textSpan.style.opacity = "0.5";
            }

            checkbox.addEventListener("change", () => toggleTaskOnServer(task.id));
            removeTask.addEventListener("click", () => deleteTaskFromServer(task.id));

            individualTask.appendChild(checkbox);
            individualTask.appendChild(textSpan);
            individualTask.appendChild(removeTask);

            displayTasksContainer.appendChild(individualTask);
        });
    }

    async function toggleTaskOnServer(id) {
        try {
            const response = await fetch(`${API_BASE_URL}/complete_tasks/${id}`, fetchConfig("PATCH"));
            if (response.ok) {
                await loadTasksFromServer(); // Reload clean database array records
            }
        } catch (error) {
            console.error("Toggle Task Error:", error);
        }
    }

    async function deleteTaskFromServer(id) {
        try {
            const response = await fetch(`${API_BASE_URL}/delete_task/${id}`, fetchConfig("DELETE"));
            if (response.ok) {
                await loadTasksFromServer(); // Reload clean database array records
            }
        } catch (error) {
            console.error("Delete Task Error:", error);
        }
    }
}