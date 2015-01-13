'use strict';


module.exports = function(op, arr) {
    var res = op(arr);

    if(!arr.length || isNaN(res)) {
        return true;
    }

    return arr.indexOf(res) >= 0;
};
