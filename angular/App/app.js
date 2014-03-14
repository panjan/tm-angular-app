var testApp = angular.module('testApp', ['ui.router']);

testApp.value('breeze', window.breeze)
    .value('Q', window.Q);

testApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
            .state('tests',
                {
                    url: '/tests',
                    templateUrl: 'App/Tests/TestsView.html',
                    controller: 'TestsController'
                }
             )
            .state('tests.test',
                {
                    url: '/:testId',
                    templateUrl: 'App/Tests/TestDetailView.html',
                    controller: 'TestDetailController'
                }
            )
            .state('playground',
                {
                    url: '/playground',
                    templateUrl: 'App/Playground/PlaygroundView.html',
                    controller: 'PlaygroundController'
                }
            )            
    });