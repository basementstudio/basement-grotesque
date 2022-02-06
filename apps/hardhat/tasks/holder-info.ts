import grotesqueAccessCardContract from '../abis/GrotesqueAccessCard.json'
import { THardhat, getWalletAndProvider } from '../utils'

type Arguments = {
  address: string
}

const holderInfo = async ({ address }: Arguments, hre: THardhat) => {
  const { wallet } = getWalletAndProvider(hre)

  const ethersContract = new hre.ethers.Contract(
    grotesqueAccessCardContract.address,
    // @ts-ignore
    grotesqueAccessCardContract.abi,
    wallet
  ).connect(wallet.address)

  const holderBalance: THardhat['ethers']['BigNumber'] = await ethersContract.balanceOf(address)

  console.log('Holder balance:', holderBalance.toString())
}

export default holderInfo