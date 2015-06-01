var http = require('http');

var get = function(username) {
  var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response) {
    var body = '';
    
    //Read the data
    response.on('data', function(chunk) {
      body += chunk;
    });
    
    response.on('end', function() {
      if (response.statusCode === 200) {
        try {
          //Parse the data
          var profile = JSON.parse(body);
          printMessage(username, profile.badges.length, profile.points.JavaScript);
        } catch(error) {
          //Parse error
          printError(error);
        }
      } else {
        //Status Code Error
          printError({message: "There was an error getting the status code for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
        }
      });
    });
    
    //Print message
  var printMessage = function(username, badgecount, points) {
    var message = username + " has " + badgecount + " total badge(s) and " + points + " points in JavaScript.";
    console.log(message);
  };
  
  //Print error messages
  var printError = function(error) {
    console.error(error.message);
  };
  
  //event handler
  var connectionError = request.on("error", printError);
}

module.exports.get = get;