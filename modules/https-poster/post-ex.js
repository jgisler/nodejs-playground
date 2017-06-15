console.log('GW1');

var https = require('https');

exports.handler = function(event, context) {

    var body='';
    var jsonObject = JSON.stringify(event);

    // the post options
    var optionspost = {
        host: 'the_host',
        path: '/the_path',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    var reqPost = https.request(optionspost, function(res) {
        console.log("statusCode: ", res.statusCode);
        res.on('data', function (chunk) {
            body += chunk;
        });
        context.succeed('Blah');
    });

    reqPost.write(jsonObject);
    reqPost.end();
};