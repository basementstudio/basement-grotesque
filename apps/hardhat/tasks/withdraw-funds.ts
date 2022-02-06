import grotesqueAccessCardContract from '../abis/GrotesqueAccessCard.json'
import { THardhat, getWalletAndProvider } from '../utils'

const withdrawFunds = async (_, hre: THardhat) => {
  const { wallet, provider } = getWalletAndProvider(hre)

  const ethersContract = new hre.ethers.Contract(
    grotesqueAccessCardContract.address,
    // @ts-ignore
    grotesqueAccessCardContract.abi,
    wallet
  ).connect(wallet)

  const contractBalance = await provider.getBalance(ethersContract.address)

  console.log(`Contract balance: ${hre.ethers.utils.formatEther(contractBalance)}`);
   
  const withrawTransaction = await ethersContract.withdrawEther()

  console.log(`Transaction created: https://${
    hre.network.name !== 'mainnet' ? hre.network.name + '.' : ''
  }etherscan.io/tx/${withrawTransaction.hash}`)

  await withrawTransaction.wait()

  console.log(`Withdraw transaction succeeded!`)
}

export default withdrawFunds