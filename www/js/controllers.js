angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function () {
            $scope.closeLogin();
        }, 1000);
    };
})

.controller('dashboardCtrl', function ($scope, $location, $ionicLoading, $interval) {


    var wid = $(".dashbox").width();
    hieght = $(".dashbox").height(wid);
    hieght = $(".dashbox1").height(wid);


    //LOADING FUNCTIONS//
    var showloading = function (message) {
        $ionicLoading.show({
            template: message
        });
    };
    var hideloading = function () {
        $ionicLoading.hide();
    };


    $scope.available = true;
    $scope.busy = true;

    $scope.gotoinquiries = function () {
        $location.path("/app/inquiries");
    };
    $scope.gotoaccount = function () {
        $location.path("/app/account");
    };
    $scope.gotoprofile = function () {
        $location.path("/app/profile");
    };

    $scope.changeavailabilitystatus = function () {
        showloading("Updating status");
        $scope.available = !$scope.available;
        $interval(hideloading, 1000, 1);
        if ($scope.available == false) {
            $scope.busy = false;
        };
    };
    $scope.changebusystatus = function () {
        showloading("Updating status");
        $scope.busy = !$scope.busy;
        $interval(hideloading, 1000, 1);
    };
    $scope.updatelocation = function () {
        showloading("Updating your location...");
        $interval(hideloading, 1000, 1);
    };


})



.controller('accountCtrl', function ($scope, $stateParams) {


    })
    .controller('signinCtrl', function ($scope, $stateParams, $location) {
        $scope.signin = function () {
            $location.path('/app/otp');
        };

    })
    .controller('otpCtrl', function ($scope, $stateParams) {


    })
    .controller('vendorvehiclesCtrl', function ($scope, $stateParams, MyServices) {





    })
    .controller('inquiriesCtrl', function ($scope, $stateParams, MyServices) {

        $scope.type = "driver";

        var inquiriesbyvendoridsuccess = function (data, status) {
            console.log(data);
            $scope.inquirylist = data;
        };
        var inquiriesbyvendoriderror = function (data, status) {
            console.log(status)
        };

        //GET INQUIRIES BY ID MYSERVICES

        if ($scope.type == "vendor") {
            MyServices.inquiriesbyvendorid(220).success(inquiriesbyvendoridsuccess).error(inquiriesbyvendoriderror);
        } else {
            console.log('error');
            MyServices.inquiriesbydriverid(4249).success(inquiriesbyvendoridsuccess).error(inquiriesbyvendoriderror);
        };

    })
    .controller('profileCtrl', function ($scope, $stateParams, $location, MyServices) {

        //GO TO LIST PAGE
        $scope.gotolistcar = function () {
            $location.path('/app/carlist');
        };

        $scope.type = "driver";


        //GET DRIVER PROFILE DETAILS
        var getdriverprofilesuccess = function (data, status) {
            if ($scope.type == "driver") {
                $scope.imagepath = "http://dial2hire.com/images/" + data.vtype + "_images/";
            } else {
                /* if(data.)*/
                $scope.imagepath = "img/" + data.type + ".png";
            };

            console.log(data);
            $scope.profiledetails = data;

        };
        var getdriverprofileerror = function (data, status) {
            console.log(status);
        };

        if ($scope.type == "driver") {
            MyServices.getdriverprofile(1).success(getdriverprofilesuccess).error(getdriverprofileerror);
        } else {

            MyServices.getvendorprofile(220).success(getdriverprofilesuccess).error(getdriverprofileerror);
        };
    })
    .controller('carlistCtrl', function ($scope, $stateParams, $location, MyServices) {
        $scope.active = true;
        $scope.availability = false;
        $scope.gotoprofile = function (id) {
            console.log(id);
            //$location.path('/app/profile');
        };


        //GET ALL VEHICLES OF A VENDOR
        var getallvendorvehiclessuccess = function (data, status) {
            console.log(data);
            if (data.length > 0) {
                $scope.imagepath = "http://dial2hire.com/images/" + data[0].vtype + "_images/";
            };
            $scope.carlist = data;
        };
        var getallvendorvehicleserror = function (data, status) {
            console.log(status);
        };
        MyServices.getallvendorvehicles(220).success(getallvendorvehiclessuccess).error(getallvendorvehicleserror);



    })



;