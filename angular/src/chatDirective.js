var zooApp = angular.module('zooChatModule', [])
	.directive('chat', function () {
		return {
			templateUrl: 'views/chat.html'
		};
	});