import { ethers, upgrades } from "hardhat";
const NFTAddress = '0xC36442b4a4522E871399CD717aBDD847Ab11FE88';
const UniswapV3FactoryAddress = '0x1F98431c8aD98523631AE4a59f267346ea31F984';
const Goverance = '0x2C71b3E0B068C4d365AdD4035Dc7f8eB6dC6C910';
//const Frontend = '0x5a0350846f321524d0fBe0C6A94027E89bE23bE5';
async function main() {
  // Deploying
  const factory = await ethers.getContractFactory("ERC20Handler");
  let contract = await upgrades.deployProxy(
    factory, [Goverance, UniswapV3FactoryAddress, NFTAddress])

  console.log(contract.address); // 0xB6987F36D4189eC1ab2A5dC1bf212B03f69BcFe3
  console.log(contract.deployTransaction.hash);
  const res = await contract.deployed();
  console.log(res.address);
  //await contract.setGoverance(Frontend);

  // // Upgrading
  // const BoxV2 = await ethers.getContractFactory("BoxV2");
  // const upgraded = await upgrades.upgradeProxy(instance.address, BoxV2);
}

main();

