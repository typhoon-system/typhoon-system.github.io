import Web3 from 'web3'
import contractABI from '../ABI/contractABI.json'//contractABI为上面源合约地址的abi

//const web3 = new Web3(window.ethereum)
var myContractInstance = new web3.eth.Contract(contractABI, adderss, {
    from: '0x23FCB0E1DDbC821Bd26D5429BA13B7D5c96C0DE0',
});

// var Web3 = require("web3");
// //连接到Ganache
// var web3 = new Web3(new Web3.providers.HttpProvider('https://http-mainnet.hecochain.com'));


import React from 'react'
import Web3 from 'web3'
import contractABI from '../ABI/contractABI.json'

const web3 = new Web3(window.ethereum)
var myContractInstance = new web3.eth.Contract(contractABI, '0x910651F81a605a6Ef35d05527d24A72fecef8bF0', {
    from: '0x23FCB0E1DDbC821Bd26D5429BA13B7D5c96C0DE0',
    gasPrice: '100'
});

export default function Demo() {
    const getAllEvens = () => {
        myContractInstance.getPastEvents('allEvents', {filter: {}, fromBlock: 0, toBlock: 'latest'}).then((res) => {
            console.log(res)
        })
    }
    const getEven = (event) => {
        myContractInstance.getPastEvents(event, {filter: {}, fromBlock: 0, toBlock: 'latest'}).then((res) => {
            console.log(res)
        })
    }
    return (
        <div>
            <button onClick={getAllEvens}>获取所有事件allEvents</button>
            <button onClick={() => getEven('Transfer')}>获取单个事件Transfer</button>
            <button onClick={() => getEven('ChargeFee')}>获取单个事件ChargeFee</button>
        </div>
    )
}
