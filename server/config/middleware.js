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

    request('https://json.reddit.com/search?q=' + query + '&sort=hot&limit=100', function(error, response, body) {
      if (error) {
        console.log('Something went wrong with reddit', error);
        res.send(error);
      } else {
        var body = JSON.parse(body);
        console.log('Something went wrong with reddit', body.data.children);
        //send off the results
        var info = body.data.children;
        var key1 = 'created_utc';
        var key2 = 'subreddit';
        var graph = graphMaker(info, key1, key2);
        // cy = cytoscape(graph);

        res.send(graph);
        
      }
    });


  });
  
};
