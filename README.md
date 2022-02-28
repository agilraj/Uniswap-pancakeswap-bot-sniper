# Uniswap-pancakeswap-bot-sniper
Hello

For this to work, you will need a wallet address, key, Windows 8 and up and 2 free pieces of software.

NodeJS
https://nodejs.org/en/
(Latest Features)

Visual studio code
https://code.visualstudio.com/
(stable build)

1. Install both pieces of software.
2. Run CMD and enter npm install. Run as administrator.
3. Open Visual studio code as administrator.
4. File - Open FOLDER ( the one where your unzipped bot is)
5. View - Terminal
6. Inside terminal, again write npm install
7. Enter config details like the tokenID, amountin, receiver address, token to spend, token to buy etc. For more info - check inside the bot file for each config setting specifics.
8. Run - Start Debugging - Node.js. Or via terminal write node bot.js ( this will start the bot). If running with first way, you will see a orange strip on the bottom side of the programm - that indicates that it is running. If it turns blue, it has shut off. Sometimes you have to restart it multiple times to connect. If it disconnects, connect again as soon as possible.

8.1. For Ultimate sniper only - Please configure Nonce settings for the 15 buy transactions. Nonce is the number of outgoing transactions from your wallet. It means that if for example your last out transaction was number 50, then the first snipe should be 51, second 52 etc. Make sure to do everything before setting the nonces - like approving your tokens. Do not make any other transactions while the bot is running, otherwise the nonce will be different and the snipe will not work.
You can get your last Nonce by visiting https://bscscan.com/ and entering your walley address. Check the last OUT transaction. Click - Click to see more. There you will find the Nonce number.

8.2 Enter the amountIn and amountOutMin settings. AmountIN - the amount you want to spend. Amountoutmin - the amount of the tokens you want to get out. Leave at zero for the bot to buy as many as possible with the whole amount you are putting in.

9. If you see a Running icon on the bottom left corner, then its working and searching for the liquidity transaction.
 ( You can also check Network activity in Task Manager to see if NodeJS is online)

10. If it stops for some reason, simply restart with F5.





For the amountOutMin setting - you have to check how many zeros (decimals) the token you are trying to buy has. You can see that on etherscan or bscscan. Each token will be different. Most have 18 decimals but not 100% of the time.
If it has 18 decimals like WETH and WBNB, then you can edit like this const amountOutMin = ethers.utils.parseUnits('100000', 'ether')


Same formating as amount in. This will be 100000 tokens


Tips:

For Pancakeswap, best to use private nodes like Quicknode.io
For Uniswap, best to use private nodes like Alchemy.io

!!!!!!If you have multiple bots, please fully close the programm and reopen full folder to change to a different bot. Otherwise it might start the wrong bot.



You can edit the gas settings to make them manual. Currently it copies the liquidity transaction gas settings so that it gets as close to it as possible.
Do NOT enter more gas then the original liquidity transaction will use. That will make it fail as it will shoot faster than the pool is created. It wont have anything to buy, if its too fast.
Edit this line to set gas manually:

  amountIn,
  amountOutMin,
  [WETH1, WETH2],
  addresses.recipient,
  Date.now() + 1000 * 60 * 10, //1 minutes
  { gasLimit: 150000, gasPrice: 5000000000}, //5000000000 is 5 gwei. Edit as needed. 150000 is 150000. For uni about 180 gwei is good and 200000 limit.



Most pools will be made with WBNB for pancakeswap or WETH for uniswap, but you can edit the WETH1 ( tokenIn) if you know the pool will be different

It will use WBNB and WETH for buying. Not BNB/ETH. Make sure you have them in your wallet. And regular BNB/ETH to cover gas fees.









ADD INFO

1. It shoots 15 times, not 1. Why? Because some projects/tokens use an anti-bot, that does not allow to buy on the first block. That brakes 99% of bots. This shoots 15 times, in 5 different blocks. 3 times in each block. If one works, the other once will cancel ( if you only have enough for one shoot in the wallet. Please do check)
2. Why 3 times in each block? Some projects use an anti-bot that allows for only a limited amount of tokens to be bought in the first 3 minutes. You will be able to enters 3 AmountIn settings. AmountIn1 should be the largest. AmountIn2 - medium. AmountIn3 - low valus. So that if the big order does not get confirmed, it will try with a smaller and an even smaller one. Belive me - even if you go in with a small amount, you will make huge profits. Usuaully limits for such anti-bots are about 500 usd in the first 3 minutes. 500 usd snipe usually brings around 10k profit USD.
3. You can enters 2 WSS addressses. Why? Scanning takes a lot of resources and if you are using a private, paid node, it can be costly. For Pancakeswap - Binance has set a free node. It uses that for scanning. WSS2 can be your private node address and it will shoot much faster! It will change it automatically when its time to buy :). This will not waste your private, paid node limits.
4. For the first 3 buy orders ( first block) - it copies the original transaction gas limit and price for you to be as close as possible. You will have Limit and Price settings - those will apply to all other 12 buy orders. As they are in next blocks, you can put high has limits hoping that it is the first transaction the miners pick! The higher the price, the better!






