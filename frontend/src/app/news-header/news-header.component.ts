import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './news-header.component.html',
  styleUrls: ['./news-header.component.css']
})
export class NewsHeaderComponent implements OnInit {

  searchText: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  search() {
    this.router.navigate(['/search-result'],
    { queryParams: { searchText: this.searchText }, skipLocationChange: false });
  this.searchText = '';
  }

}
