var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('abs', 'Returns the absolute value (modulus) of a number').
    on(is.number, Math.abs).
    satisfies(is.number);
