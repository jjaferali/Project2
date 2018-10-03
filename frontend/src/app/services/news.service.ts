import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { INews } from '../models/news.inteface';
import { environment } from '../../environments/environment';
import { News } from '../models/news';
import { Http } from '@angular/http';


@Injectable()
export class NewsService {  
 
  newsapiEndpoint: string;
  newsDBEndpoint:string;
  constructor(private http: HttpClient) {
    this.newsapiEndpoint=environment.newsapiEndpoint; 
   
  }
  get(url:string):Observable<Array<INews>> {

    return this.http.get(url)
                .pipe(map((response:any)=> {
                  //console.log(response);                 
                  return this.MapNews(response);
                })); 

  }

  getFavourites():Observable<Array<INews>> {
    var url = environment.newsapiEndpoint;  
    return this.http.get(url)
                .pipe(map((response:any)=> {
                 // console.log(response);                 
                  return this.MapNews(response);
                })); 

  }
  delete(id: number): Observable<boolean> {
    return this.http.delete(this.newsapiEndpoint + '/' + id).pipe(
        map((response: Response): any => {
            const status = response.status;
            if (status === 200) {
             this. getFavourites();
                return true;
            }

            return false;
        }));
}
  
 post(news: INews): Observable<any> {

  const newsObj = {
    id:news.id,
    name:news.name,
    author:news.author,
    description:news.description,
    title:news.title,
    url:news.url,
    urlToImage:news.urlToImage,
    publishedAt:news.publishedAt,         
      
  };
  const bodyData = JSON.stringify(newsObj);
  //console.log(bodyData); 
  const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  };

 return this.http.post(this.newsapiEndpoint, bodyData, httpOptions).pipe(
      map((response: any): any => {
          return 'Added sucessfully.';
      }),
      catchError((error: any): any => {
          if (error.status === 409) {
             return of('Already Added.');
          }
      })
  );
}
  MapNews(response: any): any   {
   const news=[];
   response.forEach(element => {
    news.push(this.MapNewsData(element))
   });
   return news;
  }
   MapNewsData(data: any): INews {
     const response=new News();
       response.id=data.id;
       response.name=data.name;
       response.author=data.author;
       response.description=data.description;
       response.title=data.title;
       response.url=data.url;
       response.urlToImage=data.urlToImage;
       response.publishedAt=data.publishedAt;
       response.newsId=data.newsId;
       if (data.newsId == '0' ||data.newsId === '' || data.newsId == null || data.newsId === undefined)
        response.isExist=false;
      else
       response.isExist=true;
      
       return response;    
  }
  
}
