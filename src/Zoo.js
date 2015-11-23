function Zoo(view){
	this.view = view;
	this._animals = [];

	this.addAnimal = function(animal) {
		if( !animal.isAnimal ) {
			throw new Error("Param animal must instance of AbstractAnimal");
		}
		this._animals.push(animal);
		animal.addObserver(this);
	};

	this.update = function(animal, updateType, message){
		switch(updateType){
			case AbstractAnimal.notifyTypes.energyChange:
				this.view.energyChange(animal);
			break;
			
			case AbstractAnimal.notifyTypes.death:
				this._animals.splice(this._animals.indexOf(animal), 1);
				this.view.animalDeath(animal);
			break;
						
			case AbstractAnimal.notifyTypes.message:
				this.view.showMessage(animal,message);
			break;

			case AbstractAnimal.notifyTypes.starvation:
				this.view.animalStarvation(animal);
				animal.starvation(this._animals);
			break;

			case AbstractAnimal.notifyTypes.predatorEatAnimal:
				this.view.predatorEatAnimal(animal, message);//Message is ate animal
			break;

			default:
				throw new Error("This type of update notify is not support" + updateType);
		}
	};
}