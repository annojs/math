var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('ceil', 'Returns the smallest integer greater than or equal to a number').
    on(is.number, Math.ceil);
