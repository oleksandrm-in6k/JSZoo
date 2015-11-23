function PredatorAnimal(name, kind, size, eatingInterval, voiceInterval, voice){
	this.setName(name);
	this.setKind(kind);
	this.setSize(size);
	this.setEatingPeriod(eatingInterval);
	this.setVoice(voice);
	this.setVoicePeriod(voiceInterval);

	this.selectEatFromArray = function(arrayOfAnimals) {
		for(var i = 0; i < arrayOfAnimals.length; i++) {
			if( !(arrayOfAnimals[i] instanceof PredatorAnimal) ){
				this.notifyObservers( notifyTypes.predatorEatAnimal, arrayOfAnimals[i]);
				this.giveToEat(arrayOfAnimals[i]);
				arrayOfAnimals[i].kill();
				return;
			}
		}
		this.kill();
	};

	this.starvation = function(animals){
		this.selectEatFromArray(animals);
	};
}

PredatorAnimal.prototype = new AbstractAnimal();