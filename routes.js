'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

        app.route('/buku')
        .get(jsonku.tampil);

        app.route('/buku/:id/:nama').get(jsonku.tamilbyid);
}

// module.exports = function(app) {
//     var jsonku = require('./controller');

//     app.route('/buku')
//         .get(jsonku.buku);
// }