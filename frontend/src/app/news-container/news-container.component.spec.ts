import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsContainerComponent } from './news-container.component';
import { HomeComponent } from '../news-home/news-home.component';
import { NewsComponent } from '../news-feed/news-feed.component';
import { NewsService } from '../services/news.service';
import { NewsMaterialModule } from '../news-material/news-material.module';
import { HttpModule } from '@angular/http';
import { NewsRoutingModule } from '../news-route/news-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';
import { Observable } from 'rxjs';
import { News } from '../models/news';

describe('NewsContainerComponent', () => {
  let component: NewsContainerComponent;
  let fixture: ComponentFixture<NewsContainerComponent>;
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
    fixture = TestBed.createComponent(NewsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    newsService = TestBed.get(NewsService);
    spyOn(newsService, 'get').and.returnValue(new Observable<Array<News>>());
  });

  it('getFavouiteNews method should call api getAllNews Method.', async(() => {
    component.getFavouiteNews();
    fixture.detectChanges();
    expect(newsService.get).toHaveBeenCalled();
  }));
});
