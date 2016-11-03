angular.module('newsApp', ['angular.filter'])
.controller('newsController', ['$scope', 'news',newsController])
.service('news', news );



   