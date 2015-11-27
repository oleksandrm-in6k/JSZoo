var zooApp = angular.module('zooApp', [])
	.controller('ZooCtrl', ['$scope', function($scope) {

		$scope.animals = [];
		$scope.messages = [];

		setInterval(function(){
			$scope.$digest();
		}, 200);

		// angular.$interval

		var view = new View($scope);

		$scope.zoo = new Zoo(view);

		var animal = new HerbivoreAnimal("Zhenya", "Ostrich", 200, 1932, 1734, "My name is Zhenya and i am Ostrich");
		var animal2 = new PredatorAnimal("Sasha", "Programmer", 60, 600, 1300, "I am programmer");
		var animal3 = new HerbivoreAnimal("Igor", "Dog", 200, 1734, 2235, "Gav gav gav!!!");


		$scope.zoo.addAnimal(animal);
		$scope.zoo.addAnimal(animal2);
		$scope.zoo.addAnimal(animal3);
	}])


	.directive('animal', function(){
		var link = function(scope, element, attrs){

			scope.$on('$destroy', function (){
				clearInterval(interval);
			});

			var interval = setInterval(function(){
				scope.energy = scope.animal.getEnergyPercent();
				scope.$digest();

			}, 200);

			scope.eat = function(){
				scope.animal.giveToEat({
					getSize: function(){
						return 9999;
					}
				});
			};

			scope.kill = function(){
				scope.animal.kill();
			};
		};

		return {
			restrict: 'E',
			scope: {
				animal: '='
			},
			leak: leak,
			templateUrl: 'views/animal.html',
			link: link
		};
	})


	.directive('chat', function () {
		return {
			templateUrl: 'views/chat.html'
		};
	})


	.directive('createAnimalForm', function () {
		var link = function($scope, element, attrs){

			$scope.addAnimal = function(PropObj){
				var animal= null;
				switch(PropObj.type){
					case 'predator':
						animal = new PredatorAnimal(PropObj.name, PropObj.kind, parseInt(PropObj.size), parseInt(PropObj.eatPeriod), parseInt(PropObj.voicePeriod), PropObj.voice);
					break;


					case 'herbivore':
						animal = new HerbivoreAnimal(PropObj.name, PropObj.kind, parseInt(PropObj.size), parseInt(PropObj.eatPeriod), parseInt(PropObj.voicePeriod), PropObj.voice);
					break;

					case 'dragon':
						animal = new DragonAnimal('I am Dragon Gorinych', 'Elite dragon', 1, 500, 2500, 'I love eat big and small animals');
					break;

					default:
						throw new Error('Animal type is not exists');
					break;

				}
				$scope.zoo.addAnimal(animal);
			};

		};

		return {
			templateUrl: 'views/create_animal_form.html',
			link: link,
			scope: true
		};
	});