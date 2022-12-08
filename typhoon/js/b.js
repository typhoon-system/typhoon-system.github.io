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


// using the callbackmyMethod(123)
myContract.methods.investToken(1000,90,'0x56A1cA53BE45D456E7F0eF08Dac5852447C57864',1,8985797600,1,2343545).estimateGas({gas: 5000000}, function(error, gasAmount){
    if(gasAmount == 5000000){
        console.log('Method ran out of gas');
    }else{
        console.log('Method ran out of haha');
    }
    console.log('Method tt ran out of gas'+gasAmount);
    console.log('Method yy ran out of gas'+error);

});

// using the promise
myContract.methods.investToken(1000,90,'0x818d70769f912e7d075d4962Fa7de3c3B2055eD1',1,8985797600,1,2343545).estimateGas({to: '0x818d70769f912e7d075d4962Fa7de3c3B2055eD1'})
.then(function(gasAmount){
    console.log('Method ran out of gas'+gasAmount);
})
.catch(function(error){
    console.log('Method ran out of gas'+error);
});
// myContract.methods.investToken(1000,90,'0x56A1cA53BE45D456E7F0eF08Dac5852447C57864',1,8985797600,1,2343545).estimateGas({from:'0x93ac001015Cb5630AA39f9325617dBFf32660BC6'},function(result){
//     console.log('nihao');
//     console.log(result);
//     })
//获取所有注册的会员，添加会员列表
function getUser_Number(){
    myContract.methods.getUserInfos().call().then(
    function(result){
       // console.log("地址:"+result);
        for(var i = 0; i < result.length; i++){
           // console.log("AddressNumber:"+result[i]);
            var zcAddress=result[i];
            //推荐人
           getSponser_Number(zcAddress);
          
        }
    })
}

function getSponser_Number(zcAddress){
    RelationContract.methods.GetIntroducer(zcAddress).call().then(
        function(result){
           // console.log("Addressponser :"+result);
            var SponserAddress=result;
           // return result;
            //添加会员表
            wherebyAddressNumber(zcAddress,SponserAddress)
        })
}

function addUserNumber(ToAddress,SponserAddress) {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("sysoob");
      var time2 = new Date().Format("yyyy-MM-dd hh:mm:ss"); 
      var myobj = { 
        'Address': ToAddress,
        'Sponser_Address': SponserAddress,
        'U_Level': 0,
        'U_Level2': 0,
        'AddTime': time2
      };
      dbo.collection("InvertUser").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("文档插入成功 InvertUser");
          db.close();
      });
  });
}

function wherebyAddressNumber(ToAddress,SponserAddress){
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("sysoob");
      var whereStr = {"Address":ToAddress};  // 查询条件
      dbo.collection("InvertUser").find(whereStr).toArray(function(err, result) {
          if (err) throw err;
          var cunzai=result.length;
        //  console.log('数据IInvertPlan'+result.length);
          if(cunzai == 0){
          //  console.log('添加数据InvertPlan：'+blockNumber);
          addUserNumber(ToAddress,SponserAddress);
          }
          
          db.close();
      });
  });
}

//查询区块添加信息事件
function getB_Number(){
    myContract.methods.getblockNumbers(1).call().then(
    function(result){
        // a=result;
         console.log("blockNumber:"+result.length);
        // console.log("blockNumber:"+result[0]);
        //console.log("区块:"+result);

        for(var i = 0; i < result.length; i++){
            console.log("blockNumber:"+result[i]);
            var startBlock=result[i];
            //var endBlock=startBlock;
            var endBlock=Number(startBlock)+1000;

            // console.log("startBlock:"+startBlock);
            // console.log("endBlock:"+endBlock);

            getNftEvent(startBlock,endBlock);//touzi
            getBounsEvent(startBlock,endBlock);//jaingjin
        }
    })
}

function getB_NumberZhuangchu(){
    myContract.methods.getblockNumbers(5).call().then(
    function(result){
        // a=result;
        // console.log("blockNumber:"+result.length);
        // console.log("blockNumber:"+result[0]);

        for(var i = 0; i < result.length; i++){
            console.log("blockNumber:"+result[i]);
            var startBlock=result[i];
            //var endBlock=startBlock;
            var endBlock=Number(startBlock)+1000;

            console.log("startBlock:"+startBlock);
            console.log("endBlock:"+endBlock);

            getNftZCEvent(startBlock,endBlock);
        }
    })
}

function getB_NumberWithDraw(){
    myContract.methods.getblockNumbers(4).call().then(
    function(result){
        // a=result;
        // console.log("blockNumber:"+result.length);
        // console.log("blockNumber:"+result[0]);

        for(var i = 0; i < result.length; i++){
            console.log("blockNumber:"+result[i]);
            var startBlock=result[i];
            //var endBlock=startBlock;
            var endBlock=Number(startBlock)+1000;

            console.log("startBlock:"+startBlock);
            console.log("endBlock:"+endBlock);

            getWithDrawEvent(startBlock,endBlock);
        }
    })
}

function GetEventList(){
    //zhuce
    getUser_Number();
    //touzi
    getB_Number();
    //zhuchu
    getB_NumberZhuangchu();
    //tixian
    getB_NumberWithDraw();

}

function getWithDrawEvent(startBlock,endBlock){
    myContract.getPastEvents(
        'WithdrawEvent', // 过滤事件参数，这里获取全部事件
        {
        fromBlock: startBlock, // 起始块20734876 20730649
        toBlock: endBlock, // 终止块20739876
        },
        (err, events) => { 
      //  console.log('WithdrawEvent bu cun zai 1') 
           // console.log(events) 
            if(events == undefined){
            console.log('WithdrawEvent bu cun zai') 
            }else{
                var nftEvent=events;
                var length=nftEvent.length;
                console.log('WithdrawEvent shuju'+length);
                if(length > 0){
                    for(var i = 0; i < length; i++) {
                        var blockNumber=nftEvent[i].blockNumber;
                        var logIndex=nftEvent[i].id;
                        var ToAddress=nftEvent[i].returnValues[1];
                        var Amount=nftEvent[i].returnValues[2];
                        var type=nftEvent[i].returnValues[3];

                        console.log('blockNumber:'+blockNumber)
                        console.log('logIndex:'+logIndex)
                        console.log('ToAddress:'+ToAddress)
                        console.log('Amount:'+Amount)
                        console.log('type:'+type)

                        whereWithdrawBlockNumber(blockNumber,logIndex,ToAddress,Amount,type);
                    }
                }
            }
        } // 回调函数
    )

}
// 'Address': "${address}",
// 'Amount': "${amount}",
// 'Type': "${type}",
// 'Flag': 0,
// 'AddTime': DateTime.now().toString()
//  dynamic address, dynamic amount, dynamic type
//InvestWithDraw(params[1], params[2], params[3]);
function addWithdraw(blockNumber,logIndex,ToAddress,Amount,type) {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("sysoob");
      var time2 = new Date().Format("yyyy-MM-dd hh:mm:ss"); 
      var myobj = { 
        "blockNumber": blockNumber, "logIndex": logIndex,
        "Address":ToAddress,
        "Amount":Amount,
        "AddTime":time2,
        "Type":type,
        "Flag":"0",
      };
      dbo.collection("InvestWithDraw").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("文档插入成功");
          db.close();
      });
  });
}

function whereWithdrawBlockNumber(blockNumber,logIndex,ToAddress,Amount,type){
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("sysoob");
      var whereStr = {"blockNumber":blockNumber};  // 查询条件
      dbo.collection("InvestWithDraw").find(whereStr).toArray(function(err, result) {
          if (err) throw err;
          var cunzai=result.length;
          console.log('数据Withdraw'+result.length);
          if(cunzai == 0){
            console.log('添加数据Withdraw：'+blockNumber);
            addWithdraw(blockNumber,logIndex,ToAddress,Amount,type);
          }
          
          db.close();
      });
  });
}

function getBounsEvent(startBlock,endBlock){
    myContract.getPastEvents(
        'SettleBounsEvent', // 过滤事件参数，这里获取全部事件
        {
        fromBlock: startBlock, // 起始块20734876 20730649
        toBlock: endBlock, // 终止块20739876
        },
        (err, events) => { 
       // console.log('SettleBounsEvent bu cun zai 1') 
           // console.log(events) 
            if(events == undefined){
            console.log('SettleBounsEvent bu cun zai') 
            }else{
                var nftEvent=events;
                var length=nftEvent.length;
                console.log('SettleBounsEvent shuju'+length);
               // console.log(events) 
                if(length > 0){
                    for(var i = 0; i < length; i++) {
                        var blockNumber=nftEvent[i].blockNumber;
                        var logIndex=nftEvent[i].id;
                        var ToAddress=nftEvent[i].returnValues[0];
                        var Amount=nftEvent[i].returnValues[2];
                        var fromAddress=nftEvent[i].returnValues[1];
                        var type=nftEvent[i].returnValues[3];
                        console.log('SettleBounsEvent ******=======');

                        console.log('blockNumber:'+blockNumber)
                        console.log('logIndex:'+logIndex)
                        console.log('ToAddress:'+ToAddress)
                        console.log('Amount:'+Amount)
                        console.log('fromAddress:'+fromAddress)
                        console.log('type:'+type)

                        whereBounsBlockNumber(blockNumber,logIndex,ToAddress,fromAddress,Amount,type);
                    }
                }
            }
        } // 回调函数
    )

}
//dynamic address, dynamic f_address, dynamic type, dynamic amount
//InvestBouns(params[0], params[1], params[3], params[2]);
// 'Address': "${address}",
//       'From_Address': "${f_address}",
//       'Amount': "${amount}",
//       'Type': "${type}",
//       'Flag': 0,
//       'AddTime': DateTime.now().toString()
function addBouns(blockNumber,logIndex,ToAddress,fromAddress,Amount,type) {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("sysoob");
      var time2 = new Date().Format("yyyy-MM-dd hh:mm:ss"); 
      var myobj = { 
        "blockNumber": blockNumber, "logIndex": logIndex,
        "Address":ToAddress,
        "Amount":Amount,
        "AddTime":time2,
        "From_Address":fromAddress,
        "Type":type,
        "Flag":"0",
      };
      dbo.collection("InvertBouns").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("文档插入成功");
          db.close();
      });
  });
}

function whereBounsBlockNumber(blockNumber,logIndex,ToAddress,fromAddress,Amount,type){
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("sysoob");
      var whereStr = {"logIndex":logIndex};  // 查询条件
      dbo.collection("InvertBouns").find(whereStr).toArray(function(err, result) {
          if (err) throw err;
          var cunzai=result.length;
          console.log('数据InvertBouns'+result.length);
          if(cunzai == 0){
            console.log('添加数据IInvertBouns：'+logIndex);
            addBouns(blockNumber,logIndex,ToAddress,fromAddress,Amount,type);
          }
          
          db.close();
      });
  });
}

function getNftEvent(startBlock,endBlock){
    myContract.getPastEvents(
        'InvestEvent', // 过滤事件参数，这里获取全部事件
        {
        fromBlock: startBlock, // 起始块20734876 20730649
        toBlock: endBlock, // 终止块20739876
        },
        (err, events) => { 
       // console.log('events bu cun zai 1') 
           // console.log(events) 
            if(events == undefined){
            console.log('InvestEvent bu cun zai') 
            }else{
                var nftEvent=events;

                var length=nftEvent.length;
                console.log('InvestEvent shuju'+length);
                if(length > 0){
                    for(var i = 0; i < length; i++) {
                        var blockNumber=nftEvent[i].blockNumber;
                        var logIndex=nftEvent[i].id;
                        var ToAddress=nftEvent[i].returnValues[4];
                        var Token_nftId=nftEvent[i].returnValues[5];
                        var nftType=nftEvent[i].returnValues[6];
                        var Amount=nftEvent[i].returnValues[0];

                        if(nftType == undefined){
                            nftType=1;
                        }

                        // console.log('blockNumber:'+blockNumber)
                        // console.log('logIndex:'+logIndex)
                        // console.log('ToAddress:'+ToAddress)
                        // console.log('Token_nftId:'+Token_nftId)
                        // console.log('Amount:'+Amount)
                        // console.log('nftType:'+nftType)

                        wherebyBlockNumber(blockNumber,logIndex,ToAddress,Token_nftId,Amount,nftType);
                    }
                }
            }
        } // 回调函数
    )

}
  function addNft(blockNumber,logIndex,ToAddress,Token_nftId,Amount,nftType) {
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("sysoob");
        var time2 = new Date().Format("yyyy-MM-dd hh:mm:ss"); 
        var myobj = { 
          "blockNumber": blockNumber, "logIndex": logIndex,
          "Address":ToAddress,
          "OwnerAddress":ToAddress,
          "Amount":Amount,
          "AddTime":time2,
          "Token_nftId":Token_nftId,
          "nftType":nftType,
          "Flag":"0",
          "Stateo":"0"
        };
        dbo.collection("InvertPlan").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("文档插入成功 InvertPlan");
            db.close();
        });
    });
  }

  function wherebyBlockNumber(blockNumber,logIndex,ToAddress,Token_nftId,Amount,nftType){
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("sysoob");
        var whereStr = {"blockNumber":blockNumber};  // 查询条件
        dbo.collection("InvertPlan").find(whereStr).toArray(function(err, result) {
            if (err) throw err;
            var cunzai=result.length;
          //  console.log('数据IInvertPlan'+result.length);
            if(cunzai == 0){
            //  console.log('添加数据InvertPlan：'+blockNumber);
              addNft(blockNumber,logIndex,ToAddress,Token_nftId,Amount,nftType);
            }
            
            db.close();
        });
    });
  }

  //nftzhuanyi
function getNftZCEvent(startBlock,endBlock){
    myContract.getPastEvents(
        'nftTransferEvent', // 过滤事件参数，这里获取全部事件
        {
        fromBlock: startBlock, // 起始块20734876 20730649
        toBlock: endBlock, // 终止块20739876
        },
        (err, events) => { 
       // console.log('events bu nftTransferEvent zai 1') 
           // console.log(events) 
            if(events == undefined){
            console.log('nftTransferEvent bu cun zai') 
            }else{
                var nftEvent=events;

                var length=nftEvent.length;
                console.log('nftTransferEvent shuju'+length);
                if(length > 0){
                    for(var i = 0; i < length; i++) {
                        var blockNumber=nftEvent[i].blockNumber;
                        var logIndex=nftEvent[i].id;
                        var ToAddress=nftEvent[i].returnValues[1];//shou
                        var fromAddress=nftEvent[i].returnValues[0];//chu
                        var Token_nftId=nftEvent[i].returnValues[2];
                        var nftType=nftEvent[i].returnValues[3];

                        if(nftType == undefined){
                            nftType=1;
                        }

                        // console.log('blockNumber:'+blockNumber)
                        // console.log('logIndex:'+logIndex)
                        // console.log('ToAddress:'+ToAddress)
                        // console.log('Token_nftId:'+Token_nftId)
                        // console.log('fromAddress:'+fromAddress)

                        wherebyTranferN(blockNumber,logIndex,ToAddress,Token_nftId,fromAddress,nftType);
                    }
                }
            }
        } // 回调函数
    )

}
  function addNftTranfer(blockNumber,logIndex,ToAddress,Token_nftId,fromAddress,nftType) {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("sysoob");
      var time2 = new Date().Format("yyyy-MM-dd hh:mm:ss"); 
      var myobj = { 
        "blockNumber": blockNumber, "logIndex": logIndex,
        "Address":ToAddress,
        "nftType":nftType,
        "fromAddress":fromAddress,
        "AddTime":time2,
        "Token_nftId":Token_nftId,
        "Flag":"0",
        "Stateo":"0"
      };
      dbo.collection("InvertNftTranfer").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("文档插入成功InvertNftTranfer");
          db.close();
      });
  });
}

function wherebyTranferN(blockNumber,logIndex,ToAddress,Token_nftId,fromAddress,nftType){
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("sysoob");
      var whereStr = {"blockNumber":blockNumber};  // 查询条件
      dbo.collection("InvertNftTranfer").find(whereStr).toArray(function(err, result) {
          if (err) throw err;
         var cunzai=result.length;
        //  console.log('数据InvertNftTranfer'+result.length);
          if(cunzai == 0){
         //   console.log('添加数据InvertNftTranfer：'+blockNumber);
            addNftTranfer(blockNumber,logIndex,ToAddress,Token_nftId,fromAddress,nftType);
            var Amount=1000000000000000000;
            addNft(blockNumber,logIndex,ToAddress,Token_nftId,Amount,nftType);
          }
          
          db.close();
      });
  });
}


  Date.prototype.Format = function (fmt) { // author: meizz
    var o = {
        "M+": this.getMonth() + 1, // 月份
        "d+": this.getDate(), // 日
        "h+": this.getHours(), // 小时
        "m+": this.getMinutes(), // 分
        "s+": this.getSeconds(), // 秒
        "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
        "S": this.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
  }

//   function intervalFunc() {
//     console.log('Cant stop me now!');
//   }
//setInterval(intervalFunc, 1500);
  
//setInterval(GetEventList, 15000);
setTimeout(GetEventList, 1500);