
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/runoob";

var Web3 = require("web3");
//连接到Ganache
var web3 = new Web3(new Web3.providers.HttpProvider('https://http-mainnet.hecochain.com'));
//var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

// var fs = require("fs");
// var data = fs.readFileSync("./Storage.json", "utf-8");

// //创建合约对象
// var contract = new web3.eth.Contract(JSON.parse(data),'0xc8b522331e8A2369e87Cb4be6bE7C74Be86f1AAB');

const contractABI =  [ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "string", "name": "tokenURI", "type": "string" } ], "name": "mintNFT", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }, { "internalType": "string", "name": "tokenURI", "type": "string" } ], "name": "SafemintNFT", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_from_Address", "type": "address" }, { "internalType": "address", "name": "_to_Address", "type": "address" }, { "internalType": "uint256", "name": "num", "type": "uint256" } ], "name": "transfernftFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" } ]
//const contractAddress = '0x52929Ca2D2877Aef8D9Bab362e18E47a636a6cFA'
const contractAddress='0x8db1e1a6548f1dedbdF4346c5Efbb56e88Ee295e'
//const contractAddress = '0xeB3068BbCb773b7B906CB0b270C007151288Cd17'
const myContract = new web3.eth.Contract(contractABI, contractAddress)

// 调用合约，读取数据
// myContract.methods.balanceOf("0x93ac001015Cb5630AA39f9325617dBFf32660BC6")
// .call().
// then(console.log)
const nft_url =
      "https://gateway.pinata.cloud/ipfs/QmRdWpLo4xiR86KbQjpaCeMQTkErsoATHM1L2D8poZ6Tod";
//myContract.methods.mintNFT("0x93ac001015Cb5630AA39f9325617dBFf32660BC6",nft_url).send().then(console.log)
//myContract.methods.balanceOf("0x46B2FeF82BdB83bcad8bC65c6D52070925D89975").call().then(console.log)
var nftEvent;
var cunzai=0;
myContract.getPastEvents(
    'Transfer', // 过滤事件参数，这里获取全部事件
    {
     // address: '0x8db1e1a6548f1dedbdF4346c5Efbb56e88Ee295e',
      fromBlock: '20734876', // 起始块20734876 20730649
      toBlock: '20739876', // 终止块20739876
    },
    (err, events) => { 
      console.log('events bu cun zai 1') 
        console.log(events) 
        if(events == undefined){
          console.log('events bu cun zai') 
        }else{
            nftEvent=events;

            var length=nftEvent.length;
            console.log('shuju'+length);
            if(length > 0){
                for(var i = 0; i < length; i++) {
                    var blockNumber=nftEvent[i].blockNumber;
                    var logIndex=nftEvent[i].id;
                    var ToAddress=nftEvent[i].returnValues[1];
                    var Token_nftId=nftEvent[i].returnValues[2];

                    console.log('blockNumber:'+blockNumber)
                    console.log('logIndex:'+logIndex)
                    console.log('ToAddress:'+ToAddress)
                    console.log('Token_nftId:'+Token_nftId)

                    wherebyBlockNumber(blockNumber,logIndex,ToAddress,Token_nftId);
                }
            }
        }
    } // 回调函数
  )

  function addNft(blockNumber,logIndex,ToAddress,Token_nftId) {
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("runoob");
        var myobj = { 
          "blockNumber": blockNumber, "logIndex": logIndex,
          "ToAddress":ToAddress,"Token_nftId":Token_nftId,"Flag":"0"
        };
        dbo.collection("mintNFT").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("文档插入成功");
            db.close();
        });
    });
  }

  function wherebyBlockNumber(blockNumber,logIndex,ToAddress,Token_nftId){
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("runoob");
        var whereStr = {"blockNumber":blockNumber};  // 查询条件
        dbo.collection("mintNFT").find(whereStr).toArray(function(err, result) {
            if (err) throw err;
            cunzai=result.length;
            console.log(result.length);
            if(cunzai == 0){
              console.log('添加数据：'+blockNumber);
              addNft(blockNumber,logIndex,ToAddress,Token_nftId);
            }
            
            db.close();
        });
    });
  }

  //var json = JSON.parse(nftEvent);
  var str = JSON.stringify(nftEvent);

 // console.log(json)
  console.log("nihao"+str)
//   let result = []
//     for(let i = 0; i < nftEvent.length; i++) {
//         result.push(nftEvent.find(item => item.returnValues = nameArr[i]))
//     }
//     return result;
  
//调用合约的方法
//我们可以在Remix中设置，在这里读取，或者反过来。交叉验证更加直观。
 //contract.methods.retreive().call().then(console.log);
// contract.methods.store(200).send({from:'0x51BF497D8B47C5754220be9256F0Cb9E2Cd688B8'}).then(console.log);



var fs = require("fs");
var data = fs.readFileSync("a.json", "utf-8");

//创建合约对象
var myContract2 = new web3.eth.Contract(JSON.parse(data),'0xF25039677386092eC01044A1bbC220439B182973');

// //const contractAddress = '0x52929Ca2D2877Aef8D9Bab362e18E47a636a6cFA'
// const contractAddress2='0xF25039677386092eC01044A1bbC220439B182973'
// //const contractAddress = '0xeB3068BbCb773b7B906CB0b270C007151288Cd17'
// const myContract2 = new web3.eth.Contract(contractABI2, contractAddress2)

// 调用合约，读取数据
//myContract.methods.mintNFT("0x93ac001015Cb5630AA39f9325617dBFf32660BC6",nft_url).send().then(console.log)

//myContract2.methods.getbalanceOf("0x46B2FeF82BdB83bcad8bC65c6D52070925D89975","2").call().then(console.log)

myContract2.getPastEvents(
    'InvestEvent', // 过滤事件参数，这里获取全部事件
    {
     // address: '0xf25039677386092ec01044a1bbc220439b182973',
      fromBlock: '20759767', // 起始块20734876 20730649 20759767
      toBlock: '20759767', // 终止块
    },
    (err, events) => { 
      //  console.log(events) 
       // console.log(events.re) 
    } // 回调函数
  )

// 查询最新区块
//web3.eth.getBlockNumber().then(console.log)