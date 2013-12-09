var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('log', 'Returns the natural logarithm (base E) of a number').
    on(is.number, Math.log);
