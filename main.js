
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


let myPlanets = SolarSystem.getPlanets();
console.log("myPlanets", myPlanets)
