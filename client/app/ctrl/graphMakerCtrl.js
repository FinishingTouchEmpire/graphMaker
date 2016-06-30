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

    style: cytoscape.stylesheet()
    .selector('node')
      .css({
          'background-color': '#666',
          'label': 'data(id)',
          // 'width': 'mapData(foo, 3, 7, 10)',
          'width': 'mapData(foo, 0, 100, 5, 200)',

          'height': 'mapData(foo, 0, 100, 5, 200)'
        })
    .selector('edge')
      .css({
          // 'width': 3,
          'line-color': 'green',
          'target-arrow-color': '#ccc',
          'target-arrow-shape': 'triangle',
          'curve-style': 'bezier'
        })
    .selector('.big')
      .css({
          'background-color': 'blue',
          'width': 10,
          'height': 10
      })
    .selector('.med')
      .css({
          'width': 5,
          'height': 5
        })
    .selector('.small')
      .css({
          'width': 3,
          'height': 3
        }),
    // [ // the stylesheet for the graph
    //   {
    //     selector: 'node',
    //     style: {
    //       'background-color': '#666',
    //       'label': 'data(id)'
    //     }
    //   },


    //   {
    //     selector: 'edge',
    //     style: {
    //       // 'width': 3,
    //       'line-color': 'green',
    //       'target-arrow-color': '#ccc',
    //       'target-arrow-shape': 'triangle',
    //       'curve-style': 'bezier'
    //     }
    //   },
    //   {
    //     selector: '.big',
    //     style: {
    //       'width': 10,
    //       'height': 10
    //     }
    //   },
    //   {
    //     selector: '.med',
    //     style: {
    //       'width': 5,
    //       'height': 5
    //     }
    //   },
    //   {
    //     selector: '.small',
    //     style: {
    //       'width': 3,
    //       'height': 3
    //     }
    //   }
    // ],

    zoom: 1,
    pan: { x: 0, y: 0 },

    layout: {
      name: 'breadthfirst',
      rows: 1
      // circle: true
    }

    });
  };

});