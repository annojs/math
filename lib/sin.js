var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('sin', 'Returns the sine of a number').
    on(is.number, Math.sin);
