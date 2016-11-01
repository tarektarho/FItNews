function newsCard() {
  return {
    restric : 'EA',
    scope: {
      news: '='
    },
      template: `<div class="row" >
               <div class="text-center">
               <div class="col s12">
               
                 <div class="card grey lighten-3">
                 <h1> {{ news.Articles}}</h1>
                   
                   <img ng-src="{{ new.multimedia[3].url }}"/>
                   
                     <span class="card-title">{{ news.Author }}</span>
                    <p> {{ news.Title }}</p>
                     
                         
                         <p> {{ news.Url }}</p>
                        
                         <p> {{ news.Description }}</p>
                        
                         
                         
                    </div>
                   </div>
                 </div>
               
               
             </div>`
    };
}

