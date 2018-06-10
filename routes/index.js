exports.default = function(req, res){
  res.status(404).render('404.')

};
exports.whatIsMyIP = function(req, res){
  res.type('application/json');
  var result = {
    "fulfillmentText": "Your internet address is being reported as " + req.ip.replace("::ffff:",""),
    "source": "myairplane.com",
    "payload": {
    "google": {
      "expectUserResponse": true,
      "richResponse": {
        "items": [
          {
            "simpleResponse": {
              "textToSpeech": "Your internet address is being reported as " + req.ip.replace("::ffff:","") 
              }
            }
          ]
        }
      },
    }
  }
  
  res.send(result);
};