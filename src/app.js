$(function(){	
	var zoo = new Zoo(new View());

	var a1 = new HerbivoreAnimal("Zhenya", "Ostrich", 60, 1000, 7000, "I am zadrot");

	var a2 = new PredatorAnimal("Sasha", "Tiger", 51, 800, 9000, "I am programmer");

	var a3 = new HerbivoreAnimal("Natasha", "Butterfly", 44, 1600, 6000, "Muuuuuuu!");

	var a4 = new HerbivoreAnimal("Natasha", "Butterfly", 44, 1600, 6000, "Muuuuuuu!");

	zoo.addAnimal(a1);
	zoo.addAnimal(a2);
	zoo.addAnimal(a3);
	zoo.addAnimal(a4);

});