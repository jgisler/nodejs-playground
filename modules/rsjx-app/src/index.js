'use strict';

const Rx = require('rxjs/Rx');

let colors = [ 'red', 'green', 'blue', 'yellow', 'orange', 'purple', 'black', 'grey'];
let colorStream$ = Rx.Observable.from(colors);

let colorObserver = {
    next: ((x) => {
        console.log('Observer got a next value: ' + x);
    }),

    error: ((err) => {
        console.error('Observer got an error: ' + err);
    }),

    complete: (() => {
        console.log('Observer got a complete notification');
    })
};

let colorSub = colorStream$.subscribe(colorObserver);
