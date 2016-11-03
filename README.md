# SportNews

### Project overview

SportNews is a website that scans news headlines from many new feeds and aggregates news about sport, football, basketball, tennis, and all other sport. SportNews uses the API from https://newsapi.org to scan headlines and descriptions of articles as they come up. 

### Frontend 
SportNews front end is constructed using Angular.js and has a simple interface to view:
1) News title
2) News source
3) News description

Clicking on the article will take the user to the news site in a new window. 

### Backend 
SportNews backend is written in NodeJS and uses the Mongo database server to store articles and serve them to the frontend. 

There are two backend processes:

1) A user webapp that communicates with the frontend using JSON to display articles
  - This app supports two HTTP verbs:
  
  1) GET - to get articles from the database
  
  2) POST - to add articles to the database
  
  3) PUT - to update articles in the database (optional until we know if we need to update articles)

2) A background webapp that requests new articles from the selected sources and if they are appropriate adds them to the database
  - This app is responsible for:
  
   1) Getting news from our news API 
   
   2) Checking if there is new news
   
   3) Check if the news is sport news 
   
   4) If sport news then `POST` to our user webapp to add the article
   
### Project plan
1) We start with a prototype to demonstrate functionality using ONE news source and building all parts of the application except the front end which will start as plain text. 
2) Create database to hold news articles and define functions to `INSERT` data and to `SELECT` (get, fetch, query) the articles
3) Connect Express and user webapp to serve articles when a `GET` request is made and to add articles when a `POST` request is made
4) Create a long running process (`daemon`) that runs all the time and is checking for new articles
5) When the JSON objects we are returning are more defined we will build the Angular frontend 

### Frontend Sketch
![Front end sketch](https://github.com/tarektarho/SportNews/blob/master/FrontEnd%20And%20BackEnd%20sketch/frontEnd1.jpg?raw=true)

### Backend Sketch
![Back end sketch](https://github.com/tarektarho/SportNews/blob/master/FrontEnd%20And%20BackEnd%20sketch/backEnd1.jpg)
