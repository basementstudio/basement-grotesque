import grotesqueAccessCardContract from '../abis/GrotesqueAccessCard.json'
import { THardhat, getWalletAndProvider } from '../utils'

const getTotalSupply = async (_, hre: THardhat) => {
  const { wallet } = getWalletAndProvider(hre)

  const ethersContract = new hre.ethers.Contract(
    grotesqueAccessCardContract.address,
    // @ts-ignore
    grotesqueAccessCardContract.abi,
    wallet
  ).connect(wallet.address)

  const totalSupply: THardhat['ethers']['BigNumber'] = await ethersContract.totalSupply()

  console.log('Holder balance:', totalSupply.toString())
}

export default getTotalSupply