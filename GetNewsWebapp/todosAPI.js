var mongo = require('mongodb').MongoClient;

var todosAPI = function() {
    var self = this;
    self.collection = null;

    mongo.connect('mongodb://localhost:27017/newsapp', function(err, db) {
        if (!err) {
            self.db = db;
            self.collection = db.collection('news');
            console.log('Database is connected ...');
        } else {
            console.warn('Error connecting database ...');
        }
    });
}

todosAPI.prototype.getNewsapp = function(document, callback ) {



        this.collection.find().toArray(function(err, result) {
            if (err) {
                console.log(err);
                callback('Error getting newsapp', null);
            } else if (result.length) {
                console.log('Found:', result);
                callback(null, result);
            } else {
                console.log('No document(s) found with defined "find" criteria!');
            }
        });
    };



todosAPI.prototype.insertNewsapp = function(insertItem, callback) {

        this.collection.insert(insertItem,function(err) {
            if (!err) {
                callback(null, 'Succes');

            } else {
                console.warn('Error in insertTodo');
                callback(err, null);
            }
            
        });
    };

todosAPI.prototype.updateNewsapp = function(updateItem,id, callback) {
      this.collection.update(updateItem, function(err) {
        if (!err) {
            callback(null);

        } else {
            console.warn('Error in updateTodo');
            callback(null);
        }
    });
  };

todosAPI.prototype.updateArticles = function(articles, callback) {
    this.db.createCollection('news_updated');

    var new_collection = this.db.collection('news_updated');

    new_collection.insertMany(articles,function(err) {
        if (!err) {
            callback(null, 'Succes');

        } else {
            console.warn('Error in insertTodo');
            callback(err, null);
        }        
    });

    this.db.renameCollection('news_updated','news', {dropTarget: true});
    //self.collection = db.collection('news');
 };

todosAPI.prototype.deleteNewsapp = function(id, callback) {

         var item = this.collection.findOne({ '_id': id});
         console.log(item);
    
            this.collection.removeOne( { _id: item._id } , function(err,result) {
                this.collection.save();
               

                if (!err) {
                    callback(null);
                } else {
                    console.warn('Error in deleteTodo');
                    callback(null);

                }
            });
        

    

};

module.exports = todosAPI;