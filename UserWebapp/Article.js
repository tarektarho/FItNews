var mongoose = require('mongoose');

// article Schema
var newsSchema = mongoose.Schema({
   title:{
   	type: String,
   	required: true
   },
   
     description:{
   		type: String
   	
   },
    author:{
   		type: String,
   	required: true
   },
    publisher:{
   		type: String
   	
   },
   
     image_url:{
   		type: String
   	
   },
    
   create_date:{
   	type: Date,
   	default: Date.now
   }

});

var News = module.exports = mongoose.model('News',newsSchema);

// Get Article

module.exports.getNews = function(callback, limit){
	News.find(callback).limit(limit);
}

// Get Article

module.exports.getNewsleById = function(id, callback){
	News.findById(id,callback);
}

//Add Article
module.exports.addNews = function(news,callback){
	News.create(news,callback);
}

//Update  Article 
module.exports.updateNews = function(id, news ,options, callback){
	var query = {_id: id};
	var update = {
	    title: news.title,
	    description: news.description,
	    author: news.author,
	    publisher: news.publisher,
	    image_url: news.image_url,
	    
	}
	News.findOneAndUpdate(query, update , options ,callback);
}




