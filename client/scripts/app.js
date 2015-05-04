// YOUR CODE HERE:

https://api.parse.com/1/classes/chatterbox

var app = {
	server: 'https://api.parse.com/1/classes/chatterbox',
	init: function() {},
	send: function(message) {
		$.ajax({
			url: this.server,
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
			url: this.server,
			type: 'GET',
			data: JSON.stringify(message),
			contentType: 'application/json',
			success: function (data) {
				console.log('chatterbox: Message recieved');
			},
			error: function (data) {
				console.error('chatterbox: Failed to recieve message');
			}
		})	
	},
	clearMessages: function(){
		$("#chats").empty();	
	},
	addMessage: function(message){
		var message = JSON.stringify(message)
		$("#chats").append("<p>" + message + "</p>");
	}
	addRoom: function(){
	
	}
};
