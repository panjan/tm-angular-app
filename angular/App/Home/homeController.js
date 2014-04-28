testApp.controller('HomeController',
    ['$scope', 'breeze', 'datacontext',
    function ($scope, breeze, datacontext) {

        $scope.queues = [];
        $scope.refresh = refresh;
        $scope.error = "";
        $scope.getQueues = getQueues;

        $scope.getQueues();

        function getQueues(forceRefresh) {
            datacontext.getQueues(forceRefresh)
                .then(getSucceeded).fail(failed).fin(refreshView);
        }

        function refresh() { getQueues(true); }

        function getSucceeded(data) {
            $scope.queues = data;
        }

        function failed(error) {
            $scope.error = error.message;
        }

        function refreshView() {
            $scope.$apply();
        }
    }
]);