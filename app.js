angular.module("DateFormatterPlayground", [])
    .controller("MainController", function ($scope, $http) {

        $scope.dateString = ""
        $scope.dateValue = ""

        this.format = "MMM. dd, yyyy HH:mm z"
        this.dateStringInput = "Dec. 06, 1991 09:41 CDT"

        this.$onInit = function () {
            this.post();
        }

        this.post = function () {
            $http.post('https://server.shaneqi.com/dateformatter', { format: this.format, date_string: this.dateStringInput }).then(function (response) {
                $scope.dateString = response.data.date_string;
                $scope.dateValue = response.data.date_value;
            });
        };

    });