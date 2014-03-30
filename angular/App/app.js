var testApp = angular.module('testApp', ['ui.router']);

testApp.value('breeze', window.breeze)
    .value('Q', window.Q)
    .value('$', $);

testApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
            .state('tests',
                {
                    url: '/tests',
                    templateUrl: 'App/Tests/testsView.html',
                    controller: 'TestsController'
                }
             )
            .state('tests.test',
                {
                    url: '/:testId',
                    templateUrl: 'App/Tests/testDetailView.html',
                    controller: 'TestDetailController'
                }
            )
            .state('playground',
                {
                    url: '/playground',
                    templateUrl: 'App/Playground/playgroundView.html',
                    controller: 'PlaygroundController'
                }
            )            
    });