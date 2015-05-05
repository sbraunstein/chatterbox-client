// YOUR CODE HERE:

https://api.parse.com/1/classes/chatterbox
var app;

(function(){
	app = {
		init: function() {
			app.fetch({'order': '-createdAt'})
			app.server = 'https://api.parse.com/1/classes/chatterbox';
			app.friends = [];
			app.$main = $('#main');
			app.$chats = $("#chats");
			app.$main.on('click','.username', app.addFriend);
			app.$main.on('click','#send', app.addMessage);
			app.$main.on('click','#addRoom', app.addRoom);
			app.$main.on('click', '#fetch', app.fetch);


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
		fetch: function() {
			$.ajax({
				url: app.server,
				type: 'GET',
				data: {"order": "-createdAt"},
				contentType: 'application/json',
				success: function (data) {
					console.log('chatterbox: Message recieved'); 
					_.each(data.results, function(item){

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
			$("#roomSelect").append("<option>"+room+"</option>");
		},
		addFriend: function() {
			if(app.friends.indexOf(this.text) === -1) {
				app.friends.push(this.text);
			}
		},
		handleSubmit: function() {
		},


	};

})()

// $(app.init());

