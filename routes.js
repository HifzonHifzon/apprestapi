'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

        app.route('/buku')
        .get(jsonku.tampil);

        app.route('/buku/:id/:nama').get(jsonku.tamilbyid);
        // app.route('/buku/:id/:nama').get(jsonku.tamilbyid);
        app.route('/tambah').post(jsonku.tambahmahasiswa);
        // app.route('/cocok').post(jsonku.insert);
        app.route('/update').put(jsonku.updateMahasiswa);
}