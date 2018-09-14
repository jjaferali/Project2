import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsComponent } from './news-feed.component';
import { HomeComponent } from '../news-home/news-home.component';
import { NewsContainerComponent } from '../news-container/news-container.component';
import { NewsMaterialModule } from '../news-material/news-material.module';
import { HttpModule } from '@angular/http';
import { NewsRoutingModule } from '../news-route/news-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsService } from '../services/news.service';
import { APP_BASE_HREF } from '@angular/common';
import { Observable } from 'rxjs';
import { News } from '../models/news';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;
  let newsService: NewsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, NewsComponent, NewsContainerComponent],
      imports: [NewsMaterialModule,HttpModule, NewsRoutingModule, BrowserAnimationsModule],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        NewsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;    
    component.news.newsId = 1;    
    fixture.detectChanges();
    newsService = TestBed.get(NewsService);
    spyOn(newsService, 'post').and.returnValue(new Observable<Array<News>>());
    spyOn(newsService, 'delete').and.returnValue(new Observable<Array<News>>());
  });

  it('addNews method should add news to favorites list.', async(() => {
    component.addNews();
    fixture.detectChanges();
    expect(newsService.post).toHaveBeenCalled();
  }));

  it('deleteNews method should remove news to favorites list.', async(() => {
    component.deleteNews(1);
    fixture.detectChanges();
    expect(newsService.delete).toHaveBeenCalled();
  }));
});
