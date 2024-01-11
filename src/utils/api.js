const BASE_URL = 'https://contact-api.dicoding.dev/v1' ; 
const LOCAL_KEY = "accessToken";

function getAccessToken() {
    return localStorage.getItem(LOCAL_KEY) ; 
}

function putAccessToken(accessToken) {
    return localStorage.setItem(LOCAL_KEY, accessToken );
}

function fetchWithToken(url, options={}) {
    return fetch(url, {
        ...options, 
        headers: {
            ...options, 
            Authorization: `Bearer ${getAccessToken()}`
        }
    });
}

async function login({email, password}) {
    const response = await fetch(BASE_URL + '/login', {
        method: 'POST', 
        headers : {
            'Content-Type' : 'application/json'
        }, 
        body: JSON.stringify({email, password}), 
    })
    const responseJSON = await response.json();
    if(responseJSON.status !== 'success') {
        return {error : true, data: null}
    }
    return {error: false, data: responseJSON.data.accessToken}

}


async function register({name, email, password}) {
    const response = await fetch(BASE_URL + '/register', { 
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json'
        }, 
        body : JSON.stringify({name, email, password})
    })

    const responseJSON = await response.json();
    if(responseJSON.status !== 'success') {
        return ({error: true});
    }
    return ({error: false})
}

function loggedOut() {
    localStorage.removeItem(LOCAL_KEY);
}


async function getLogged() {
    const response = await fetch(BASE_URL + '/users/me', {
        method: 'GET', 
        headers: {
            Authorization : `Bearer ${getAccessToken()}`
        }
    })
    const responseJSON = await response.json();
    if(responseJSON.status !== 'success') {
        return ({error: true, data: null,});
    }
    return ({error: false, data: responseJSON.data})
}


async function addContact({name, tag, phoneNumber}){
    const response = await fetch(BASE_URL + '/contacts', {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json', 
            Authorization : `Bearer ${getAccessToken()}`
        }, 
        body: JSON.stringify({name,tag,phoneNumber})
    });

    const responseJSON = await response.json();
    if(responseJSON.status !== 'success') {
        return ({error: true, data: null,});
    }
    return ({error: false, data: responseJSON.data})
}



async function getContact(){
    const response = await fetch(BASE_URL + '/contacts', {
        method: 'GET', 
        headers: {
            Authorization : `Bearer ${getAccessToken()}`
        }, 
    });

    const responseJSON = await response.json();
    if(responseJSON.status !== 'success') {
        return ({error: true, data: [],});
    }
    return ({error: false, data: responseJSON.data})
}




export {
    login,
    register,
    getLogged,
    loggedOut, 
    fetchWithToken,
    getContact, 
    getAccessToken, 
    putAccessToken, 
}
