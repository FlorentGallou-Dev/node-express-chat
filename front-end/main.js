
const server = 'http://127.0.0.1:3000'
const socket = io(server);

const send = document.getElementById('submitButton');
send.addEventListener('click', () => {
    const msg = document.getElementById('msg');

    socket.emit('message-text', msg.value);

    msg.value = '';
});

socket.on('notification', (data) => {
    console.log('Message depuis le seveur:', data);
})

fetch(`${server}/test`).then((res) => {
    return res.json()
}).then((data) => {
    console.log(data);
})