function View(){

	this.writeToChat = function(text) {
		var currentDate = new Date();
		var chatObj = $('.chat-window');
		chatObj.html(chatObj.html() + "[" + currentDate.getHours() + ":" + currentDate.getMinutes() +  ":" + currentDate.getSeconds() + "]" + text + "<br>");

	};

	this.showMessage = function(animal, message) {
		this.writeToChat(animal.getKind() + " "+ animal.getName() + " said: " + message);
	};

	this.energyChange = function(animal) {
		this.writeToChat(animal.getKind() + " "+ animal.getName() + " has "+ animal.getEnergyPercent() + "% hp");
	};

	this.animalDeath = function(animal) {
		this.writeToChat(animal.getKind() + " "+ animal.getName() + " is death");
	};

	this.updateList = function(animals) {
		this.writeToChat(animals);
	};

	this.animalStarvation = function(animal){
		this.writeToChat(animal.getKind() + " "+ animal.getName() + " is starvation");
	};

	this.predatorEatAnimal = function(predator, ateAnimal){
		this.writeToChat(predator.getKind() + " " + predator.getName() + " ate " + ateAnimal.getKind() + " "+ ateAnimal.getName());
	};
}