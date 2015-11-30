var zooApp = angular.module('zooApp', ['createAnimalFormModule', 'zooChatModule', 'animalModule'])
	.controller('ZooCtrl', ['$scope', function($scope) {

		$scope.animals = [];
		$scope.messages = [];

		setInterval(function(){
			$scope.$digest();
		}, 200);

		var view = new View($scope);

		$scope.zoo = new Zoo(view);

		var animal = new HerbivoreAnimal("Zhenya", "Ostrich", 200, 1932, 1734, "My name is Zhenya and i am Ostrich");
		var animal2 = new PredatorAnimal("Sasha", "Programmer", 60, 600, 1300, "I am programmer");
		var animal3 = new HerbivoreAnimal("Igor", "Dog", 200, 1734, 2235, "Gav gav gav!!!");


		$scope.zoo.addAnimal(animal);
		$scope.zoo.addAnimal(animal2);
		$scope.zoo.addAnimal(animal3);
	}]);