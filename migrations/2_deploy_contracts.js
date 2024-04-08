const BigToken = artifacts.require("./BigToken.sol");

module.exports = function(deployer) {
  deployer.deploy(BigToken);
};



// const ConvertLib = artifacts.require("ConvertLib");
// const MetaCoin = artifacts.require("MetaCoin");

// module.exports = function(deployer) {
//   deployer.deploy(ConvertLib);
//   deployer.link(ConvertLib, MetaCoin);
//   deployer.deploy(MetaCoin);
// };
