import grotesqueAccessCardContract from '../abis/GrotesqueAccessCard.json'
import { getWalletAndProvider, THardhat } from '../utils'

const mint = async (_, hre: THardhat) => {
  const overrides = {
    value: hre.ethers.utils.parseEther('0.02'),
    gasLimit: 3000000,
  }
  const { provider, wallet } = getWalletAndProvider(hre)
  
  const currentGasPrice = await provider.getGasPrice()
  const balance = await wallet.getBalance();

  console.log(`Current gas price: ${currentGasPrice}`)
  console.log(`Account balance: ${hre.ethers.utils.formatEther(balance)}`);

  const ethersContract = new hre.ethers.Contract(
    grotesqueAccessCardContract.address,
    // @ts-ignore
    grotesqueAccessCardContract.abi,
    wallet
  ).connect(wallet)

  const mintTransaction = await ethersContract.mint(overrides)

  console.log(`Transaction created: https://${
    hre.network.name !== 'mainnet' ? hre.network.name + '.' : ''
  }etherscan.io/tx/${mintTransaction.hash}`)

  await mintTransaction.wait()

  console.log(`Transaction succeeded!`)

  const totalSupply = await ethersContract.totalSupply()
  console.log(`Total supply: ${totalSupply}`)
}

export default mint