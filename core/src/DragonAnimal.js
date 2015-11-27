function DragonAnimal(name, kind, size, eatingInterval, voiceInterval, voice){
	AbstractAnimal.call(this);

	this.isPredator = true;
	this.isDragon = true;

	this.setName(name);
	this.setKind(kind);
	this.setSize(size);

	this.setEatingPeriod(eatingInterval);
	this.startEatTimer();
	
	this.setVoice(voice);
	this.setVoicePeriod(voiceInterval);
	this.startVoiceTimer();
	
	this.eatAnimal = function(animal) {
		this.notifyObservers( AbstractAnimal.notifyTypes.predatorEatAnimal, animal);
		this.giveToEat(animal);
		animal.kill();
	};

	this.selectEatFromArray = function(arrayOfAnimals) {
		for(var i = 0; i < arrayOfAnimals.length; i++) {
			if( arrayOfAnimals[i] != this ) {
				this.eatAnimal(arrayOfAnimals[i]);
				return;
			}
		}				
	};

	this.starvation = function(animals) {
		this.selectEatFromArray(animals);
		if(this.getEnergyPercent()<=0)
			this.kill();
	};

}