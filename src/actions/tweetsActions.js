import axios from "axios";

export function fetchBaseURL(){
    return 'http://127.0.0.1:5000';
}

export function fetchToken(){
    return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiI4MjA1ZGI1MDNiNjA0NWVjODk1NmM5YjcxODY2MjkzMSIsImV4cCI6MTUxMjcyMjA2OH0.M47foWiXMKhf69Mf2u8QOOqdk5ESXAMGbIUXdud-1ro';
}

export function fetchConfig () {
    return {
        baseURL: fetchBaseURL(),
        headers: {
            'x-access-token': fetchToken(),
            'Authorization': 'Basic aWFtazoxMjM0NTY=',
            'content-type': 'multipart/form-data'
        }
    }
}

export function fetchTweets() {
    return function(dispatch) {
        dispatch({type: "FETCH_TWEETS"});

        axios.get("/news", fetchConfig())
        .then((response) => {
            if(response.data.status == '401'){
                location.href = '/login';
            }else{
                dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data.news})
            }            
        })
        .catch((err) => {
            dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
        })
    }
}

export function addTweet(
    newsTitle,
    newsType,
    newsThumb,
    newsKeys,
    newsSummary,
    newsReleaseTime,
    newsIsHot,
    newsIsDel,
    body
) {
    return function(dispatch) {
        dispatch({type: "ADD_TWEET"});

        axios.post("/news", {
            title: newsTitle,
            body: body,
            summary: newsSummary,
            is_hot: newsIsHot,
            is_del: newsIsDel,
            news_type: newsType,
            news_keys: newsKeys,
            thumb:newsThumb
        },getConfig(token))
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
        axios.post("/uploadimage", {
            photo: formData,
        }, getConfig(token))
        .then((response) => {
            if(response.data.status == '401'){
                location.href = '/login';
            }else{
                dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data.path})
            }            
        })
        .catch((err) => {
            dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
        })
    }
}

export function updateTweet(id, text) {
    return {
        type: 'UPDATE_TWEET',
        payload: {
            id,
            text,
        },
    }
}

export function deleteTweet(id) {
    return { type: 'DELETE_TWEET', payload: id}
}
