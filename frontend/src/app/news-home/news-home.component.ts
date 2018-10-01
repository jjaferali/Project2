import { Component, OnInit } from '@angular/core';
import { News } from '../models/news';
import { NewsService } from '../services/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { INews } from '../models/news.inteface';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.css']
})
export class HomeComponent implements OnInit {
    newsapiEndpoint: string;
    topHeadline:INews[];
    category:INews[];
    optionCategory:string;   
    news: INews;
    constructor(private service:NewsService, private router: Router) {
      this.newsapiEndpoint=environment.newsapiEndpoint; 
      this.optionCategory="General";
     }
  
    ngOnInit() {
     this.getHeadLines();
     this.getCategory();
    }
  
    categoryChange(){
      this.getCategory();
    }
    getHeadLines(){
        return this.service.get(this.newsapiEndpoint+'GetHeadLines').
                subscribe(
                  result => { 
                    if(result.length>0)                               
                    this.topHeadline = result;   
                    else
                    window.alert('No news found.');                  
                  }, 
                  err => {                      
                      console.log(err);
                      window.alert('Could not connect to News API server.'); 
                  });         
  
    }
  
    getCategory(){
      return this.service.get(this.newsapiEndpoint+'GetCategory/'+this.optionCategory).
              subscribe(
                response => {
                  this.category = response;
                },
                 err => {                      
                  console.log(err);                
              });          
  
  }

  
}