
socket.addEventListener('open', event => {
    // Socket now open
});

socket.addEventListener('message', event => {
    // Message recieved from server
    console.log(event.message);
});

socket.addEventListener('error', event => {
    console.log('Error occured ', event.data);
});

socket.addEventListener('close', event => {
    console.log('Closed with code', event.code);
});