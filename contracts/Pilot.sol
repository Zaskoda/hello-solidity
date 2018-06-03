pragma solidity ^0.4.17;

contract PilotFactory {

    event NewPilot(string _name);

    //rank and title?
    struct Pilot {
        string name;
        uint32 graduationDate;
    }

    Pilot[] public pilots;

    mapping (address => uint) public ownerToPilot;
    mapping (address => bool) public pilotCreated;


    function _createPilot(string _name) internal {
        uint id = pilots.push(Pilot(_name, uint32(now))) -1;
        ownerToPilot[msg.sender] = id;
        pilotCreated[msg.sender] = true;
    }

    function createPilotAvatar(string _name) public {
        //an account is limited to 1 pilot
        require(pilotCreated[msg.sender] == false);
        _createPilot(_name);
    }
}