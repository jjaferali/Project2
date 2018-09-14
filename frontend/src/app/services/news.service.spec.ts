import { TestBed, inject, async } from '@angular/core/testing';

import { NewsService } from './news.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

describe('NewsService', () => {

  let service: NewsService;
    let http: { request: jasmine.Spy };
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [NewsService]
        });
        http = jasmine.createSpyObj('HttpClient', ['request']);
        service = new NewsService(<any>http);
    }));

    it('Get api method should return Array<INews>.', async(() => {
        const mockNews = {
            title: 'Test'
        };
        http.request.and.returnValue(new Observable<any>());
        service.get('').subscribe(news => {
            expect(news).toEqual(mockNews[0]);
        });
        expect(http.request.calls.count()).toBe(1);
    }));

    it('Delete -should call http delete method.', async(() => {
      http.request.and.returnValue(new Observable<any>());
      service.delete(1).subscribe(news => {
          expect(http.request.calls.count()).toBe(1);
      });
    }));
  
    it('Post api method should create.', async(() => {
      http.request.and.returnValue(new Observable<any>());
      service.post({}[0]).subscribe(news => {
          expect(http.request.calls.count()).toBe(1);
      });
  }));
});
