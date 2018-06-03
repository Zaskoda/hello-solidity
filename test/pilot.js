var Pilot = artifacts.require("PilotControls");
var pilotName = "Todd";

contract('PilotController', function(accounts) {
    it("no pilots should exist", function() {
        return Pilot.deployed().then(function(pilot) {
            return pilot.showPilotCount();
        }).then(function(count) {
            assert.equal(count, 0, "pilot count not zero");
        });
    });
    it("should create a pilot", function() {
        return Pilot.deployed().then(function(pilot) {
            return pilot.createPilotAvatar(pilotName);
        });
    });
    it("one pilot should exist", function() {
        return Pilot.deployed().then(function(pilot) {
            return pilot.showPilotCount();
        }).then(function(count) {
            assert.equal(count, 1, "pilot count not one");
        });
    });
    it("pilot id should be 0", function() {
        return Pilot.deployed().then(function(pilot) {
            _pilot = pilot.myPilotId();
            return _pilot;
        }).then(function(id) {
            assert.equal(id, 0, "pilot id incorrect");
        });
    });
    it("pilot name should be "+pilotName, function() {
        return Pilot.deployed().then(function(pilot) {
            return pilot.myPilot();
        }).then(function(name) {
            assert.equal(name, pilotName, "pilot name incorrect");
        });
    });

});