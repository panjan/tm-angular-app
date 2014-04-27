testApp.controller('HomeController',
    ['$scope', 'breeze', 'datacontext',
    function ($scope, breeze, datacontext) {

        $scope.queries = [];
        $scope.refresh = refresh;
        $scope.error = "";
        $scope.getQueries = getQueries;

        $scope.getQueries();

        function getQueries(forceRefresh) {
            datacontext.getQueries(forceRefresh)
                .then(getSucceeded).fail(failed).fin(refreshView);
        }

        function refresh() { getQueries(true); }

        function getSucceeded(data) {
            $scope.queries = data;
        }

        function failed(error) {
            $scope.error = error.message;
        }

        function refreshView() {
            $scope.$apply();
        }
    }
]);