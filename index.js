import fetch from "node-fetch";
import 'dotenv/config'

const apiKey = process.env.apiKey;

const options = {
  method: 'POST',
  headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
  body: JSON.stringify({
    id: 1,
    jsonrpc: '2.0',
    method: 'alchemy_getAssetTransfers',
    params: [
      {
        fromBlock: '0x0',
        toBlock: 'latest',
        category: ['erc20'],
        withMetadata: true,
        excludeZeroValue: false,
        maxCount: '0x3e8',
        fromAddress: '0xAd95A5fE898679B927C266eB2eDfAbC7fe268C27'
      }
    ]
  })
};

fetch(`https://polygon-mainnet.g.alchemyapi.io/v2/${apiKey}`, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));