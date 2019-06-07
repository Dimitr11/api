(function () {
  'use strict';
  angular.module('aj').controller('myCtrl', function($scope) {
    $scope.name = 'World';
  $scope.brands = [{
    "brand": "abc",
    id: 1
  }, {
    "brand": "xyz",
    id: 2
  }, {
    "brand": "abc",
    id: 3
  }, {
    "brand": "abc",
    id: 4
  }, {
    "brand": "por",
    id: 5
  }, {
    "brand": "xyz",
    id: 6
  }];

  sortResults('brand', true);
  function sortResults(prop, asc) {
    $scope.sorted = $scope.brands.sort(function(a, b) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
    console.log("sorted", $scope.sorted);
  }

  $scope.add = function(value){
    $scope.brands.push({brand:value});
    sortResults('brand', true);
  }

  $scope.delete = function (item,ident) {
sortResults('brand', true);
  //  months.splice(4, 1, 'May');
// replaces 1 element at index 4
       $scope.brands.splice($scope.brands.indexOf(ident), 1);
       console.log($scope.brands.indexOf(ident));
       console.log(item);
       console.log("identifiant",ident)

console.log($scope.brands)
   }

  $scope.getCount = function(i) {
    var iCount = iCount || 0;
    for (var j = 0; j < $scope.brands.length; j++) {
      if ($scope.brands[j].brand == i) {
        iCount++;
      }
    }
    return iCount;
  }

  });
  angular.module('aj').filter('unique', function() {

  return function (arr, field) {
    var o = {}, i, l = arr.length, r = [];
    for(i=0; i<l;i+=1) {
      o[arr[i][field]] = arr[i];
    }
    for(i in o) {
      r.push(o[i]);
    }
    return r;
  };
})


})();
