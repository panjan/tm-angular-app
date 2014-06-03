testApp.controller('PlaygroundController',
    ['$scope', '$rootScope', 'signalRService',
    function ($scope, $rootScope, signalRService) {

        $scope.updateProgress = function() {
            signalRService.sendRequest();
        };

        signalRService.initialize();
    }]
);