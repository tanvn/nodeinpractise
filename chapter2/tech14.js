/**
 * http://usejsdoc.org/
 */
var EventEmitter = require('events').EventEmitter;
function complexOperations() {
	var events = new EventEmitter();
	process.nextTick(function() {
		events.emit('success');
	});
	return events;
}
complexOperations().on('success', function() {
	console.log('success!');
});

var EventEmitter = require('events').EventEmitter;
var fs = require('fs');
var content;
function readFileIfRequired(cb) {
	if (!content) {
		fs.readFile(__filename, 'utf8', function(err, data) {
			content = data;
			console.log('readFileIfRequired: readFile');
			cb(err, content);
		});
	} else {
//		console.log('readFileIfRequired: cached');
//		cb(null, content);
		process.nextTick(function() {
			console.log('readFileIfRequired: cached');
			cb(null, content);
		});
	}
}
readFileIfRequired(function(err, data) {
	console.log('1. Length:', data.length);
	readFileIfRequired(function(err, data2) {
		console.log('2. Length:', data2.length);
	});
	console.log('Reading file again...');
});
console.log('Reading file...');