'use strict';

// var response = 
var response  = require('./rest');
var koneksi = require('./koneksi');

exports.index = function(req, res) {
    response.ok('Aplikasi aku berjalan....!!!', res);
}