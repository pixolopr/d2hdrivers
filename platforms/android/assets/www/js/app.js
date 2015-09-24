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
})
.directive('clickForOptions', ['$ionicGesture', function ($ionicGesture) {
    return {
        restrict: 'A',



        link: function (scope, element, attrs) {
            $ionicGesture.on('tap', function (e) {

                /* Grab all list items -Content and Buttons */
                var list = document.querySelector('.vlist');
                var contentarray = list.querySelectorAll(".item-content");
                var buttonsarray = list.querySelectorAll(".item-options");

                // Grab the content
                var content = element[0].querySelector('.item-content');

                // Grab the buttons and their width
                var buttons = element[0].querySelector('.item-options');

                if (!buttons) {
                    console.log('There are no option buttons');
                    return;
                }
                var buttonsWidth = buttons.offsetWidth;

                ionic.requestAnimationFrame(function () {
                    content.style[ionic.CSS.TRANSITION] = 'all ease-out .25s';

                    //Remove class after 250ms
                    var removeclass = function (item) {
                        setTimeout(function () {
                            item.classList.add('invisible');
                        }, 250);
                    };

                    //Iterate through all contents
                    for (i = 0; i < contentarray.length; i++) {
                        if (!buttonsarray[i].classList.contains('invisible')) {
                            contentarray[i].style[ionic.CSS.TRANSFORM] = '';
                            removeclass(buttonsarray[i]);
                        };
                    };

                    if (!buttons.classList.contains('invisible')) {
                        content.style[ionic.CSS.TRANSFORM] = '';
                        setTimeout(function () {
                            buttons.classList.add('invisible');
                        }, 250);
                    } else {
                        buttons.classList.remove('invisible');
                        content.style[ionic.CSS.TRANSFORM] = 'translate3d(-' + buttonsWidth + 'px, 0, 0)';
                    };
                });

            }, element);
        }
    };
           }]);