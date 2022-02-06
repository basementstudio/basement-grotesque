import grotesqueAccessCardContract from '../abis/GrotesqueAccessCard.json'
import { THardhat, getWalletAndProvider } from '../utils'

type Arguments = {
  tokenid: string
}

const getTokenURI = async ({ tokenid }: Arguments, hre: THardhat) => {
  const { wallet } = getWalletAndProvider(hre)

  const ethersContract = new hre.ethers.Contract(
    grotesqueAccessCardContract.address,
    // @ts-ignore
    grotesqueAccessCardContract.abi,
    wallet
  ).connect(wallet.address)

  const tokenURI: string = await ethersContract.tokenURI(tokenid.toString())

  console.log('Token URI:', tokenURI)
}

export default getTokenURI