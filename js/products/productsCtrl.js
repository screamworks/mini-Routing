angular.module('mini-routing').controller('productsCtrl', function($scope, productService, $stateParams) {
  if ($stateParams.product === 'shoes') {
       $scope.productData = productService.shoeData;
   }
   else if ($stateParams.product === 'socks') {
       $scope.productData = productService.sockData;
   }
  // console.log(productService);
  //  $scope.productData = productService[$stateParams.product]

});
