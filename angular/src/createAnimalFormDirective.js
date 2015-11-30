var zooApp = angular.module('createAnimalFormModule', [])
	.directive('createAnimalForm', function () {
		var link = function($scope, element, attrs){

			$scope.animalTypes = [
				{type: 'predator', constructFunc: window.PredatorAnimal},
				{type: 'herbivore', constructFunc: window.HerbivoreAnimal},
				{type: 'dragon', constructFunc: window.DragonAnimal}
			];

			$scope.addAnimal = function(PropObj){
				try{
					var animal = new ($scope.animalType.constructFunc)(PropObj.name, PropObj.kind, parseInt(PropObj.size), parseInt(PropObj.eatPeriod), parseInt(PropObj.voicePeriod), PropObj.voice);
					$scope.zoo.addAnimal(animal);
				}catch(e){
					$scope.formError = true;
					setTimeout(function(){
						$scope.formError = false;
					}, 5000);
				}
			};	
		};

		return {
			templateUrl: 'views/create_animal_form.html',
			link: link,
			scope: true
		};
	});