var is = require('annois');


module.exports = function(op, a) {
    return is.number(op(a));
};

