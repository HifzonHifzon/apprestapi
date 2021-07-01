'use strict';

exports.result = function(val, response) {

   // alert(val)
   console.log(val);
   var data = {
    'status' : 200,
    'value' : val
   };

   console.log("ini data" + data)
   response.json(data);
   response.end();
}