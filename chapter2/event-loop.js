/**
 * http://usejsdoc.org/
 */
var emitter = new require('events').EventEmitter();

setTimeout(function() {
	console.log('TIMEOUT 1');
}, 0);

setImmediate(function() {
	console.log("IMMEDIATE 1");
});

process.nextTick(function() {
	console.log("NEXTTICK 1");
});

setTimeout(function() {
	setTimeout(function() {
		console.log('TIMEOUT 2')
	}, 0);
	setImmediate(function() {
		console.log('IMMEDIATE 2')
	});
}, 10);