var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('floor', 'Returns the largest integer less than or equal to a number').
    on(is.number, Math.floor);
