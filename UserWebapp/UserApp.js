var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());


News = require('./Article');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/newsApp');
var db = mongoose.connection;

app.get('/', function(req, res){
	res.send('Hello Tarek');
});



app.get('/api/article', function(req, res){
	News.getNews(function(err, news){
		if (err) {
			throw err;

		}

		res.json(news);

	})

});

app.get('/api/article/:_id', function(req, res){
	News.getNewsById(req.params._id,function(err, news){
		if (err) {
			throw err;

		}
		res.json(news);
	})

});

app.post('/api/article', function(req, res){
	var news = req.body;
	News.addNews(news, function(err, news){
		if (err) {
			throw err;

		}
		res.json(news);
	})

});

app.put('/api/article/:_id', function(req, res){
	var id = req.params._id;
	var user = req.body;
	News.updateNews(id,news,{}, function(err, news){
		if (err) {
			throw err;

		}
		res.json(news);
	})

});



app.listen(8080);
console.log('Running on port 8080...');