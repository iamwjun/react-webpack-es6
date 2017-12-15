import openSocket from 'socket.io-client';

function subscribeToTimer() {
    return function(){
        let socket = openSocket('http://' + document.domain + ':5000/test');
        socket.emit('response', {data: 'I\'m connected!'});
        socket.on('response', function(data){         
            if (data.code == '200'){
                console.log(data);
            }else{
                console.log('ERROR:' + data);
            }
        });
    }    
}

export { subscribeToTimer };