(function(){
  var app = angular.module('DateFormatter', ['ngMaterial']);
  app.controller('MainController', ['$http', '$scope', function($http, $scope) {

			var controller = this;

			this.formatContent = "";
			this.stringContent = "";

			this.stringFromDate = "";
			this.dateFromString = "";

			this.stringContentDidChange = function() {
				var data = {"format": controller.formatContent,
				"date_string": controller.stringContent};
				$http.post("http://localhost:8182/datefromstring", data).success( function(data) {
					if (data.date_string == null) {
					controller.dateFromString = "nil";
					}else {
					controller.dateFromString = data.date_string;}
				});   
			}
			
			this.formatContentDidChange = function() {
				var data = {"format": controller.formatContent};
				$http.post("http://107.191.44.140:8182/stringfromdate", data).success( function(data) {
					controller.stringFromDate = data.date_string;
				});   
				controller.stringContentDidChange();
			};

			this.formatContentDidChange();

  }]);
})();
