    var socket = io();

    socket.on('connect', function()  {
      console.log('Connected to server!!');

      // socket.emit('createEmail',{
      // 	to: 'abby@example.com',
      // 	text: 'hey, this is sam'
      // });
     //  socket.emit('createMessage',{
    	// from:'Andrew',
    	// text: 'Yup,that works for me'  	
     //  });
    });

    socket.on('disconnect', function()  {
      console.log('Disconnected from server');
    });

    // socket.on('newEmail', function(email){
    // 	console.log('New Email', email);
    // });
    socket.on('newMessage', function(message){
    	console.log('newMessage', message);
    });