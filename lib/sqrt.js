var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('sqrt', 'Returns the square root of a number').
    on(function(a) {
        return is.number(a) && a >= 0;
    }, Math.sqrt);
