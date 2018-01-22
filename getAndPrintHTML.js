var https = require('https');

function getAndPrintHTML (options) {
  var buffer = "";

  https.get(options, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      buffer += data;
    });

    response.on('end', function() {
      console.log('Stream: ' + buffer);
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

console.log(getAndPrintHTML(requestOptions));