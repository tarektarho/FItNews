var http = require('follow-redirects').http;
var todosAPI = require('../GetNewsWebapp/todosAPI');

var source = 'talksport';


var options = {
  host: 'www.newsapi.org',
  path: '/v1/articles?source=talksport&sortBy=top&apiKey=2dee9ef71f004d17943268eaaa57e2a4'
  

};
function GetNews(api){

if (source === 'talksport') {
  source = 'espn';
}
else {
  source = 'talksport';
}

options.path = '/v1/articles?source=' + source + '&sortBy=top&apiKey=2dee9ef71f004d17943268eaaa57e2a4'

var req = http.get(options, function(res) {

  //console.log('STATUS: ' + res.statusCode);
 // console.log('HEADERS: ' + JSON.stringify(res.headers));

  // Buffer the body entirely for processing as a whole.
    var bodyChunks = [];
    res.on('data', function(chunk) {
      // You can process streamed parts here...
          bodyChunks.push(chunk);
      }).on('end', function() {
       var body = Buffer.concat(bodyChunks);
        var json =JSON.parse(body);
        console.log(json.articles.length);
        api.updateArticles(json.articles, function(err, result) {});

     });
    });

      req.on('error', function(e) {
      console.log('ERROR: ' + e.message); 
    });
    }



/*function isSportnews(articles){
 var MyFilter = ["football","soccer","championships","champions","playoff","league","goals"];
  for (var i = 0; i < MyFilter.length; i++){
    if (article.title == MyFilter ){

    }
    console.log(MyFilter[i]);
 }
 

}*/

var CronJob = require('cron').CronJob;
var api = new todosAPI();
var job = new CronJob('*/8 * *  * * *', function() {
      console.log('Geting News..');
       GetNews(api);

      


   }, function () {
          /* This function is executed when the job stops */
          console.warn('Job stopped');
       },
         true, /* Start the job right now */
          'Europe/Amsterdam' /* Time zone of this job. */
   );
