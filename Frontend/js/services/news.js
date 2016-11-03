function news ($http) {

  var URL = 'http://localhost:8080/newsapp/';

  this.getNews = function () {
    return $http.get(URL);
    
  };
}

