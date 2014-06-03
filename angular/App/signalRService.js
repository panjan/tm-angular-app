testApp.service('signalRService', function ($, $rootScope) {

    var initialize = function () {

        connection = $.hubConnection();
        this.proxy = connection.createHubProxy('testsHub');

        this.proxy.on('acceptProgress', function (testId, success, warning, danger) {
            console.info('Accepted progress! ' + testId + ',' + success + ',' + warning + ',' + danger);
            $rootScope.$broadcast("acceptProgress", testId, success, warning, danger);
        });

        connection.start();
    };

    var sendRequest = function () {
        this.proxy.invoke('updateProgress');
    };

    return {
        initialize: initialize,
        sendRequest: sendRequest
    };
});