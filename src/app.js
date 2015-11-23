$(function(){
	var zoo = new Zoo(new View());

	var monkey = new HerbivoreAnimal("Zhenya", "Ostrich", 60, 200, 1500, "I am zadrot");

	var monkey2 = new PredatorAnimal("Sasha", "Tiger", 44, 20, 1000, "I am programmer");

	zoo.addAnimal(monkey);
	zoo.addAnimal(monkey2);

});