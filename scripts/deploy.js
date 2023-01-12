// Import ethers from Hardhat package
const { ethers } = require('hardhat');

const main = async () => {
  /*
      A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
      so nftContract here is a factory for instances of our NFTee contract.
    */
  const nftContract = await ethers.getContractFactory('NFTee');

  // here we deploy the contract
  const deployedNFTContract = await nftContract.deploy();

  // wait for the contract to deploy
  await deployedNFTContract.deployed();

  // print the address of the deployed contract
  console.log('NFT Contract Address:', deployedNFTContract.address);
};

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
