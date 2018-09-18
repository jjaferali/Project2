import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { NewsService } from '../services/news.service';
import { Router, ActivatedRoute } from '@angular/router';
import { INews } from '../models/news.inteface';

@Component({
  selector: 'app-news-search',
  templateUrl: './news-search.component.html',
  styleUrls: ['./news-search.component.css']
})
export class NewsSearchComponent implements OnInit {
    newsapiEndpoint: any;
    news:INews[];
    searchText: string;

  constructor(private service:NewsService,private route: ActivatedRoute, private router: Router) {
    this.newsapiEndpoint=environment.newsapiEndpoint; 
   
   }

  ngOnInit() {

    this.route.queryParams
    .subscribe(params => {
        this.searchText = params['searchText'];
        this.service.get(this.newsapiEndpoint+'search/'+this.searchText)
        .subscribe(response => {
            this.news = response;
        });
    });
  }
    

   
  

}
