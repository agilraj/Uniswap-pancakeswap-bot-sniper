const ethers = require('ethers');

//*************
//CONFIG - ENTER YOUR DETAILS - 
const infuraMainNetWSS = "" // Get a free node at https://www.alchemyapi.io/
const TokenID = "" // The token ID you want to snipe. Remove first 2 letters (0x). All in non-capital letters.
const mnemonic = '' //wallet mnemonic to sign transactions. In this format -    cloud knee beach ball flag strike
const WETH2 = ''//token to buy. Same as TokenID but don't remove 0x for sniping. For test - feel free to eter what ever token to buy.
const WETH1 = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'//WETH - token to spend
const amountIn = ethers.utils.parseUnits('0.001', 'ether')//enter how much in WETH. Function name 'ether' will stay the same for both uniswap and pancakeswap. Dont change it.
const amountOutMin = 0 // Min out. 0 will buy as many as possible with the amount above. Increase for safety. If the tokens you can buy will be less then specified, it will cancel automatically.


const addresses = {
  factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f', //uniswap factory 
  router: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', //uniswap router
  recipient: '0xF6301D2df64D6cB186acB49c6E6dD8d7b92AE6da' //this address receives the tokens
}





const MethodID = "0xf305d719" // function ID it searches for (one is for WETH/WBNB pools and other is for pools that use different First token)
const MethodID2 = "0xe8e33700" // function ID it searches for (one is for WETH/WBNB pools and other is for pools that use different First token) It listens to both. But the buy currency has to be the correct one.

const provider = new ethers.providers.WebSocketProvider(infuraMainNetWSS);
const wallet = ethers.Wallet.fromMnemonic(mnemonic);
const account = wallet.connect(provider);


console.log(`Searching for the liquidity add transaction`)



const router = new ethers.Contract(
  addresses.router,
  [
    'function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)'

  ],
  account
);



provider.on("pending", async (tx) => {
  provider.getTransaction(tx).then(function (transaction) {
    if (transaction != null && transaction['data'].includes(MethodID2) && transaction['data'].includes(TokenID) || transaction != null && transaction['data'].includes(MethodID) && transaction['data'].includes(TokenID))
  provider.removeAllListeners(),
  console.log(transaction),
 



  router.swapExactTokensForTokens(
    amountIn,
    amountOutMin,
    [WETH1, WETH2],
    addresses.recipient,
    Date.now() + 1000 * 60 * 10, //1 minutes
    { gasLimit: transaction.gasLimit, gasPrice: transaction.gasPrice} //edit if you want different gas. Check install instruction folder for more precise info on how to set gas. 
  ),
  

  
  console.log(`
    Buying tokens
  `)
  
  return;
  
  
 

  

  
})})