var Pilot = artifacts.require("./PilotFactory.sol");
var PilotControls = artifacts.require("./PilotControls.sol");

module.exports = function(deployer) {
  deployer.deploy(Pilot);
  deployer.link(Pilot,PilotControls);
  deployer.deploy(PilotControls);
};
