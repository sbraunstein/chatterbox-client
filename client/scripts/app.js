// YOUR CODE HERE:

https://api.parse.com/1/classes/chatterbox
var app;

(function(){
	app = {
		init: function() {
			app.server = 'https://api.parse.com/1/classes/chatterbox';
			app.friends = [];
			app.$main = $('#main');
			app.$chats = $("#chats");
			app.$main.on('click','.username', app.addFriend);
			app.$main.on('submit','#send', app.handleSubmit);
			app.$main.on('submit','#addRoom', app.addRoom);


		},
		send: function(message) {
			$.ajax({
				url: app.server,
				type: 'POST',
				data: JSON.stringify(message),
				contentType: 'application/json',
				success: function (data) {
					console.log('chatterbox: Message sent');
				},
				error: function (data) {
					console.error('chatterbox: Failed to send message');
				}
			})	
		},
		fetch: function(message) {
			$.ajax({
				url: app.server,
				type: 'GET',
				data: JSON.stringify(message),
				contentType: 'application/json',
				success: function (data) {
					console.log(data);
					console.log('chatterbox: Message recieved');
					_.each(data, function(item){
					
						app.$chats.append('<p><a href="#" class="username">' + item.username + "</a>: " + item.text + "</p>");
						// body
					
					});
					
				},
				error: function (data) {
					console.error('chatterbox: Failed to recieve message');
				}
			})	
		},
		clearMessages: function(){
			app.$chats.empty();	
		},
		addMessage: function(message){
			app.$chats.append('<p><a href="#" class="username">' + message.username + "</a>: " + message.text + "</p>");
		},
		addRoom: function(room){
			console.log('runnininining')
			$("#roomSelect").append("<option>"+room+"</option>");
		},
		addFriend: function() {
			app.friends.push(this.text);
		},
		handleSubmit: function() {
		},


	};

})()

// $(app.init());

