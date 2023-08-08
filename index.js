var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope){
    console.log("My controller....");

    $scope.products=[
        {name:"Product one", price:22.5},
        {name:"Product two",price:15.6},
        {name:"Product Three", price:123.82},
        {name:"Product Four", price:123.754},
        {name:"Product five", price:65}
    ];
    $scope.addProduct= function(){
        $scope.products.push($scope.newProduct);
        $scope.newProduct={};
        $scope.message="New Product Add successfully";
    };
    $scope.selectProduct= function(product){
        console.log(product);
        $scope.clickedProduct= product;
    };
    $scope.deleteProduct= function(){
        $scope.products.splice($scope.products.indexOf($scope.clickedProduct), 1);
        $scope.message="Product deleted successfully";
    };
    $scope.clearMessage=function(){
        $scope.message="";
    };
});
