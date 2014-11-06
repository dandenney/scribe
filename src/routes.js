(function() {
'use strict';

var reviews = ['ReviewResource', function(ReviewResource) {
  return ReviewResource.query();
}];

angular.module('Scribe')
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'index.html',
      controller: 'ReviewsIndexController',
      controllerAs: 'ctrl',
      resolve: { reviewsPrepService: reviews }
    })
    
    // Single Page for a specific book
    .when('/books/:id', {
      templateUrl: 'show.html',
      controller: 'ReviewShowController',
      controllerAs: 'ctrl',
      resolve: { reviewsPrepService: reviews }
    })

    .otherwise({redirectTo: '/'});
}]);

})();
