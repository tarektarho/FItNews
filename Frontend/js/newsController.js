function newsController($scope, news) {
    $scope.news;
    news.getNews().then(function (response) {
        $scope.news = response.data;
       
        angular.forEach($scope.news, function (item) {
            
            item.publishedAt = item.publishedAt.substr(0, 10);




        });
            
              $scope.TimedRefresh = function(t) {
            console.log(t);
            setTimeout("location.reload(true);", t*60);
    }

     $scope.TimedRefresh(500);

    }, function (error) {
        console.error(error);
        
    });

}


  