'use strict';

// var response = 
var response = require('./rest');
var koneksi = require('./koneksi');

exports.index = function (req, res) {
    response.result('Aplikasi aku berjalan....!!!', res);
}

/* Menampilkan semua data mahasiswa */
exports.tampil = function (req, res) {
    // response.ok('Ini Halaman Buku', res);
    koneksi.query("SELECT * FROM mahasiswa", function (error, rows, field) {
        if (error) {
            koneksi.log(error);
        } else {
            response.result(rows, res);
        }
    })
}

/* Menampilkan data mahasiswa berdasarkan ID & NAMA*/
exports.tamilbyid = function (req, res) {
    let id = req.params.id;
    let nama = req.params.nama;

    koneksi.query("SELECT * FROM mahasiswa where id  = ? and nama = ?", [id, nama], function (error, rows, field) {
        if (error) {
            console.log(error);
        } else {
            response.result(rows, res);
        }
    })
}

/* INSERT data mahasiswa BARU */
exports.tambahmahasiswa = function (req, res) {
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    koneksi.query('INSERT INTO mahasiswa (nim, nama, jurusan ) value (?,?,?)', [nim, nama, jurusan],
        function (error, rows, field) {
            if(error) {
                console.log(error);
            } else {
                response.result("data berhasil ditambahkan", res);
            }
        });
}

exports.updateMahasiswa = function(req, res){
    var id = req.body.id;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    koneksi.query('UPDATE mahasiswa SET nim = ? , nama = ?, jurusan =  ? WHERE id = ? ',[nim, nama, jurusan, id], function(error, rows, field){
        if (error) {
            console.log(error);
        } else {
            response.result("Data berhasil diupdate", res);
        }
    });
}
