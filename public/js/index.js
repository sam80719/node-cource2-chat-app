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
    	var li =$('<li></li>');
    	li.text(`${message.from}: ${message.text}`);

    	$('#message').append(li);
    });

    // socket.emit('createMessage',{
    // 	from: 'Andrea',
    // 	text: 'I truely love you, Sam'
    // }, function(data){
    // 	// console.log('waiting for Sam respond!');
    // 	console.log('waiting for Sam respond!', data);
    // });

    $('#message-form').on('submit', function(e) {
    	e.preventDefault();

    	socket.emit('createMessage', {
    		from: 'User',
    		text: $('[name=message]').val()
    	}, function (){

    	});
    });


