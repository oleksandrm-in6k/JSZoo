function Zoo(view){

	this._animals = [];

	this.addAnimal = function(animal){
		if( !( animal instanceof AbstractAnimal) )
			throw new Error("Param animal must instance of AbstractAnimal");
		this._animals.push(animal);
		animal.addObserver(this);
	};

	this.update = function(animal, updateType, message){
		switch(updateType){
			case notifyTypes.energyChange:
				view.energyChange(animal);
			break;
			
			case notifyTypes.death:
				this._animals.splice(this._animals.indexOf(animal), 1);
				view.animalDeath(animal);
			break;
						
			case notifyTypes.message:
				view.showMessage(animal,message);
			break;

			case notifyTypes.starvation:
				view.animalStarvation(animal);
				animal.starvation(this._animals);
			break;

			case notifyTypes.predatorEatAnimal:
				view.predatorEatAnimal(animal, message);//Message is ate animal
			break;

			default:
				throw new Error("This type of update notify is not support" + updateType);
		}
	};
}