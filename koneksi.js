var mysql = require('mysql');

/*bikin koneksi*/
const conn = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "DB_RESTAPI"
});

conn.connect((err)=>{
    if (err) throw err;
    console.log('Mysql Terkoneksi');
})

module.exports = conn;