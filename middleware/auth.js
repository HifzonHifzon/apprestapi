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

exports.login = function(req, res){
    
    /* input post user EMAIL dan PASSWORD */
    var post = {
        email : req.body.email, 
        password : md5(req.body.password)
    }

    /* query pengecekan */
    var query = "SELECT * FROM ?? WHERE ?? = ? AND ??=?";
    var table = ["user", "password", post.password, "email", post.email ];

    /* execute query */
    query = mysql.format(query, table);

    /* fetch rows*/
    connection.query(query, function (error, rows){
        if (error) {
            console.log(error);
        }else{
            console.log(rows)
            if(rows.length == 1){
                var token  = jwt.sign({rows}, config.secret, {expiresIn:1440});
                id_user =  rows[0].id;
                
                var data = {
                    id_user : id_user, 
                    access_token : token,
                    ip_address : ip.address()
                };

                var query = "INSERT INTO ?? SET ?";
                var table = ["akses_token"];

                query = mysql.format(query, table);
                connection.query(query, data, function(error, rows){
                    if (error){
                        console.log(error);
                    } else {
                        res.json({
                            success : true, 
                            message : "Token JWT Berhasil Tergenerate",
                            token  : token, 
                            currUser : data.id_user
                        });
                    }
                });
            } else {
                 res.json({"Error":true, "Message" : "Email atau Password tidak terdaftar"});
            }
        }
    });
}
