var zooApp = angular.module('animalModule', [])
	.directive('animal', function(){
		var link = function(scope, element, attrs){

			var interval = setInterval(function(){
				scope.energy = scope.animal.getEnergyPercent();
				scope.$digest();
			}, 200);

			scope.$on('$destroy', function (){
				clearInterval(interval);
			});

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
			templateUrl: 'views/animal.html',
			link: link
		};
	});