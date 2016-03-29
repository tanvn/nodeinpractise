/**
 * http://usejsdoc.org/
 */
var fs = require("fs");
var emitter = new require('events').EventEmitter();

setTimeout(function() {
	console.log('TIMEOUT 1');
}, 0);
setTimeout(function() {
	console.log('TIMEOUT 2');
}, 1);
setTimeout(function() {
	console.log('TIMEOUT 100');
}, 2);
setImmediate(function() {
	console.log("IMMEDIATE 1");

	for (var i = 1; i < 10; i++) {
		setImmediate((function(i) {
			return function() {
				console.log("setImmediate " + i)
			};
		})(i));
	}

});

process.nextTick(function() {
	console.log("NEXTTICK 1");
	process.nextTick(function() {
		for (var i = 2; i < 100; i++) {
			process.nextTick((function(i) {
				return function() {
					console.log("NEXTTICK " + i)
				};
			})(i));
		}
	});
});

setTimeout(function() {
	setTimeout(function() {
		console.log('TIMEOUT 10')
	}, 0);
	setImmediate(function() {
		console.log('IMMEDIATE 10')
	});
}, 10);

var content = null;
function readFileIfRequired(cb) {
	if (!content) {
		fs.readFile(__filename, 'utf8', function(err, data) {
			content = data;
			console.log('readFileIfRequired: readFile');
			cb(err, content);
		});
	} else {
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