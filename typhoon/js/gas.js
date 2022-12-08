var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/runoob";

var Web3 = require("web3");
//连接到Ganache
var web3 = new Web3(new Web3.providers.HttpProvider('https://http-mainnet.hecochain.com'));
//var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
var fs = require("fs");
var data = fs.readFileSync("a.json", "utf-8");
//创建合约对象0xCf2d7952aF3D006e197F463E198aAFe22e53d0e3
//0x9b0a17c650c7A17bd10B69C5105935E17c9A2484
var myContract = new web3.eth.Contract(JSON.parse(data),'0x818d70769f912e7d075d4962Fa7de3c3B2055eD1');
//关系合约0xc6b812b423bdaE60Cce7fC7e503009b1cFcFBAe6
var Relationdata = fs.readFileSync("Relations.json", "utf-8");
//创建合约对象
var RelationContract = new web3.eth.Contract(JSON.parse(Relationdata),'0xc6b812b423bdaE60Cce7fC7e503009b1cFcFBAe6');

// web3.eth.estimateGas({
//     to: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
//     data: "0xc6888fa10000000000000000000000000000000000000000000000000000000000000003"
// })
// .then(console.log);

// //添加区块消耗gas 69800
//data:0xa1f802a9000000000000000000000000000000000000000000000000000000000023c2790000000000000000000000000000000000000000000000000000000000000002
web3.eth.estimateGas({
    to: "0x818d70769f912e7d075d4962Fa7de3c3B2055eD1",
    data: myContract.methods.addnblockNumbers(53245,2).encodeABI(),
})
.then(console.log);

//投资
// web3.eth.estimateGas({
//     to: "0x818d70769f912e7d075d4962Fa7de3c3B2055eD1",
//     data: "0x0c63ca280000000000000000000000000000000000000000000000000000000000000bb8000000000000000000000000000000000000000000000000000000000000005a000000000000000000000000818d70769f912e7d075d4962fa7de3c3b2055ed100000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000082c2b46236200000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000023c2790000000000000000000000000000000000000000000000000000000000000000"

// })
// .then(console.log);

// web3.eth.estimateGas({
//     to: "0x818d70769f912e7d075d4962Fa7de3c3B2055eD1",
//     data: myContract.methods.investToken(3000,90,'0x818d70769f912e7d075d4962Fa7de3c3B2055eD1',1,8985797600098,1,2343545).encodeABI(),

// })
// .then(console.log);
//1000000000000000000
// var string=myContract.methods.investToken(3000,90,'0x818d70769f912e7d075d4962Fa7de3c3B2055eD1',1,8985797600098,1,2343545).encodeABI();

// var stringT=myContract.methods.addnblockNumbers(234354512,2).encodeABI();

// console.log(string);
// console.log('添加区块'+stringT);
//// using the callbackmyMethod(123)
// myContract.methods.investToken(1000,90,'0x818d70769f912e7d075d4962Fa7de3c3B2055eD1',1,8985797600,1,2343545).estimateGas({gas: 5000000}, function(error, result){
//     if(gasAmount == 5000000){
//         console.log('Method ran out of gas');
//     }else{
//         console.log('Method ran out of haha');
//     }
//     console.log('Method tt ran out of gas'+result);//gasAmount
//     console.log('Method yy ran out of gas'+error);

// });

// // using the promise
// myContract.methods.investToken(1000,90,'0x818d70769f912e7d075d4962Fa7de3c3B2055eD1',1,8985797600,1,2343545).estimateGas({to: '0x818d70769f912e7d075d4962Fa7de3c3B2055eD1'})
// .then(function(gasAmount){
//     console.log('Method ran out of gas'+gasAmount);
// })
// .catch(function(error){
//     console.log('Method ran out of gas'+error);
// });