$(function(){	
	var zoo = new Zoo(new View());

	var monkey = new HerbivoreAnimal("Zhenya", "Ostrich", 60, 200, 900, "I am zadrot");

	var monkey2 = new PredatorAnimal("Sasha", "Tiger", 44, 100, 833, "I am programmer");



	zoo.addAnimal(monkey);
	zoo.addAnimal(monkey2);

});