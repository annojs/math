var between = require('../').between;


module.exports = function(op, a) {
    return f.between(op(a), -Math.PI / 2, Math.PI / 2);
};

