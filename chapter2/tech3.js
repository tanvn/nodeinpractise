/**
 * http://usejsdoc.org/
 */

var obj = require("./techique-3");

obj.one();
obj.two();

console.log(delete require.cache[require.resolve('./techique-3')]);
obj.one();
console.log(require.extensions)
console.log('__dirname:', __dirname);
console.log('__filename:', __filename);
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(text) {
	process.stdout.write(text.toUpperCase());
});
var user = { name: 'alex' };
console.log('Hello:', user);
console.error('Error, bad user:', user);
console.trace()