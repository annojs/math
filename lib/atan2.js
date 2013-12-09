var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('atan2', 'Returns the arctangent of the quotient of its arguments.').
    on(is.number, is.number, Math.atan2);
