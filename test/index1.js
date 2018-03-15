//var bitcoin_rpc = require('node-bitcoin-rpc')
var bitcoin_rpc = require('../lib/index.js')

bitcoin_rpc.init('127.0.0.1', 8332, 'u', 'p')
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
    }
})