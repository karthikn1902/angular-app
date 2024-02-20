var myApp = angular.module("myList",[]);
myApp.controller("myListController",function($scope){
    $scope.Items = ["AngularJS","ReactJs","UnderscoreJs"];
    $scope.newItem = "";
    $scope.pushItems= function(){
        if($scope.newItem != ""){
        $scope.Items.push($scope.newItem);
        $scope.newItem = "";
    }
}

    $scope.deleteitems = function(index){
        $scope.Items.splice(index, 1);
    }
});