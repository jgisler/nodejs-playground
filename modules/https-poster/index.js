/*jshint esversion: 6 */

/**
 * Chasing a jshint warning about 'use the function-form of use strict, I came
 * the following StackOverflow thread.
 *
 * https://stackoverflow.com/questions/27441803/why-does-jshint-throw-a-warning-if-i-am-using-const
 */
(()=>{

    'use strict';

    const http = require('http');

    // const data = {
    //     thing: "stuff",
    //     otherThings: [{
    //         thisThing: "other stuff",
    //         thatThing: "some stuff"
    //     },{
    //         redThing: "red stuff",
    //         blueThing: "blue stuff"
    //     }]
    // };

    // const dataString = JSON.stringify(data);

    // const postOptions = {
    //     host:   'localhost',
    //     port:   '3000',
    //     path:   '/echo',
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //         // 'Content-Length': dataString.length
    //     }
    // };

    // let postReq = http.request(postOptions, (response) => {

    //     let body = '';

    //     response.on('data', (chunk) => {
    //         console.log(chunk);
    //         body += chunk;
    //     });

    //     response.on('end', () => {
    //         console.log(body);
    //         resolve(body);
    //     });

    //     response.on('error', (error) => {
    //         console.error(error);
    //         reject(error);
    //     });
    // });

    // console.log(postReq);

    const data = {
        thing: "stuff",
        otherThings: [{
            thisThing: "other stuff",
            thatThing: "some stuff"
        },{
            redThing: "red stuff",
            blueThing: "blue stuff"
        }]
    };

    var body='';
    var jsonObject = JSON.stringify(data);

    // the post options
    var optionspost = {
        host: 'localhost',
        path: '/echo',
        port: 3000,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    var postReq = http.request(optionspost, function(res) {
        console.log("statusCode: ", res.statusCode);

        res.on('data', function (chunk) {
            body += chunk;
        });

        res.on('error', (error) => {
            console.error(error);
        });

        res.on('end', () => {
            console.log(`body=${body}`);
        });

    });

    postReq.write(jsonObject);
    postReq.end();

})();
