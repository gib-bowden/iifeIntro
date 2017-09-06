
//regular iife
// let crap = (function() {
// 	return {
// 		stuff
// 	}
// })()

//augemented iife
// let Something = (function(oldSomething) {
// 	const animals = ["cat", "dog"]
// 	oldSomething.niceFunction = function(){
// 		console.log("im a nice function")
// 	}

// 	return oldSomething;

// })(Something || {})


// let Something = (function(oldSomething) {
// 	const animals = ["cat", "dog"]
// 	oldSomething.niceFunction = function(){
// 		console.log("im a nice function")
// 	}

// 	return oldSomething;

// })(Something || {})


var SolarSystem = (function (oldSolarSystem){
	const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
	const spaceShips = ["tie fighter", "USS enterprise", "Rocinante", "millennium falcon"]

	oldSolarSystem.getPlanets = function() {
		return planets
	}

	oldSolarSystem.setPlanets = function(newPlanet){
		planets.push(newPlanet);
	}

	oldSolarSystem.getShips = function() {
		return spaceShips;
	}

	oldSolarSystem.setShips = function(newShip){
		spaceShips.push(newShip);
	}

	return oldSolarSystem
})(SolarSystem || {})


let myPlanets = SolarSystem.getPlanets();
console.log("myPlanets", myPlanets)
