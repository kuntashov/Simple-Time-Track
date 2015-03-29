// Generated by CoffeeScript 1.8.0

/*
Main Popup Controller
 */

(function() {
  var PopupController;

  PopupController = (function() {
    PopupController.$inject = ['$scope', 'Notifications'];

    function PopupController($scope, Notifications) {
      Notifications.getNotifications().then(function(data) {
        $scope.projects = data.projects;
        $scope.incidents = data.stats.incidents["new"] + data.stats.incidents.current;
        $scope.stats;
        return chrome.browserAction.setBadgeText({
          text: ($scope.incidents > 0 ? $scope.incidents : '') + ''
        });
      });
    }

    return PopupController;

  })();


  /*
    Register all controllers
   */

  app.controller("PopupController", PopupController);

}).call(this);
