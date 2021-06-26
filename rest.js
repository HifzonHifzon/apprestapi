'use strict';

exports.ok = function(val, response) {
   var data = {
    'status' : 200,
    'value' : val
   };

   response.json(data);
   response.end();
}