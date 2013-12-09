var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('random', 'Returns a floating-point, pseudo-random number in the range [0, 1)').
    on(Math.random);
