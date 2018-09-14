import { Component, OnInit } from '@angular/core';
import { News } from '../models/news';
import { NewsService } from '../services/news.service';
import { ActivatedRoute } from '@angular/router';
import { INews } from '../models/news.inteface';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.css']
})
export class NewsContainerComponent implements OnInit {
  news: INews[];

  constructor(private service: NewsService,   private activatedRoute: ActivatedRoute) {     
  }

  ngOnInit() {
    this.getFavouiteNews();
  }
  //Method used to get news Favourite News
  getFavouiteNews() {
      
    this.service.getFavourites()
    .subscribe(
      result => {                                
        this.news = result;                    
      }, 
      err => {                      
          console.log(err);
      });
  }      
  
}
