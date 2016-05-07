var path = require('path');

module.exports = function(app){

	app.get('/survey', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	//already at home page, or no match
	app.use(function(req,res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});


}