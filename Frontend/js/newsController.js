function newsController($scope, news) {
    $scope.news;
    news.getNews().then(function (response) {
        $scope.news = response.data.results;
       
        angular.forEach($scope.news, function (item) {
            item.created_date = item.created_date.substr(0, 10);
        });
    }, function (error) {
        console.error(error);
    });
}

