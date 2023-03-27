require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const INFURA_URL = process.env.INFURA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // goerli: {
    //   url: INFURA_URL,
    //   accounts: [PRIVATE_KEY],
    // },
    mumbai: {
      url: process.env.POKT_MUMBAI_URL,
      accounts: [PRIVATE_KEY],
      gasPrice: 2000000000,
    },
  },
};
