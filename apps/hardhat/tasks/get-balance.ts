import grotesqueAccessCardContract from '../abis/GrotesqueAccessCard.json'
import { THardhat, getWalletAndProvider } from '../utils'

const getBalance = async (_, hre: THardhat) => {
  const { provider } = getWalletAndProvider(hre)

  const contractBalance = await provider.getBalance(grotesqueAccessCardContract.address)

  console.log(`Contract balance: ${hre.ethers.utils.formatEther(contractBalance)}`);
}

export default getBalance