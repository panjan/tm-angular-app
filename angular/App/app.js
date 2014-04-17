var testApp = angular.module('testApp', ['ui.router']);

testApp.value('breeze', window.breeze)
    .value('Q', window.Q)
    .value('$', $);

testApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
            .state('home',
                {
                    url: '',
                    templateUrl: 'App/Home/homeView.html',
                    controller: 'HomeController'
                }
             )
            .state('home.tests',
                {
                    url: '/tests',
                    templateUrl: 'App/Tests/testsView.html',
                    controller: 'TestsController'
                }
             )
            .state('home.tests.test',
                {
                    url: '/:testId',
                    templateUrl: 'App/Tests/testDetailView.html',
                    controller: 'TestDetailController'
                }
            )
            .state('home.playground',
                {
                    url: '/playground',
                    templateUrl: 'App/Playground/playgroundView.html',
                    controller: 'PlaygroundController'
                }
            )            
    });