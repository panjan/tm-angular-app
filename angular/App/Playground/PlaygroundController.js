testApp.controller('PlaygroundController',
    ['$scope', '$rootScope', 'signalRService',
    function ($scope, $rootScope, signalRService) {
        $scope.text = "default text";

        $scope.greetAll = function () {
            signalRService.sendRequest();
        }

        updateGreetingMessage = function (text) {
            $scope.text = text;
        }

        signalRService.initialize();

        $scope.$parent.$on("acceptGreet", function (e, message) {
            alert('huhu');
            $scope.$apply(function () {
                updateGreetingMessage(message)
            });
        });
    }]
);