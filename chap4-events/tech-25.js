/**
 * http://usejsdoc.org/
 */
var redis = require('redis');
var client1 = redis.createClient();
var client2 = redis.createClient();
var msg_count = 0;
client1.on('subscribe', function(channel, count) {
	console.log(channel);
	console.log(count)
	client2.publish('channel', 'Hello world.');
});
client1.on('message', function(channel, message) {
	console.log('client1 channel ' + channel + ': ' + message);
	client1.unsubscribe();
	client1.end();
	client2.end();
});
client1.subscribe('channel');