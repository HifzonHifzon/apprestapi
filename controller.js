'use strict';

// var response = 
var response  = require('./rest');
var koneksi = require('./koneksi');

exports.index = function(req, res) {
    response.ok('Aplikasi aku berjalan....!!!', res);
}

/* Menampilkan semua data mahasiswa */
exports.tampil = function(req, res) {
    // response.ok('Ini Halaman Buku', res);
    koneksi.query("SELECT * FROM mahasiswa", function(error, rows, field){
        if (error) {
            koneksi.log(error);
        } else {
            response.ok(rows, res);
        }
    })
}

/* Menampilkan data mahasiswa berdasarkan ID & NAMA*/
exports.tamilbyid = function(req, res){
    let id = req.params.id;
    let nama = req.params.nama;
    
    koneksi.query("SELECT * FROM mahasiswa where id  = ? and nama = ?", [id,nama], function(error, rows, field){
        if (error){
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    })

}