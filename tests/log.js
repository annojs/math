var pow = require('../').pow;


module.exports = function(op, a) {
    return a === 0 || op(pow(Math.E, a));
};

