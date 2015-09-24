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

.controller('dashboardCtrl', function ($scope, $location, $ionicLoading, $interval, MyServices) {


    var wid = $(".dashbox").width();
    hieght = $(".dashbox").height(wid);
    hieght = $(".dashbox1").height(wid);


    //LOADING FUNCTIONS//
    /*var showloading = function (message) {
        $ionicLoading.show({
            template: message
        });
    };
    var hideloading = function () {
        $ionicLoading.hide();
    };
*/

    //$scope.available = true;


    // GO TO INQUIRY PAGE
    $scope.gotoinquiries = function () {
        $location.path("/app/inquiries");
    };
    // GO TO ACCOUNT PAGE
    $scope.gotoaccount = function () {
        $location.path("/app/account");
    };
    // GO TO ACCOUNT PAGE
    $scope.gotoprofile = function () {
        $location.path("/app/profile");
    };
    // GO TO UPDATE LOCATION
    $scope.updatelocation = function () {
        showloading("Updating your location...");
        $interval(hideloading, 1000, 1);
    };

    // INITIAL VALUE FOR ACTIVE STATUS
    var initialactivestatussuccess = function (data, status) {
        console.log(data);
        if (data == "true") {
            $scope.active = true;
        };
        if (data == "false") {
            $scope.active = false;
        };
    };
    var initialactivestatuserror = function () {
        console.log(status)
    };
    MyServices.initialactivestatus(1).success(initialactivestatussuccess).error(initialactivestatuserror);

    // INITIAL VALUE FOR AVAILABLE STATUS
    var initiavailablestatussuccess = function (data, status) {
        console.log(data);
        if (data == "true") {
            $scope.available = true;
        };
        if (data == "false") {
            $scope.available = false;
        };
    };
    var initiavailablestatuserror = function () {
        console.log(status)
    };
    MyServices.initiavailablestatus(1).success(initiavailablestatussuccess).error(initiavailablestatuserror);

    ///////////////////////////////////////////////////////////////
    // SUCCESS VAR FOR changeavailabilitystatus
    var changeactivestatussuccess = function (data, status) {
        console.log(data);
        $ionicLoading.hide();
        if (data == "true") {
            $scope.active = true;
        };
        if (data == "false") {
            $scope.active = false;
        };
    };
    // ERROR VAR FOR changeavailabilitystatus
    var changeactivestatuserror = function (data, status) {
        $ionicLoading.hide();
        console.log(status)
    };

    $scope.changeactivestatus = function () {
        $ionicLoading.show({
            template: "Loading"
        });
        MyServices.changeactivestatus(1).success(changeactivestatussuccess).error(changeactivestatuserror);
    };
    //////////////////////////////////////////////////////////////////////////


    // SUCCESS VAR FOR updateactivestatus
    var changeavailabilitystatussuccess = function (data, status) {
        console.log(data);
        $ionicLoading.hide();
        if (data == "true") {
            $scope.available = true;
        };
        if (data == "false") {
            $scope.available = false;
        };
    };
    //ERROR VAR FOR updateactivestatus
    var changeavailabilitystatuserror = function (data, status) {
        $ionicLoading.hide();
        console.log(status);
    };

    $scope.changeavailabilitystatus = function () {
        $ionicLoading.show({
            template: "Loading"
        });
        MyServices.changeavailabilitystatus(1).success(changeavailabilitystatussuccess).error(changeavailabilitystatuserror);
    };
    /////////////////////////////////////////////////////////////////////////////////

})



.controller('accountCtrl', function ($scope, $stateParams, MyServices) {

        var vendoraccountsuccess = function (data, status) {
            console.log(data)
            $scope.account = data;
        };

        var vendoraccounterror = function (data, status) {
            console.log(status)
        };

        MyServices.vendoraccount(9819042457).success(vendoraccountsuccess).error(vendoraccounterror);

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

        $scope.type = "vendor";

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

        $scope.type = "vendor";


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