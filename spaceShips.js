var SolarSystem = (function (oldSolarSystem){
	const spaceShips = ["tie fighter", "USS enterprise", "Rocinante", "millennium falcon"]

	oldSolarSystem.getShips = function() {
		return spaceShips;
	}

	oldSolarSystem.setShips = function(newShip){
		spaceShips.push(newShip);
	}

	return oldSolarSystem
})(SolarSystem || {})

