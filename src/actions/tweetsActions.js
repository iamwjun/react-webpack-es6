import axios from "axios";
import * as Cookies from 'js-cookie';

export function fetchBaseURL(){
    return 'http://127.0.0.1:5000';
}

export function fetchToken(){
    return Cookies.get('token')
    // return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiIyNDg3ZjFjZS1hOTAzLTRkOTctYmZhOC0zZDZiMDBlMmQ4ZDciLCJleHAiOjE1MTM0MzIzOTV9.SAndApzp4RjNT9-920bEiF6IiI8TMT_JxFnn9dpZsEg';
}

export function fetchConfig () {
    return {
        baseURL: fetchBaseURL(),
        headers: {
            'x-access-token': fetchToken(),
            'Authorization': 'Basic aWFtazoxMjM0NTY='
        }
    }
}

export function getParameter(source, condition){
    let parameters = {};
        
    Object.keys(source).forEach(function(keys){
        condition.includes(keys) ? parameters[keys] = source[keys] : '';
    });

    return parameters;
}

export function fetchTweets() {
    return function(dispatch) {
        dispatch({type: "GET_TWEET"});

        axios.get("/api/news", fetchConfig())
        .then((response) => {
            if(response.data.status == '401'){
                location.href = '/login';
            }else{
                dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data.news})
            }            
        })
        .catch((err) => {
            location.href = '/login';
            dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
        })
    }
}

export function addTweet(source) {
    return function(dispatch) {
        dispatch({type: "ADD_TWEET"});

        let params = getParameter(source, ['title', 'body', 'summary', 'release_time', 'is_hot', 'is_del', 'news_type', 'news_keys', 'thumb']);

        axios.post("/api/news", params, fetchConfig())
        .then((response) => {
            if(response.data.status == '401'){
                location.href = '/login';
            }else if(response.data.status == '200'){
                location.href = '/';                
            }else{
                dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data.news})
            }
        })
        .catch((err) => {
            dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
        })
    }
}

export function uploadImage(file) {
    return function(dispatch) {
        dispatch({type: "UPLOAD_IMAGE"});

        const formData = new FormData();
        formData.append('photo',file)
        axios.post("/api/uploadimage", {
            photo: formData,
        }, getConfig(token))
        .then((response) => {
            if(response.data.status == '401'){
                // location.href = '/login';
            }else{
                dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data.path})
            }            
        })
        .catch((err) => {
            dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
        })
    }
}

export function getTweet(id) {    
    return function(dispatch) {
        dispatch({type: "FETCH_TWEETS"});

        axios.get(`/api/news/${id}`, fetchConfig())
        .then((response) => {
            if(response.data.status == '401'){
                location.href = '/login';
            }else{
                dispatch({type: "FETCH_TWEETS_FULFILLED", payload: {...response.data.news, action: "update"}})
            }            
        })
        .catch((err) => {
            location.href = '/login';
            dispatch({type: "FETCH_TWEETS_FULFILLED", payload: err})
        })
    }
}

export function updateTweet(source) {
    return function(dispatch) {
        dispatch({type: "UPDATE_TWEET"});

        let params = getParameter(source, ['title', 'body', 'summary', 'release_time', 'is_hot', 'is_del', 'news_type', 'news_keys', 'thumb']);

        axios.put(`/api/news/${source.public_id}`, params, fetchConfig())
        .then((response) => {
            if(response.data.status == '401'){
                location.href = '/login';
            }else if(response.data.status == '200'){
                location.href = '/';                
            }else{
                dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data.message})
            }
        })
        .catch((err) => {
            dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
        })
    }
}

export function deleteTweet(id) {
    return { type: 'DELETE_TWEET', payload: id}
}
