import { Component, OnInit, Input } from '@angular/core';
import { News } from '../models/news';
import { NewsService } from '../services/news.service';
import { Router } from '@angular/router';
import { INews } from '../models/news.inteface';
import { Location } from '@angular/common';


@Component({
  selector: 'app-news',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsComponent implements OnInit {

  @Input()
  news: INews;
  newsFaVourite: INews[];
  constructor(private newsService: NewsService,location: Location,
    private router: Router) { }

  ngOnInit() {
  }
 
  //Method used to add news to favorites list.
  addNews()  { 
      this.newsService.post(this.news)
        .subscribe(
          message => {
            window.alert(message);
            this.router.navigate(['/favorites']);
          });
  }

  //Method used to remove news from favorites list.
  deleteNews(id: number) {
    this.newsService.delete(id).subscribe(
        response => {         
            window.alert('Deleted Succesfully');             
            this.router.navigate(['/home']);  
            location.reload();
          
        });
        
  }


  
}

