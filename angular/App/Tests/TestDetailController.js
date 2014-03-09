testApp.controller('TestDetailController',
    function ($scope, $stateParams) {
        $scope.item = $stateParams.item;
        $scope.testDetail = {
            name: $scope.item,
            testParam1: 'Lorem Ipsum',
            testParam2: 'Lorem Ipsum',
            testParam3: 'Lorem Ipsum'
        };
    }
);