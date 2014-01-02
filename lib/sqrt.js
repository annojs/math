var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('sqrt', 'Returns the square root of a number').
    on(function greaterThanZero(a) {
        return is.number(a) && a >= 0;
    }, Math.sqrt);
