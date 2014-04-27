testApp.controller('TestsController',
    ['$scope', 'breeze', 'datacontext',
    function ($scope, breeze, datacontext) {

        $scope.tests = [];
        $scope.getTests = getTests;
        $scope.refresh = refresh;
        $scope.error = "";

        $scope.getTests(true);
        
        function getTests(forceRefresh) {
            datacontext.getTests(forceRefresh)
                .then(getSucceeded).fail(failed).fin(refreshView);
        }

        function refresh() { getTests(true); }

        function getSucceeded(data) {
            $scope.tests = data;
        }

        function failed(error) {
            $scope.error = error.message;
        }

        function refreshView() {
            $scope.$apply();
        }
    }
]);