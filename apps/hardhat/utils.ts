import type Hardhat from 'hardhat'
import config from './hardhat.config'

export type THardhat = typeof Hardhat

export const getWalletAndProvider = (hre: THardhat) => {
  const ethersProvider = new hre.ethers.providers.JsonRpcProvider(
    config.networks.ropsten.url
  )
  const wallet = new hre.ethers.Wallet(config.networks.ropsten.accounts[0], ethersProvider)

  return {
    provider: ethersProvider,
    wallet,
  }
}
