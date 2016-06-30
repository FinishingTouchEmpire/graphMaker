//var routes = require('./routes.js');
var bodyParser = require('body-parser');
var graphMaker = require('../graphMaker.js');
var request = require('request');
var cytoscape = require('../cytoscape.js');



module.exports = function (app, express) {
  
  //route for client
  // var listRouter = express.Router();

  //parse json
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  //serve index
  app.use(express.static(__dirname + '/../../client'));





  app.post('/api/graph', function (req, res) {
    var query = req.body.search;

    request('http://api.undata-api.org/UNSD/Environment%20Statistics%20Database/Precipitation/United%20Kingdom/records?app_id=b77582b5&app_key=524b5dfcab8cfef9500afd34f73fb855', function(error, response, body) {
      if (error) {
        console.log('Something went wrong with reddit', error);
        res.send(error);
      } else {

        var body = JSON.parse(body);
        var ukBody = body;
        request('http://api.undata-api.org/UNSD/Environment%20Statistics%20Database/Precipitation/Colombia/records?app_id=b77582b5&app_key=524b5dfcab8cfef9500afd34f73fb855', function(error, response, body) {

          //send off the results
          var body = JSON.parse(body);

          var info = body.concat(ukBody);
          // res.send(info)
          console.log('Something went wrong with reddit', info);
          var key1 = 'value';
          var key2 = 'year';
          var graph = graphMaker(info, key1, key2);
          // cy = cytoscape(graph);
          res.send(graph);
        });
        
      }
      // res.send(body);
    });


  });
  
};
