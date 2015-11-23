function HerbivoreAnimal(name, kind, size, eatingInterval, voiceInterval, voice){
	this.setName(name);
	this.setKind(kind);
	this.setSize(size);
	this.setEatingPeriod(eatingInterval);
	this.setVoice(voice);
	this.setVoicePeriod(voiceInterval);

	this.starvation = function(){
		this.kill();
	};
}

HerbivoreAnimal.prototype = new AbstractAnimal();