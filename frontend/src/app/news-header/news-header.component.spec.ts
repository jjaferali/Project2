import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsHeaderComponent } from './news-header.component';

describe('HeaderComponent', () => {
  let component: NewsHeaderComponent;
  let fixture: ComponentFixture<NewsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create header component.', () => {
    expect(component).toBeTruthy();
  });

  xit('should create header component to be defined.', () => {
    expect(component).toBeDefined();
  });
});
