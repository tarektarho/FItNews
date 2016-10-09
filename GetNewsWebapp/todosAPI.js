var todosAPI = {

    getTodos: function(collection, document, callback) {
        db.todosdata.find().toArray(function(err, result) {
            if (err) {
                console.log(err);
                callback('Error getting todos', null);
            } else if (result.length) {
                console.log('Found:', result);
                callback(null, result);
            } else {
                console.log('No document(s) found with defined "find" criteria!');
            }
        })
    }
},
insertTodo: function(connection, insertItem, callback) {

        db.collection('todosdata').insert(insertItem,function(err) {
            if (!err) {
                callback(null);

            } else {
                console.warn('Error in insertTodo');
                callback(null);
            }
            
},

updateTodo: function(connection, updateItem,id, callback) {
  db.collection('todosdata').update(updateItem, function(err) {
        if (!err) {
            callback(null);

        } else {
            console.warn('Error in updateTodo');
            callback(null);
        }
    });
},

deleteTodo: function(connection, id, callback) {
    if (id) {
      db.collection('todosdata').deleteOne(deleteItem, function(err) {
            if (!err) {
                callback(null);
            } else {
                console.warn('Error in deleteTodo');
                callback(null);
            }
        });
    }

}
};
module.exports.todosAPI = todosAPI;