var Graph = require('./graph.js');

var graphMaker = function(data, key1, key2) {
  // instantiate new Graph
  var graph = new Graph();
  var list = [];

  //iterate through data - should be array of objects
  for (var i = 0; i < data.length; i++) {
    var mainValue = data[i][key1];
    if (mainValue > 280000) {
      mainValue = 'greater than 280000';
      var size = 'big';
      var weight = 100;
    } else if (mainValue < 280000 && mainValue < 240000){
      mainValue = 'between 240000 and 280000';
      var size = 'med';
      var weight = 50;

      
    } else {
      mainValue = 'less than 240000';
      var size = 'small';
      var weight = 0;


      

    }
    // }
    // day = new Date(mainValue);
    // day = day.getDay();
    // var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // mainValue = dayNames[day];
    var otherValue = data[i][key2];

    //template obj for main node
    var node = {
      'group': 'nodes',
      'data' : {
        'id': mainValue,
        'class' : size,
        'label' : size,
        'foo': weight
      }
    };

    //other node
    var otherNode = {
      'group': 'nodes',
      'data' : {
        'id': otherValue
      }
    };
    //template obj for edge
    var edge = {
      'data': {
        'id': mainValue + otherValue + i,
        'source': mainValue,
        'target': otherValue
      }
    };







    //check if it does not exist
    if (!graph.contains(mainValue)) {
      // create node
      graph.addNode(mainValue);
      list.push(node);
    }
    // check if otherValue does not exist
    if (!graph.contains(otherValue)) {
      // create node
      graph.addNode(otherValue);
      list.push(otherNode);
    }
    // create edge
    graph.addEdge(mainValue, otherValue);
    list.push(edge);
  }
  return list;

};

module.exports = graphMaker;