testApp.controller('HomeController',
    ['$scope', 'breeze', 'datacontext',
    function ($scope, breeze, datacontext) {

        $scope.queries = ['Query1', 'Query2', 'Query3'];
    }
]);