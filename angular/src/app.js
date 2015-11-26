var myApp = angular.module('myApp', [])
	.controller('ZooCtrl', ['$scope', function($scope) {

		$scope.animals = [];

		$scope.messages = [];

		setInterval(function(){
				$scope.$apply();
			}, 200);

		var View = function(){
			this.setZoo = function(zoo) {
				this.zoo = zoo;
			};
			this.writeToChat = function(text) {
				var currentDate = new Date();
				$scope.messages.push("[" + currentDate.getHours() + ":" + currentDate.getMinutes() +  ":" + currentDate.getSeconds() + "]" + text);
				
			};
			this.addNewAnimal = function(animal){
				$scope.animals.push(animal);
			};
			this.showMessage = function(animal, message) {
				this.writeToChat(animal.getKind() + " "+ animal.getName() + " said: " + message);
			};

			this.energyChange = function(){
				// TODO
			}; 

			this.animalDeath = function(animal){
				this.writeToChat(animal.getKind() + " "+ animal.getName() + " is death");
				$scope.animals.splice($scope.animals.indexOf(animal), 1);
			}; 
			this.animalStarvation = function(animal) {
				this.writeToChat(animal.getKind() + " "+ animal.getName() + " is starvation");
			};
			this.predatorEatAnimal = function(predator, ateAnimal) {
				this.writeToChat(predator.getKind() + " " + predator.getName() + " ate " + ateAnimal.getKind() + " "+ ateAnimal.getName());
			};

		};
		var view = new View();
		var zoo = new Zoo(view);

		var animal = new HerbivoreAnimal("Zhenya", "Ostrich", 60, 900, 1000, "I am zadrot");
		var animal2 = new PredatorAnimal("Sasha", "Tiger", 60, 600, 1100, "I am zadrot");

		zoo.addAnimal(animal);
		zoo.addAnimal(animal2);



	}])
	.directive('animal', function(){
		var link = function(scope, element, attrs){
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
			scope: {
				animal: '=animalObject'
			},
			templateUrl: 'views/animal.html',
			link: link
		};
	})
	.directive('chat', function () {
		var link = function(scope, element, attrs){

		};

		return {
			templateUrl: 'views/chat.html',
			link: link
		};
	});