import fs from 'fs';
import { ethers } from 'hardhat';

const baseURI = 'https://gateway.pinata.cloud/ipfs/QmSVzZHDJ9upWSUPasESBBYK5aTr25MAXjjkEu6RbJM6Ag/'
const notRevealedURI = 'https://gateway.pinata.cloud/ipfs/QmVtxbcPzB2Nr2R3oEkzPz2AiQf6u9RNfZmaMjtcWRQXri'

const main = async () => {
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contracts with the account: ${deployer.address}`);

  const balance = await deployer.getBalance();
  console.log(`Account balance: ${ethers.utils.formatEther(balance)}`);

  const Contract = await ethers.getContractFactory('GrotesqueAccessCard');
  const deployedContract = await Contract.deploy(baseURI, notRevealedURI);
  console.log(`Contract address: ${deployedContract.address}`);

  const contractAbi = deployedContract.interface.format('json')

  const data = {
    address: deployedContract.address,
    abi: JSON.parse(Array.isArray(contractAbi) ? contractAbi[0] : contractAbi)
  };

  fs.writeFileSync('abis/GrotesqueAccessCard.json', JSON.stringify(data));
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
