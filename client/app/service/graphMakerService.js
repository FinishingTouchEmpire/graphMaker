angular.module('gm.service', [])

.factory('API', function($http) {
  var getGraph = function(query) {
    return $http({
      method: 'POST',
      url: '/api/graph/',
      data: JSON.stringify({search: query})
    }).then(function(data) {
      return data;
    }, function(error) {
      return error;
    });
  };

  return {
    getGraph: getGraph
  };
});