/**
 * http://usejsdoc.org/
 */
var fs = require('fs');
fs.readFile('./names.txt', function (er, buf) {
	console.log(buf.toString())
	console.log(Buffer.isBuffer(buf)); // true
});
var buf = new Buffer(2);
buf[0] = 45;
buf[1] = 46;
console.log(buf.toString())

var mime = 'image/jpeg';
var encoding = 'base64';
var uri = 'data:' + mime + ';' + encoding + ',';
var data = fs.readFileSync('./monkey.jpg').toString(encoding);
var uri = 'data:' + mime + ';' + encoding + ',' + data;
console.log(uri);