function newsController($scope, news) {
    $scope.news;
    news.getNews().then(function (response) {
        $scope.news = response.data.results;
        news.setNews(response.data.results);

    }, function (error) {
        console.error(error);
    });
}

function singleController($scope, news, $location, $routeParams) {
    $scope.news = news.data;
    $scope.tellSingle = $routeParams.singleId;
}