var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('cos', 'Returns the cosine of a number').
    on(is.number, Math.cos);
