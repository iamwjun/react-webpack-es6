import openSocket from 'socket.io-client';

// function subscribeToTimer() {
//     return function(){
//         let socket = io('http://' + document.domain + ':5000/test');
//         // socket.emit('response', {data: 'I\'m connected!'});
//         // socket.on('response', timestamp => cb(null, timestamp));
//         socket.on('response', function(){});
//         socket.on('event', function(data){});
//         socket.on('disconnect', function(){});
//     }    
// }

function subscribeToTimer(cb) {
    const socket = openSocket('http://' + document.domain + ':5000/test');
    socket.emit('response', {data: 'I\'m connected!'});
    socket.on('response', timestamp => cb(null, timestamp));
}

export { subscribeToTimer };