
var todosAPI = {

    getNewsapp: function(collection, document, callback ) {



        collection.find().toArray(function(err, result) {
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
    },



    insertNewsapp: function(collection, insertItem, callback) {

        collection.insert(insertItem,function(err) {
            if (!err) {
                callback(null);

            } else {
                console.warn('Error in insertTodo');
                callback(null);
            }
            
        });
    },

    updateNewsapp: function(collection, updateItem,id, callback) {
      collection.update(updateItem, function(err) {
        if (!err) {
            callback(null);

        } else {
            console.warn('Error in updateTodo');
            callback(null);
        }
    });
  },

  deleteNewsapp: function(collection, id, callback) {

         var item = collection.findOne({ '_id': id});
         console.log(item);
    
            collection.removeOne( { _id: item._id } , function(err,result) {
                collection.save();
               

                if (!err) {
                    callback(null);
                } else {
                    console.warn('Error in deleteTodo');
                    callback(null);

                }
            });
        

    

}
};
module.exports.todosAPI = todosAPI;