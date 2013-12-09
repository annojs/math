var between = require('../').between;


module.exports = function(op, a, b) {
    var res = op(a, b);

    return !res || between(res, a, b);
};

