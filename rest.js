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


exports.nesteddata = function (value, res){
   const hasil = value.reduce((akumulasikan, item)=>{

      if (akumulasikan[item.nama]) {
         const group  = akumulasikan[item.nama];

         if(Array.isArray(group.nama)) {
            group.matakuliah.push(item.matakuliah);
         }else {
            group.matakuliah = [group.matakuliah, item.matakuliah];
         }
   } else {
         akumulasikan[item.nama] = item;
   }

   return akumulasikan;
},{});

var data = {
   'status' : 200,
   'value' : hasil
  };

//   return 

res.json(data);
res.end();
  
}