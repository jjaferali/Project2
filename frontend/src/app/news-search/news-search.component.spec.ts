import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSearchComponent } from './news-search.component';
import { HomeComponent } from '../news-home/news-home.component';
import { NewsComponent } from '../news-feed/news-feed.component';
import { NewsContainerComponent } from '../news-container/news-container.component';
import { NewsMaterialModule } from '../news-material/news-material.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NewsRoutingModule } from '../news-route/news-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';
import { NewsService } from '../services/news.service';

describe('NewsSearchComponent', () => {
  let component: NewsSearchComponent;
  let fixture: ComponentFixture<NewsSearchComponent>;
  let newsService: NewsService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, NewsComponent, NewsContainerComponent,NewsSearchComponent],
      imports: [NewsMaterialModule,HttpModule,HttpClientModule, NewsRoutingModule, BrowserAnimationsModule],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        NewsService],
        
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create NewsSearchComponent', () => {
    expect(component).toBeTruthy();
  });
});
