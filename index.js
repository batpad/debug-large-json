var request = require('request');

request.get('http://localhost:3000/LA.json', function(err, response, body) {
    var d = JSON.parse(body);
});