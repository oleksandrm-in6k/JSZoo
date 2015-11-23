function AbstractAnimal(){

	this._energyPercent = 100;

	//Declaration for hints
	this._voiceTimer;
	this._eatTimer;
	this._observers;

	this._name;
	this._kind;
	this._size;
	this._eatingPeriod;
	this._voicePeriod;
	this._voice;

	this.setName = function(name){
		if(typeof(name)!='string')
			throw Error('Name must be a string');
		this._name = name;
	};

	this.getName = function(){
		return this._name;
	};

	this.setKind = function(kind){
		if(typeof(kind)!='string')
			throw Error('Kind must be a string');
		this._kind = kind;
	};

	this.getKind = function(){
		return this._kind;
	};

	this.setSize = function(size) {
		if(typeof(size) != 'number' || size < 0)
			throw Error('Name must be a positive number');
		this._size = size;
	};

	this.getSize = function() {
		return this._size;
	};

	this.setEatingPeriod = function(eatingPeriod) {
		if(typeof(eatingPeriod)!=='number' || eatingPeriod < 0)
			throw Error('Eating period must be a positive number');
		this._eatingPeriod = eatingPeriod;

		if (this._eatTimer) {
			clearInterval(this._eatTimer);
		}
		var _this = this;
		this._eatTimer = setInterval(
			function(){
				_this.energyDecriment();
			}, 
			eatingPeriod
		);

	};

	this.getEatingPeriod = function() {
		return this._eatingPeriod;
	};

	this.setVoicePeriod = function(voicePeriod) {
		if(typeof(voicePeriod)!=='number' || voicePeriod < 0)
			throw Error('Voice period must be a positive number');

		if(typeof(this._voice)!='string')
			throw Error('Voice must be a string');

		this._voicePeriod = voicePeriod;

		if (this._voiceTimer) {
			clearInterval(this._voiceTimer);
		}
		var _this = this;
		this._voiceTimer = setInterval(
			function(){
				_this.makeVoice();
			}, 
			voicePeriod
		);

	};

	this.getVoicePeriod = function() {
		return this._voicePeriod;
	};


	this.setVoice = function(voice){
		if(typeof(voice)!='string')
			throw Error('Voice must be a string');
		this._voice = voice;
	};

	this.getVoice = function(){
		return this._voice;
	};

	this.setEnergyPercent = function(percent) {
		if(percent >= 100) {
			this._energyPercent = 100;
		}
		else if(percent <= 0){
			this._energyPercent = 0;
			this.notifyObservers( notifyTypes.starvation );
		} 
		else{
			this._energyPercent = percent;
		} 
	};

	this.starvation = function() {
		throw new Error("This method is not implemented");
	}

	this.getEnergyPercent = function() {
		return this._energyPercent;
	};

	this.giveToEat = function(eat) {
		this.setEnergyPercent( this.getEnergyPercent() + eat.getSize() * 100 / this._size );
		this.notifyObservers( notifyTypes.energyChange );
	};

	this.energyDecriment = function(decriment) {
		if( !decriment )
			decriment = 1;
		this.setEnergyPercent(this.getEnergyPercent() - decriment);
	}

	this.kill = function() {
		this.notifyObservers(notifyTypes.death);
		this._observers = [];
		delete this;
	};

	this.makeVoice = function(){
		this.notifyObservers(notifyTypes.message, this.getVoice());
	};

	this.addObserver = function(observer) {
		if(!this._observers) {//Fix for create array in child element
			this._observers = [];
		}
		var index = this._observers.indexOf(observer);
		if(index!=-1)
			throw new Error("This observer is already exists");

		this._observers.push(observer);
	};

	this.removeObserver = function(observer) {
		var index = this._observers.indexOf(observer);
		if(index!=-1)
			this._observers.splice(index, 1);
	};

	this.notifyObservers = function(type, message) {
		for (var i = 0; i < this._observers.length; i++) {
			this._observers[i].update(this, type, message);
		}
	};

}

notifyTypes = {
	energyChange: 0,
	death: 1,
	message: 2,
	starvation: 3,
	predatorEatAnimal: 4
};