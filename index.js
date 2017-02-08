var request = require('request');

request.get('http://localhost:3000/LA.json', function(err, response, body) {
    var d = JSON.parse(body);
    /*
        This line triggers (if the json file is larger than 256MB):

        buffer.js:440
            throw new Error('toString failed');
            ^

        Error: toString failed
            at Buffer.toString (buffer.js:440:11)
            at Request.<anonymous> (/Users/sanjaybhangar/mapbox/overpass-metrics-debug/node_modules/request/request.js:1055:39)
            at emitOne (events.js:77:13)
            at Request.emit (events.js:169:7)
            at IncomingMessage.<anonymous> (/Users/sanjaybhangar/mapbox/overpass-metrics-debug/node_modules/request/request.js:1001:12)
            at IncomingMessage.g (events.js:260:16)
            at emitNone (events.js:72:20)
            at IncomingMessage.emit (events.js:166:7)
            at endReadableNT (_stream_readable.js:921:12)
            at nextTickCallbackWith2Args (node.js:442:9)

    */
});