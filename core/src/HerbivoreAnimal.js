function HerbivoreAnimal(name, kind, size, eatingInterval, voiceInterval, voice){
	AbstractAnimal.call(this);

	this.isHerbivore = true;

	this.setName(name);
	this.setKind(kind);
	this.setSize(size);

	this.setEatingPeriod(eatingInterval);
	this.startEatTimer();
	
	this.setVoice(voice);
	this.setVoicePeriod(voiceInterval);
	this.startVoiceTimer();
	

	this.starvation = function(){
		this.kill();
	};

}