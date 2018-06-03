pragma solidity ^0.4.17;

import "./Pilot.sol";

contract PilotControls is PilotFactory {

    function myPilotId() public view returns(uint) {
        require(pilotCreated[msg.sender] == true);
        uint _pilotId = ownerToPilot[msg.sender];
        return _pilotId;
    }

    function myPilot() public view returns(string) {
        return pilots[myPilotId()].name;
    }

    function showPilotCount() external view returns(uint) {
        return uint(pilots.length);
    }
    
}