/**
 * http://usejsdoc.org/
 */

util = require("util");
EventEmitter = require("events").EventEmitter;

function MyEmitter() {
	EventEmitter.call(this);
}
util.inherits(MyEmitter, EventEmitter);

MyEmitter.prototype.doStuff = function doStuff() {
	console.log('before')
	this.emit('fire')
	console.log('after')
};

var me = new MyEmitter();
me.on('fire', function() {
	console.log('emit fired');
});

me.doStuff();