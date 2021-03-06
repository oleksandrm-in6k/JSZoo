function View($scope){
	this.setZoo = function (zoo) {
		this.zoo = zoo;
	};
	this.writeToChat = function (text) {
		var currentDate = new Date();
		$scope.messages.unshift("[" + currentDate.getHours() + ":" + currentDate.getMinutes() +  ":" + currentDate.getSeconds() + "]" + text);
	};

	this.addNewAnimal = function (animal) {
		$scope.animals.push(animal);
	};
	
	this.showMessage = function (animal, message) {
		this.writeToChat(animal.getKind() + " "+ animal.getName() + " said: " + message);
	};

	this.energyChange = function () {
		// TODO
	}; 

	this.animalDeath = function (animal) {
		this.writeToChat(animal.getKind() + " "+ animal.getName() + " is death");
		$scope.animals.splice($scope.animals.indexOf(animal), 1);
	}; 
	this.animalStarvation = function (animal) {
		this.writeToChat(animal.getKind() + " "+ animal.getName() + " is starvation");
	};
	this.predatorEatAnimal = function (predator, ateAnimal) {
		this.writeToChat(predator.getKind() + " " + predator.getName() + " ate " + ateAnimal.getKind() + " "+ ateAnimal.getName());
	};
};