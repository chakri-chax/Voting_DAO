require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-web3");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.6",
  networks:{
    hardhat:{
      chainId:1337
    },
    mumbai: {
      url:" https://polygon-mumbai.infura.io/v3/e427baed8ae44e6ba79e542b53c0a524",
      accounts: [`7affef3e0b93a246fea9a21fc21a7b8c55a4f25422b105e2b7a1bc4afdbdb930`],
    },
  },
  settings:{
    optimizer:{
      enabled:true,
      runs:200
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./src/abis"
}
};
// 0xB469Bbd294C5f4278215fAdE01C5EE607bA50FF2