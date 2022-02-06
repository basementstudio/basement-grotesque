import '@nomiclabs/hardhat-ethers'
import dotenv from 'dotenv'

import mintTask from './tasks/mint'
import holderInfoTask from './tasks/holder-info'
import getTotalSupplyTask from './tasks/get-total-supply'

dotenv.config()

const INFURA_URL = `https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`;
const PRIVATE_KEY = process.env.OWNER_WALLET_PRIVATE_KEY;

// @ts-ignore
task('mint', 'Mint a new access card').addParam('receiver', 'The NFT receiver wallet address').setAction(mintTask)
// @ts-ignore
task('holder-info', 'Get information about NFT holder').addParam('address', 'Holder wallet address').setAction(holderInfoTask)
// @ts-ignore
task('total-supply', 'Get NFT current total supply').setAction(getTotalSupplyTask)

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
