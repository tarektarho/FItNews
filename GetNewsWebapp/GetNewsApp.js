
var http = require('http');
var http = require('follow-redirects').http;
var options = {
  host: 'www.newsapi.org',
  path: '/v1/articles?source=bbc-sport&sortBy=top&apiKey=d6bb5fe7585e43ae8517303a8492c5e1'
};
function GetNews(){
var req = http.get(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  // Buffer the body entirely for processing as a whole.
  var bodyChunks = [];
  res.on('data', function(chunk) {
    // You can process streamed parts here...
    bodyChunks.push(chunk);
  }).on('end', function() {
    var body = Buffer.concat(bodyChunks);
    var json =JSON.parse(body);
    console.log('Title: ' + json.articles[0].title);
     console.log('Description: ' + json.articles[0].description);
    // ...and/or process the entire body here.
  })
});

	req.on('error', function(e) {
  console.log('ERROR: ' + e.message);
});
}

function isSportnews( artical ){
 var MyFilter = ["football","soccer","championship","champions","playoff","league"];
  for (var i = 0; i < MyFilter.length; i++){
    console.log(MyFilter[i]);
  }




}





var CronJob = require('cron').CronJob;
var job = new CronJob('*/5 * *  * * *', function() {
      console.log('GetNews');
       GetNews();
       isSportnews( "artical" );


    }, function () {
          /* This function is executed when the job stops */
          console.warn('Job stopped');
        },
          true, /* Start the job right now */
          'Europe/Amsterdam' /* Time zone of this job. */
    );
