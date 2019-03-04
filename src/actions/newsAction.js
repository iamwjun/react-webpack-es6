import axios from "axios";

let token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiIyNDg3ZjFjZS1hOTAzLTRkOTctYmZhOC0zZDZiMDBlMmQ4ZDciLCJleHAiOjE1MTI2MDk4MDl9.6oGpJOzjBJGvCp6XwF3zkTUScRn3WRSTyjTtr2oUhW4';

export function getConfig (token) {
    return {
        baseURL: 'http://127.0.0.1:5000',
        headers: {
            'x-access-token': token,
            'Authorization': 'Basic aWFtazoxMjM0NTY='
        }
    }
}

export function fetchNews() {
    return function() {    
        axios.get("/news", getConfig(token))
        .then((response) => {
            if(response.data.status == '401'){
                location.href = '/login';
            }else{
                //console.log(response.data.news);
                return response.data.news;
            }            
        })
        .catch((err) => {
            //console.log(err)
        })
    }
}