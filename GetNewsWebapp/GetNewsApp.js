
var http = require('http');
var http = require('follow-redirects').http;

var options = {
  host: 'www.newsapi.org',
  path: '/v1/articles?source=talksport&sortBy=top&apiKey=2dee9ef71f004d17943268eaaa57e2a4'

};
function GetNews(){

var req = http.get(options, function(res) {

 // console.log('STATUS: ' + res.statusCode);
 // console.log('HEADERS: ' + JSON.stringify(res.headers));

  // Buffer the body entirely for processing as a whole.
  var bodyChunks = [];
  res.on('data', function(chunk) {
    // You can process streamed parts here...
    bodyChunks.push(chunk);
  }).on('end', function() {
   var body = Buffer.concat(bodyChunks);
    var json =JSON.parse(body);
    for (var i =0; i < json.articles.length;  i++) {
         console.log('Title: ' + json.articles[i].title);
     console.log('Description: ' + json.articles[i].description);
       console.log('UrlToImage: ' + json.articles[i].urlToImage);
       
       if (isFootballnews(json.articles[i])){
        console.log(json.articles[i].url);

       }

        

    }

   
     
    
 });
});

	req.on('error', function(e) {
  console.log('ERROR: ' + e.message); 
});
}



//function isSportnews(articles){
 //var MyFilter = ["football","soccer","championships","champions","playoff","league","goals"];
  //for (var i = 0; i < MyFilter.length; i++){
    //if (article title == MyFilter ){

    //}
    //console.log(MyFilter[i]);
 //}
 

//}

function isFootballnews(article){
 // console.log(article);
  var MyFilter = ["football","soccer","championships","champions","playoff","league","goals"];
  for(var i = 0; i < MyFilter.length;i++){
    if (article.title.indexOf(MyFilter[i]) != -1 || article.description.indexOf(MyFilter[i]) != -1 ) {
      console.log(MyFilter[i]);
      return true;

    }
 


  return false;
}











var CronJob = require('cron').CronJob;
var job = new CronJob('*/8 * *  * * *', function() {
      console.log('GetNews');
       GetNews();

      


   }, function () {
          /* This function is executed when the job stops */
          console.warn('Job stopped');
       },
         true, /* Start the job right now */
          'Europe/Amsterdam' /* Time zone of this job. */
   );
