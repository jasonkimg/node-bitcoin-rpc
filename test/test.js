//var bitcoin_rpc = require('node-bitcoin-rpc')
var bitcoin_rpc = require('../lib/index.js')
var m=1;

bitcoin_rpc.init('localhost', 8332, 'u', 'p')


const fs=require('fs');


for(var i = 0; i < 10; i++){
    setTimeout(function(){


        bitcoin_rpc.call('getnewaddress', [], function (err, res) {
            if (err) {
                let errMsg = "Error when calling bitcoin RPC: " + err;
                console.log(errMsg);
                throw new Error(errMsg);
            } else if (res.error) {
                let errMsg = "Error received by bitcoin RPC: " + res.error.message + " (" + res.error.code + ")";
                console.log(errMsg);
                throw new Error(errMsg);
            } else {
                console.log('Yay! I need to do whatever now with ' + res.result)

                fs.appendFile('a.txt',res.result+"\n",function(err){
                    console.log(err);

                });

            }


        })



    },120000);
}