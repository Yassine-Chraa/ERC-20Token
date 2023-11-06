require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    localhost: {
      chainId: 1337,
      url: "HTTP://127.0.0.1:8545",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
