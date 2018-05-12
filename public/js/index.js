    var socket = io();

    socket.on('connect', function() {
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

    socket.on('disconnect', function() {
        console.log('Disconnected from server');
    });

    // socket.on('newEmail', function(email){
    // 	console.log('New Email', email);
    // });
    socket.on('newMessage', function(message) {
        console.log('newMessage', message);
        var li = $('<li></li>');
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
socket.on('newLocationMessage', function (message){
	var li = $('<li></li>');
	var a = $('<a target="_blank">My current location</a>');

	li.text(`${message.from}:`);
	a.attr('href', message.url);
	li.append(a);
	$('#message').append(li);
});



    $('#message-form').on('submit', function(e) {
        e.preventDefault();

        socket.emit('createMessage', {
            from: 'User',
            text: $('[name=message]').val()
        }, function() {

        });
    });

    var locationButton = $('#send-locattion');
    locationButton.on('click', function() {
        if (!navigator.geolocation) {
            return alert('Geolocation not supported by your browser.');
        }
        // navigator.geolocation.getCurrentPosition(function(position) {
        //     // console.log(position);
        //     socket.emit('createLocationMessage', {
        //         latitude: position.coords.latitude,
        //         longitude: position.coords.longitude
        //     });

        // }, function() {
        //     alert('Unable to fetch location.');
        // });

        // navigator.geolocation.getCurrentPosition(function() {}, function() {}, {});
        navigator.geolocation.getCurrentPosition((position) => {
            // console.log('test');
            console.log(position);
            socket.emit('createLocationMessage', {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
        }, (err) => {
            alert('Unable to fetch location');
        }, {
            maximumAge: 60000,
            timeout: 10000,
            enableHighAccuracy: true
        });
    });