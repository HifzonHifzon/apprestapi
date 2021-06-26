'use strict';

// var response = 
var response  = require('./res');
var koneksi = require('./koneksi');

exports.index = function(req, res) {
    response.ok('Aplikasi aku berjalan....!!!');
}