/*jshint esversion: 6 */

/**
 * Chasing a jshint warning about 'use the function-form of use strict, I came
 * the following StackOverflow thread.
 *
 * https://stackoverflow.com/questions/27441803/why-does-jshint-throw-a-warning-if-i-am-using-const
 */
(()=>{
    'use strict';

    console.log('Starting echo service ...')

    const express    = require('express');
    const bodyParser = require('body-parser');
    const routes     = require('./api/routes/routes');

    const app   = express();
    const port  = process.env.PORT || 3000;

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    routes(app);

    app.listen(port);

    console.log(`Echo service started on port ${port}`);
})();
