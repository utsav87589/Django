export async function registerAPI(username, password){
    const response = await fetch('/api/register',{
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({username, password})
    });

    return await response.json()
}

export async function loginAPI(username, password){
    const response = await fetch('/api/login',{
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({username, password})
    });

    return await response.json()
}

export async function taskAPI(){
    const response = await fetch('/api/dashboard', {
        method : "GET",
    });

    return await response.json();
}