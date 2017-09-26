var Ownable = artifacts.require("./Ownable.sol");
var ERC20Token = artifacts.require("./ERC20Token.sol");
var Destruction = artifacts.require("./Destruction.sol");
var SafeMath = artifacts.require("./SafeMath.sol");
var TianLianCoin = artifacts.require("./TianLianCoin.sol");


module.exports = function(deployer) {
  deployer.deploy(Ownable);
  deployer.deploy(ERC20Token);
  deployer.deploy(Destruction);
  deployer.deploy(SafeMath);
  deployer.deploy(TianLianCoin, 100000, 10000);

};
