var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var todosAPI = require('../GetNewsWebapp/todosAPI');


var app = express();


var api =  new todosAPI();

app.use(bodyParser.json());


app.get('/newsapp', function(request, response) {
    var id = request.params.id;

    var rows = api.getNewsapp(id,   function(err, documents) {
        if (!err) {
            console.log('Documents received by get: ', documents);
            response.json(documents);
            response.end();
        } else {
            console.warn('Error in GET');
        }
    });

});

// Insert a todo
app.post('/newsapp', function(request, response) {


    var insertItem = request.body;

    console.log("The body is: ", insertItem, request);
    if (!insertItem.name) return response.status(404).end();



      var inserted = api.insertNewsapp(insertItem, function(err, documents) {
        if (!err) {
            console.log('Documents Insert by post' , documents);
            response.json(documents);
          response.end();
      } else{
            console.warn('Error in POST');
      }
        
      });

});

// Delete  news
app.delete('/newsapp/:id', function(request,response){
	var ItemId = request.params.id;
	
	if (!ItemId) return response.status(404).end();
	api.deleteNewsapp(ItemId, function(err, Item){
		if (!err) {
			console.log('item Delete', ItemId)
			response.status(200).end();


		} else{
			console.log("Delete Error");
			response.end();
		}
	})


})

// Update a todo
app.put('/newsapp/:id', function(request, response) {
    var updateItem = request.body;
    var updateId = request.params.id; 
    console.log("Tring to updet:",updateItem);

   
    var updateFunction = api.updateNewsapp(updateItem, updateId, function(err, documents) {
        if (!err){
            console.log('documents updet',documents);
            response.json(documents);
        response.end();

        } else{
            console.warn('Error in updet');
            response.end();
        }

    });
});


function sendError(response, code, message) {
    response.statusCode = code;
    response.json({
        error: message
    });
    response.end();
}


// Start the server.
app.listen(8080);
console.log('Running on port 8080...');