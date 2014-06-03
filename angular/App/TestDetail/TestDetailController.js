testApp.controller('TestDetailController',
    ['$scope', '$stateParams', 'breeze', 'datacontext',
    function ($scope, $stateParams, breeze, datacontext) {
        $scope.testId = $stateParams.testId;
        $scope.testDetail = null;
        $scope.getTestWithSteps = getTestWithSteps;
        $scope.refresh = refresh;
        $scope.error = "";

        $scope.getTestWithSteps($scope.testId, true);

        function getTestWithSteps(testId, forceRefresh) {
            datacontext.getTestWithSteps(testId, forceRefresh)
                .then(getSucceeded).fail(failed).fin(refreshView);
        }

        function refresh() { getTestWithSteps(true, $scope.testId); }

        function getSucceeded(data) {
            $scope.testDetail = data[0];
        }

        function failed(error) {
            $scope.error = error.message;
        }

        function refreshView() {
            $scope.$apply();
        }
    }]
);