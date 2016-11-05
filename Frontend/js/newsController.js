function newsController($scope, news) {
  $scope.news;
  $scope.request = false;

  $scope.updateNews = function(){
    $scope.request = true;
    console.log('Updating news!!')
    news.getNews().then(function(response) {  
      $scope.request = false;
      $scope.news = typeof $scope.news === 'object' ? $scope.news.concat(response.data) : response.data;
      angular.forEach($scope.news, function(item) {
        item.publishedAt = item.publishedAt.substr(0, 10);
      });
    }, function(error) {
      console.error(error);
    });
  }
  
  $scope.updateNews();
  
  angular.element(window).bind('scroll', function(){
    var offSet = this.pageYOffset;
    var documentHeight = document.documentElement.scrollHeight;
    var clientHeight = window.innerHeight;
    var margin = 100; // this is pixels
    console.log(offSet,  clientHeight, documentHeight, clientHeight );
    console.log(documentHeight - (offSet + clientHeight - margin));
    // pageHeight - (scrollPos + clientHeight) < 50
    if( documentHeight - (offSet + clientHeight - margin) - margin < margin && !$scope.request ){
      console.log('ಠ_ಠ')
      $scope.updateNews();
    }
  });

}
