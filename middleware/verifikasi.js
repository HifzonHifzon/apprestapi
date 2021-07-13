const { response } = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config/secret');

function verifikasi(roles){
    return function(req, res, next) {

        var tokenWithHeader = req.headers.authorization;
        if(tokenWithHeader) {
            var token  = tokenWithHeader.split(' ')[1];

            //verifikasi
            jwt.verify(token, config.secret, function(err, decoded){
                if(err) {
                    return res.status(401).send({auth:false, message : "Token tidak terdaftar"});
                } else {
                    if(role == 2) {
                        req.auth=decoded;
                        next();
                    } else {
                        return rest.status(401).send({auth:false, message:"Gagal mengotorisasi Role anda "});
                    }
                }
            });
        } else {
            return res.status(401).send({auth:false, message : "Token tidak tersedia"});
        }
    }
}


exports.halamanrahasia = function(req, res) {
    response.result = "Halaman Ini Berlaku hanya untuk Role 2 ";
}