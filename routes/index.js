exports.default = function(req, res){
  res.status(404).render('404.')

};
exports.whatIsMyIP = function(req, res){
  res.type('application/json');

  var result = {
    "source": "myairplane.com",
    "payload": {
    "google": {
      "expectUserResponse": false,
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