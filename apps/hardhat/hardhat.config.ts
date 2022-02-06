import '@nomiclabs/hardhat-ethers'
import dotenv from 'dotenv'

import mintTask from './tasks/mint'
import holderInfoTask from './tasks/holder-info'
import getTotalSupplyTask from './tasks/get-total-supply'
import withdrawFunds from './tasks/withdraw-funds'
import getBalance from './tasks/get-balance'
import getTokenURI from './tasks/get-token-URI'
import revealNFTs from './tasks/reveal'

dotenv.config()

const INFURA_URL = `https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`;
const PRIVATE_KEY = process.env.OWNER_WALLET_PRIVATE_KEY;

// @ts-ignore
task('mint', 'Mint an NFT').setAction(mintTask)
// @ts-ignore
task('holder-info', 'Get information about NFT holder').addParam('address', 'Holder wallet address').setAction(holderInfoTask)
// @ts-ignore
task('total-supply', 'Get NFT current total supply').setAction(getTotalSupplyTask)
// @ts-ignore
task('withdraw-funds', 'Withdraw contract funds').setAction(withdrawFunds)
// @ts-ignore
task('get-balance', 'Get contract\'s balance').setAction(getBalance)
// @ts-ignore
task('token-uri', 'Get token\'s URI information').addParam('tokenid', 'Token id').setAction(getTokenURI)
// @ts-ignore
task('reveal', 'WARNING! This reveals all the NFTs URIs').setAction(revealNFTs)

export default {
  solidity: "0.8.7",
  networks: {
    ropsten: {
      url: INFURA_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      gas: 3000000,
    }
  }
};
