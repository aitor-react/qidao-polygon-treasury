import dotenv from "dotenv";
dotenv.config();
import axios from "axios";

  const apiKey = process.env.apiKey;
  const apiUrl = "https://polygon-mainnet.g.alchemyapi.io/v2/"

  var data = JSON.stringify({
      id: 0,
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

  var config = {
    method: 'post',
    url: `${apiUrl}${apiKey}`,
    headers: {
      'Content-Type': 'application/json'
    },
    data : data
  };

  axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
