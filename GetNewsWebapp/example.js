
var CronJob = require('cron').CronJob;
var job = new CronJob('10 * *  * * *', function() {
      console.log('Lift!');
    }, function () {
          /* This function is executed when the job stops */
          console.warn('Job stopped');
        },
          true, /* Start the job right now */
          'Europe/Amsterdam' /* Time zone of this job. */
    );


