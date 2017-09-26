/**
 * Created by Administrator on 2017/9/26.
 */
(function () {
  'use strict';
  angular.module('starter.controllers').controller('CategoryListCtrl','$ionicHistory',['$scope',function ($scope,$ionicHistory) {
    $scope.categories=[

      {
        ID:1
        ,Name:'电脑整机'
        ,Children:[
        {
          ID:5
          ,Name:'笔记本'
          ,Children:[]
        }
        ,{
          ID:6
          ,Name:'台式机'
          ,Children:[]
        }
        ,{
          ID:7
          ,Name:'平板电脑'
          ,Children:[]
        }
      ]
      }
      ,{
        ID:2
        ,Name:'电脑配件'
        ,Children:[
          {
            ID:8
            ,Name:'CPU'
            ,Children:[]
          }
          ,{
            ID:9
            ,Name:'内存'
            ,Children:[]
          }
        ]
      }
      ,{
        ID:3
        ,Name:'外设产品'
        ,Children:[
          {
            ID:10
            ,Name:'鼠标'
            ,Children:[]
          }
          ,{
            ID:6
            ,Name:'键盘'
            ,Children:[]
          }
          ,{
            ID:7
            ,Name:'U盘'
            ,Children:[]
          }
        ]
      }
      ,{
        ID:4
        ,Name:'网络产品'
        ,Children:[
          {
            ID:13
            ,Name:'路由器'
            ,Children:[]
          }
          ,{
            ID:14
            ,Name:'交换机'
            ,Children:[]
          }
          ,{
            ID:15
            ,Name:'网卡'
            ,Children:[]
          }
          ,{
            ID:16
            ,Name:'网络配件'
            ,Children:[]
          }
        ]
      }




    ];
    $scope.activeCategory={};
    if($scope.categories.length>0){
      $scope.activeCategory=$scope.categories[0];
    }

    $scope.selectCategory=function (index) {
      if($scope.activeCategory.ID !=$scope.categories[index].ID){
        $scope.activeCategory = $scope.categories[index];
      }
    };

    $scope.selectSubCategory=function (data) {
      console.log(data);
      $scope.activeSubCategory=data;
      $ionicHistory.goBack();
    };

  }]);
})();
