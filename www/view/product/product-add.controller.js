(function () {
  'use strict';
  angular.module('starter.controllers').controller('ProductAddCtrl',['$scope','CategoryService',function ($scope,CategoryService) {
    $scope.product={
      ID:0,
      Name:'',
      CategoryID:CategoryService.activeCategory.ID,
      Category:{
        ID:CategoryService.activeCategory.ID,
        Name:CategoryService.activeCategory.Name
      }
    };
    $scope.$on('CategoryUpdate',function (event,data) {
      $scope.product.CategoryID =CategoryService.activeCategory.ID;
      $scope.product.Category.ID=CategoryService.activeCategory.ID;
      $scope.product.Category.Name=CategoryService.activeCategory.Name;
      //console.log($scope.product);
    });

    $scope.scanBarcode=function () {
      $cordovaBarcodeScanner.scan().then(function (barcodeData) {
        $scope.productData.
      })
    }


  }]);
})();
