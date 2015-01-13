'use strict';
var annotate = require('annotate');
var is = require('annois');

var randint = require('./randint');


module.exports = annotate('pick', 'Returns a random item of the given array').
    on(is.array, function(arr) {
        var len = arr.length;

        if(len) {
            return arr[randint(0, len - 1)];
        }

        return;
    });
