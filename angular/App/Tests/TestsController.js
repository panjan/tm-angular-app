testApp.controller('TestsController',
    ['$scope', '$state', 'breeze', 'datacontext',
    function ($scope, $state, breeze, datacontext) {

        $scope.tests = [];
        $scope.getTestsByQuery = getTestsByQuery;
        $scope.refresh = refresh;
        $scope.error = "";
        $scope.queryName = $state.params['queryName']

        $scope.getTestsByQuery(true, $scope.queryName);
        
        function getTestsByQuery(forceRefresh, queryName) {
            datacontext.getTestsByQuery(forceRefresh, queryName)
                .then(getSucceeded)
                .fail(failed)
                .fin(refreshView);
        }

        function refresh() { getTestsByQuery(true, queryName); }

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