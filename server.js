require('dotenv').load();

var express = require('express'),
	path = require('path');

var app = express(),
	directory = path.join(__dirname, process.argv[2] || process.env.PUBLIC || 'public'),
	port = process.argv[3] || process.env.PORT || 9000;


app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});

app.use(express.static(directory));
app.set('port', port);

var server = app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + port + ' from ' + directory);
});

