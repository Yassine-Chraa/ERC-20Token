import hr from "hardhat";
async function main() {
  const [deployer] = await hr.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  

  const Token = await hr.ethers.getContractFactory("MesroToken");
  const token = await Token.deploy();
  const address = await token.getAddress();

  console.log("Token address:", address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});