var HexaFinityToken = artifacts.require("HexaFinityToken");

module.exports = function(deployer) {
	// Arguments are: contract, initialSupply
  deployer.deploy(HexaFinityToken);
};
