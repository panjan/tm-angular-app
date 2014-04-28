testApp.controller('TestsController',
    ['$scope', '$state', 'breeze', 'datacontext', 'signalRService',
    function ($scope, $state, breeze, datacontext, signalRService) {

        $scope.tests = [];
        $scope.getTestsByQueue = getTestsByQueue;
        $scope.refresh = refresh;
        $scope.error = "";
        $scope.queueName = $state.params['queueName']
        $scope.setTestProgress = setTestProgress;

        $scope.getTestsByQueue(true, $scope.queueName);
        
        updateGreetingMessage = function (text) {
            $scope.text = text;
        }

        signalRService.initialize();

        $scope.$parent.$on("acceptProgress", function (e, testId, success, warning, danger) {
            $scope.$apply(function () {
                setTestProgress(testId, success, warning, danger)
            });
        });

        function setTestProgress(testId, success, warning, danger) {
            $scope.tests.forEach(function (test) {
                if (test.testId == testId) {
                    test.progressSuccess = success;
                    test.progressWarning = warning;
                    test.progressDanger = danger;
                    return;
                }
            });
        }

        function getTestsByQueue(forceRefresh, queueName) {
            datacontext.getTestsByQueue(forceRefresh, queueName)
                .then(getSucceeded)
                .fail(failed)
                .fin(refreshView);
        }

        function refresh() { getTestsByQueue(true, queueName); }

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