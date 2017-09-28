(function () {
  'use strict';
  angular.module('starter.controllers').controller('SettingCtrl',['$scope','localStorageService','$state',function ($scope,localStorageService,$state) {
    $scope.goBack =function () {
      $ionicHistory.nextViewOptions({
        disableBack:true
      });
      $state.go('app.home')
    };
    $scope.callPhone = function () {
      location.href ='tel:' + $scope.shop.shopPhone;
    }
  }])
})();
