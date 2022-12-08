
var webCallback


function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
      //fallbackCopyTextToClipboard(text);
      console.log('Async: Copying to clipboard was fail!');
      return;
  }
  navigator.clipboard.writeText(text).then(function() {
      console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
      console.error('Async: Could not copy text: ', err);
  });
}


/**
 * dart发送的命令
*/
function dartCommand(command, callback) {
    console.log(command+"test");
    webCallback = command;
}

async function send(address) {
  alert("hello flutter 98"+address);
}
/**
 * js 发送命令
*/
async function sendMessage() {
    console.log("js的命令9test");

   // alert("hello flutter 98");

   var txt;
    if (confirm("没有获取到您钱包，请尝试刷新页面！\n 如果不是在中心化钱包浏览本平台，请点击下载安装！")) {
        txt = "您按了确定";

        //window.location.href="";
        window.open('https://www.tokenpocket.pro/zh/download/app', '_blank')
      } else {
        txt = "您按了取消";
      }

      init();
    // tronWeb = window.tronWeb;
    // address = await tronWeb.defaultAddress.base58;
    // contract = await tronWeb.contract(contractABI, contractAddress).at(contractAddress);
    //  console.log(contract,'contract---');

    // var res=await tronWeb.Contract(contractABI, contractAddress).at(contractAddress);

    // console.log(res,'contract---');

    // web3.eth.getAccounts(function (error, result) {
    //     console.log("账户列表地址：");
    //     console.log(result);
    // });

   // console.log(webCallback);
   // webCallback("js的命令78");
}

const contractAddress = 'TZByJBZBZYQnewqYGmHAvM6WikSMUZLBXK'//代币合约地址
const billAddress = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t' //USD合约地址
const contractABI = [{ "entrys": [{ "outputs": [{ "type": "bool" }], "inputs": [{ "name": "_token", "type": "address" }, { "name": "_add", "type": "address" }, { "name": "_amount", "type": "uint256" }], "name": "withdrawToken", "stateMutability": "Nonpayable", "type": "Function" }, { "outputs": [{ "type": "string" }], "constant": true, "name": "name", "stateMutability": "View", "type": "Function" }, { "outputs": [{ "type": "bool" }], "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "stateMutability": "Nonpayable", "type": "Function" }, { "outputs": [{ "type": "bool" }], "name": "withdrawCapital", "stateMutability": "Nonpayable", "type": "Function" }, { "outputs": [{ "type": "uint256" }], "constant": true, "name": "totalSupply", "stateMutability": "View", "type": "Function" }, { "outputs": [{ "type": "bool" }], "inputs": [{ "name": "_add", "type": "address" }], "name": "setFrozenAccountFalse", "stateMutability": "Nonpayable", "type": "Function" }, { "outputs": [{ "type": "bool" }], "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "stateMutability": "Nonpayable", "type": "Function" }, { "outputs": [{ "type": "uint256" }], "constant": true, "inputs": [{ "type": "address" }], "name": "balances", "stateMutability": "View", "type": "Function" }, { "outputs": [{ "type": "uint8" }], "constant": true, "name": "decimals", "stateMutability": "View", "type": "Function" }, { "outputs": [{ "type": "bool" }], "inputs": [{ "name": "_invest_token", "type": "address" }, { "name": "_bill_token", "type": "address" }, { "name": "_self_token", "type": "address" }], "name": "setConfig", "stateMutability": "Nonpayable", "type": "Function" }, { "outputs": [{ "type": "address" }], "constant": true, "inputs": [{ "type": "address" }], "name": "bind_ether", "stateMutability": "View", "type": "Function" }, { "outputs": [{ "type": "uint256" }], "constant": true, "name": "_totalSupply", "stateMutability": "View", "type": "Function" }, { "outputs": [{ "type": "uint256" }], "constant": true, "name": "self_price", "stateMutability": "View", "type": "Function" }, { "outputs": [{ "name": "balance", "type": "uint256" }], "constant": true, "inputs": [{ "name": "_address", "type": "address" }], "name": "capitalOf", "stateMutability": "View", "type": "Function" }, { "outputs": [{ "type": "address" }], "constant": true, "name": "self_token", "stateMutability": "View", "type": "Function" }, { "outputs": [{ "type": "bool" }], "inputs": [{ "name": "_black_address", "type": "address" }, { "name": "_burn_address", "type": "address" }, { "name": "_fee_address", "type": "address" }], "name": "setContractAccount", "stateMutability": "Nonpayable", "type": "Function" }, { "outputs": [{ "type": "bool" }], "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_subtractedValue", "type": "uint256" }], "name": "decreaseApproval", "stateMutability": "Nonpayable", "type": "Function" }, { "outputs": [{ "name": "balance", "type": "uint256" }], "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "stateMutability": "View", "type": "Function" }, { "outputs": [{ "type": "uint256" }], "constant": true, "name": "withdraw_fee_ratio", "stateMutability": "View", "type": "Function" }, { "outputs": [{ "type": "address" }], "constant": true, "name": "black_address", "stateMutability": "View", "type": "Function" }, { "outputs": [{ "type": "bool" }], "inputs": [{ "name": "_force", "type": "uint256" }, { "name": "_ratio", "type": "uint256" }, { "name": "_token", "type": "address" }], "name": "investToken", "stateMutability": "Nonpayable", "type": "Function" }, { "outputs": [{ "type": "address" }], "constant": true, "name": "bill_token", "stateMutability": "View", "type": "Function" }, { "outputs": [{ "type": "bool" }], "name": "setTotal", "stateMutability": "Nonpayable", "type": "Function" }, { "outputs": [{ "type": "address" }], "constant": true, "name": "owner", "stateMutability": "View", "type": "Function" }, { "outputs": [{ "type": "bool" }], "inputs": [{ "name": "_price", "type": "uint256" }], "name": "setPrice", "stateMutability": "Nonpayable", "type": "Function" }, { "outputs": [{ "type": "address" }], "constant": true, "name": "burn_address", "stateMutability": "View", "type": "Function" }, { "outputs": [{ "type": "uint256" }], "constant": true, "name": "burn_ratio", "stateMutability": "View", "type": "Function" }, { "outputs": [{ "type": "string" }], "constant": true, "name": "symbol", "stateMutability": "View", "type": "Function" }, { "outputs": [{ "type": "bool" }], "inputs": [{ "name": "_day_output", "type": "uint256" }, { "name": "_max_num", "type": "uint256" }], "name": "setOutputAndTotal", "stateMutability": "Nonpayable", "type": "Function" }, { "outputs": [{ "type": "bool" }], "inputs": [{ "name": "_add", "type": "address" }], "name": "changeAdministrator", "stateMutability": "Nonpayable", "type": "Function" }, { "outputs": [{ "type": "bool" }], "inputs": [{ "name": "_add", "type": "address" }], "name": "setFrozenAccount", "stateMutability": "Nonpayable", "type": "Function" }, { "outputs": [{ "type": "uint256" }], "constant": true, "name": "day_output", "stateMutability": "View", "type": "Function" }, { "outputs": [{ "type": "bool" }], "inputs": [{ "name": "_add", "type": "address" }], "name": "changeOwner", "stateMutability": "Nonpayable", "type": "Function" }, { "outputs": [{ "type": "bool" }], "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "stateMutability": "Nonpayable", "type": "Function" }, { "outputs": [{ "type": "uint256" }], "constant": true, "name": "max_num", "stateMutability": "View", "type": "Function" }, { "outputs": [{ "type": "bool" }], "constant": true, "inputs": [{ "type": "address" }], "name": "frozenAccount", "stateMutability": "View", "type": "Function" }, { "outputs": [{ "type": "address" }], "constant": true, "name": "fee_address", "stateMutability": "View", "type": "Function" }, { "outputs": [{ "type": "bool" }], "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_addedValue", "type": "uint256" }], "name": "increaseApproval", "stateMutability": "Nonpayable", "type": "Function" }, { "outputs": [{ "type": "bool" }], "inputs": [{ "name": "_address", "type": "address" }, { "name": "_capital", "type": "uint256" }], "name": "setCapital", "stateMutability": "Nonpayable", "type": "Function" }, { "outputs": [{ "type": "uint256" }], "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "stateMutability": "View", "type": "Function" }, { "outputs": [{ "type": "bool" }], "inputs": [{ "name": "_ether_address", "type": "address" }], "name": "bindEtherAddress", "stateMutability": "Nonpayable", "type": "Function" }, { "outputs": [{ "type": "address" }], "constant": true, "name": "invest_token", "stateMutability": "View", "type": "Function" }, { "outputs": [{ "type": "bool" }], "inputs": [{ "name": "_add", "type": "address" }, { "name": "_amount", "type": "uint256" }], "name": "withdraw", "stateMutability": "Nonpayable", "type": "Function" }, { "outputs": [{ "type": "address" }], "constant": true, "name": "administrator", "stateMutability": "View", "type": "Function" }, { "outputs": [{ "type": "bool" }], "inputs": [{ "name": "_burn_ratio", "type": "uint256" }, { "name": "_withdraw_fee_ratio", "type": "uint256" }], "name": "setRatio", "stateMutability": "Nonpayable", "type": "Function" }, { "outputs": [{ "type": "uint256" }], "constant": true, "inputs": [{ "type": "address" }], "name": "account_assets", "stateMutability": "View", "type": "Function" }, { "inputs": [{ "name": "init_address", "type": "address" }], "stateMutability": "Nonpayable", "type": "Constructor" }, { "inputs": [{ "indexed": true, "name": "from", "type": "address" }], "name": "SetFrozenAccount", "type": "Event" }, { "inputs": [{ "name": "token", "type": "address" }, { "name": "user", "type": "address" }, { "name": "amount", "type": "uint256" }, { "name": "to", "type": "address" }], "name": "Withdraw", "type": "Event" }, { "inputs": [{ "name": "force", "type": "uint256" }, { "name": "ratio", "type": "uint256" }, { "name": "token", "type": "address" }, { "name": "price", "type": "uint256" }], "name": "Invest", "type": "Event" }, { "inputs": [{ "name": "addr", "type": "address" }], "name": "BindEtherAddress", "type": "Event" }, { "inputs": [{ "name": "_capital", "type": "uint256" }, { "name": "fee", "type": "uint256" }, { "name": "ratio", "type": "uint256" }], "name": "WithdrawCapital", "type": "Event" }, { "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": true, "name": "dst", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "Transfer", "type": "Event" }, { "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": true, "name": "guy", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "Approval", "type": "Event" }] }]
var contract = null;
var investContract = null;
var tronWeb = null;
var invest_token = null;
var address = null;

function getContractAddress() {
    return contractAddress
}

async function init() {
  console.log("hello");
    tronWeb = window.ethereum;
    console.log("hello2"+tronWeb);

    //var client = Web3Client.custom(eth.asRpcService());
    var credentials = await tronWeb.requestAccount();
    print(credentials);
  
    print('Using ${credentials.address}');
  
     var address = credentials.address;
  
    // var amount=await client.getBalance(address);
   //  print('金额：$amount');

     
    address = await tronWeb.defaultAddress.base58;
    console.log("hello3"+address);
    contract = await tronWeb.contract(contractABI, contractAddress).at(contractAddress);
    console.log("hello4");
    console.log(contract,'contract---');
    invest_token = await getInvest_token();
    console.log("hello5");
    investContract = await tronWeb.contract().at(invest_token);
    console.log("hello6");
    //console.error(investContract);
   // TransferWatch();
    // methodWatch();
    // withdrawToken('TXAjKdS17DsbmFydVnwY4iuKgANbGJhieP',1);
    return contract;
}