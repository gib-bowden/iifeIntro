var SolarSystem = (function (oldSolarSystem){
	const stars = ["Sun", "Sirius", "Canopus", "Arcturus"]

	oldSolarSystem.bigBang = function() {
		return stars;
	}

	oldSolarSystem.starBirth = function(newStar){
		stars.push(newShip);
	}

	oldSolarSystem.blackHole = function(deadStar){
		stars.forEach((star, i) => {
			if (star === deadStar) {
				stars.splice(i, 1); 
			}
		});
	}

	return oldSolarSystem

})(SolarSystem || {})
