angular.module('gm.ctrl', [])

.controller('graphMakerCtrl', function($scope, API, $state) {
 
  $scope.query = '';

  $scope.search = function(query) {
      API.getGraph($scope.query).then(function(result){
      console.log(result.data);
      $scope.cy = $scope.buildGraph(result.data);
      console.log($scope.cy);
    });
  };


  $scope.buildGraph = function(graph) {
    return cytoscape({

    container: document.getElementById('cy'), // container to render in

    elements: graph,

    style: [ // the stylesheet for the graph
      {
        selector: 'node',
        style: {
          'background-color': '#666',
          'label': 'data(id)'
        }
      },


      {
        selector: 'edge',
        style: {
          'width': 3,
          'line-color': 'green',
          'target-arrow-color': '#ccc',
          'target-arrow-shape': 'triangle',
          'curve-style': 'haystack'
        }
      }
    ],

    zoom: 1,
    pan: { x: 0, y: 0 },

    layout: {
      name: 'concentric'
      // circle: true
    }

    });
  };

});