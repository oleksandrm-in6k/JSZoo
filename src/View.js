function View(){

	this.showMessage = function(animal, message) {
		console.log(animal.getKind() + " "+ animal.getName() + " said: " + message);
	};

	this.energyChange = function(animal) {
		console.log(animal.getKind() + " "+ animal.getName() + " has "+ animal.getEnergyPercent() + "% hp");
	};

	this.animalDeath = function(animal) {
		console.log(animal.getKind() + " "+ animal.getName() + " is death");
	};

	this.updateList = function(animals) {
		console.log(animals);
	};

	this.animalStarvation = function(animal){
		console.log(animal.getKind() + " "+ animal.getName() + " is starvation");
	};

	this.predatorEatAnimal = function(predator, ateAnimal){
		console.log(predator.getKind() + " " + predator.getName() + " ate " + ateAnimal.getKind() + " "+ ateAnimal.getName());
	};

}