//var adminurl = "http://localhost/d2hBackend/index.php/";
var adminurl = "http://pixolo.co.in/d2hBackend/index.php/";
var myservices = angular.module('myservices', [])

.factory('MyServices', function ($http, $location) {

    return {
        getvehiclesbytype: function (type, location1, location2) {
            return $http.get(adminurl + "vehicle_details/vehicleinfo", {
                params: {
                    location1: location2,
                    location2: location1,
                    type: type
                }
            });
        },
        signupuser: function (userdetails) {
            return $http.get(adminurl + "users/addusers", {
                params: {
                    data: userdetails
                }
            });
        },
        sendsms: function (number, name) {
            return $http.get("http://alerts.solutionsinfini.com/api/web2sms.php?workingkey=15459g72ev3rezt7938tp&username=equalaccts&password=vudUhE$up@7u&to=" + number + "&sender=DIALTO&message=You have recieved an inquiry from " + name, {
                params: {}
            });
        },
        getdriverprofile: function (id) {
            return $http.get(adminurl + "register/getdriverprofile", {
                params: {
                    id: id
                }
            });
        },
        getvendorprofile: function (id) {
            return $http.get(adminurl + "register/getvendorprofile", {
                params: {
                    id: id
                }
            });
        },
        inquiriesbyvendorid: function (id) {
            return $http.get(adminurl + "inquiry/inquiriesbyvendorid", {
                params: {
                    id: id
                }
            });
        },
        inquiriesbydriverid: function (id) {
            return $http.get(adminurl + "inquiry/inquiriesbydriverid", {
                params: {
                    id: id
                }
            });
        },
        // INITIAL VALUE FOR ACTIVE STATUS
        initialactivestatus: function (id) {
            return $http.get(adminurl + "vehicle_details/getactivestatus", {
                params: {
                    id: id
                }
            });
        },
        // INITIAL VALUE FOR AVAILABLE STATUS
        initiavailablestatus: function (id) {
            return $http.get(adminurl + "vehicle_details/getavailibilitystatus", {
                params: {
                    id: id
                }
            });
        },
        //CHANGE ACTIVE STATUS BY DRIVER ID
        changeactivestatus: function (id) {
            return $http.get(adminurl + "vehicle_details/changeactivestatus", {
                params: {
                    id: id
                }
            });
        },
        changeavailabilitystatus: function (id) {
            return $http.get(adminurl + "vehicle_details/changeavailibilitystatus", {
                params: {
                    id: id
                }
            });
        },
        vendoraccount: function (phone) {
            return $http.get(adminurl + "register/getaccount", {
                params: {
                    phone: phone
                }
            });
        },

        getallvendorvehicles: function (id) {
            return $http.get(adminurl + "register/getallvendorvehicles", {
                params: {
                    id: id
                }
            })
        },

    }
});