// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'myservices'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.account', {
        url: '/account',
        views: {
            'menuContent': {
                templateUrl: 'templates/account.html',
                controller: 'accountCtrl'
            }
        }
    })

    .state('app.inquiries', {
            url: '/inquiries',
            views: {
                'menuContent': {
                    templateUrl: 'templates/inquiries.html',
                    controller: 'inquiriesCtrl'
                }
            }
        })
        .state('app.dashboard', {
            url: '/dashboard',
            views: {
                'menuContent': {
                    templateUrl: 'templates/dashboard.html',
                    controller: 'dashboardCtrl'
                }
            }
        })
        .state('app.signin', {
            url: '/signin',
            views: {
                'menuContent': {
                    templateUrl: 'templates/signin.html',
                    controller: 'signinCtrl'
                }
            }
        })
        .state('app.otp', {
            url: '/otp',
            views: {
                'menuContent': {
                    templateUrl: 'templates/otp.html',
                    controller: 'otpCtrl'
                }
            }
        })
     .state('app.vendorvehicles', {
            url: '/vendorvehicles',
            views: {
                'menuContent': {
                    templateUrl: 'templates/vendorvehicles.html',
                    controller: 'vendorvehiclesCtrl'
                }
            }
        })
    .state('app.carlist', {
            url: '/carlist',
            views: {
                'menuContent': {
                    templateUrl: 'templates/carlist.html',
                    controller: 'carlistCtrl'
                }
            }
        })
        .state('app.profile', {
            url: '/profile',
            views: {
                'menuContent': {
                    templateUrl: 'templates/profile.html',
                    controller: 'profileCtrl'
                }
            }
        });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/dashboard');
});