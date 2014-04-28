testApp.service('signalRService', function ($, $rootScope) {
    var proxy = null;

    var initialize = function () {

        connection = $.hubConnection();
        this.proxy = connection.createHubProxy('testsHub');

        this.proxy.on('acceptGreet', function (message) {
            console.info("Accepted greet!");
            $rootScope.$emit("acceptGreet", message);
        });

        this.proxy.on('acceptProgress', function (testId, success, warning, danger) {
            console.info('Accepted progress! ' + testId + ',' + success + ',' + warning + ',' + danger);
            $rootScope.$broadcast("acceptProgress", testId, success, warning, danger);
        });

        connection.start();
    };

    var sendRequest = function () {
        this.proxy.invoke('greetAll');
    };

    return {
        initialize: initialize,
        sendRequest: sendRequest
    };
});