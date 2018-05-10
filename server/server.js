const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    // socket.emit('newEmail', {
    //     from: 'sam@example.com',
    //     text: 'Hey. What is going on.',
    //     createAt: 123
    // });
    // socket.emit('newMessage', {
    // 	from:'Sam',
    // 	text:'See you then',
    // 	createAt:0973169236
    // });

    // socket.on('createEmail', (newEmail) => {
    //     console.log('createEmail', newEmail);
    // });



    socket.emit('newMessage', generateMessage('admin', 'welcome to the chat app'));
    socket.broadcast.emit('newMessage', generateMessage('admin','new user joined'));


    //socket.emit from admin text welcome to the chat app
    // socket.broadcast.emit from admin text new user joined
    // emit觸發事件
    // socket.emit('newMessage',{
    // 	from: 'admin',
    // 	text: 'welcome to the chat app',
    // 	createAt: new Date().getTime() 
    // });
    // //broadcast 監聽與廣播事件
    // socket.broadcast.emit('newMessage', {
    // 		from: 'admin',
    // 		text: 'new user joined',
    // 		createAt: new Date().getTime()    	
    // });




    socket.on('createMessage', (message)=>{
    	console.log('createMessage', message);

    	io.emit('newMessage', generateMessage(message.from, message.text));

    	// io.emit('newMessage',{
    	// 	from: message.from,
    	// 	text: message.text,
    	// 	createAt: new Date().getTime()
    	// });
    	// socket.broadcast.emit('newMessage', {
    	// 	from: message,
    	// 	text: message.text,
    	// 	createAt: new Date().getTime()

    	// });


    });


    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server is up on ${port}`);
});