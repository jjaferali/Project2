import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NewsHeaderComponent } from './news-header/news-header.component';
import { Router, RouterOutlet } from "@angular/router";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';
import { NewsService } from './services/news.service';
import { HomeComponent } from './news-home/news-home.component';
import { NewsComponent } from './news-feed/news-feed.component';
import { NewsContainerComponent } from './news-container/news-container.component';
import { NewsMaterialModule } from './news-material/news-material.module';
import { HttpModule } from '@angular/http';
import { NewsRoutingModule } from './news-route/news-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsSearchComponent } from './news-search/news-search.component';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let newsService: NewsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent,NewsHeaderComponent,HomeComponent, NewsComponent, NewsContainerComponent,NewsSearchComponent],
      imports: [RouterTestingModule,NewsMaterialModule,HttpModule,HttpClientModule, NewsRoutingModule, BrowserAnimationsModule],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        NewsService],
        schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    newsService = TestBed.get(NewsService);
  });

  xit('should create the app component succesfully.', async(() => {    
    expect(component.title).toEqual("app");
    expect(component).toBeTruthy();
  }));
  
});
