var connection  = require('../koneksi');
var mysql = require('mysql');
var md5 = require('MD5');
var response = require('../rest');
var jwt = require('jsonwebtoken');
var config  = require('../config/secret');
var ip = require('ip');

//controller untuk registratsi
exports.registrasi = function(req, res) {
    var post = {
        username : req.body.username, 
        email : req.body.email,
        password : md5(req.body.password),
        role : req.body.role, 
        tanggal : new Date()
    }

    var query = "SELECT email FROM ?? where ?? = ?";
    var table = ["user","email", post.email];

    query = mysql.format(query, table);
    connection.query(query, function (error, rows){
        if(error) {
            console.log(error)
        } else {
            if (rows.length == 0) {
                var query = "INSERT INTO ?? SET ?";
                var table = ["user"];

                query = mysql.format(query, table);
                connection.query(query, post, function(error, rows){
                    if (error) {
                        console.log(error)
                    } else {
                        response.result("data berhasil ditambahkan", res)
                    }
                })
            } else {
                response.result("Email Sudah terdaftar", res);
            }
        }

    });
}
