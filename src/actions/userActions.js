import io from 'socket.io-client';
import * as Cookies from 'js-cookie';

export function fetchToken() {
    return function(dispatch) {
        dispatch({type: "FETCH_TOKEN"});
        //console.log('执行次数')

        try{
            let port = 5000;
            let socket = io.connect('http://' + document.domain + ':' + port + '/allow');
            // socket.on('connect', function(){
            //     dispatch({type: "FETCH_TOKEN", payload: {
            //         sid: socket.id,
            //         namespace: socket.nsp
            //     }})
            // })
            // socket.emit('response', {data: 'I\'m connected!'});
            // socket.on('response', function(data){
            //     console.log(data)
            //     if(data.status == '200'){
            //         Cookies.set('token', data.token, { expires: 1 });
            //         location.href = '/';
            //     }
            // })

            socket.on('connect', function(){
                dispatch({type: "FETCH_TOKEN", payload: {
                    sid: socket.id,
                    namespace: socket.nsp
                }})
            })
            socket.emit('join', {room: 'allow'});
            socket.on('message', function(data) {
                // console.log(data)
                if(data.status == '200'){
                    Cookies.set('token', data.token, { expires: 1 });
                    location.href = '/';
                }
            });
        }catch(exception){
            // console.log(exception)
        }finally{   
            // console.log('fail')
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
