/**
 * Created by Administrator on 2017/9/18.
 */
angular.module('starter.controllers')
.controller('LoginCtrl',['$scope','$state','$ionicPopup',
function ($scope,$state,$ionicPopup) {
  $scope.loginData={
    username:'admin'
    ,password:'123456'
  };

  $scope.login=function () {
    if($scope.loginData.username=='admin'&&
      $scope.loginData.password=='123456'){
      $state.go("app.playlists",{});
    }
    else {
      $ionicPopup.alert({
        title:'警告',
        template:'您的用户名或者密码错误',
        okText:'确定',
        okType:'button-energized'
      });
    }
  };
}]);


