/*jshint esversion: 6 */

(()=>{

    'use strict';

    exports.echoGet = echoRequest;
    exports.echoPost = echoRequest;

    function echoRequest(request, response) {
        console.log(`headers=${pp(request.headers)}`);
        console.log(`body=${pp(request.body)}`);
        response.json(request.body);
    }

    function pp(obj) {
        return JSON.stringify(obj, null, 2);
    }

})();