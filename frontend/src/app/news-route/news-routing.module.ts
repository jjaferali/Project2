import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../news-home/news-home.component';
import { NewsContainerComponent } from '../news-container/news-container.component';
import { NewsSearchComponent } from '../news-search/news-search.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'headlines', component: HomeComponent },
  { path: 'category', component: HomeComponent },
  { path: 'favorites', component: NewsContainerComponent },
  { path: 'search-result', component: NewsSearchComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
