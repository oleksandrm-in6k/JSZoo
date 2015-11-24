function View(){
	var self = this;
	this.setZoo = function(zoo) {
		this.zoo = zoo;
	};

	$('.create-animal-button').on('click', function() {
		var name = $('#animalName').val(),
			type = $('#animalType').val(),
			kind = $('#animalKind').val(),
			size = parseInt($('#animalSize').val()),
			voicePeriod = parseInt($('#animalVoicePeriod').val()),
			eatPeriod = parseInt($('#animalEatPeriod').val()),
			voice = $('#animalVoice').val();

		var animal = null;

		switch(type){
			case 'predator':
				animal = new PredatorAnimal(name, kind, size, eatPeriod, voicePeriod, voice);
			break;

			case 'herbivore':
				animal = new HerbivoreAnimal(name, kind, size, eatPeriod, voicePeriod, voice);
			break;

			case 'dragon':
				throw new Error('Class "dragon" is not implemented!');
			break;
		}
		console.log(animal);
		self.zoo.addAnimal(animal);
	});


	this.addNewAnimal = function(animal) {
		var htmlTemplate = 
			'<div class="animal-block">' +
			'<div class="remove-animal"></div>' +
			'<div class="give-eat"></div>' +
			'<span class="label"></span>' +
			'<div class="progress-bar"></div>'+
			'</div>';

		animal.$ = $(htmlTemplate)
			.appendTo('.animal-list');

		if (animal.isHerbivore) {
			animal.$.children('.give-eat').addClass('vegetarian-eat');
		}

		animal.$.children('.remove-animal')
			.on('click', function(){
				self.writeToChat("You kill " + animal.getKind() + " "+ animal.getName());
				animal.kill();
			});

		animal.$.children('.give-eat')
			.on('click', function(){
				self.writeToChat("You give eat to " + animal.getKind() + " "+ animal.getName());
				animal.giveToEat({getSize: function(){return 999999;}});
			});
		
		if (animal.isPredator) {
			animal.$.addClass('predator');
		}

		this.energyChange(animal);
	};

	this.writeToChat = function(text) {
		var currentDate = new Date();
		var chatObj = $('.chat-window');
		chatObj.html(chatObj.html() + "[" + currentDate.getHours() + ":" + currentDate.getMinutes() +  ":" + currentDate.getSeconds() + "]" + text + "<br>");

	};

	this.showMessage = function(animal, message) {
		this.writeToChat(animal.getKind() + " "+ animal.getName() + " said: " + message);
	};

	this.energyChange = function(animal) {
		//this.writeToChat(animal.getKind() + " "+ animal.getName() + " has "+ animal.getEnergyPercent() + "% hp");
		animal.$.children('.label').text(animal.getKind() + " "+ animal.getName() + " [" + animal.getEnergyPercent() + "]");
		animal.$.children('.progress-bar').css('width', animal.getEnergyPercent()+'%');
	};

	this.animalDeath = function(animal) {
		this.writeToChat(animal.getKind() + " "+ animal.getName() + " is death");
		animal.$.remove();
	};

	this.updateList = function(animals) {
		this.writeToChat(animals);
	};

	this.animalStarvation = function(animal) {
		this.writeToChat(animal.getKind() + " "+ animal.getName() + " is starvation");
	};

	this.predatorEatAnimal = function(predator, ateAnimal) {
		this.writeToChat(predator.getKind() + " " + predator.getName() + " ate " + ateAnimal.getKind() + " "+ ateAnimal.getName());
	};


}
