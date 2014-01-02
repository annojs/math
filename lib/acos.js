var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('acos', 'Returns the arccosine (in radians) of a number').
    on(function betweenOnes(a) {
        return is.number(a) && -1 <= a && a <= 1;
    }, Math.acos);
