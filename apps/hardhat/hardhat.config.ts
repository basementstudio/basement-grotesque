import '@nomiclabs/hardhat-ethers'
import dotenv from 'dotenv'

dotenv.config()

const INFURA_URL = `https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`;
const PRIVATE_KEY = process.env.OWNER_WALLET_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.7",
  networks: {
    ropsten: {
      url: INFURA_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      gas: 95000000000,
    }
  }
};
