/*jshint esversion: 6 */

(()=>{

    'use strict';

    module.exports = (app) => {

        const controller = require('../controllers/controller');

        app.route('/echo')
           .get(controller.echoGet)
           .post(controller.echoPost);
    };

})();