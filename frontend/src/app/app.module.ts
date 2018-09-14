import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewsHeaderComponent } from './news-header/news-header.component';
import { HomeComponent } from './news-home/news-home.component';
import { NewsContainerComponent } from './news-container/news-container.component';
import { NewsComponent } from './news-feed/news-feed.component';
import { NewsMaterialModule } from './news-material/news-material.module';
import { NewsRoutingModule } from './news-route/news-routing.module';
import { NewsService } from './services/news.service';
import { HttpClientModule } from '@angular/common/http';
import { NewsSearchComponent } from './news-search/news-search.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsHeaderComponent,   
    HomeComponent,
    NewsContainerComponent,
    NewsComponent,
    NewsSearchComponent
  ],
  imports: [HttpModule,HttpClientModule,FormsModule,NewsMaterialModule,NewsRoutingModule,
    BrowserModule, BrowserAnimationsModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
