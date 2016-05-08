/**
 * http://usejsdoc.org/
 */
/*
 * var http = require('http'); var fs = require('fs');
 * http.createServer(function(req, res) { fs.createReadStream(__dirname +
 * '/index.html').pipe(res); }).listen(8000);
 */
// with gzip
var http = require('http');
var fs = require('fs');
var zlib = require('zlib');
http.createServer(
		function(req, res) {
			res.writeHead(200, {
				'content-encoding' : 'gzip'
			});
			var readFile = fs.createReadStream(__dirname + '/index2.html');
			readFile.on("pipe",function(a,b){
				console.log("piping...")
			});
			
			readFile.on("error",function(err){
				console.log("error..")
				console.log(err);
			});
			readFile
			.pipe(zlib.createGzip())
			.pipe(res);
			
		}).listen(8000);
console.log("listening at 8000...")