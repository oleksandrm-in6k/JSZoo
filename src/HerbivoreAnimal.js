function HerbivoreAnimal(name, kind, size, eatingInterval, voiceInterval, voice){
	AbstractAnimal.call(this);

	this.isHerbivore = true;

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