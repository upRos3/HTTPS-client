var https = require('https');

function getAndPrintHTML () {
  var buffer = "";

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      buffer += data;
    });

    response.on('end', function() {
      console.log('Stream: ' + buffer);
    });
  });
}

console.log(getAndPrintHTML(''));

