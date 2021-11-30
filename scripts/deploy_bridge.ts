import { ethers, upgrades } from "hardhat";
const domainID = 0;
const relayers = ['0x2C71b3E0B068C4d365AdD4035Dc7f8eB6dC6C910'];
const relayerThreshold = 1;
const fee = 0;
const expiry = 10;

async function main() {
  // Deploying

  const factory = await ethers.getContractFactory("Bridge");
  // let contract = await upgrades.deployProxy(
  //   factory, [domainID, relayers, relayerThreshold, fee, expiry])
  const bridge = await factory.deploy(domainID, relayers, relayerThreshold, fee, expiry);
  console.log('bridge address', bridge.address);
  console.log(bridge.deployTransaction.hash);
  const res = await bridge.deployed();
  console.log('bridge deployed');

  const ERC20Handler = await ethers.getContractFactory("ERC20Handler");
  const ERC20HandlerContract = await ERC20Handler.deploy(bridge.address);
  // let ERC20HandlerContract = await upgrades.deployProxy(
  //   ERC20Handler, [contract.address])

  console.log('ERC20HandlerContract address', ERC20HandlerContract.address);
  console.log(ERC20HandlerContract.deployTransaction.hash);
  //const ERC20HandlerContractRes = await contract.deployed();
  console.log('ERC20HandlerContract deployed');
  //await contract.setGoverance(Frontend);

  // // Upgrading
  // const BoxV2 = await ethers.getContractFactory("BoxV2");
  // const upgraded = await upgrades.upgradeProxy(instance.address, BoxV2);
}

main();

