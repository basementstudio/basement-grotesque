import grotesqueAccessCardContract from '../abis/GrotesqueAccessCard.json'
import { THardhat, getWalletAndProvider } from '../utils'

const revealNFTs = async (_, hre: THardhat) => {
  const { wallet } = getWalletAndProvider(hre)

  const ethersContract = new hre.ethers.Contract(
    grotesqueAccessCardContract.address,
    // @ts-ignore
    grotesqueAccessCardContract.abi,
    wallet
  ).connect(wallet)

  const revealTransaction = await ethersContract.reveal()

  console.log(`Transaction created: https://${
    hre.network.name !== 'mainnet' ? hre.network.name + '.' : ''
  }etherscan.io/tx/${revealTransaction.hash}`)

  await revealTransaction.wait()

  console.log('Reveal transaction succeeded!')
}

export default revealNFTs