export async function registerAPI(username, password){
    const response = await fetch('/api/register',{
        methods : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({username, password})
    });

    return await response.json()
}

export async function loginAPI(username, password){
    const response = await fetch('/api/login',{
        methods : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({username, password})
    });

    return await response.json()
}