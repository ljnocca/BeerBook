let Router = require('express').Router;
const proxyRouter = Router()
var apiKey = require('../config/secrets.js').key
var request = require('request');


var breweryURL = 'http://api.brewerydb.com/v2/search/'


// http://api.brewerydb.com/v2/search/?key=10b5b1f230397b88f1e4f6526073ea6f&q=guinness

var makeQueryString = function(obj){
		var outputString = ''
		for (var prop in obj) {
			outputString += prop + '=' + obj[prop] +"&"
		}
    outputString = '?' + outputString 
    return outputString.slice(0,-1)
}

// client sends a GET request with the pattern /proxy/brewery?q=guiness
proxyRouter.get('/brewery', function(clientRequest,clientResponse) {
	clientRequest.query.key= apiKey
	var queryString = makeQueryString(clientRequest.query)
	request(breweryURL+queryString, function (error, brewResponse, body){
		if(error){
			return clientResponse.status(400).json(error)
		}
		clientResponse.json(JSON.parse(body))

	})

	
	// here we'll use a node library to make a request using our key and anything else sent int he query string from the client
		// client's query string is referenced as an object with request.query
	
	// once we get a response back from brewery api, send it back in our own response with repsonse.json

})

module.exports = proxyRouter