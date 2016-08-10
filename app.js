var app = angular.module('imgsearchdemo', ['ion-image-search']);

app.controller('MainCtrl', ['$scope', '$webImageSelector', function($scope, $webImageSelector){
  $scope.onActivateWebView = function() {
        var config = {
          searchProviders: [$webImageSelector.searchProviders.Bing]
        };
        $webImageSelector.show(config).then(function(image){
          $scope.selectedImage = image;
        });
      }
}]);
