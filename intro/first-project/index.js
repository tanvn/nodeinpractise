var CountStream = require('./countstream'); //<co id="callout-intro-countstream-index-1" />
var countStream = new CountStream('.png'); //<co id="callout-intro-countstream-index-2" />
var http = require('https');

http.get('https://www.manning.com/', function(res) { //<co id="callout-intro-countstream-index-3" />
  res.pipe(countStream); //<co id="callout-intro-countstream-index-4" />
});

countStream.on('total', function(count) {
  console.log('Total matches:', count);
});

console.log(require.resolve("./countstream"));