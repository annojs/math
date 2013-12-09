var is = require('annois');


module.exports = function(op, y, x) {
    return is.number(op(y, x));
};

