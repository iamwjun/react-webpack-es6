import io from 'socket.io-client';

export function fetchToken() {
    return function(dispatch) {
        dispatch({type: "FETCH_TOKEN"});

        try{
            let socket = io.connect('http://' + document.domain + ':5000/test');
            socket.on('connect', function(){
                dispatch({type: "FETCH_TOKEN", payload: socket.id})
            })
            socket.emit('response', {data: 'I\'m connected!'});
            socket.on('response', function(data){
                dispatch({type: "FETCH_TOKEN", payload: data})
            })
        }catch(exception){
            console.log('exception')
        }finally{   
            console.log('fail')
        }  
    }
}

export function fetchUser() {
    return {
        type: "FETCH_USER_FULFILLED",
        payload: {
            name: "Will",
            age: 35,
        }
    }
}

export function setUserName(name) {
    return {
        type: 'SET_USER_NAME',
        payload: name,
    }
}

export function setUserAge(age) {
    return {
        type: 'SET_USER_AGE',
        payload: age,
    }
}
