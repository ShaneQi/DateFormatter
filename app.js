(function(){
  var app = angular.module('DateFormatter', []);
  app.controller('MainController', ['$http', '$scope', function($http, $scope) {

			var controller = this;

			this.formatContent = "MMM. dd, yyyy HH:mm z";
			this.stringContent = "Dec. 06, 1991 09:41 CDT";

			this.stringFromDate = "";
			this.dateFromString = "";

			this.stringContentDidChange = function() {
				var data = {"format": controller.formatContent,
				"date_string": controller.stringContent};
				$http.post("https://server.shaneqi.com/datefromstring", data).success( function(data) {
					if (data.date_string == null) {
					controller.dateFromString = "nil";
					}else {
					controller.dateFromString = data.date_string;}
				});   
			}
			
			this.formatContentDidChange = function() {
				var data = {"format": controller.formatContent};
				$http.post("https://server.shaneqi.com/stringfromdate", data).success( function(data) {
					controller.stringFromDate = data.date_string;
				});   
				controller.stringContentDidChange();
			};

			this.formatContentDidChange();

  }]);
})();
