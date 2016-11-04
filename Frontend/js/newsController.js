
function newsController($scope, news) {
   $scope.news;
   news.getNews().then(function (response) {
       $scope.news = response.data;
      
       angular.forEach($scope.news, function (item) {
           
           item.publishedAt = item.publishedAt.substr(0, 10);
            



       });
           
     /*$scope.TimedRefresh = function(t) {
           console.log(t);
           setTimeout("location.reload(true);", t*60);
   }

   $scope.TimedRefresh(50);*/
  

   }, function (error) {
       console.error(error);

       
   });

}

var newsApp = angular.module('newsApp',[]);

newsApp.controller("newsController", function ($scope,$http,$timeout,news){

  $scope.reload = function () {
    $http.get('http://localhost:8080/newsapp/').
        success(function (data) {
          $scope.news = data.news;
      });

    $timeout(function(){
      $scope.reload();
    },30000)
  };
  $scope.reload();
});
